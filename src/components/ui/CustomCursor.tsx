"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const glow = glowRef.current;
    
    if (!cursor || !glow) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let glowX = 0;
    let glowY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", onMouseMove);

    const ticker = gsap.ticker.add(() => {
      const dt = 1.0 - Math.pow(1.0 - 0.2, gsap.ticker.deltaRatio());
      
      cursorX += (mouseX - cursorX) * dt * 1.5;
      cursorY += (mouseY - cursorY) * dt * 1.5;
      
      glowX += (mouseX - glowX) * dt * 0.5;
      glowY += (mouseY - glowY) * dt * 0.5;

      gsap.set(cursor, { x: cursorX, y: cursorY });
      gsap.set(glow, { x: glowX, y: glowY });
    });

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll("a, button, input, textarea, select, [role='button'], .hover-target");
    
    const onMouseEnter = () => {
      gsap.to(cursor, { scale: 2.5, duration: 0.3, ease: "power2.out" });
    };
    
    const onMouseLeave = () => {
      gsap.to(cursor, { scale: 1, duration: 0.3, ease: "power2.out" });
    };

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnter);
      el.addEventListener("mouseleave", onMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      gsap.ticker.remove(ticker);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnter);
        el.removeEventListener("mouseleave", onMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={glowRef} className="custom-cursor-glow hidden md:block" />
      <div ref={cursorRef} className="custom-cursor hidden md:block" />
    </>
  );
}
