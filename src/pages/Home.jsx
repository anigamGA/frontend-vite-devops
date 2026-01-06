import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="home">
            {/* Navigation */}
            <nav className="navbar">
                <div className="container nav-container">
                    <div className="logo">
                        <span className="logo-text">Design</span>
                        
                        <span className="logo-accent">Studio XD</span>
                    </div>
                    <ul className="nav-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#work">Work</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <button className="btn-primary">
                        <span>Get Started</span>
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="hero" id="home">
                <div className="hero-background">
                    <div className="gradient-orb orb-1"></div>
                    <div className="gradient-orb orb-2"></div>
                    <div className="gradient-orb orb-3"></div>
                </div>

                <div className="container hero-container">
                    <div className="hero-content">
                        <div className="hero-badge">
                            <span className="badge-dot"></span>
                            <span>Crafting Digital Excellence</span>
                        </div>
                        <h1 className="hero-title">
                            We Design <span className="text-gradient">Stunning</span><br />
                            Digital Experiences
                        </h1>
                        <p className="hero-description">
                            Transform your vision into reality with cutting-edge web design that captivates,
                            engages, and converts. We blend creativity with technology to build websites
                            that stand out in the digital landscape.
                        </p>
                        <div className="hero-buttons">
                            <button className="btn-primary">
                                <span>Start Your Project</span>
                            </button>
                            <button className="btn-secondary">
                                <span>View Our Work</span>
                            </button>
                        </div>
                        <div className="hero-stats">
                            <div className="stat-item">
                                <h3 className="text-gradient">500+</h3>
                                <p>Projects Completed</p>
                            </div>
                            <div className="stat-item">
                                <h3 className="text-gradient">98%</h3>
                                <p>Client Satisfaction</p>
                            </div>
                            <div className="stat-item">
                                <h3 className="text-gradient">50+</h3>
                                <p>Awards Won</p>
                            </div>
                        </div>
                    </div>
                    <div className="hero-visual">
                        <div className="floating-card card-1">
                            <div className="card-icon">🎨</div>
                            <h4>Creative Design</h4>
                        </div>
                        <div className="floating-card card-2">
                            <div className="card-icon">⚡</div>
                            <h4>Fast Performance</h4>
                        </div>
                        <div className="floating-card card-3">
                            <div className="card-icon">📱</div>
                            <h4>Responsive</h4>
                        </div>
                        <div className="hero-circle"></div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="services" id="services">
                <div className="container">
                    <div className="section-header">
                        <h2>Our <span className="text-gradient">Services</span></h2>
                        <p>Comprehensive solutions for your digital needs</p>
                    </div>

                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-icon">🎨</div>
                            <h3>UI/UX Design</h3>
                            <p>Creating intuitive and beautiful interfaces that users love. We focus on user experience to ensure maximum engagement.</p>
                            <a href="#" className="service-link">Learn More →</a>
                        </div>

                        <div className="service-card">
                            <div className="service-icon">💻</div>
                            <h3>Web Development</h3>
                            <p>Building robust, scalable websites with modern technologies. From simple landing pages to complex web applications.</p>
                            <a href="#" className="service-link">Learn More →</a>
                        </div>

                        <div className="service-card">
                            <div className="service-icon">📱</div>
                            <h3>Mobile Design</h3>
                            <p>Responsive designs that look perfect on any device. Mobile-first approach for the modern user.</p>
                            <a href="#" className="service-link">Learn More →</a>
                        </div>

                        <div className="service-card">
                            <div className="service-icon">🚀</div>
                            <h3>Brand Identity</h3>
                            <p>Crafting unique brand identities that resonate with your audience and stand out from the competition.</p>
                            <a href="#" className="service-link">Learn More →</a>
                        </div>

                        <div className="service-card">
                            <div className="service-icon">⚡</div>
                            <h3>Performance</h3>
                            <p>Lightning-fast websites optimized for speed and SEO. Every millisecond counts in user experience.</p>
                            <a href="#" className="service-link">Learn More →</a>
                        </div>

                        <div className="service-card">
                            <div className="service-icon">🔧</div>
                            <h3>Maintenance</h3>
                            <p>Ongoing support and maintenance to keep your website running smoothly and securely.</p>
                            <a href="#" className="service-link">Learn More →</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            <section className="portfolio" id="work">
                <div className="container">
                    <div className="section-header">
                        <h2>Featured <span className="text-gradient">Work</span></h2>
                        <p>Showcasing our best projects and success stories</p>
                    </div>

                    <div className="portfolio-grid">
                        <div className="portfolio-item large">
                            <div className="portfolio-image">
                                <div className="portfolio-overlay">
                                    <h3>E-Commerce Platform</h3>
                                    <p>Modern shopping experience</p>
                                    <button className="btn-primary"><span>View Project</span></button>
                                </div>
                            </div>
                        </div>

                        <div className="portfolio-item">
                            <div className="portfolio-image">
                                <div className="portfolio-overlay">
                                    <h3>SaaS Dashboard</h3>
                                    <p>Analytics & insights</p>
                                    <button className="btn-primary"><span>View Project</span></button>
                                </div>
                            </div>
                        </div>

                        <div className="portfolio-item">
                            <div className="portfolio-image">
                                <div className="portfolio-overlay">
                                    <h3>Mobile App</h3>
                                    <p>Fitness tracking</p>
                                    <button className="btn-primary"><span>View Project</span></button>
                                </div>
                            </div>
                        </div>

                        <div className="portfolio-item">
                            <div className="portfolio-image">
                                <div className="portfolio-overlay">
                                    <h3>Brand Website</h3>
                                    <p>Luxury fashion</p>
                                    <button className="btn-primary"><span>View Project</span></button>
                                </div>
                            </div>
                        </div>

                        <div className="portfolio-item large">
                            <div className="portfolio-image">
                                <div className="portfolio-overlay">
                                    <h3>Corporate Site</h3>
                                    <p>Professional services</p>
                                    <button className="btn-primary"><span>View Project</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Start Your <span className="text-gradient">Next Project?</span></h2>
                        <p>Let's collaborate to create something extraordinary that drives results</p>
                        <div className="cta-buttons">
                            <button className="btn-primary">
                                <span>Get in Touch</span>
                            </button>
                            <button className="btn-secondary">
                                <span>Schedule a Call</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-section">
                            <div className="logo">
                                <span className="logo-text">Design</span>
                                <span className="logo-accent">Studio</span>
                            </div>
                            <p>Crafting digital experiences that inspire and engage.</p>
                            <div className="social-links">
                                <a href="#" className="social-link">Twitter</a>
                                <a href="#" className="social-link">LinkedIn</a>
                                <a href="#" className="social-link">Dribbble</a>
                                <a href="#" className="social-link">Instagram</a>
                            </div>
                        </div>

                        <div className="footer-section">
                            <h4>Services</h4>
                            <ul>
                                <li><a href="#">UI/UX Design</a></li>
                                <li><a href="#">Web Development</a></li>
                                <li><a href="#">Mobile Design</a></li>
                                <li><a href="#">Branding</a></li>
                            </ul>
                        </div>

                        <div className="footer-section">
                            <h4>Company</h4>
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Our Work</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>

                        <div className="footer-section">
                            <h4>Newsletter</h4>
                            <p>Subscribe to get the latest updates</p>
                            <div className="newsletter-form">
                                <input type="email" placeholder="Your email" />
                                <button className="btn-primary"><span>Subscribe</span></button>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p>&copy; 2025 DesignStudio. All rights reserved.</p>
                        <div className="footer-links">
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;
