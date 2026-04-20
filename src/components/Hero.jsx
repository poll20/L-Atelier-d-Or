import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ring1 from "../video/ring1.mp4";
import ring2 from "../video/ring2.mp4";
import ring3 from "../video/ring3.mp4";
import ring4 from "../video/ring4.mp4";

gsap.registerPlugin(ScrollTrigger);

const SCENES = [
  {
    video: ring1,
    label: "L'Atelier d'Or / Haute Joaillerie",
    heading: ['Timeless', 'Elegance.'],
    headingItalic: 'Born of Starlight.',
    sub: 'Where centuries of craft meet the fire of a single perfect stone.',
    cta1: 'Explore Collection',
    cta2: 'Book a Consultation',
  },
  {
    video: ring2,
    label: 'Artisan Craft / Bespoke Atelier',
    heading: ['Crafted to', 'Perfection.'],
    headingItalic: 'Every curve intentional.',
    sub: 'Each piece takes over 400 hours of hand-finishing by a single master goldsmith.',
    cta1: 'View Process',
    cta2: 'Commission a Piece',
  },
  {
    video: ring3,
    label: 'Heritage Collection / Since 1897',
    heading: ['Luxury', 'Redefined.'],
    headingItalic: 'Above and beyond.',
    sub: 'Twelve generations of heritage distilled into jewels that outlive dynasties.',
    cta1: 'Heritage Series',
    cta2: 'Private Viewing',
  },
  {
    video: ring4,
    label: 'Signature Edition / Limited Release',
    heading: ['Shine', 'Beyond Time.'],
    headingItalic: 'Your forever piece.',
    sub: 'Reserve one of only 24 signature pieces created each year, exclusively for you.',
    cta1: 'Reserve Yours',
    cta2: 'Speak to an Advisor',
  },
];

const SCROLL_LENGTH = 5000;

