import { useState } from 'react'
import './App.css'

const DRESSES = [
  {
    id: 'isabella',
    name: 'Isabella',
    description: 'A romantic A-line gown crafted with delicate French lace, subtle shimmer tulle, and a cascading train.',
    price: '$2,450',
    image: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=800&q=80',
    tag: 'Best Seller'
  },
  {
    id: 'sophia',
    name: 'Sophia',
    description: 'Timeless mermaid silhouette in luxury silk crepe, featuring an elegant open back and detailed button trim.',
    price: '$2,800',
    image: 'https://images.unsplash.com/photo-1546804784-896d0dca3800?auto=format&fit=crop&w=800&q=80',
    tag: 'New Arrival'
  },
  {
    id: 'aurora',
    name: 'Aurora',
    description: 'Ethereal ballgown with a sweetheart neckline, hand-embroidered floral appliqué, and a regal tulle skirt.',
    price: '$3,100',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    tag: 'Couture'
  },
  {
    id: 'olivia',
    name: 'Olivia',
    description: 'Modern sheath dress in smooth satin with a refined off-the-shoulder neck and a sophisticated side slit.',
    price: '$1,980',
    image: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=800&q=80',
    tag: 'Popular'
  },
  {
    id: 'grace',
    name: 'Grace',
    description: 'Classic vintage-inspired gown with intricate pearl beadwork, long lace sleeves, and a stately train.',
    price: '$2,650',
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80',
    tag: 'Classic'
  },
  {
    id: 'victoria',
    name: 'Victoria',
    description: 'Glamorous fit-and-flare gown adorned with sparkling crystals, a deep V-neckline, and a illusion back.',
    price: '$2,950',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80',
    tag: 'Exclusive'
  }
]

const SERVICES = [
  {
    icon: '✨',
    title: 'Bridal Consultation',
    description: 'Enjoy a private, relaxed 90-minute session with our expert bridal stylists to discover your perfect gown.'
  },
  {
    icon: '🪡',
    title: 'Dress Fitting',
    description: 'Personalized fitting appointments ensuring every contour of your gown complements your vision flawlessly.'
  },
  {
    icon: '✂️',
    title: 'Alterations',
    description: 'In-house master seamstresses dedicated to precision tailoring for maximum comfort and fit.'
  },
  {
    icon: '👑',
    title: 'Accessories',
    description: 'Explore our curated collection of veils, headpieces, jewelry, and belts to complete your bridal look.'
  }
]

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    weddingDate: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => {
      setFormSubmitted(false)
      setFormData({ name: '', email: '', phone: '', weddingDate: '', message: '' })
    }, 5000)
  }

  return (
    <div className="app">
      {/* 1. NAVIGATION */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo">
            <span className="logo-icon">💍</span> Bella Bride
          </a>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>

          <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
            <li><a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
            <li><a href="#dresses" onClick={() => setMobileMenuOpen(false)}>Dresses</a></li>
            <li><a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a></li>
            <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a></li>
            <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Find the Dress of Your Dreams</h1>
          <p className="hero-subtitle">Elegant bridal gowns for your perfect day.</p>
          <div className="hero-buttons">
            <a href="#dresses" className="btn btn-primary">View Collection</a>
            <a href="#contact" className="btn btn-secondary">Book Appointment</a>
          </div>
        </div>
      </section>

      {/* 3. WEDDING DRESS COLLECTION */}
      <section id="dresses" className="section">
        <h2 className="section-title">Bridal Collection</h2>
        <p className="section-subtitle">Explore our handpicked selection of exquisite wedding gowns</p>

        <div className="dress-grid">
          {DRESSES.map((dress) => (
            <div key={dress.id} className="dress-card">
              <div className="dress-image-wrapper">
                <img
                  src={dress.image}
                  alt={`${dress.name} Wedding Dress`}
                  className="dress-image"
                  loading="lazy"
                />
                {dress.tag && <span className="dress-badge">{dress.tag}</span>}
              </div>
              <div className="dress-info">
                <h3 className="dress-name">{dress.name}</h3>
                <p className="dress-description">{dress.description}</p>
                <div className="dress-footer">
                  <span className="dress-price">{dress.price}</span>
                  <a href="#contact" className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
                    Reserve Fitting
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SERVICES */}
      <section id="services" className="services-section">
        <h2 className="section-title">Bespoke Services</h2>
        <p className="section-subtitle">Tailored experiences designed to make your wedding journey unforgettable</p>

        <div className="services-grid">
          {SERVICES.map((service, idx) => (
            <div key={idx} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. ABOUT SECTION */}
      <section id="about" className="section">
        <div className="about-section">
          <div className="about-content">
            <div className="about-decorator">✦ ✦ ✦</div>
            <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>About Bella Bride</h2>
            <p className="about-quote">
              &ldquo;Bella Bride Wedding Salon helps every bride find a dress that makes her feel beautiful and confident on her special day.&rdquo;
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', marginTop: '1rem' }}>
              Located in the heart of Chicago, our salon offers a warm, private atmosphere where your bridal dreams become reality.
            </p>
          </div>
        </div>
      </section>

      {/* 6. CONTACT / APPOINTMENT SECTION */}
      <section id="contact" className="section">
        <h2 className="section-title">Book an Appointment</h2>
        <p className="section-subtitle">We would be honored to be a part of your bridal journey</p>

        <div className="contact-container">
          <div className="contact-info-card">
            <div>
              <h3 className="contact-info-title">Visit Our Salon</h3>
              <div className="contact-detail">
                <h4>Location</h4>
                <p>Bella Bride Wedding Salon</p>
                <p>123 Bridal Way, Suite 400</p>
                <p>Chicago, IL 60611</p>
              </div>

              <div className="contact-detail">
                <h4>Hours</h4>
                <p>Tuesday &ndash; Saturday: 10:00 AM &ndash; 6:00 PM</p>
                <p>Sunday: 12:00 PM &ndash; 5:00 PM</p>
                <p>Monday: Closed</p>
              </div>

              <div className="contact-detail">
                <h4>Contact Info</h4>
                <p>Phone: (312) 555-0199</p>
                <p>Email: contact@bellabridechicago.com</p>
              </div>
            </div>

            <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
              * Consultations are by appointment only to ensure personalized service.
            </div>
          </div>

          <form className="appointment-form" onSubmit={handleSubmit}>
            {formSubmitted && (
              <div className="form-success-alert">
                Thank you, {formData.name || 'Bride'}! Your appointment request has been received. We will contact you shortly to confirm.
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Jane Doe"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="jane@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  placeholder="(312) 555-0100"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="weddingDate">Wedding Date *</label>
              <input
                type="date"
                id="weddingDate"
                name="weddingDate"
                required
                value={formData.weddingDate}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message / Preferences</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Tell us about your dress style preferences or preferred appointment time..."
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
              Book Appointment
            </button>
          </form>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <h3>Bella Bride Wedding Salon</h3>
            <p>Chicago, IL</p>
            <p style={{ marginTop: '0.8rem', fontSize: '0.88rem' }}>
              Creating unforgettable bridal moments and helping brides find their dream dress since 2015.
            </p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#dresses">Dresses</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Bella Bride Wedding Salon. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
