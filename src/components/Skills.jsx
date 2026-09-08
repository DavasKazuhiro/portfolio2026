import {
  FaJava,
  FaPython,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaLeaf,
  FaCheckCircle,
} from 'react-icons/fa'
import { skills } from '../data/content'
import './Skills.css'

const iconMap = {
  java: FaJava,
  python: FaPython,
  react: FaReact,
  'node-js': FaNodeJs,
  database: FaDatabase,
  leaf: FaLeaf,
  js: FaReact,
}

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <h1 className="titulo-skills">
        Minhas <span className="accent">Habilidades</span>
      </h1>

      <div className="habilidades">
        <div className="container-skills">
          <h2 className="skill-title">Técnicas</h2>
          <div className="tech-list">
            {skills.tecnicas.map((s) => {
              const Icon = iconMap[s.icon] ?? FaDatabase
              return (
                <div className="skill-item" key={s.nome}>
                  <div className="tech-icon">
                    <Icon />
                  </div>
                  <span>{s.nome}</span>
                </div>
              )
            })}
          </div>

        </div>

        <div className="container-skills">
          <h2 className="skill-title">Profissionais</h2>
          <div className="professional-list">
            {skills.profissionais.map((p) => (
              <div className="skill-item" key={p.nome}>
                <div className="professional-icon">
                  <FaCheckCircle />
                </div>
                <span>{p.nome}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="container-skills ferramentas">
          <h2 className="skill-title">Ferramentas</h2>
          <div className="tag-list">
            {skills.ferramentas.map((f) => (
              <span key={f}>{f}</span>
            ))}
          </div>
        </div>

        <div className="container-skills idiomas">
          <h2 className="skill-title">Idiomas</h2>
          <ul>
            {skills.idiomas.map((idm) => (
              <li key={idm.nome}>
                <span>{idm.nome}</span>
                <span className="idioma-nivel">{idm.nivel}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
