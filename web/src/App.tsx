import { motion } from 'framer-motion'
import './App.css'

function App() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  }

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const portfolioCases = [
    {
      title: "VEX VRC Competition",
      description: "Competing in the VEX Robotics Competition, designing and building robots to compete in challenging game scenarios. Our team excels in both robot performance and strategic gameplay."
    },
    {
      title: "Regional Championships",
      description: "Representing Alberta at regional and provincial championships. Our dedication to innovation and teamwork has earned us recognition across multiple competition seasons."
    },
    {
      title: "Engineering Excellence",
      description: "Focusing on mechanical design, programming, and autonomous control systems. We push the boundaries of what's possible in high school robotics through rigorous testing and iteration."
    },
    {
      title: "Community Outreach",
      description: "Inspiring the next generation of engineers through workshops, demonstrations, and mentoring. We're committed to growing STEM education in our Alberta community."
    }
  ]

  const teams = [
    { name: "3388A", url: "/3388A" },
    { name: "3388C", url: "/3388C" },
    { name: "3388H", url: "/3388H" },
    { name: "3388S", url: "/3388S" },
    { name: "3388X", url: "/3388X" },
    { name: "3388Z", url: "/3388Z" }
  ]

  return (
    <div className="app">
      {/* Hero Section */}
      <motion.section 
        className="hero"
        initial="initial"
        animate="animate"
        variants={stagger}
      >
        <motion.h1 
          className="hero-title"
          variants={fadeInUp}
        >
          CHURCHILL
          <br />
          ROBOTICS
        </motion.h1>
        <motion.p 
          className="hero-subtitle"
          variants={fadeInUp}
        >
          ALBERTA'S PREMIER VEX VRC HIGH SCHOOL ROBOTICS TEAM PUSHING THE LIMITS OF INNOVATION
        </motion.p>
      </motion.section>

      {/* Teams Section */}
      <motion.section 
        className="about"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
      >
        <motion.h2 
          className="about-title"
          variants={fadeInUp}
        >
          Teams
        </motion.h2>
        <motion.div 
          className="services-grid"
          variants={stagger}
        >
          {teams.map((team, index) => (
            <motion.a
              key={index}
              href={team.url}
              className="service-item"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <h3>{team.name}</h3>
            </motion.a>
          ))}
        </motion.div>
      </motion.section>

      {/* Portfolio Section */}
      <motion.section 
        className="portfolio"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
      >
        <motion.h2 
          className="portfolio-title"
          variants={fadeInUp}
        >
          Posts
        </motion.h2>
        <div className="cases-grid">
          {portfolioCases.map((caseItem, index) => (
            <motion.div
              key={index}
              className="case-item"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
            >
              <div className="case-image">
                {index + 1}
              </div>
              <div className="case-content">
                <h3>{caseItem.title}</h3>
                <p>{caseItem.description}</p>
                <a href="#" className="case-link">
                  Explore Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        className="footer"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={stagger}
      >
        <motion.h2 
          className="footer-title"
          variants={fadeInUp}
        >
          Join Our Team
        </motion.h2>
        <motion.a 
          href="mailto:contact@churchillrobotics.ca"
          className="footer-email"
          variants={fadeInUp}
        >
          contact@churchillrobotics.ca
        </motion.a>
        <motion.div 
          className="social-links"
          variants={stagger}
        >
          {['Instagram', 'Twitter', 'YouTube', 'GitHub', 'Facebook'].map((social) => (
            <motion.a
              key={social}
              href="#"
              className="social-link"
              variants={fadeInUp}
              whileHover={{ scale: 1.1 }}
            >
              {social}
            </motion.a>
          ))}
        </motion.div>
        <motion.p 
          className="footer-copyright"
          variants={fadeInUp}
        >
          © 2025 Churchill Robotics. VEX VRC Team - Alberta, Canada
        </motion.p>
      </motion.footer>
    </div>
  )
}

export default App
