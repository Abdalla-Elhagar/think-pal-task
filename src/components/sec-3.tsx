'use client';

import { useEffect, useRef, useState } from 'react';
import './styles/sec-3.css';
import { LuMoveUpRight } from "react-icons/lu";

export default function Sec3() {
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);
  const ref4 = useRef<HTMLDivElement>(null);

  const [showBlur1, setShowBlur1] = useState(false);
  const [showBlur2, setShowBlur2] = useState(false);
  const [showBlur3, setShowBlur3] = useState(false);
  const [showBlur4, setShowBlur4] = useState(false);

  // ✅ Hook مستقلة للتمويه
  const useScrollBlur = (
    ref: any,
    set: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    useEffect(() => {
      const handleScroll = () => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const topTrigger = window.innerHeight * 0.25;
        const bottomTrigger = window.innerHeight * 0.75;

        if (rect.top <= bottomTrigger && rect.bottom >= topTrigger) {
          set(true);
        } else {
          set(false);
        }
      };

      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Call once on mount

      return () => window.removeEventListener('scroll', handleScroll);
    }, [ref, set]);
  };

  // 🔁 تفعيل الـ hook على كل عنصر
  useScrollBlur(ref1, setShowBlur2);
  useScrollBlur(ref2, setShowBlur2);
  useScrollBlur(ref3, setShowBlur3);
  useScrollBlur(ref4, setShowBlur4);

  const blurActive = showBlur1 || showBlur2 || showBlur3 || showBlur4;

  return (
    <section className="sec-3" style={{ position: 'relative' }}>
      {/* Blur overlay */}
      <div
  className="blur-frame"
  style={{ opacity: blurActive ? 1 : 0 }}
/>
    

      {/* Content */}
      <div className="container">
        <div className="firstText" ref={ref1}>
          <h2>LUNDEV</h2>
        </div>
        <div className="secondText" ref={ref2}>
          <h2>DESIGNER</h2>
        </div>
        <div className="thirdText" ref={ref3}>
          <h2>DEVELOPER</h2>
        </div>
        <div className="fourthText" ref={ref4}>
          <h2>
            SEE MORE{" "}
            <span>
              <LuMoveUpRight style={{ rotate: "350deg", marginTop: "2px" }} />
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
}
