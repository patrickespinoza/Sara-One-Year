import { motion } from "framer-motion";

/* =========================================
   FRASE - PRIMER AÑO DE Sarah
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

const reveal = {
  hidden: {
    opacity: 0,
    y: 24,
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
   ESTRELLA DECORATIVA
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
        d="M12 2C12.8 7.4 16.6 11.2 22 12C16.6 12.8 12.8 16.6 12 22C11.2 16.6 7.4 12.8 2 12C7.4 11.2 11.2 7.4 12 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

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
        d="M20.8 4.6C18.7 2.5 15.3 2.5 13.2 4.6L12 5.8L10.8 4.6C8.7 2.5 5.3 2.5 3.2 4.6C1.1 6.7 1.1 10.1 3.2 12.2L12 21L20.8 12.2C22.9 10.1 22.9 6.7 20.8 4.6Z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}

/* =========================================
   SEPARADOR
========================================= */

function SmallDivider() {
  return (
    <div className="flex items-center justify-center gap-3">
      <span
        className="h-px w-10 sm:w-16"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(217,137,168,0.75))",
        }}
      />

      <Heart
        className="h-[12px] w-[12px]"
        style={{
          color: palette.pinkStrong,
        }}
      />

      <span
        className="h-px w-10 sm:w-16"
        style={{
          background:
            "linear-gradient(to left, transparent, rgba(217,137,168,0.75))",
        }}
      />
    </div>
  );
}

export default function FrasePremium() {
  return (
    <motion.section
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.18,
      }}
      className="
        relative
        flex
        min-h-[620px]
        w-full
        items-center
        justify-center
        overflow-hidden
        px-5
        py-24
        text-center
        sm:min-h-[700px]
        sm:px-8
        sm:py-28
        lg:min-h-[680px]
        lg:px-12
        lg:py-32
      "
      style={{
        background: `
          linear-gradient(
            180deg,
            ${palette.white} 0%,
            ${palette.pinkLight} 50%,
            ${palette.pinkSoft} 100%
          )
        `,
      }}
    >
      {/* =========================================
          CÍRCULOS DECORATIVOS
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -left-24
          -top-24
          h-[280px]
          w-[280px]
          rounded-full
          blur-3xl
        "
        style={{
          backgroundColor: "rgba(244,198,215,0.28)",
        }}
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-28
          -right-24
          h-[320px]
          w-[320px]
          rounded-full
          blur-3xl
        "
        style={{
          backgroundColor: "rgba(217,137,168,0.15)",
        }}
      />

      {/* =========================================
          ESTRELLAS DECORATIVAS
      ========================================= */}

      <motion.div
        className="
          pointer-events-none
          absolute
          left-[9%]
          top-[15%]
        "
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.35, 0.8, 0.35],
          rotate: [0, 15, 0],
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
          right-[11%]
          top-[24%]
        "
        animate={{
          scale: [1, 1.35, 1],
          opacity: [0.25, 0.7, 0.25],
        }}
        transition={{
          duration: 2.6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.6,
        }}
      >
        <Star
          className="h-3 w-3 sm:h-5 sm:w-5"
          style={{
            color: palette.pinkStrong,
          }}
        />
      </motion.div>

      <motion.div
        className="
          pointer-events-none
          absolute
          bottom-[18%]
          left-[15%]
        "
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 3.4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <Star
          className="h-3 w-3 sm:h-4 sm:w-4"
          style={{
            color: palette.pinkStrong,
          }}
        />
      </motion.div>

      {/* =========================================
          MARCO
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-5
          rounded-[28px]
          border
          sm:inset-8
          sm:rounded-[36px]
          lg:inset-10
        "
        style={{
          borderColor: "rgba(217,137,168,0.28)",
        }}
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-[26px]
          rounded-[23px]
          border
          sm:inset-[38px]
          sm:rounded-[30px]
          lg:inset-[46px]
        "
        style={{
          borderColor: "rgba(244,198,215,0.25)",
        }}
      />

      {/* =========================================
          CONTENIDO
      ========================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-4xl
          flex-col
          items-center
        "
      >

        {/* CORAZÓN */}

        <motion.div
          className="mt-6"
          initial={{
            opacity: 0,
            scale: 0.7,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.1,
          }}
        >
          <Heart
            className="h-7 w-7 sm:h-8 sm:w-8"
            style={{
              color: palette.pinkStrong,
            }}
          />
        </motion.div>

        {/* MI PRIMER AÑO */}

        <motion.p
          className="
            mt-8
            font-serif
            text-[12px]
            uppercase
            tracking-[0.32em]
            sm:text-sm
          "
          style={{
            color: palette.blackSoft,
          }}
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.15,
          }}
        >
          Mi primer año
        </motion.p>

        {/* Sarah */}

        <motion.h2
          className="
            mt-2
            font-cursiveDancing
            text-[68px]
            font-normal
            leading-none
            sm:text-[90px]
            md:text-[105px]
          "
          style={{
            color: palette.pinkStrong,
          }}
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
            duration: 1,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          Sarah
        </motion.h2>

        {/* SEPARADOR */}

        <motion.div
          className="my-8 sm:my-10"
          initial={{
            opacity: 0,
            scaleX: 0.7,
          }}
          whileInView={{
            opacity: 1,
            scaleX: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.28,
          }}
        >
          <SmallDivider />
        </motion.div>

        {/* FRASE PRINCIPAL */}

        <motion.blockquote
          className="
            mx-auto
            max-w-3xl
            font-serif
            text-[25px]
            font-normal
            leading-[1.55]
            tracking-[-0.01em]
            sm:text-[34px]
            sm:leading-[1.5]
            md:text-[39px]
            lg:text-[43px]
          "
          style={{
            color: palette.black,
          }}
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.32,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          Acompáñanos a celebrar el primer cumpleaños de nuestra pequeña

        </motion.blockquote>

        {/* CIERRE */}

        <motion.div
          className="
            mt-10
            max-w-xl
            sm:mt-12
          "
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
            delay: 0.45,
          }}
        >
          <div
            className="
              mx-auto
              mb-6
              h-px
              w-16
            "
            style={{
              backgroundColor: "rgba(217,137,168,0.55)",
            }}
          />

          <p
            className="
              font-serif
              text-[14px]
              italic
              leading-7
              sm:text-base
              sm:leading-8
            "
            style={{
              color: palette.blackSoft,
            }}
          >
            Un año lleno de sonrisas, aprendizajes y momentos inolvidables
            merece una celebración llena de amor.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}