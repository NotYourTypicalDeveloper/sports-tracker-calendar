import Calendar from "./Calendar";
import CTASection from "./CTASection";
import StopWatchSVG from "../public/assets/stopwatch.svg";
import SneakersSVG from "../public/assets/sneakers.svg";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col gap-8 py-4 md:py-10 sm:gap-10">
      <div className="text-5xl text-center sm:text-6xl md:text-7xl ">
        <h1 className="textGradient">Be fit and motivated.</h1>
        <p className="text-balance">
          Track your <span className="textGradient">daily, weekly</span>{" "}
          <span> physical activities!</span>
        </p>
        <Image
          className="ml-2 -rotate-6"
          src={SneakersSVG}
          alt="sneakers image"
          width={70}
          height={70}
        />
      </div>

      <div className="flex mx-auto">
        <p className="text-lg sm:text-xl md:text-2xl text-center w-full max-w-[600px]">
          Log your achievements and goals with{" "}
          <span className="font-semibold">SportsTracker.</span>
        </p>{" "}
        <Image
          className="ml-2 rotate-12"
          src={StopWatchSVG}
          alt="stopwatch image"
          width={60}
          height={60}
        />
      </div>

      <CTASection />
      <Calendar />
    </div>
  );
}
