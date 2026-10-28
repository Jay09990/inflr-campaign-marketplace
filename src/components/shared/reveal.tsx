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
    const element = ref.current;
    if (!element) return;

    // Use gsap.context to scope GSAP animations and clean them up on unmount.
    const ctx = gsap.context(() => {
      gsap.set(element, { y: 24, opacity: 0 });
    }, ref);

    // Fallback for environments where IntersectionObserver is unavailable.
    if (typeof IntersectionObserver === "undefined") {
      ctx.add(() => {
        gsap.to(element, {
          y: 0,
          opacity: 1,
          delay,
          duration: 0.8,
          ease: "power3.out",
        });
      });
      return () => ctx.revert();
    }

    // Defer animation until element intersects with viewport using IntersectionObserver.
    // Prevents running GSAP frame callbacks and layout recalculations for off-screen elements on initial mount.
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          ctx.add(() => {
            gsap.to(element, {
              y: 0,
              opacity: 1,
              delay,
              duration: 0.8,
              ease: "power3.out",
            });
          });
          observer.disconnect();
        }
      },
      { rootMargin: "50px 0px" }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      ctx.revert();
    };
  }, [delay]);

  return <div ref={ref}>{children}</div>;
}
