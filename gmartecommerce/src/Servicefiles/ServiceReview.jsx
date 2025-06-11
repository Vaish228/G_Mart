import React from 'react';
import './ServiceReview.css';
import { FaShippingFast, FaHeadset, FaShieldAlt, FaUndo } from 'react-icons/fa';
import jackthomas from '../assets/jackthomas.png';
import tonystark from '../assets/tonystark.png';
import peterparker from '../assets/peterparker.png';
export default function ServiceReview() {
  return (
    <div>
      <section className="our-service">
        <h2>Our Service</h2>
        <div className="service-row">
          <div className="service-item">
            <FaShippingFast size={24} />
            <div>
              <h4>Free Shipping</h4>
              <p>Free shipping on all your order</p>
            </div>
          </div>
          <div className="service-item">
            <FaHeadset size={24} />
            <div>
              <h4>Customer Support 24/7</h4>
              <p>Instant access to support</p>
            </div>
          </div>
          <div className="service-item">
            <FaShieldAlt size={24} />
            <div>
              <h4>100% Secure Payment</h4>
              <p>We ensure your money is safe</p>
            </div>
          </div>
          <div className="service-item">
            <FaUndo size={24} />
            <div>
              <h4>Money-Back Guarantee</h4>
              <p>30 Days money back guarantee</p>
            </div>
          </div>
        </div>
      </section>
      <section className="customer-review">
        <h2>Customer Review</h2>
        <div className="review-cards">
          <div className="review-card">
            <img src={jackthomas} alt="Customer" />
            <h4>Jack Thomas <span>Customer</span></h4>
            <p>
              I was honestly surprised at how fresh the fruits and vegetables were! Excellent service, smooth website, and the delivery was exactly on time.
            </p>
            <div className="stars">★★★★★</div>
          </div>
          <div className="review-card">
            <img src={tonystark} alt="Customer" />
            <h4>Tony Stark <span>Customer</span></h4>
            <p>
              Thousands of amazing range of brands and products. Everything I ordered is fresh, well packed, and delivered on time. Prices are great too!
            </p>
            <div className="stars">★★★★★</div>
          </div>
          <div className="review-card">
            <img src={peterparker} alt="Customer" />
            <h4>Peter Parker <span>Customer</span></h4>
            <p>
              This shop is now my go-to for grocery shopping. Everything is just perfect – quality, price, delivery. Couldn’t have asked for a better online shopping experience every time.
            </p>
            <div className="stars">★★★★★</div>
          </div>
        </div>
      </section>
    </div>
  );
}
