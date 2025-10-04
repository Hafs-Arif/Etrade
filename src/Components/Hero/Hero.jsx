import React, { useState, useEffect } from "react";
import "./Hero.scss";
import { FaFire, FaStar, FaShoppingCart } from "react-icons/fa";

function Hero() {
  const products = [
    {
      id: 1,
      img: "/product-1.png",
      title: "Ultra Wireless Headphones",
      rating: 4.8,
      reviews: 120,
    },
    {
      id: 2,
      img: "/product-2.png",
      title: "Smart Fitness Watch",
      rating: 4.6,
      reviews: 98,
    },
    {
      id: 3,
      img: "/product-1.png",
      title: "Noise Cancelling Earbuds",
      rating: 4.9,
      reviews: 145,
    },
    {
      id: 4,
      img: "/product-2.png",
      title: "Portable Bluetooth Speaker",
      rating: 4.7,
      reviews: 87,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const nextIndex = (activeIndex + 1) % products.length;

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <section className="hero">
      <div className="hero-container">
        {/* LEFT SIDE CONTENT - Desktop */}
        <div className="hero-left">
          <div className="hot-deal-badge">
            <div className="hot-deal">
              <FaFire className="fire-icon" />
            </div>
            <span className="hot-deal-text">Hot Deal In This Week</span>
          </div>

          <h1 key={products[activeIndex].id} className="product-title fade-text">
            {products[activeIndex].title}
          </h1>

          <div className="cta-section">
            <button className="shop-btn">
              <FaShoppingCart className="cart-icon" />
              Shop Now
            </button>

            <div className="reviews">
              <div className="stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar
                    key={i}
                    className={i < Math.round(products[activeIndex].rating) ? "filled" : ""}
                  />
                ))}
              </div>
              <p>{products[activeIndex].reviews}+ Reviews</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE IMAGES */}
        <div className="hero-right">
          <div className="shades">
            <img src="/shape-1.png" alt="shade" className="shade center" />
            {!isMobile && <img src="/shape-2.png" alt="shade" className="shade right" />}
          </div>

          <div className="products">
            <img
              key={products[activeIndex].id}
              src={products[activeIndex].img}
              alt="main product"
              className="product main"
            />
            {!isMobile && (
              <img
                key={products[nextIndex].id}
                src={products[nextIndex].img}
                alt="next product"
                className="product side"
              />
            )}
          </div>
        </div>
      </div>

      {/* bottom line buttons */}
      <div className="product-buttons">
        {products.map((p, i) => (
          <button
            key={p.id}
            className={`line ${i === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(i)}
          ></button>
        ))}
      </div>
    </section>
  );
}

export default Hero;