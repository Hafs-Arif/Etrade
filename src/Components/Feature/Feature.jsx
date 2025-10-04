import React from "react";
import { Headphones } from "lucide-react";
import "./Feature.scss";

function Feature() {
  return (
    <section className="feature-section">
      <div className="feature-container">
        {/* Left Content */}
        <div className="feature-left">
          <div className="feature-header">
            <div className="feature-icon-wrapper"><Headphones className="feature-icon" /></div>
            <span className="feature-tag">Don’t Miss!!</span>
          </div>

          <h2 className="feature-title">Enhance Your Music Experience</h2>

          <div className="countdown">
            <div className="circle">
              <span className="number">0</span>
              <span className="label">Days</span>
            </div>
            <div className="circle">
              <span className="number">00</span>
              <span className="label">Hrs</span>
            </div>
            <div className="circle">
              <span className="number">00</span>
              <span className="label">Min</span>
            </div>
            <div className="circle">
              <span className="number">00</span>
              <span className="label">Sec</span>
            </div>
          </div>

          <button className="checkout-btn">Check Out</button>
        </div>

        {/* Right Content */}
        <div className="feature-right">
          <img src="/poster-03.png" alt="Headphones" />
        </div>
      </div>
    </section>
  );
}

export default Feature;
