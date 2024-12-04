import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { useEffect, useState } from "react";
import PricingSkeleton from "./skeletons/pricing-skeleton";
import { currencySymbols } from "@/lib/utils";
import { Switch } from "./ui/switch";

export interface Pricing {
  id: string;
  planId: string;
  country: string;
  price: string;
  stripe_price_id: string;
}

export interface Plan {
  id: string;
  planName: string;
  heading: string;
  subscriptionDays: number;
  subscriptionAmount: number;
  feature: string[];
  pricing: Pricing[];
}



export const Pricing = () => {

  const [plans, setPlans] = useState<Plan[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isYearly, setIsYearly] = useState(false);
  const [country, setCountry] = useState<string | null>(null);


  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        setCountry(data.country_name || 'Unknown');
      } catch (error) {
        console.error('Error fetching country:', error);
        setCountry('Unknown');
      }
    };

    fetchCountry();
  }, []);


  useEffect(() => {
    const fetchPlans = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("https://app.volcanostrategies.com/api/plans", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.PRICING_API_KEY!, 
          },
        });
        const data = await response.json();
  
        if (data.success) {
          setPlans(data.data);
        } else {
          setError(data.message || "Failed to fetch plans.");
        }
      } catch (err) {
        setError("Something went wrong while fetching the plans.");
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchPlans();
  }, []);
  

  if (isLoading) {
    return <div className="grid md:grid-cols-2 gap-2 justify-center"><PricingSkeleton /></div>;
  }

  if (error) {
    return <div className="error">Server Error</div>;
  }

  return (
    <section
      id="pricing"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Get
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Unlimited{" "}
        </span>
        Access
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
        reiciendis.
      </h3>
      <div className="flex items-center justify-center mb-4 text-3xl">
        <span className="mr-2 text-sm font-medium text-muted-foreground">Monthly</span>
        <Switch checked={isYearly} onCheckedChange={setIsYearly} />
        <span className="ml-2 text-sm font-medium text-muted-foreground">Yearly - Save 15%</span>
      </div>

      <div className="grid md:grid-cols-2 gap-4 items-center justify-center align-bottom w-full">
        {plans.map((plan, index) => (
          <Card className="border-primary h-full flex flex-col transition-all duration-200 transform hover:scale-105 hover:shadow-lg max-w-[550px]" key={index}>
            <CardHeader className="text-center pb-2">
              <CardTitle className="!mb-7">{plan.planName}</CardTitle>

              {(() => {

                const pricing =
                  plan.pricing.find((price) => price.country === country) ||
                  { price: plan.subscriptionAmount };

                const monthlyPrice = pricing.price;
                const yearlyPrice = (+monthlyPrice * 12 * 0.85).toFixed(2);


                const symbol = currencySymbols[country ? country : ''] || "$";

                return (
                  <div>
                    <span className="font-bold text-5xl">
                      {symbol}{isYearly ? yearlyPrice : monthlyPrice}
                      <span className="text-sm">{isYearly ? '/year' : '/mo'}</span>
                    </span>
                    {isYearly && (
                      <div className="text-sm text-muted-foreground">
                        <span className="line-through">{symbol}{(+monthlyPrice * 12).toFixed(2)}</span>{" "}
                        Save 15%
                      </div>
                    )}
                  </div>
                );
              })()}

            </CardHeader>
            <CardDescription className="text-center w-11/12 mx-auto">
              {plan.heading}
            </CardDescription>
            <CardContent className="mt-[40px]">
              <Button
                disabled={true}
                onClick={() => { }}
                className="w-full"
              >
                Buy Now
              </Button>

            </CardContent>
            <CardFooter className="mt-auto">
              <ul className="mt-7 space-y-2.5 text-sm">
                {
                  plan.feature.map((item, index) => (
                    <li className="flex space-x-2" key={index}>
                      <Check className="flex-shrink-0 mt-0.5 h-4 w-4 text-green-500" />
                      <span
                        className="text-muted-foreground"
                        dangerouslySetInnerHTML={{ __html: item }}
                      ></span>
                    </li>
                  ))
                }
              </ul>
            </CardFooter>
          </Card>

        ))}

      </div>
    </section>
  );
};
