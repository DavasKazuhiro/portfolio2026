import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { FaBrain, FaChevronLeft, FaChevronRight, FaUserAstronaut } from 'react-icons/fa'
import { about } from '../data/content'
import './About.css'

const reveal = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function About() {
  const [activeTab, setActiveTab] = useState(0)

  const icons = [FaUserAstronaut, FaBrain]
  const tabs = about.map((section, index) => ({ ...section, Icon: icons[index] }))

  const changeTab = (direction) => {
    setActiveTab((currentTab) => (currentTab + direction + tabs.length) % tabs.length)
  }

  const activeContent = tabs[activeTab]
  const ActiveIcon = activeContent.Icon

  return (
    <section className="sobre" id="sobre">
      <div className="interface">
        <h2 className="sobre-title">
          Sobre <span className="accent">Mim</span>
        </h2>

        <div className="sobre-carousel">
          <button
            className="sobre-arrow"
            type="button"
            aria-label="Ver seção anterior"
            onClick={() => changeTab(-1)}
          >
            <FaChevronLeft />
          </button>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              className="sobre-row"
              key={activeTab}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              role="tabpanel"
              aria-label={activeContent.subtitulo}
            >
              <div className="sobre-icons">
                <ActiveIcon />
              </div>
              <div className="sobre-texto">
                <h4>{activeContent.subtitulo}</h4>
                <p>{activeContent.texto}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            className="sobre-arrow"
            type="button"
            aria-label="Ver próxima seção"
            onClick={() => changeTab(1)}
          >
            <FaChevronRight />
          </button>
        </div>

        <motion.div
          className="sobre-progress"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          variants={reveal}
        >
          {tabs.map((tab, index) => (
            <span className={activeTab === index ? 'active' : ''} key={tab.label} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
