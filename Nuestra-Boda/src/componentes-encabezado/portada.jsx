import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Countdown from "./encabeza-cuenta";

/* =========================================
   PORTADA SARA - MI PRIMER AÑO
========================================= */

const palette = {
  pink: "#F4C6D7",
  pinkStrong: "#D989A8",
  pinkSoft: "#FBE7EF",
  pinkLight: "#FFF5F9",

  white: "#FFFFFF",
  black: "#171717",
  blackSoft: "#393238",
};

const transition = {
  duration: 0.9,
  ease: [0.22, 1, 0.36, 1],
};

export default function Portada() {
  const audioRef = useRef(null);

  const [introActiva, setIntroActiva] = useState(true);
  const [mostrarContenido, setMostrarContenido] = useState(false);
  const [abrirSobre, setAbrirSobre] = useState(false);
  const [procesandoApertura, setProcesandoApertura] = useState(false);

  /* =========================================
     BLOQUEAR SCROLL DURANTE EL SOBRE
  ========================================= */

  useEffect(() => {
    if (!introActiva) return;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });
    };
  }, [introActiva]);

  /* =========================================
     ABRIR INVITACIÓN
  ========================================= */

  const iniciarExperiencia = () => {
    if (procesandoApertura || abrirSobre) return;

    setProcesandoApertura(true);

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });

    setAbrirSobre(true);

    /* MÚSICA */

    window.setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.volume = 0.45;

        audioRef.current.play().catch((error) => {
          console.warn("No se pudo reproducir el audio:", error);
        });
      }
    }, 400);

    /* MOSTRAR INVITACIÓN */

    window.setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });

      setIntroActiva(false);
      setMostrarContenido(true);
      setProcesandoApertura(false);
    }, 1900);
  };

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden"
      style={{
        backgroundColor: palette.pinkLight,
        color: palette.black,
      }}
    >
      {/* =========================================
          AUDIO
      ========================================= */}

      <audio ref={audioRef} loop preload="auto">
        <source src="/musica.mp3" type="audio/mpeg" />
      </audio>

      {/* =========================================
          INTRO - SOBRE
      ========================================= */}

      <AnimatePresence mode="wait">
        {introActiva && (
          <motion.section
            key="intro-sarah"
            className="
              fixed
              inset-0
              z-[9999]
              flex
              h-[100svh]
              w-full
              items-center
              justify-center
              overflow-hidden
              overscroll-none
              px-5
              py-6
            "
            style={{
              background: `
                radial-gradient(
                  circle at 50% 35%,
                  #FFFFFF 0%,
                  #FFF9FB 34%,
                  #FBE7EF 72%,
                  #F4C6D7 145%
                )
              `,
              touchAction: "none",
            }}
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* =========================================
                DECORACIÓN DE FONDO
            ========================================= */}

            <div
              className="
                pointer-events-none
                absolute
                left-[-90px]
                top-[-90px]
                h-[240px]
                w-[240px]
                rounded-full
                blur-3xl
              "
              style={{
                backgroundColor: "rgba(244,198,215,0.32)",
              }}
            />

            <div
              className="
                pointer-events-none
                absolute
                bottom-[-100px]
                right-[-90px]
                h-[270px]
                w-[270px]
                rounded-full
                blur-3xl
              "
              style={{
                backgroundColor: "rgba(217,137,168,0.16)",
              }}
            />

            {/* =========================================
                CONTENIDO CENTRAL
            ========================================= */}

            <div
              className="
                relative
                z-10
                flex
                w-full
                max-w-2xl
                flex-col
                items-center
                justify-center
                text-center
              "
            >
              {/* MI PRIMER AÑO */}

              <motion.p
                className="
                  mb-1
                  font-serif
                  text-[11px]
                  uppercase
                  tracking-[0.38em]
                  sm:text-sm
                "
                style={{
                  color: palette.blackSoft,
                }}
                initial={{
                  opacity: 0,
                  y: -12,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  ...transition,
                  delay: 0.1,
                }}
              >
                Mi primer año
              </motion.p>

              {/* SARA */}

              <motion.h1
                className="
                  font-cursiveDancing
                  text-[68px]
                  font-normal
                  leading-none
                  sm:text-[92px]
                  md:text-[110px]
                "
                style={{
                  color: palette.pinkStrong,
                  textShadow: "0 3px 18px rgba(217,137,168,0.16)",
                }}
                initial={{
                  opacity: 0,
                  y: -12,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1,
                  delay: 0.18,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                Sarah
              </motion.h1>

              {/* DETALLE */}

              <motion.div
                className="mb-8 mt-5 flex items-center gap-3 sm:mb-12"
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  duration: 1,
                  delay: 0.4,
                }}
              >
                <span
                  className="h-px w-12 sm:w-20"
                  style={{
                    background:
                      "linear-gradient(to right, transparent, rgba(217,137,168,0.75))",
                  }}
                />

                <span
                  className="text-[13px]"
                  style={{
                    color: palette.pinkStrong,
                  }}
                >
                  ♡
                </span>

                <span
                  className="h-px w-12 sm:w-20"
                  style={{
                    background:
                      "linear-gradient(to left, transparent, rgba(217,137,168,0.75))",
                  }}
                />
              </motion.div>

              {/* =========================================
                  SOBRE
              ========================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 28,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1,
                  delay: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  flex
                  w-full
                  flex-col
                  items-center
                  justify-center
                "
              >
                <div
                  onClick={iniciarExperiencia}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      iniciarExperiencia();
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label="Abrir invitación de Sarah"
                  className="
                    group
                    relative
                    aspect-[350/235]
                    w-[82vw]
                    max-w-[330px]
                    cursor-pointer
                    outline-none
                    sm:max-w-[430px]
                  "
                  style={{
                    perspective: 2200,
                  }}
                >
                  {/* SOMBRA */}

                  <div
                    className="
                      absolute
                      -bottom-7
                      left-1/2
                      h-12
                      w-[75%]
                      -translate-x-1/2
                      rounded-full
                      bg-black/10
                      blur-2xl
                    "
                  />

                  {/* =========================================
                      CARTA INTERIOR
                  ========================================= */}

                  <motion.div
                    className="
                      absolute
                      left-1/2
                      top-[9%]
                      z-10
                      flex
                      h-[78%]
                      w-[82%]
                      -translate-x-1/2
                      flex-col
                      items-center
                      justify-center
                      overflow-hidden
                      border
                      px-3
                      py-3
                      text-center
                    "
                    style={{
                      backgroundColor: palette.white,
                      borderColor: "rgba(217,137,168,0.35)",
                      boxShadow: "0 14px 30px rgba(23,23,23,0.10)",
                    }}
                    animate={
                      abrirSobre
                        ? {
                            y: -82,
                          }
                        : {
                            y: 0,
                          }
                    }
                    transition={{
                      duration: 1.15,
                      delay: abrirSobre ? 0.3 : 0,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {/* BORDE INTERIOR */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-3
                        border
                      "
                      style={{
                        borderColor: "rgba(244,198,215,0.5)",
                      }}
                    />

                    {/* =========================================
                        CONEJO

                        Guarda la imagen como:
                        public/conejo.png
                    ========================================= */}

                    <img
                      src="/conejo.png"
                      alt="Conejito de Sarah"
                      draggable="false"
                      className="
                        relative
                        z-10
                        h-[92%]
                        w-[92%]
                        select-none
                        object-contain
                        object-center
                      "
                    />
                  </motion.div>

                  {/* =========================================
                      CUERPO DEL SOBRE
                  ========================================= */}

                  <motion.div
                    className="
                      absolute
                      inset-0
                      overflow-hidden
                      border
                    "
                    style={{
                      background: `
                        linear-gradient(
                          145deg,
                          #FBE7EF 0%,
                          #F4C6D7 50%,
                          #EFB4CA 100%
                        )
                      `,
                      borderColor: "rgba(217,137,168,0.32)",
                      boxShadow: `
                        0 28px 55px rgba(23,23,23,0.13),
                        inset 0 1px 0 rgba(255,255,255,0.8)
                      `,
                    }}
                    animate={
                      abrirSobre
                        ? {
                            y: 6,
                          }
                        : {
                            y: 0,
                          }
                    }
                    transition={{
                      duration: 1.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {/* TEXTURA */}

                    <div
                      className="absolute inset-0 opacity-[0.13]"
                      style={{
                        backgroundImage: `
                          repeating-linear-gradient(
                            90deg,
                            rgba(255,255,255,0.8) 0px,
                            rgba(255,255,255,0.8) 1px,
                            transparent 1px,
                            transparent 6px
                          )
                        `,
                      }}
                    />

                    {/* SOLAPA IZQUIERDA */}

                    <div
                      className="
                        absolute
                        bottom-0
                        left-0
                        h-[72%]
                        w-[53%]
                        border-t
                      "
                      style={{
                        clipPath: "polygon(0 0, 100% 100%, 0 100%)",
                        borderColor: "rgba(217,137,168,0.22)",
                        background:
                          "linear-gradient(145deg, rgba(255,255,255,0.32), transparent)",
                      }}
                    />

                    {/* SOLAPA DERECHA */}

                    <div
                      className="
                        absolute
                        bottom-0
                        right-0
                        h-[72%]
                        w-[53%]
                        border-t
                      "
                      style={{
                        clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
                        borderColor: "rgba(217,137,168,0.22)",
                        background:
                          "linear-gradient(215deg, rgba(255,255,255,0.25), transparent)",
                      }}
                    />

                    {/* PARTE INFERIOR */}

                    <div
                      className="
                        absolute
                        bottom-0
                        left-0
                        h-[56%]
                        w-full
                      "
                      style={{
                        clipPath: "polygon(0 100%, 50% 20%, 100% 100%)",
                        background:
                          "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(217,137,168,0.12))",
                      }}
                    />
                  </motion.div>

                  {/* =========================================
                      TAPA DEL SOBRE
                  ========================================= */}

                  <motion.div
                    className="
                      absolute
                      left-0
                      top-0
                      z-20
                      h-[54%]
                      w-full
                      origin-top
                      overflow-hidden
                    "
                    style={{
                      clipPath: "polygon(0 0, 50% 100%, 100% 0)",
                      background: `
                        linear-gradient(
                          180deg,
                          #F8D9E5 0%,
                          #F0B9CE 100%
                        )
                      `,
                      boxShadow: "0 13px 24px rgba(23,23,23,0.10)",
                      backfaceVisibility: "hidden",
                    }}
                    animate={
                      abrirSobre
                        ? {
                            rotateX: -182,
                            y: -3,
                          }
                        : {
                            rotateX: 0,
                            y: 0,
                          }
                    }
                    transition={{
                      duration: 1.2,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />

                  {/* =========================================
                      SELLO
                  ========================================= */}

                  <motion.div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      z-30
                      flex
                      items-center
                      justify-center
                    "
                    animate={
                      abrirSobre
                        ? {
                            scale: 0.7,
                            opacity: 0,
                            y: -16,
                          }
                        : {
                            scale: 1,
                            opacity: 1,
                            y: 0,
                          }
                    }
                    transition={{
                      duration: 0.55,
                    }}
                  >
                    <div
                      className="
                        relative
                        flex
                        h-[72px]
                        w-[72px]
                        items-center
                        justify-center
                        rounded-full
                        sm:h-[86px]
                        sm:w-[86px]
                      "
                      style={{
                        background: `
                          radial-gradient(
                            circle at 35% 28%,
                            #F7D3E0 0%,
                            #E69BB8 48%,
                            #CF7698 100%
                          )
                        `,
                        boxShadow: `
                          inset 0 2px 4px rgba(255,255,255,0.45),
                          inset 0 -5px 9px rgba(130,65,90,0.18),
                          0 10px 18px rgba(23,23,23,0.13)
                        `,
                      }}
                    >
                      <div
                        className="
                          absolute
                          inset-[7px]
                          rounded-full
                          border
                        "
                        style={{
                          borderColor: "rgba(255,255,255,0.45)",
                        }}
                      />

                      <span
                        className="
                          relative
                          z-10
                          font-cursiveDancing
                          text-[34px]
                          sm:text-[42px]
                        "
                        style={{
                          color: palette.white,
                          textShadow: "0 1px 3px rgba(23,23,23,0.15)",
                        }}
                      >
                        S
                      </span>
                    </div>
                  </motion.div>

                  {/* ABRIR */}

                  <motion.p
                    className="
                      pointer-events-none
                      absolute
                      inset-x-0
                      top-4
                      z-40
                      text-center
                      text-[8px]
                      uppercase
                      tracking-[0.4em]
                      sm:text-[9px]
                    "
                    style={{
                      color: palette.blackSoft,
                    }}
                    animate={{
                      opacity: abrirSobre ? 0 : 0.65,
                    }}
                    transition={{
                      duration: 0.35,
                    }}
                  >
                    Abrir
                  </motion.p>
                </div>

                {/* INDICACIÓN */}

                <motion.p
                  className="
                    mt-7
                    text-center
                    text-[8px]
                    uppercase
                    tracking-[0.3em]
                    sm:mt-10
                    sm:text-[10px]
                  "
                  style={{
                    color: palette.blackSoft,
                  }}
                  animate={{
                    opacity: abrirSobre ? 0 : 0.7,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                >
                  Toca el sobre para comenzar
                </motion.p>
              </motion.div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* =========================================
          PORTADA INTERIOR

          IMPORTANTE:
          usamos 100svh en lugar de 100dvh
          para evitar el redimensionamiento al hacer scroll
      ========================================= */}

      <section
        className="
          relative
          h-[100svh]
          min-h-[100svh]
          w-full
          overflow-hidden
        "
        style={{
          backgroundColor: palette.black,
        }}
      >
        {/* =========================================
            FOTOGRAFÍA DE PORTADA

            SIN SCALE
            SIN ZOOM
            ALTURA FIJA 100svh
        ========================================= */}

        <motion.img
          src="/portada.png"
          alt="Sarah"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-[0%_50%]
          "
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: mostrarContenido ? 1 : 0,
          }}
          transition={{
            opacity: {
              duration: 1.2,
            },
          }}
        />

        {/* =========================================
            OVERLAY
        ========================================= */}

        <motion.div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(
                180deg,
                rgba(23,23,23,0.38) 0%,
                rgba(23,23,23,0.08) 35%,
                rgba(23,23,23,0.18) 60%,
                rgba(23,23,23,0.72) 100%
              )
            `,
          }}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: mostrarContenido ? 1 : 0,
          }}
          transition={{
            duration: 1,
          }}
        />

        {/* =========================================
            CONTENIDO PORTADA
        ========================================= */}

        <motion.div
          className="
            relative
            z-20
            flex
            h-[100svh]
            min-h-[100svh]
            w-full
            flex-col
            items-center
            justify-between
            px-5
            py-10
            text-center
          "
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: mostrarContenido ? 1 : 0,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
        >
          {/* =========================================
              NOMBRE
          ========================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: -15,
            }}
            animate={
              mostrarContenido
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {
                    opacity: 0,
                    y: -15,
                  }
            }
            transition={{
              duration: 1,
              delay: 0.5,
            }}
          >
            <h1
              className="
                mt-2
                font-cursiveDancing
                text-[80px]
                leading-none
                sm:text-[110px]
              "
              style={{
                color: palette.pink,
                textShadow: "0 4px 24px rgba(0,0,0,0.35)",
              }}
            >
              Sarah
            </h1>
          </motion.div>

          {/* =========================================
              CONTADOR
          ========================================= */}

          <motion.div
            className="
              w-full
              max-w-4xl
              pb-3
            "
            initial={{
              opacity: 0,
              y: 18,
            }}
            animate={
              mostrarContenido
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {
                    opacity: 0,
                    y: 18,
                  }
            }
            transition={{
              duration: 1,
              delay: 0.9,
            }}
          >
            <Countdown targetDate="2026-09-07T00:00:00" />

            <p
              className="
                mt-6
                text-[8px]
                uppercase
                tracking-[0.38em]
                text-white/70
              "
            >
              Desliza para continuar
            </p>

            <div
              className="
                mx-auto
                mt-3
                h-8
                w-px
                overflow-hidden
                bg-white/30
              "
            >
              <motion.span
                className="
                  block
                  h-4
                  w-px
                  bg-white
                "
                animate={{
                  y: [-16, 36],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 0.25,
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}