"use client";
import { useEffect } from "react";
import { Particles, initParticlesEngine } from "@tsparticles/react";
import { loadAll } from "@tsparticles/all";

export default function MouseTrailParticles() {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadAll(engine);
    });
  }, []);

  return (
    <Particles
      id="mouse-follow-particles"
      className="absolute inset-0 z-0 pointer-events-none"
      options={{
        fullScreen: false,
        particles: { number: { value: 0 } },
        interactivity: {
          events: { onHover: { enable: true, mode: "trail" } },
          modes: {
            trail: {
              delay: 0.005,
              quantity: 3,
              pauseOnStop: true,
              particles: {
                size: {
                  value: 20,
                  animation: {
                    enable: true,
                    speed: 20,
                    minimumValue: 10,
                    sync: false,
                  },
                },
                color: { value: "#ffffff" },
                opacity: {
                  value: { min: 0.05, max: 0.15 },
                  animation: {
                    enable: true,
                    speed: 1,
                    minimumValue: 0,
                    sync: false,
                  },
                },
                life: {
                  duration: { value: 1 },
                  count: 1,
                },
                move: {
                  enable: true,
                  speed: { min: 0.3, max: 0.8 },
                  direction: "top",
                  random: true,
                  straight: false,
                  outModes: { default: "destroy" },
                },
                shape: {
                  type: "circle",
                },
                blur: {
                  enable: true,
                  value: 1000,
                },
              },
            },
          },
        },
      }}
    />
  );
}
