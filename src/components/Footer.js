import React from 'react'
import { Button } from './Button'
import './Footer.css'
import { Link } from 'react-router-dom'


function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the ChickenWatch Newsletter to receive updates on the best chicken around.
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Your Email" className="footer-input" />
                        <Button buttonStyle="btn--outline">Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to="/sign-up">How it works</Link>
                        <Link to="/testimonials">Testimonials</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Terms of Service</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Still More</h2>
                        <Link to="/sign-up">Submit Recipes</Link>
                        <Link to="/testimonials">Support Portal</Link>
                        <Link to="/">Pricing Calculator</Link>
                        <Link to="/">Contact Us</Link>
                    </div>

                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Keep it Going</h2>
                        <Link to="/sign-up">Celebrity Endorsements</Link>
                        <Link to="/testimonials">Become a Franchisee</Link>
                        <Link to="/">End Of Life notices</Link>
                        <Link to="/">Learn more about Chicken</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Why Us</h2>
                        <Link to="/sign-up">Organic Farming</Link>
                        <Link to="/testimonials">Currency Conversions</Link>
                        <Link to="/">Se Habla Espanol</Link>
                        <Link to="/">Political Ideas</Link>
                    </div>

                </div>

            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="footer-logo">CHKN <i className='fas fa-drumstick-bite'/>
                        </Link>
                    </div>
                    <small className="website-rights">CHKN © 2022</small>
                    <div className="social-icons">
                        <Link className="social-icon-link facebook" to="/" target="_blank" aria-label='Facebook'>
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link className="social-icon-link instagram" to="/" target="_blank" aria-label='Instagram'>
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link className="social-icon-link twitter" to="/" target="_blank" aria-label='Twitter'>
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link className="social-icon-link linkedin" to="/" target="_blank" aria-label='LinkedIn'>
                            <i className="fab fa-linkedin"></i>
                        </Link>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
