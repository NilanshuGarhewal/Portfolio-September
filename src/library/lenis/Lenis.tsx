"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const UseLenis = (): void => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // scroll duration
      easing: (t: number) => 1 - Math.pow(1 - t, 3), // easeOutCubic
      orientation: "vertical",
      gestureOrientation: "vertical",
      lerp: 0.1, // smoothness (0 = no smoothing, 1 = instant)
      infinite: false, // set true if you want infinite scroll loop
    });

    let frame: number;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);
};

export default UseLenis;
