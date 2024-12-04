import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check, Linkedin, YoutubeIcon } from "lucide-react";
import { LightBulbIcon } from "./Icons";
import { DiscordLogoIcon, GitHubLogoIcon, InstagramLogoIcon } from "@radix-ui/react-icons";

export const HeroCards = () => {
  return (
    <div className="hidden lg:grid grid-cols-3 gap-4">    
      {/* Home */}
      <Card className="drop-shadow-xl shadow-black/10 dark:shadow-white/10 ">
        <CardHeader className="mt-2 flex justify-center items-center pb-2">
          <CardTitle className="text-center">Home</CardTitle>
          <CardDescription className="text-md mt-2">
            Stay updated with the latest crypto strategies.
          </CardDescription>
        </CardHeader>

        <CardFooter className="justify-center">
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Discord icon</span>
              <DiscordLogoIcon className="w-5 h-5" />
            </a>
            <a
              rel="noreferrer noopener"
              href="#"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Instagram icon</span>
              <InstagramLogoIcon className="w-5 h-5"/>
            </a>

            <a
              rel="noreferrer noopener"
              href="#"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Youtube icon</span>
              <YoutubeIcon className="w-5 h-5"/>
            </a>
          </div>
        </CardFooter>
      </Card>

      {/* About */}
      <Card className="drop-shadow-xl shadow-black/10 dark:shadow-white/10 text-center">
        <CardHeader className="mt-2 space-y-1 flex gap-4">
          {/* <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
            <LightBulbIcon />
          </div> */}
          <div>
            <CardTitle>About Us</CardTitle>
            <CardDescription className="text-md mt-2">
              Learn about our team and vision.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>

      {/* Portfolio */}
      <Card className="drop-shadow-xl shadow-black/10 dark:shadow-white/10 text-center">
        <CardHeader className="mt-2 space-y-1 flex gap-4">
          <div>
            <CardTitle>Portfolio</CardTitle>
            <CardDescription className="text-md mt-2">
            Track and manage your crypto investments.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
      
    </div>
  );
};
