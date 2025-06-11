import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import payment from '../assets/payment.png';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="newsletter">
        <h3>Subscribe our Newsletter</h3>
        <div className="newsletter-input">
          <input type="email" placeholder="Your email address" />
          <button>Subscribe</button>
        </div>
      </div>

      <div className="footer-content">
        <div className="footer-section about">
          <h2>G Mart</h2>
          <p>
            Bringing farm-fresh goodness right to your doorstep. We deliver
            healthy, organic, and high-quality groceries with love and care.
          </p>
        </div>

        <div className="footer-section">
          <h4>My Account</h4>
          <ul>
            <li>My Account</li>
            <li>Order History</li>
            <li>Shopping Cart</li>
            <li>Wishlist</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Helps</h4>
          <ul>
            <li>Contact</li>
            <li>FAQs</li>
            <li>Terms & Condition</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Proxy</h4>
          <ul>
            <li>About</li>
            <li>Shop</li>
            <li>Product</li>
            <li>Track Order</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Categories</h4>
          <ul>
            <li>Fruit & Vegetables</li>
            <li>Meat & Fish</li>
            <li>Bread & Bakery</li>
            <li>Beauty & Health</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025, All rights reserved</p>
       <div className="payment-icons">
  <img src={payment} alt="payment methods" />
</div>
        <div className="social-icons">
          <FaFacebookF />
          <FaLinkedinIn />
          <FaInstagram />
          <FaTwitter />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
