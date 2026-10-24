"use client";

import { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";

type RevealProps = {
  children: ReactNode;
  delay?: number;
};

export function Reveal({ children, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    // Use gsap.context to properly scope and clean up GSAP animations on unmount/re-render.
    // Reverting context kills active tweens and prevents memory leaks / lingering frame callbacks.
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          delay,
          duration: 0.8,
          ease: "power3.out",
          // Force 3D transform (translate3d) for GPU hardware acceleration during animation,
          // then clear willChange/transform props upon completion to free GPU memory.
          force3D: true,
          clearProps: "willChange",
        },
      );
    }, ref);

    return () => ctx.revert();
  }, [delay]);

  return <div ref={ref}>{children}</div>;
}
