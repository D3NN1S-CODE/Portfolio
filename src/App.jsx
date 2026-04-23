import { useState } from 'react'

const projectCards = [
  {
    name: 'AI Query App',
    type: 'AI Product',
    status: 'Live',
    description:
      'Prompt-focused AI interface powered by Gemini with fast, clean interactions.',
    link: 'https://akomah-23cg034034-ai-query-app.onrender.com',
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&h=760&q=80'
  },
  {
    name: 'Vantage',
    type: 'Fintech Product',
    status: 'Case Study Soon',
    description:
      'A loan, savings, and customer management app designed for clear financial actions and trust-driven user flow.',
    link: '',
    image:
      'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=1200&h=760&q=80'
  },
  {
    name: 'KICKBACK',
    type: 'Referral Product',
    status: 'High-Fidelity Prototype',
    description:
      'A high-fidelity referral app for Jumpkick Studios focused on sharing loops, participation tracking, and reward motivation.',
    link: '',
    image:
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&h=760&q=80'
  },
  {
    name: 'Handy',
    type: 'Service Marketplace',
    status: 'In Development',
    description:
      'A service booking and provider app built to connect users with professionals through a smooth request-to-booking journey.',
    link: 'https://handy-2il8.onrender.com',
    image:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&h=760&q=80'
  }
]

const sectionPhotos = {
  about:
    'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1100&h=1300&q=80',
  designTools:
    'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&h=760&q=80',
  skills:
    'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1200&h=760&q=80',
  contact:
    'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&h=760&q=80'
}

const kickbackFrames = [
  {
    title: 'Request Payment',
    subtitle: 'Balance, amount entry, and confirmation state',
    src: '/kickback-frames/frame-01-request-payment.png'
  },
  {
    title: 'Withdraw History',
    subtitle: 'Entry list with processing status indicators',
    src: '/kickback-frames/frame-02-withdraw-history.png'
  },
  {
    title: 'My Referrals',
    subtitle: 'Referral rows with avatar, count, and activity status',
    src: '/kickback-frames/frame-03-my-referrals.png'
  },
  {
    title: 'Marketer Dashboard',
    subtitle: 'Referral code, totals, and withdrawal progress',
    src: '/kickback-frames/frame-04-dashboard.png'
  },
  {
    title: 'Loading Transition',
    subtitle: 'Animated handoff into the dashboard experience',
    src: '/kickback-frames/frame-05-loading.png'
  },
  {
    title: 'Welcome / Contact',
    subtitle: 'Landing and support screens for the Jumpkick journey',
    src: '/kickback-frames/frame-06-welcome.png'
  },
  {
    title: 'Profile',
    subtitle: 'Marketer profile and account management screen',
    src: '/kickback-frames/frame-07-profile.png'
  },
  {
    title: 'Contact',
    subtitle: 'Support and communication screen',
    src: '/kickback-frames/frame-08-contact.png'
  },
  {
    title: 'Promo Flyer',
    subtitle: 'KICKBACK campaign promo visual',
    src: '/kickback-frames/frame-09-flyer.png'
  },
  {
    title: 'Loading Transition Alt',
    subtitle: 'Secondary loading-state motion frame',
    src: '/kickback-frames/frame-10-loading-alt.png'
  }
]

function Squiggle({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 220 120"
      role="presentation"
      aria-hidden="true"
    >
      <path d="M4 62c29-40 52-40 84 0s53 40 84 0 44-40 44-40" />
      <path d="M18 82c27 35 50 35 82 0s56-36 92 0" />
    </svg>
  )
}

function Spark({ className }) {
  return (
    <svg className={className} viewBox="0 0 100 100" role="presentation" aria-hidden="true">
      <path d="M50 6v88M6 50h88M20 20l60 60M80 20L20 80" />
    </svg>
  )
}

function Circuit({ className }) {
  return (
    <svg className={className} viewBox="0 0 220 120" role="presentation" aria-hidden="true">
      <path d="M8 16h72v30h42v26h90" />
      <path d="M24 95h78v-22h45V29h62" />
      <circle cx="80" cy="46" r="6" />
      <circle cx="122" cy="73" r="6" />
      <circle cx="184" cy="29" r="6" />
    </svg>
  )
}

