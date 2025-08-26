import React from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero: React.FC = () => {
  const handleDownloadResume = () => {
    // <-- keep your resume handler here; modify as needed -->
    const resumeUrl =
      "https://drive.google.com/uc?export=download&id=1UVHPWigMXBXltR39Lpa8PjF7dpJIFaWE";
    window.open(resumeUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image + responsive overlay (darker on mobile) */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover pointer-events-none"
        />
        {/* Dark overlay: default mobile darker (bg-black/70), lighter on md and up */}
        <div className="absolute inset-0 bg-black/70 md:bg-black/45 backdrop-blur-sm transition-colors" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 py-16 max-w-4xl mx-auto text-center">
        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight tracking-tight
                       bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-600 drop-shadow-md">
          Maski Yashasv
        </h1>

        {/* Subtitle (responsive, constrained width, padded so it wraps well) */}
        <h2 className="mt-4 text-base sm:text-lg md:text-2xl text-white/95 drop-shadow-md leading-relaxed max-w-3xl mx-auto px-4">
          Artificial Intelligence &amp; Machine Learning Student
        </h2>

        {/* Short description */}
        <p className="mt-3 text-sm sm:text-base md:text-xl text-white/85 leading-relaxed max-w-2xl mx-auto px-6">
          Passionate about solving real-world problems with technology
        </p>

        {/* Button: full width on small screens, auto width on larger */}
        <div className="mt-8">
          <Button
            onClick={handleDownloadResume}
            className="w-full sm:inline-flex sm:w-auto justify-center items-center px-6 py-3 sm:py-4 text-lg font-semibold rounded-full
                       bg-sky-500 hover:bg-sky-500/90 transition-shadow shadow-md"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
        </div>
      </div>

      {/* Optional scroll indicator (keeps visual balance) */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/25 rounded-full flex items-start justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
