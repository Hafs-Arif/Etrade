import React, { useState, useRef, useEffect } from "react";
import { Search, Heart, ShoppingCart, User, Menu, X, ChevronDown } from "lucide-react";
import "./Header.scss";

function Header() {
  const [langOpen, setLangOpen] = useState(false);
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // mobile dropdown states
  const [mobileDropdowns, setMobileDropdowns] = useState({
    home: false,
    shop: false,
    pages: false,
    blog: false,
  });

  const langRef = useRef(null);
  const currencyRef = useRef(null);

  // close dropdowns when clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false);
      if (currencyRef.current && !currencyRef.current.contains(e.target)) setCurrencyOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // sticky header on scroll
  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileDropdown = (key) => {
    setMobileDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <header className="main-header">
      {/* Top Header */}
      <div className="top-header">
        <div className="container">
          <div className="header-left">
            <div className="dropdown" ref={langRef}>
              <button className="dropdown-btn" onClick={() => setLangOpen((p) => !p)}>
                English ▾
              </button>
              <ul className={`dropdown-menu ${langOpen ? "show" : ""}`}>
                <li>English</li>
                <li>Spanish</li>
                <li>French</li>
              </ul>
            </div>
            <div className="dropdown" ref={currencyRef}>
              <button className="dropdown-btn" onClick={() => setCurrencyOpen((p) => !p)}>
                USD ▾
              </button>
              <ul className={`dropdown-menu ${currencyOpen ? "show" : ""}`}>
                <li>USD</li>
                <li>EUR</li>
                <li>PKR</li>
              </ul>
            </div>
          </div>

          <div className="header-right">
            <a href="#">Help</a>
            <a href="#">Join Us</a>
            <a href="#">Sign In</a>
          </div>
        </div>
      </div>

      {/* Second Header */}
      <div className={`second-header ${isSticky ? "sticky" : ""}`}>
        <div className="second-container">
          <div className="logo">MyLogo</div>

          {/* Desktop Menu */}
          <nav className="menu z-3">
            <div className="menu-item z-3">
              <a href="#">Home ▾</a>
              <ul className="submenu">
                <li><a href="#">Home 1</a></li>
                <li><a href="#">Home 2</a></li>
                <li><a href="#">Home 3</a></li>
              </ul>
            </div>
            <div className="menu-item z-20">
              <a href="#">Shop ▾</a>
              <ul className="submenu">
                <li><a href="#">All Products</a></li>
                <li><a href="#">Categories</a></li>
                <li><a href="#">Best Sellers</a></li>
              </ul>
            </div>
            <div className="menu-item z-20">
              <a href="#">Pages ▾</a>
              <ul className="submenu">
                <li><a href="#">About Us</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">404 Page</a></li>
              </ul>
            </div>
            <div className="menu-item z-20"><a href="#">About</a></div>
            <div className="menu-item z-20">
              <a href="#">Blog ▾</a>
              <ul className="submenu">
                <li><a href="#">Latest Posts</a></li>
                <li><a href="#">Single Blog</a></li>
              </ul>
            </div>
            <div className="menu-item z-20"><a href="#">Contact</a></div>
          </nav>

          {/* Icons */}
          <div className="icons">
            <div className="icon-wrapper"><Search /></div>
            <div className="icon-wrapper"><Heart /></div>
            <div className="icon-wrapper"><ShoppingCart /></div>
            <div className="icon-wrapper"><User /></div>
            <div className="menu-toggle" onClick={() => setMenuOpen(true)}>
              <Menu />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`mobile-sidebar ${menuOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <span>Menu</span>
          <button onClick={() => setMenuOpen(false)}><X /></button>
        </div>

        <ul>
          <li>
            <div className="dropdown-toggle" onClick={() => toggleMobileDropdown("home")}>
              Home <ChevronDown className={mobileDropdowns.home ? "rotate" : ""} />
            </div>
            <ul className={`dropdown-inner ${mobileDropdowns.home ? "show" : ""}`}>
              <li><a href="#">Home 1</a></li>
              <li><a href="#">Home 2</a></li>
              <li><a href="#">Home 3</a></li>
            </ul>
          </li>

          <li>
            <div className="dropdown-toggle" onClick={() => toggleMobileDropdown("shop")}>
              Shop <ChevronDown className={mobileDropdowns.shop ? "rotate" : ""} />
            </div>
            <ul className={`dropdown-inner ${mobileDropdowns.shop ? "show" : ""}`}>
              <li><a href="#">All Products</a></li>
              <li><a href="#">Categories</a></li>
              <li><a href="#">Best Sellers</a></li>
            </ul>
          </li>

          <li>
            <div className="dropdown-toggle" onClick={() => toggleMobileDropdown("pages")}>
              Pages <ChevronDown className={mobileDropdowns.pages ? "rotate" : ""} />
            </div>
            <ul className={`dropdown-inner ${mobileDropdowns.pages ? "show" : ""}`}>
              <li><a href="#">About Us</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">404 Page</a></li>
            </ul>
          </li>

          <li><a href="#">About</a></li>

          <li>
            <div className="dropdown-toggle" onClick={() => toggleMobileDropdown("blog")}>
              Blog <ChevronDown className={mobileDropdowns.blog ? "rotate" : ""} />
            </div>
            <ul className={`dropdown-inner ${mobileDropdowns.blog ? "show" : ""}`}>
              <li><a href="#">Latest Posts</a></li>
              <li><a href="#">Single Blog</a></li>
            </ul>
          </li>

          <li><a href="#">Contact</a></li>
        </ul>
      </div>

      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)}></div>}
    </header>
  );
}

export default Header;