function App() {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <div className="folio">
      <section className="meta-strip dark-section">
        <p>2026</p>
        <p>Portfolio</p>
        <p>Dennis Akomah</p>
      </section>

      <section className="cover dark-section reveal" id="home">
        <Squiggle className="doodle doodle-cover-left" />
        <Squiggle className="doodle doodle-cover-right" />
        <Circuit className="circuit circuit-cover" />
        <Spark className="spark spark-cover" />
        <p className="cover-kicker">Dennis Akomah</p>
        <h1>Portfolio</h1>
        <p className="cover-role">Digital Product Designer</p>
      </section>

      <section className="split light-section reveal" id="about">
        <div className="portrait-card">
          <div className="photo-note photo-note-tilt-left">
            <span className="pin"></span>
            <span className="tape tape-top"></span>
            <img src={sectionPhotos.about} alt="UI design process on desktop workspace" />
          </div>
          <Spark className="spark spark-inline" />
          <Squiggle className="doodle doodle-inline" />
          <p>Human-centered design with psychology-informed decisions.</p>
        </div>
        <div>
          <h2>Hello.</h2>
          <p>
            My name is Dennis Akomah, a digital product designer based in Nigeria and
            available for remote work. I blend product thinking, UX structure, and
            behavioral psychology to create interfaces that feel easy, useful, and
            emotionally clear.
          </p>
          <p>
            I am especially interested in how design can shape confidence, reduce
            decision fatigue, and help people take meaningful action.
          </p>
        </div>
      </section>

      <section className="split light-section reveal" id="education">
        <div>
          <Spark className="spark spark-edu" />
          <Circuit className="circuit circuit-inline" />
          <h2>Education</h2>
          <p>
            I am currently in my 3rd year studying Computer Science at Covenant
            University, combining academic growth with consistent product design
            practice.
          </p>
          <ul>
            <li>Computer Science student at Covenant University (3rd year)</li>
            <li>Focused study in product UX and interface systems</li>
            <li>Research interest in psychology and user behavior</li>
            <li>Practical design implementation with front-end familiarity</li>
          </ul>
        </div>
        <div className="education-side">
          <h3>Experience</h3>
          <p className="list-title">
            <a href="https://jumpkickstudios.ng/" target="_blank" rel="noreferrer">
              Jumpkick Studios
            </a>
          </p>
          <p>UI/UX Designer Intern + Game UI Designer Intern</p>
          <p>Collaborative, remote-ready communication style.</p>
        </div>
      </section>

      <section className="split light-section reveal" id="skills">
        <div className="skills-full">
          <Spark className="spark spark-skills" />
          <h2>Skills</h2>
          <div className="pill-wrap">
            <span>Figma</span>
            <span>Photoshop</span>
            <span>WordPress</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>PHP</span>
          </div>
          <p>
            I work across design and implementation language, which helps me create
            practical solutions and collaborate better with developers.
          </p>
          <div className="skills-media">
            <div className="skills-media-grid">
              <div className="photo-note photo-note-tilt-left">
                <span className="pin"></span>
                <span className="tape tape-top"></span>
                <img
                  className="section-photo"
                  src={sectionPhotos.designTools}
                  alt="Design tools workspace with Figma-style interface"
                />
              </div>
              <div className="photo-note">
                <span className="pin"></span>
                <span className="tape tape-top"></span>
                <img
                  className="section-photo"
                  src={sectionPhotos.skills}
                  alt="Code editor and product design tools"
                />
              </div>
            </div>
            <Spark className="spark spark-inline" />
            <Spark className="spark spark-inline-right" />
            <Squiggle className="doodle doodle-inline-right" />
          </div>
        </div>
      </section>

      <section className="projects-overview dark-section reveal" id="projects">
        <Spark className="spark spark-projects" />
        <h2>Projects</h2>
        <p>Selected works and case-study previews.</p>
        <div className="project-mini-grid">
          {projectCards.map((item) => (
            <article key={item.name}>
              <div className="photo-note photo-note-tight">
                <span className="pin"></span>
                <span className="tape tape-corner"></span>
                <img src={item.image} alt={`${item.name} visual mood board`} />
              </div>
              <p className="card-type">{item.type}</p>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p className={`status-chip status-${item.status.toLowerCase().replace(/\s+/g, '-')}`}>
                {item.status}
              </p>
              {item.name === 'KICKBACK' ? (
                <p className="prototype-note">
                  High-fidelity Figma frames ready for review. Prototype link coming soon.
                </p>
              ) : null}
              {item.name === 'KICKBACK' ? (
                <button
                  className="project-link project-button"
                  type="button"
                  onClick={() => setActiveProject('KICKBACK')}
                >
                  View prototype frames
                </button>
              ) : item.link ? (
                <a className="project-link" href={item.link} target="_blank" rel="noreferrer">
                  Visit live project
                </a>
              ) : (
                <span>Link coming soon</span>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="meta-strip light-section bottom-strip">
        <p>Portfolio 2026</p>
        <p>Digital Product Designer</p>
      </section>

      <section className="split light-section reveal" id="contact">
        <div>
          <h2>Thank you</h2>
          <p>Get in touch with me.</p>
          <a href="mailto:dmcakomah@gmail.com">dmcakomah@gmail.com</a>
          <a href="tel:+2348121166328">08121166328</a>
          <div className="photo-note photo-note-tilt-left">
            <span className="pin"></span>
            <span className="tape tape-top"></span>
            <img
              className="section-photo"
              src={sectionPhotos.contact}
              alt="Designer sketching ideas in a notebook"
            />
          </div>
        </div>
        <div>
          <Circuit className="circuit circuit-inline" />
          <Spark className="spark spark-inline" />
          <p>
            If you are building a digital product and need thoughtful UI/UX direction,
            I would love to collaborate. I am open to freelance projects and remote
            product design roles.
          </p>
          <p>
            Let&apos;s create experiences that are visually memorable and psychologically
            intuitive.
          </p>
          <p className="sign-off">Dennis Akomah</p>
        </div>
      </section>

      {activeProject === 'KICKBACK' ? (
        <div className="frame-modal" role="dialog" aria-modal="true" aria-labelledby="frame-modal-title">
          <div className="frame-modal-panel">
            <div className="frame-modal-header">
              <div>
                <p className="modal-kicker">KICKBACK</p>
                <h2 id="frame-modal-title">High-fidelity prototype frames</h2>
              </div>
              <button className="modal-close" type="button" onClick={() => setActiveProject(null)}>
                Close
              </button>
            </div>
            <p className="modal-description">
              These are the high-fidelity screens available for KICKBACK.
            </p>
            <div className="frame-grid">
              {kickbackFrames.map((frame) => {
                const frameFile = frame.src.split('/').pop()

                return (
                  <article key={frame.title} className="frame-card">
                    <div className="frame-screen">
                      <img src={frame.src} alt={`${frame.title} KICKBACK frame`} loading="lazy" />
                    </div>
                    <h3>{frame.title}</h3>
                    <p>{frame.subtitle}</p>
                    <p className="frame-file">Expected file: {frameFile}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default App