const Hero = () => {
  const wrapperRef = useRef(null);
  const sectionRef = useRef(null);
  const videoRefs = useRef([]);
  const overlayRefs = useRef([]);
  const sceneTextRefs = useRef([]);
  const scrollLineRef = useRef(null);
  
  // Performance-optimized seeking refs
  const targetProgress = useRef([0, 0, 0, 0]);
  const currentProgress = useRef([0, 0, 0, 0]);
  const activeSceneIndex = useRef(0);

  useEffect(() => {
    const videos = videoRefs.current;
    const overlays = overlayRefs.current;
    const texts = sceneTextRefs.current;
    
    const ctx = gsap.context(() => {
      // 1. Initial Video Setup
      videos.forEach((v) => {
        if (v) {
          v.load();
          v.currentTime = 0.001;
        }
      });

      // 2. Master Scroll Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: 'top top',
          end: `+=${SCROLL_LENGTH}`,
          pin: sectionRef.current,
          scrub: 0.1,
          anticipatePin: 1,
        },
      });

      const n = SCENES.length;
      const segDur = 1 / n;
      const halfBlend = segDur * 0.2;

      SCENES.forEach((_, i) => {
        const start = i * segDur;
        const end = (i + 1) * segDur;
        const next = i + 1;

        // Capture target progress and ACTIVE INDEX
        tl.to(
          {},
          {
            duration: segDur,
            onUpdate() {
              targetProgress.current[i] = this.progress();
              activeSceneIndex.current = i;
              
              // Only play/scrub the active video, pause others
              videos.forEach((vid, idx) => {
                if (vid && idx !== i && !vid.paused) vid.pause();
              });
            },
          },
          start
        );

        // Text & Overlay Animations
        if (texts[i]) {
          if (i === 0) {
            tl.fromTo(
              texts[i],
              { opacity: 0, y: 30 },
              { opacity: 1, y: 0, duration: segDur * 0.3, ease: 'power2.out' },
              start
            );
          }
          tl.to(
            texts[i],
            { opacity: 0, y: -30, duration: halfBlend, ease: 'power2.in' },
            end - halfBlend
          );
        }

        if (next < n && texts[next]) {
          tl.fromTo(
            texts[next],
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: halfBlend, ease: 'power2.out' },
            end - halfBlend * 0.5
          );
        }

        if (next < n && overlays[next]) {
          tl.fromTo(
            overlays[next],
            { opacity: 0 },
            { opacity: 1, duration: halfBlend, ease: 'none' },
            end - halfBlend
          );
        }
      });

      // 3. Optimized Decoupled Playback Loop (Tick)
      const updateVideoFrame = () => {
        // ONLY update visible videos (active index + potential blending neighbor)
        const i = activeSceneIndex.current;
        const neighbor = i < SCENES.length - 1 ? i + 1 : i;

        [i, neighbor].forEach((idx) => {
          const v = videos[idx];
          if (!v || !v.duration) return;

          // Smoothly approach the target progress
          const lerpFactor = 0.055; // Silky smooth setting
          currentProgress.current[idx] += (targetProgress.current[idx] - currentProgress.current[idx]) * lerpFactor;
          
          const nextTime = currentProgress.current[idx] * v.duration;
          
          // Performance threshold: Only seek if delta is visible (> 1/60th sec)
          if (Math.abs(v.currentTime - nextTime) > 0.016) {
            v.currentTime = nextTime;
          }
        });
      };

      gsap.ticker.add(updateVideoFrame);

      // Scroll indicator fade
      gsap.to(scrollLineRef.current, {
        opacity: 0,
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: 'top top',
          end: '+=100',
          scrub: true,
        },
      });

      return () => {
        gsap.ticker.remove(updateVideoFrame);
      };
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef} className="bg-black" style={{ height: `calc(100vh + ${SCROLL_LENGTH}px)` }}>
      <section
        ref={sectionRef}
        className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center pointer-events-none sm:pointer-events-auto"
      >
        {/* Cinematic Video Layers */}
        {SCENES.map((scene, i) => (
          <div
            key={i}
            ref={el => (overlayRefs.current[i] = el)}
            className="absolute inset-0 will-change-opacity"
            style={{
              opacity: i === 0 ? 1 : 0,
              zIndex: 1,
            }}
          >
            <video
              ref={el => (videoRefs.current[i] = el)}
              src={scene.video}
              muted
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover grayscale-[0.1]" // Reduced grayscale for vibrancy
            />
            {/* Intensified Cinematic Gradients for Visibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
            
            {/* Central focus shadow to pop text */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
          </div>
        ))}

        {/* Textured Overlay */}
        <div
          className="absolute inset-0 z-10 pointer-events-none opacity-[0.035]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Typography Scenes - Adjusted for High Contrast Visibility */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 h-full flex items-center justify-center">
          {SCENES.map((scene, i) => (
            <div
              key={i}
              ref={el => (sceneTextRefs.current[i] = el)}
              className="absolute flex flex-col items-center justify-center text-center max-w-4xl"
              style={{ opacity: 0 }}
            >
              <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-[#d4b987] mb-6 font-sans font-medium drop-shadow-md">
                {scene.label}
              </span>

              <h1 className="font-serif text-[clamp(2.5rem,8vw,8rem)] leading-[1.1] text-[#f5f0e8] mb-2 font-light drop-shadow-2xl">
                {scene.heading[0]} <br className="hidden md:block" /> {scene.heading[1]}
              </h1>

              <div className="font-serif italic text-[clamp(1.5rem,4vw,3.5rem)] text-[#d4b987]/90 mb-8 font-light drop-shadow-lg">
                {scene.headingItalic}
              </div>

              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#d4b987]/50 to-transparent mb-8" />

              <p className="text-sm md:text-lg font-light text-[#f5f0e8]/80 max-w-xl leading-relaxed mb-12 px-4 text-shadow-lg">
                {scene.sub}
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-6">
                <button className="luxury-button-primary min-w-[220px] shadow-2xl hover:scale-105 !border-[#d4b987]/30 !text-[#f5f0e8]">
                  {scene.cta1}
                </button>
                <button className="luxury-button-outline min-w-[220px] hover:scale-105 !border-[#d4b987]/50 !text-[#d4b987]">
                  {scene.cta2}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div
          ref={scrollLineRef}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center z-30 pointer-events-none"
        >
          <span className="text-[8px] uppercase tracking-[0.5em] text-[#d4b987]/60 mb-6 animate-pulse">
            Scroll to discover
          </span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-[#d4b987]/80 to-transparent" />
        </div>

        {/* Step Indicator */}
        <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 z-30">
          {SCENES.map((_, i) => (
            <div key={i} className="w-1 h-8 bg-white/10 rounded-full relative overflow-hidden">
               <div className="absolute inset-0 bg-[#d4b987]/40" style={{ transform: 'translateY(100%)' }} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Hero;
