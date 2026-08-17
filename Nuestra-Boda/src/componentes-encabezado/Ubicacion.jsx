import { motion } from "framer-motion";

/* =========================================
   EVENTO Y DIRECCIÓN — SARA 1 AÑO
========================================= */

const palette = {
  pink: "#F4C6D7",
  pinkStrong: "#D989A8",
  pinkSoft: "#FBE7EF",
  pinkLight: "#FFF7FA",

  white: "#FFFFFF",
  black: "#171717",
  blackSoft: "#4A4146",
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.95,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================================
   CORAZÓN
========================================= */

function Heart({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="
          M20.8 4.6
          C18.7 2.5 15.3 2.5 13.2 4.6
          L12 5.8
          L10.8 4.6
          C8.7 2.5 5.3 2.5 3.2 4.6
          C1.1 6.7 1.1 10.1 3.2 12.2
          L12 21
          L20.8 12.2
          C22.9 10.1 22.9 6.7 20.8 4.6Z
        "
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}

/* =========================================
   ESTRELLA
========================================= */

function Star({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="
          M12 2
          C12.8 7.4 16.6 11.2 22 12
          C16.6 12.8 12.8 16.6 12 22
          C11.2 16.6 7.4 12.8 2 12
          C7.4 11.2 11.2 7.4 12 2Z
        "
        fill="currentColor"
      />
    </svg>
  );
}

/* =========================================
   ICONO UBICACIÓN
========================================= */

function LocationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-4 w-4"
    >
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

/* =========================================
   SEPARADOR
========================================= */

function DecorativeDivider({ compact = false }) {
  return (
    <div className="flex items-center justify-center gap-3">
      <span
        className={compact ? "h-px w-8 sm:w-12" : "h-px w-10 sm:w-16"}
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(217,137,168,0.72))",
        }}
      />

      <Heart
        className="h-[13px] w-[13px]"
        style={{
          color: palette.pinkStrong,
        }}
      />

      <span
        className={compact ? "h-px w-8 sm:w-12" : "h-px w-10 sm:w-16"}
        style={{
          background:
            "linear-gradient(to left, transparent, rgba(217,137,168,0.72))",
        }}
      />
    </div>
  );
}

/* =========================================
   COMPONENTE
========================================= */

