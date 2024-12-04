import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-1 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-center space-y-6 ">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#f97316]  to-[#dc2626] text-transparent bg-clip-text">
              VOLCANO STRATEGIES
            </span>
          </h1>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Crypto strategies to maximize gains with expert analysis and data insights.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          {/* <Button className="w-full md:w-1/3">Explore Now</Button> */}
          <a
            rel="noreferrer noopener"
            href="#"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "default",
            })}`}
          >
            Explore Now
          </a>

          <a
            rel="noreferrer noopener"
            href="#"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10 mt-8">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
