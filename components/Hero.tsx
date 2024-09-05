import CTASection from "./CTASection";

export default function Hero() {
  return (
    <div className="flex flex-col gap-8 py-4 md:py-10 sm:gap-10">
      <h1 className="text-5xl text-center sm:text-6xl md:text-7xl ">
        <span className="textGradient">Be fit and motivated.</span>
        👟 Track your <span>daily, weekly</span>{" "}
        <span className="textGradient"> physical activities!</span>
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-center w-full mx-auto max-w-[600px]">
        Log your sports activities{" "}
        <span className="font-semibold">every day of every year.</span>
      </p>
      <CTASection />
    </div>
  );
}