export default function EventoDireccion() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.12,
      }}
      className="
        relative
        flex
        min-h-[760px]
        w-full
        items-center
        justify-center
        overflow-hidden
        px-5
        py-24
        sm:px-8
        sm:py-28
        lg:min-h-[720px]
        lg:px-12
        lg:py-32
      "
      style={{
        background: `
          linear-gradient(
            180deg,
            ${palette.white} 0%,
            ${palette.pinkLight} 48%,
            ${palette.pinkSoft} 100%
          )
        `,
      }}
    >
      {/* =========================================
          FONDOS DECORATIVOS
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -left-24
          -top-24
          h-[300px]
          w-[300px]
          rounded-full
          blur-3xl
        "
        style={{
          backgroundColor: "rgba(244,198,215,0.26)",
        }}
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-28
          -right-24
          h-[330px]
          w-[330px]
          rounded-full
          blur-3xl
        "
        style={{
          backgroundColor: "rgba(217,137,168,0.14)",
        }}
      />

      {/* ESTRELLAS */}

      <motion.div
        className="
          pointer-events-none
          absolute
          left-[7%]
          top-[11%]
        "
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.25, 0.75, 0.25],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Star
          className="h-5 w-5 sm:h-7 sm:w-7"
          style={{
            color: palette.pink,
          }}
        />
      </motion.div>

      <motion.div
        className="
          pointer-events-none
          absolute
          right-[8%]
          top-[18%]
        "
        animate={{
          scale: [1, 1.35, 1],
          opacity: [0.25, 0.65, 0.25],
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.7,
        }}
      >
        <Star
          className="h-3 w-3 sm:h-5 sm:w-5"
          style={{
            color: palette.pinkStrong,
          }}
        />
      </motion.div>

      {/* =========================================
          CONTENIDO
      ========================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-7xl
        "
      >
        {/* =========================================
            ENCABEZADO
        ========================================= */}

        <motion.div
          className="
            mx-auto
            mb-14
            max-w-3xl
            text-center
            sm:mb-16
            lg:mb-20
          "
          initial={{
            opacity: 0,
            y: 18,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p
            className="
              text-[9px]
              uppercase
              tracking-[0.44em]
              sm:text-[10px]
              sm:tracking-[0.52em]
            "
            style={{
              color: palette.blackSoft,
            }}
          >
            La celebración
          </p>

          <div className="mt-5">
            <DecorativeDivider />
          </div>

          <p
            className="
              mx-auto
              mt-4
              max-w-xl
              font-serif
              text-[14px]
              italic
              leading-7
              sm:text-base
            "
            style={{
              color: palette.blackSoft,
            }}
          >
            Queremos compartir contigo un día lleno de alegría, sonrisas y
            momentos inolvidables.
          </p>
        </motion.div>

        {/* =========================================
            TARJETA DEL EVENTO
        ========================================= */}

        <motion.div
          className="
            relative
            overflow-hidden
            rounded-[28px]
            border
            lg:grid
            lg:grid-cols-[0.75fr_1fr]
          "
          style={{
            backgroundColor: "rgba(255,255,255,0.90)",
            borderColor: "rgba(217,137,168,0.30)",
            boxShadow: "0 24px 65px rgba(23,23,23,0.08)",
          }}
          initial={{
            opacity: 0,
            y: 26,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 1,
            delay: 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* =========================================
              FECHA
          ========================================= */}

          <div
            className="
              relative
              flex
              min-h-[390px]
              flex-col
              items-center
              justify-center
              border-b
              px-7
              py-14
              text-center
              lg:min-h-[570px]
              lg:border-b-0
              lg:border-r
            "
            style={{
              borderColor: "rgba(217,137,168,0.22)",
              background: `
                linear-gradient(
                  180deg,
                  #FFF8FB 0%,
                  #FBE7EF 100%
                )
              `,
            }}
          >
            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.4em]
              "
              style={{
                color: palette.pinkStrong,
              }}
            >
              Reserva la fecha
            </p>

            <div
              className="my-7 h-px w-16"
              style={{
                backgroundColor: "rgba(217,137,168,0.55)",
              }}
            />

            <p
              className="
                font-serif
                text-lg
                uppercase
                tracking-[0.18em]
              "
              style={{
                color: palette.blackSoft,
              }}
            >
              Sábado
            </p>

            <motion.p
              className="
                my-3
                font-serif
                text-[100px]
                font-normal
                leading-none
                tracking-[-0.05em]
                sm:text-[120px]
                lg:text-[132px]
              "
              style={{
                color: palette.black,
              }}
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                delay: 0.25,
              }}
            >
              12
            </motion.p>

            <p
              className="
                font-serif
                text-[12px]
                uppercase
                tracking-[0.35em]
              "
              style={{
                color: palette.pinkStrong,
              }}
            >
              Septiembre · 2026
            </p>

            <div className="mt-8">
              <DecorativeDivider compact />
            </div>
          </div>

          
          {/* =========================================
              INFORMACIÓN DEL EVENTO
          ========================================= */}

          <div
            className="
              relative
              flex
              min-h-[520px]
              flex-col
              items-center
              justify-center
              px-7
              py-16
              text-center
              sm:px-10
              lg:min-h-[570px]
              lg:px-10
            "
          >
            <motion.p
              className="
                text-[9px]
                uppercase
                tracking-[0.42em]
              "
              style={{
                color: palette.pinkStrong,
              }}
              initial={{
                opacity: 0,
                y: -10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.28,
              }}
            >
              Celebración
            </motion.p>

            <motion.h3
              className="
                mt-5
                font-cursiveDancing
                text-[48px]
                font-normal
                leading-none
                sm:text-[60px]
              "
              style={{
                color: palette.pinkStrong,
              }}
              initial={{
                opacity: 0,
                y: 14,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                delay: 0.32,
              }}
            >
              Mi primer año
            </motion.h3>

            <div className="my-7">
              <DecorativeDivider />
            </div>

            {/* =========================================
                HORA
            ========================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 16,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                delay: 0.38,
              }}
            >
              <p
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.36em]
                "
                style={{
                  color: palette.blackSoft,
                }}
              >
                Hora
              </p>

              <p
                className="
                  mt-3
                  font-serif
                  text-[50px]
                  font-normal
                  leading-none
                  tracking-[-0.035em]
                  sm:text-[62px]
                "
                style={{
                  color: palette.black,
                }}
              >
                3:00 pm
              </p>
            </motion.div>

            {/* =========================================
                UBICACIÓN
            ========================================= */}

            <motion.div
              className="mt-9"
              initial={{
                opacity: 0,
                y: 16,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                delay: 0.46,
              }}
            >
              <p
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.38em]
                "
                style={{
                  color: palette.blackSoft,
                }}
              >
                Ubicación
              </p>

              <p
                className="
                  mx-auto
                  mt-4
                  max-w-sm
                  font-serif
                  text-[17px]
                  leading-relaxed
                  sm:text-[19px]
                "
                style={{
                  color: palette.blackSoft,
                }}
              >
                Remedios 151, Santiago Momoxpan, Zona Sin Asignación de Nombre
                de Colonia, 72705 San Juan Cuautlancingo, Pue.
              </p>
            </motion.div>

            {/* =========================================
                BOTÓN MAPS
            ========================================= */}

            <motion.a
              href="https://maps.app.goo.gl/1LWC766HJqYbUJBt5"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir ubicación en Google Maps"
              className="
                group
                mt-9
                inline-flex
                min-w-[220px]
                items-center
                justify-center
                gap-3
                rounded-full
                border
                px-8
                py-4
              "
              style={{
                backgroundColor: palette.black,
                borderColor: palette.black,
                color: palette.white,
                boxShadow: "0 12px 28px rgba(23,23,23,0.12)",
              }}
              whileHover={{
                y: -2,
                backgroundColor: palette.blackSoft,
              }}
              whileTap={{
                scale: 0.98,
              }}
            >
              <LocationIcon />

              <span
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.28em]
                  sm:text-[10px]
                "
              >
                Ver ubicación
              </span>
            </motion.a>
          </div>
        </motion.div>

        {/* =========================================
            TEXTO FINAL
        ========================================= */}

        <motion.p
          className="
            mx-auto
            mt-12
            max-w-xl
            text-center
            font-serif
            text-[14px]
            italic
            leading-7
            sm:mt-14
            sm:text-base
          "
          style={{
            color: palette.blackSoft,
          }}
          initial={{
            opacity: 0,
            y: 12,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.52,
          }}
        >
          Será un día muy especial y nos encantará compartirlo contigo.
        </motion.p>
      </div>
    </motion.section>
  );
}