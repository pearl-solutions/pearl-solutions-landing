import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import { BackgroundPattern } from "@/components/background-pattern";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative">
      <BackgroundPattern />

      <div className="relative z-10 text-center max-w-3xl">

        <div className="mt-6 flex items-center justify-center gap-4">
          <img src="/logo.png" alt="Pearl Solutions logo" className="w-12 h-12 sm:w-22 sm:h-22 object-contain" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] font-semibold tracking-tighter">
            Pearl Solutions
          </h1>
        </div>
        
        
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20">
        <Link href="https://whop.com/pearl-solutions" target="_blank" rel="noopener noreferrer">
        <Button size="lg" className="rounded-full text-base">
          Soon Available <ArrowUpRight className="" />
        </Button>
        </Link>
      </div>
    </div>
  );
}
