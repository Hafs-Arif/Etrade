import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, Layers } from "lucide-react";
import "./Category.scss";

function Category() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Add many categories to show looping scroll
  const categories = [
    { id: 1, name: "Mobiles", img: "/icons/elec-1.png" },
    { id: 2, name: "Laptops", img: "/icons/elec-2.png" },
    { id: 3, name: "Headphones", img: "/icons/elec-4.png" },
    { id: 4, name: "Cameras", img: "/icons/elec-5.png" },
    { id: 5, name: "Smartwatches", img: "/icons/elec-6.png" },
    { id: 6, name: "Gaming", img: "/icons/elec-7.png" },
    { id: 7, name: "Tablets", img: "/icons/elec-8.png" },
    { id: 8, name: "Drones", img: "/icons/elec-9.png" },
    { id: 9, name: "Speakers", img: "/icons/elec-10.png" },
    { id: 10, name: "Monitors", img: "/icons/elec-11.png" },
  ];

  return (
    <section className="category-main">
      <div className="category-container">
        <div className="category-header">
          <div className="category-title">
            <div className="icon-wrapper"><Layers className="icon" /></div>
            <h2>Category</h2>
          </div>
          <div className="scroll-buttons">
            <button onClick={() => scroll("left")}>
              <ChevronLeft />
            </button>
            <button onClick={() => scroll("right")}>
              <ChevronRight />
            </button>
          </div>
        </div>

        <p className="browse-text">Browse by category</p>

        <div className="category-list" ref={scrollRef}>
          {categories.map((cat) => (
            <div className="category-card" key={cat.id}>
              <div className="img-wrapper">
                <img src={cat.img} alt={cat.name} />
              </div>
              <p>{cat.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Category;
