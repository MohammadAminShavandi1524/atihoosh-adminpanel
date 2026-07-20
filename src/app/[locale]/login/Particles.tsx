"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container, Engine } from "@tsparticles/engine";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (_container?: Container): Promise<void> => {};

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          className="max-lg:hidden"
          particlesLoaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "grab",
                },
                resize: {
                  enable: true,
                },
              },

              modes: {
                push: {
                  quantity: 3,
                },

                grab: {
                  distance: 180,
                  links: {
                    opacity: 0.35,
                  },
                },

                repulse: {
                  distance: 120,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: ["#20B2AA", "#14B8A6", "#2DD4BF"],
              },

              links: {
                color: "#20B2AA",
                distance: 170,
                enable: true,
                opacity: 0.18,
                width: 1,
              },

              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: true,
                speed: 1.2,
                straight: false,
              },

              number: {
                density: {
                  enable: true,
                  width: 1920,
                  height: 1080,
                },
                value: 100,
              },

              opacity: {
                value: {
                  min: 0.2,
                  max: 0.55,
                },
              },

              shape: {
                type: "circle",
              },

              size: {
                value: {
                  min: 2,
                  max: 4,
                },
                animation: {
                  enable: true,
                  speed: 2,
                  sync: false,
                },
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </>
  );
};

export default ParticlesBackground;
