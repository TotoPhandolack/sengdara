"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const SLIDE_DURATION_MS = 6000;

export default function HeroBackground({ images }: { images: string[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const id = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, SLIDE_DURATION_MS);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <div className="hero__slideshow" aria-hidden="true">
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          priority={index === 0}
          sizes="100vw"
          className={`hero__slide${index === activeIndex ? " is-active" : ""}`}
        />
      ))}
    </div>
  );
}
