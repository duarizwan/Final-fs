
       import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSectionSimpleCentred() {
  return (
    <>
      {/* Hero */}
      <div>
        <div className="container mx-auto px-4 py-24 md:px-6 lg:py-32 2xl:max-w-[1400px]">
         
          {/* End Announcement Banner */}
          {/* Title */}
          <div className="mx-auto mt-5 max-w-2xl text-center">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Task Manager
            </h1>
          </div>
          {/* End Title */}
          <div className="mx-auto mt-5 max-w-3xl text-center">
            <p className="text-muted-foreground text-xl">
              Here you can manage your task easily!!!
            </p>
          </div>
          {/* Buttons */}
          <div className="mt-8 flex justify-center gap-3">
            <Button asChild size={"lg"}>
              <Link href="/tasks/create">
              Record task
              </Link>
            </Button>
            <Button asChild size={"lg"} variant={"outline"}>
               <Link className="text-black" href="/task/list">
              See list
              </Link>
            </Button>
          </div>
          {/* End Buttons */}
        </div>
      </div>
      {/* End Hero */}
    </>
  );
}

 