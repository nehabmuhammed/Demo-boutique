"use client";

import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useGSAPScrollAnimations() {
  const hasInitialized = useRef(false);

  const isMobile = useCallback(() => {
    return typeof window !== "undefined" && window.innerWidth < 768;
  }, []);

  useEffect(() => {
    if (hasInitialized.current) return;
    hasInitialized.current = true;

    // Small delay to ensure DOM is painted
    const rafId = requestAnimationFrame(() => {
      const ctx = gsap.context(() => {

        // ============================================================
        // 1. HERO PARALLAX — Smooth multi-layer depth
        // ============================================================
        const heroImg = document.querySelector("[data-parallax-hero]");
        if (heroImg) {
          gsap.to(heroImg, {
            y: "25%",
            scale: 1.05,
            ease: "none",
            scrollTrigger: {
              trigger: heroImg.closest("section") || heroImg.parentElement,
              start: "top top",
              end: "bottom top",
              scrub: 0.3,
            },
          });
        }

        // Hero content fades out + moves up as you scroll away
        const heroContent = document.querySelector("[data-hero-content]");
        if (heroContent) {
          gsap.to(heroContent, {
            y: -80,
            opacity: 0,
            ease: "none",
            scrollTrigger: {
              trigger: heroContent.closest("section") || heroContent.parentElement,
              start: "top top",
              end: "60% top",
              scrub: 0.3,
            },
          });
        }

        // ============================================================
        // 2. TEXT SPLIT ANIMATIONS — Character-by-character reveals
        // ============================================================
        const splitHeadings = document.querySelectorAll("[data-split-text]");
        splitHeadings.forEach((heading) => {
          const el = heading as HTMLElement;
          const text = el.textContent || "";
          el.innerHTML = "";
          // Wrap each word in a span, each character in a char span
          const words = text.split(" ");
          words.forEach((word, wi) => {
            const wordSpan = document.createElement("span");
            wordSpan.style.display = "inline-block";
            wordSpan.style.overflow = "hidden";
            word.split("").forEach((char) => {
              const charSpan = document.createElement("span");
              charSpan.textContent = char;
              charSpan.style.display = "inline-block";
              charSpan.classList.add("split-char");
              wordSpan.appendChild(charSpan);
            });
            el.appendChild(wordSpan);
            if (wi < words.length - 1) {
              const space = document.createElement("span");
              space.innerHTML = "&nbsp;";
              space.style.display = "inline-block";
              el.appendChild(space);
            }
          });

          const chars = el.querySelectorAll(".split-char");
          gsap.fromTo(
            chars,
            { y: "110%", opacity: 0, rotateX: -90 },
            {
              y: "0%",
              opacity: 1,
              rotateX: 0,
              duration: 0.8,
              ease: "power4.out",
              stagger: 0.025,
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        });

        // ============================================================
        // 3. SECTION LABEL — Uppercase small text slide-in
        // ============================================================
        const sectionLabels = document.querySelectorAll("[data-section-label]");
        sectionLabels.forEach((label) => {
          gsap.fromTo(
            label,
            { x: -40, opacity: 0, letterSpacing: "0.4em" },
            {
              x: 0,
              opacity: 1,
              letterSpacing: "0.2em",
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: label,
                start: "top 88%",
                toggleActions: "play none none none",
              },
            }
          );
        });

        // ============================================================
        // 4. PARAGRAPH REVEAL — Line mask wipe
        // ============================================================
        const paragraphs = document.querySelectorAll("[data-text-reveal]");
        paragraphs.forEach((p) => {
          gsap.fromTo(
            p,
            { opacity: 0, y: 30, clipPath: "inset(0 0 100% 0)" },
            {
              opacity: 1,
              y: 0,
              clipPath: "inset(0 0 0% 0)",
              duration: 1.4,
              ease: "power3.out",
              scrollTrigger: {
                trigger: p,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        });

        // ============================================================
        // 5. SERVICE CARDS — 3D tilt stagger entrance
        // ============================================================
        const serviceCards = document.querySelectorAll("[data-service-card]");
        if (serviceCards.length > 0) {
          serviceCards.forEach((card, index) => {
            const direction = index % 2 === 0 ? -1 : 1;
            gsap.fromTo(
              card,
              {
                opacity: 0,
                y: 100,
                rotateY: direction * 15,
                rotateX: 8,
                scale: 0.85,
                transformPerspective: 1200,
              },
              {
                opacity: 1,
                y: 0,
                rotateY: 0,
                rotateX: 0,
                scale: 1,
                duration: 1.2,
                ease: "power3.out",
                delay: index * 0.08,
                scrollTrigger: {
                  trigger: card.parentElement,
                  start: "top 82%",
                  toggleActions: "play none none none",
                },
              }
            );
          });

          // Card icon floating animation (continuous)
          const cardIcons = document.querySelectorAll("[data-service-card] [data-card-icon]");
          cardIcons.forEach((icon) => {
            gsap.to(icon, {
              y: -6,
              duration: 2.5,
              ease: "sine.inOut",
              repeat: -1,
              yoyo: true,
            });
          });
        }

        // ============================================================
        // 6. GALLERY — Clip-path curtain reveal + parallax float
        // ============================================================
        const galleryImages = document.querySelectorAll("[data-gallery-reveal]");
        galleryImages.forEach((img, index) => {
          // Curtain reveal from bottom
          gsap.fromTo(
            img,
            {
              clipPath: "inset(100% 0 0 0)",
              scale: 1.15,
            },
            {
              clipPath: "inset(0% 0 0 0)",
              scale: 1,
              duration: 1.6,
              ease: "power4.inOut",
              delay: index * 0.2,
              scrollTrigger: {
                trigger: img,
                start: "top 88%",
                toggleActions: "play none none none",
              },
            }
          );

          // Subtle float parallax on each gallery item
          if (!isMobile()) {
            gsap.to(img, {
              y: index % 2 === 0 ? -30 : -50,
              ease: "none",
              scrollTrigger: {
                trigger: img,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.5,
              },
            });
          }
        });

        // ============================================================
        // 7. GOLD UNDERLINES — Shimmer + expand
        // ============================================================
        const goldHeadings = document.querySelectorAll("[data-gold-underline]");
        goldHeadings.forEach((heading) => {
          const underline = heading.querySelector(".gold-line") as HTMLElement;
          if (underline) {
            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: heading,
                start: "top 82%",
                toggleActions: "play none none none",
              },
            });
            tl.fromTo(
              underline,
              { scaleX: 0, transformOrigin: "left center", opacity: 0 },
              { scaleX: 1, opacity: 1, duration: 1.0, ease: "power3.inOut" }
            );
            tl.fromTo(
              underline,
              { boxShadow: "0 0 0px rgba(212,175,55,0)" },
              {
                boxShadow: "0 0 20px rgba(212,175,55,0.6)",
                duration: 0.6,
                ease: "power2.out",
              },
              "-=0.3"
            );
            tl.to(
              underline,
              {
                boxShadow: "0 0 8px rgba(212,175,55,0.3)",
                duration: 1,
                ease: "power2.inOut",
              }
            );
          }
        });

        // ============================================================
        // 8. PARALLAX BACKGROUNDS — Layered depth
        // ============================================================
        const parallaxBgs = document.querySelectorAll("[data-parallax-bg]");
        parallaxBgs.forEach((bg) => {
          gsap.fromTo(
            bg,
            { y: "10%", scale: 1.15 },
            {
              y: "-15%",
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: bg.closest("section") || bg.parentElement,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.4,
              },
            }
          );
        });

        // ============================================================
        // 9. SECTION DIVIDERS — Gold line sweep on scroll
        // ============================================================
        const dividers = document.querySelectorAll("[data-divider]");
        dividers.forEach((divider) => {
          gsap.fromTo(
            divider,
            { scaleX: 0, transformOrigin: "center center" },
            {
              scaleX: 1,
              duration: 1.8,
              ease: "power2.inOut",
              scrollTrigger: {
                trigger: divider,
                start: "top 90%",
                toggleActions: "play none none none",
              },
            }
          );
        });

        // ============================================================
        // 10. BRIDAL HORIZONTAL SCROLL — Enhanced with item reveals
        // ============================================================
        if (!isMobile()) {
          const horizontalScroll = document.querySelector("[data-horizontal-scroll]") as HTMLElement;
          const horizontalInner = document.querySelector("[data-horizontal-inner]") as HTMLElement;
          if (horizontalScroll && horizontalInner) {
            const totalWidth = horizontalInner.scrollWidth - window.innerWidth;

            // Ensure the section and its pin-spacer stack correctly
            horizontalScroll.style.position = "relative";

            // Main horizontal movement
            const horizontalTl = gsap.timeline({
              scrollTrigger: {
                trigger: horizontalScroll,
                start: "top top",
                end: () => `+=${totalWidth}`,
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
                onEnter: () => gsap.set(horizontalScroll, { zIndex: 10 }),
                onEnterBack: () => gsap.set(horizontalScroll, { zIndex: 10 }),
                onLeave: () => gsap.set(horizontalScroll, { zIndex: 1 }),
                onLeaveBack: () => gsap.set(horizontalScroll, { zIndex: 1 }),
              },
            });
            horizontalTl.to(horizontalInner, { x: -totalWidth, ease: "none" });

            // Each horizontal panel gets a parallax inner image
            const hPanels = document.querySelectorAll("[data-h-panel]");
            hPanels.forEach((panel) => {
              const panelImg = panel.querySelector("img");
              if (panelImg) {
                gsap.fromTo(
                  panelImg,
                  { scale: 1.15 },
                  {
                    scale: 1,
                    ease: "none",
                    scrollTrigger: {
                      trigger: horizontalScroll,
                      start: "top top",
                      end: () => `+=${totalWidth}`,
                      scrub: 0.5,
                    },
                  }
                );
              }
            });
          }
        }

        // ============================================================
        // 11. TESTIMONIAL — Elegant scale entrance
        // ============================================================
        const testimonial = document.querySelector("[data-testimonial]");
        if (testimonial) {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: testimonial,
              start: "top 82%",
              toggleActions: "play none none none",
            },
          });
          tl.fromTo(
            testimonial,
            { opacity: 0, y: 60, scale: 0.92, rotateX: 5, transformPerspective: 1000 },
            { opacity: 1, y: 0, scale: 1, rotateX: 0, duration: 1.4, ease: "power3.out" }
          );
          // Stars animation
          const stars = testimonial.closest("section")?.querySelectorAll("[data-star]");
          if (stars && stars.length > 0) {
            tl.fromTo(
              stars,
              { scale: 0, opacity: 0, rotate: -180 },
              {
                scale: 1,
                opacity: 1,
                rotate: 0,
                duration: 0.5,
                stagger: 0.08,
                ease: "back.out(2)",
              },
              "-=1.2"
            );
          }
        }

        // ============================================================
        // 12. CONTACT SECTION — Staggered chain reveal
        // ============================================================
        const contactItems = document.querySelectorAll("[data-contact-reveal]");
        if (contactItems.length > 0) {
          gsap.fromTo(
            contactItems,
            { opacity: 0, y: 60, scale: 0.95 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1.0,
              ease: "power3.out",
              stagger: 0.12,
              scrollTrigger: {
                trigger: contactItems[0].closest("section"),
                start: "top 78%",
                toggleActions: "play none none none",
              },
            }
          );
        }

        // ============================================================
        // 13. BUTTON REVEAL — Slide up from behind
        // ============================================================
        const buttons = document.querySelectorAll("[data-btn-reveal]");
        buttons.forEach((btn) => {
          gsap.fromTo(
            btn,
            { opacity: 0, y: 30, clipPath: "inset(100% 0 0 0)" },
            {
              opacity: 1,
              y: 0,
              clipPath: "inset(0% 0 0 0)",
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: btn,
                start: "top 90%",
                toggleActions: "play none none none",
              },
            }
          );
        });

        // ============================================================
        // 14. SECTION FADE BOUNDARIES — Soft in/out on scroll
        // ============================================================
        const fadeSections = document.querySelectorAll("[data-section-fade]");
        fadeSections.forEach((section) => {
          gsap.fromTo(
            section,
            { opacity: 0 },
            {
              opacity: 1,
              duration: 0.5,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top 92%",
                end: "top 50%",
                scrub: 0.3,
              },
            }
          );
        });

        // ============================================================
        // 15. COUNTER / STATS ANIMATION — Not currently used but ready
        // ============================================================
        const counters = document.querySelectorAll("[data-counter]");
        counters.forEach((counter) => {
          const el = counter as HTMLElement;
          const target = parseInt(el.dataset.counter || "0", 10);
          const obj = { val: 0 };
          gsap.to(obj, {
            val: target,
            duration: 2.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
            onUpdate: () => {
              el.textContent = Math.round(obj.val).toLocaleString();
            },
          });
        });

        // ============================================================
        // 16. IMAGE INNER ZOOM on Scroll (for about section)
        // ============================================================
        const zoomImages = document.querySelectorAll("[data-scroll-zoom]");
        zoomImages.forEach((img) => {
          gsap.fromTo(
            img,
            { scale: 1.3 },
            {
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: img.closest("section") || img.parentElement,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.5,
              },
            }
          );
        });

        // ============================================================
        // 17. NAVBAR HIDE/SHOW on Scroll Direction
        // ============================================================
        const navbar = document.querySelector("nav");
        if (navbar) {
          let lastScroll = 0;
          ScrollTrigger.create({
            start: "top top",
            end: "max",
            onUpdate: (self) => {
              const scroll = self.scroll();
              if (scroll > 200) {
                if (scroll > lastScroll) {
                  gsap.to(navbar, { y: -100, duration: 0.4, ease: "power2.inOut" });
                } else {
                  gsap.to(navbar, { y: 0, duration: 0.4, ease: "power2.out" });
                }
              } else {
                gsap.to(navbar, { y: 0, duration: 0.3 });
              }
              lastScroll = scroll;
            },
          });
        }

        // ============================================================
        // 18. FLOATING PARTICLES — Gold specks
        // ============================================================
        const particleContainer = document.querySelector("[data-particles]");
        if (particleContainer) {
          for (let i = 0; i < 20; i++) {
            const particle = document.createElement("div");
            particle.className = "gold-particle";
            particle.style.cssText = `
              position: absolute;
              width: ${Math.random() * 3 + 1}px;
              height: ${Math.random() * 3 + 1}px;
              background: radial-gradient(circle, rgba(212,175,55,0.8) 0%, transparent 70%);
              border-radius: 50%;
              pointer-events: none;
              left: ${Math.random() * 100}%;
              top: ${Math.random() * 100}%;
            `;
            particleContainer.appendChild(particle);

            gsap.to(particle, {
              y: `random(-100, -300)`,
              x: `random(-50, 50)`,
              opacity: 0,
              duration: `random(3, 7)`,
              ease: "none",
              repeat: -1,
              delay: `random(0, 4)`,
              onRepeat: () => {
                gsap.set(particle, {
                  y: 0,
                  x: 0,
                  opacity: Math.random() * 0.6 + 0.2,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                });
              },
            });
          }
        }

        // Refresh on load to ensure all measurements are correct
        ScrollTrigger.refresh();
      });

      return () => ctx.revert();
    });

    return () => cancelAnimationFrame(rafId);
  }, [isMobile]);
}

export default function ScrollAnimationProvider({ children }: { children: React.ReactNode }) {
  useGSAPScrollAnimations();
  return <>{children}</>;
}
