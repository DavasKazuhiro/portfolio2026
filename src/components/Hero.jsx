import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaRegEnvelope } from 'react-icons/fa'
import { profile } from '../data/content'
import './Hero.css'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const [imgError, setImgError] = useState(false)
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const roleTimer = setInterval(() => {
      setRoleIndex((currentIndex) => (currentIndex + 1) % profile.roles.length)
    }, 3200)

    return () => clearInterval(roleTimer)
  }, [])

  return (
    <section className="home" id="home">
      <div className="interface">
        <motion.div
          className="home__flex"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div className="txt-home">
            <motion.h1 variants={item}>
              <span>Olá! Meu nome é</span>
              <span className="accent">{profile.name}:</span>
            </motion.h1>

            <motion.div className="wrapper-typing" variants={item}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={profile.roles[roleIndex]}
                  className="typing-role"
                  initial={{ opacity: 0, y: 14, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -14, filter: 'blur(4px)' }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                >
                  {profile.roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            <motion.div className="wrapper-icons" variants={item}>
              <IconLink href={profile.github} label="Github">
                <FaGithub />
              </IconLink>
              <IconLink href={profile.linkedin} label="Linkedin">
                <FaLinkedin />
              </IconLink>
              <IconLink href={`mailto:${profile.email}`} label="Mail">
                <FaRegEnvelope />
              </IconLink>
            </motion.div>
          </div>

          <motion.div className="img-home" variants={item}>
            {!imgError ? (
              <img
                src={`${import.meta.env.BASE_URL}foto.jpg`}
                alt={profile.name}
                className="foto"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="foto foto--fallback" aria-hidden="true">
                DKN
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function IconLink({ href, label, children }) {
  return (
    <div className="icon">
      <div className="tip">{label}</div>
      <span>
        <a href={href} target="_blank" rel="noreferrer" aria-label={label}>
          {children}
        </a>
      </span>
    </div>
  )
}
