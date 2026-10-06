import { useRef, useState } from "react";
import "./App.css";

import heroImage from "./images/hero.jpg";
import interiorImage from "./images/interior.jpg";

// Starters
import soupImage from "./images/soup.jpg";
import bruschettaImage from "./images/bruschetta.jpg";
import wingsImage from "./images/chicken-wings.jpg";
import friesImage from "./images/loaded-fries.jpg";

// Main Course
import chickenImage from "./images/chicken.jpg";
import steakImage from "./images/steak.jpg";
import pastaImage from "./images/pasta.jpg";
import salmonImage from "./images/salmon.jpg";

// Desserts
import dessertImage from "./images/dessert.jpg";
import lavaCakeImage from "./images/lava-cake.jpg";
import cheesecakeImage from "./images/cheesecake.jpg";
import tiramisuImage from "./images/tiramisu.jpg";

// Beverages
import lemonadeImage from "./images/lemonade.jpg";
import icedTeaImage from "./images/iced-tea.jpg";
import coffeeImage from "./images/coffee.jpg";
import mocktailImage from "./images/mocktail.jpg";

function App() {
  const [activeCategory, setActiveCategory] = useState("starters");
  const [showBooking, setShowBooking] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuDishesRef = useRef(null);

  const categories = {
    starters: {
      name: "🥗 Starters",
      items: [
        {
          name: "Classic Cream Soup",
          price: "Rs. 900",
          image: soupImage,
          description:
            "Silky creamy soup prepared with fresh seasonal ingredients.",
        },
        {
          name: "Tomato Bruschetta",
          price: "Rs. 800",
          image: bruschettaImage,
          description:
            "Toasted bread topped with fresh tomatoes, herbs and olive oil.",
        },
        {
          name: "Crispy Chicken Wings",
          price: "Rs. 1,200",
          image: wingsImage,
          description:
            "Golden crispy chicken wings served with our signature sauce.",
        },
        {
          name: "Loaded Truffle Fries",
          price: "Rs. 1,000",
          image: friesImage,
          description:
            "Crispy fries finished with truffle flavor and gourmet toppings.",
        },
      ],
    },

    mainCourse: {
      name: "🍽️ Main Course",
      items: [
        {
          name: "Herb Roasted Chicken",
          price: "Rs. 1,800",
          image: chickenImage,
          description:
            "Tender roasted chicken seasoned with fresh herbs.",
        },
        {
          name: "Prime Grilled Steak",
          price: "Rs. 2,800",
          image: steakImage,
          description: "Premium steak grilled to perfection.",
        },
        {
          name: "Truffle Pasta",
          price: "Rs. 1,600",
          image: pastaImage,
          description:
            "Fresh pasta tossed in a rich creamy truffle sauce.",
        },
        {
          name: "Grilled Salmon",
          price: "Rs. 2,400",
          image: salmonImage,
          description:
            "Fresh salmon grilled with herbs and seasonal vegetables.",
        },
      ],
    },

    desserts: {
      name: "🍰 Desserts",
      items: [
        {
          name: "Golden Dessert",
          price: "Rs. 1,000",
          image: dessertImage,
          description:
            "A signature Aumbre dessert created for a memorable finish.",
        },
        {
          name: "Chocolate Lava Cake",
          price: "Rs. 1,100",
          image: lavaCakeImage,
          description:
            "Warm chocolate cake with a rich molten center.",
        },
        {
          name: "Fresh Lemon Cheesecake",
          price: "Rs. 1,000",
          image: cheesecakeImage,
          description:
            "Creamy cheesecake with a refreshing lemon finish.",
        },
        {
          name: "Classic Tiramisu",
          price: "Rs. 1,000",
          image: tiramisuImage,
          description:
            "Classic Italian dessert layered with coffee and mascarpone.",
        },
      ],
    },

    beverages: {
      name: "🥤 Beverages",
      items: [
        {
          name: "Fresh Lemonade",
          price: "Rs. 600",
          image: lemonadeImage,
          description:
            "Freshly squeezed lemonade served chilled.",
        },
        {
          name: "Peach Iced Tea",
          price: "Rs. 600",
          image: icedTeaImage,
          description:
            "Refreshing iced tea infused with sweet peach flavor.",
        },
        {
          name: "Aumbre Cappuccino",
          price: "Rs. 700",
          image: coffeeImage,
          description:
            "Rich espresso topped with smooth creamy foam.",
        },
        {
          name: "Berry Sunset Mocktail",
          price: "Rs. 800",
          image: mocktailImage,
          description:
            "A refreshing blend of berries and tropical flavors.",
        },
      ],
    },
  };

  const currentCategory = categories[activeCategory];


function selectCategory(category) {
  setActiveCategory(category);

  setTimeout(() => {
    const dishes = document.getElementById("menu-dishes");

    if (dishes) {
      const position =
        dishes.getBoundingClientRect().top +
        window.pageYOffset -
        100;

      window.scrollTo({
        top: position,
        behavior: "smooth",
      });
    }
  }, 100);
}
  function handleBooking(event) {
    event.preventDefault();

    setShowBooking(false);
    setShowThankYou(true);
  }

  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">AUMBRE</div>

        <div className={`nav-links ${menuOpen ? "show" : ""}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>
            HOME
          </a>

          <a href="#menu" onClick={() => setMenuOpen(false)}>
            MENU
          </a>

          <a href="#about" onClick={() => setMenuOpen(false)}>
            ABOUT
          </a>

          <a href="#contact" onClick={() => setMenuOpen(false)}>
            CONTACT
          </a>
        </div>

        <button
          className="reservation-button"
          onClick={() => setShowBooking(true)}
        >
          RESERVATION
        </button>

        <button
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-overlay">
          <p className="gold-text">WELCOME TO AUMBRE</p>

          <h1>
            Savor the
            <br />
            Starlight
          </h1>

          <p className="hero-description">
            An unforgettable dining experience where exquisite flavors meet
            an elegant atmosphere.
          </p>

          <button
            className="gold-button"
            onClick={() => setShowBooking(true)}
          >
            BOOK A TABLE
          </button>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="menu-section">
        <p className="gold-text">A TASTE OF AUMBRE</p>

        <h2>Our Menu</h2>

        <div className="category-buttons">
          <button
            className={activeCategory === "starters" ? "selected" : ""}
            onClick={() => selectCategory("starters")}
          >
            🥗 Starters
          </button>

          <button
            className={activeCategory === "mainCourse" ? "selected" : ""}
            onClick={() => selectCategory("mainCourse")}
          >
            🍽️ Main Course
          </button>

          <button
            className={activeCategory === "desserts" ? "selected" : ""}
            onClick={() => selectCategory("desserts")}
          >
            🍰 Desserts
          </button>

          <button
            className={activeCategory === "beverages" ? "selected" : ""}
            onClick={() => selectCategory("beverages")}
          >
            🥤 Beverages
          </button>
        </div>

        {/* DISHES */}
        <div id="menu-dishes">
          <h3 className="category-heading">
            {currentCategory.name}
          </h3>

          <div className="menu-grid">
            {currentCategory.items.map((item) => (
              <div className="menu-card" key={item.name}>
                <img src={item.image} alt={item.name} />

                <div className="menu-card-content">
                  <div className="item-header">
                    <h4>{item.name}</h4>
                    <span>{item.price}</span>
                  </div>

                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about-section">
        <div className="about-image">
          <img
            src={interiorImage}
            alt="Aumbre Restaurant Interior"
          />
        </div>

        <div className="about-content">
          <p className="gold-text">OUR STORY</p>

          <h2>Where Every Meal Becomes a Memory</h2>

          <p>
            At Aumbre, we believe dining is more than just food. It is about
            creating beautiful moments, unforgettable flavors, and memories
            that stay with you.
          </p>

          <p>
            Our chefs carefully prepare every dish using fresh ingredients
            and a passion for exceptional cuisine.
          </p>

          <button
            className="gold-button"
            onClick={() => setShowBooking(true)}
          >
            BOOK A TABLE
          </button>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section">
        <p className="gold-text">JOIN US</p>

        <h2>Reserve Your Table</h2>

        <p>
          Experience the taste and atmosphere of Aumbre. We look forward to
          welcoming you.
        </p>

        <button
          className="gold-button"
          onClick={() => setShowBooking(true)}
        >
          BOOK A TABLE
        </button>
      </section>

      {/* RESERVATION POPUP */}
      {showBooking && (
        <div className="booking-overlay">
          <div className="booking-box">

            <button
              className="close-button"
              onClick={() => setShowBooking(false)}
            >
              ×
            </button>

            <p className="gold-text">AUMBRE RESTAURANT</p>

            <h2>Reserve Your Table</h2>

            <form onSubmit={handleBooking}>
              <input
                type="text"
                placeholder="Your Name"
                required
              />

              <input
                type="tel"
                placeholder="Phone Number"
                required
              />

              <input type="date" required />

              <input type="time" required />

              <select required defaultValue="">
                <option value="" disabled>
                  Number of Guests
                </option>

                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4 Guests</option>
                <option>5 Guests</option>
                <option>6+ Guests</option>
              </select>

              <button type="submit" className="gold-button">
                CONFIRM RESERVATION
              </button>
            </form>
          </div>
        </div>
      )}

      {/* THANK YOU MESSAGE */}
      {showThankYou && (
        <div className="booking-overlay">
          <div className="booking-box thank-you-box">

            <p className="gold-text">AUMBRE RESTAURANT</p>

            <h2>Thank You!</h2>

            <p className="thank-you-message">
              Thank you for choosing Aumbre!
              <br />
              Your table has been reserved successfully.
              <br />
              We look forward to welcoming you.
            </p>

            <button
              className="gold-button"
              onClick={() => setShowThankYou(false)}
            >
              DONE
            </button>

          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">AUMBRE</div>

        <p>© 2026 Aumbre Restaurant. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;