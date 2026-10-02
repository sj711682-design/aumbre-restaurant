import { useState } from "react";
import "./App.css";

import heroImage from "./images/hero.jpg";
import chickenImage from "./images/chicken.jpg";
import steakImage from "./images/steak.jpg";
import pastaImage from "./images/pasta.jpg";
import dessertImage from "./images/dessert.jpg";
import interiorImage from "./images/interior.jpg";

function App() {
  const [showReservation, setShowReservation] = useState(false);
  const [showFullMenu, setShowFullMenu] = useState(false);
  const [reservationMessage, setReservationMessage] = useState("");

  const handleReservation = (e) => {
    e.preventDefault();

    setReservationMessage(
      "Your reservation request has been received. We look forward to welcoming you to Aumbre!"
    );
  };

  return (
    <div className="app">

      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">AUMBRE</div>

        <nav>
          <a href="#home">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#menu">MENU</a>
          <a href="#gallery">GALLERY</a>
          <a href="#contact">CONTACT</a>
        </nav>

        <button
          className="reservation-btn"
          onClick={() => setShowReservation(true)}
        >
          RESERVATION
        </button>
      </header>


      {/* HERO */}
      <section className="hero" id="home">

        <div
          className="hero-image"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <p className="small-title">WELCOME TO AUMBRE</p>

          <h1>
            Savor the
            <br />
            Starlight
          </h1>

          <p className="hero-text">
            An unforgettable dining experience where
            <br />
            exceptional flavors meet timeless elegance.
          </p>

          <button
            className="hero-btn"
            onClick={() => setShowReservation(true)}
          >
            BOOK A TABLE
          </button>

        </div>
      </section>


      {/* ABOUT */}
      <section className="about section" id="about">

        <div className="about-image">
          <img src={interiorImage} alt="Aumbre restaurant interior" />
        </div>

        <div className="about-content">

          <p className="small-title">OUR STORY</p>

          <h2>
            Crafted with
            <br />
            passion.
          </h2>

          <p>
            Aumbre is more than a restaurant. It is a place where
            beautiful surroundings, thoughtful hospitality, and
            exceptional food come together.
          </p>

          <p>
            Every plate is carefully prepared using quality ingredients
            and modern techniques while respecting timeless culinary
            traditions.
          </p>

          <button
            className="outline-btn"
            onClick={() => {
              document
                .getElementById("gallery")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            DISCOVER OUR STORY
          </button>

        </div>
      </section>


      {/* EXPERIENCE */}
      <section className="experience">

        <div>
          <span>01</span>
          <h3>Exceptional Flavors</h3>
          <p>
            Carefully selected ingredients transformed into memorable
            dishes.
          </p>
        </div>

        <div>
          <span>02</span>
          <h3>Elegant Atmosphere</h3>
          <p>
            A warm and sophisticated setting designed for unforgettable
            evenings.
          </p>
        </div>

        <div>
          <span>03</span>
          <h3>Thoughtful Service</h3>
          <p>
            Genuine hospitality from the moment you arrive until the
            final course.
          </p>
        </div>

      </section>


      {/* MENU */}
      <section className="menu section" id="menu">

        <div className="section-heading">

          <p className="small-title">FROM OUR KITCHEN</p>

          <h2>Signature Menu</h2>

          <p>
            A selection of dishes created to awaken your senses.
          </p>

        </div>


        <div className="menu-grid">

          {/* CHICKEN */}
          <div className="menu-card">

            <img
              src={chickenImage}
              alt="Signature chicken dish"
            />

            <div className="menu-info">

              <div>

                <h3>Herb Roasted Chicken</h3>

                <p>
                  Tender roasted chicken, seasonal vegetables and
                  aromatic herbs.
                </p>

              </div>

              <span>Rs. 1,850</span>

            </div>
          </div>


          {/* STEAK */}
          <div className="menu-card">

            <img
              src={steakImage}
              alt="Grilled steak"
            />

            <div className="menu-info">

              <div>

                <h3>Prime Grilled Steak</h3>

                <p>
                  Premium cut grilled to perfection with a rich
                  house sauce.
                </p>

              </div>

              <span>Rs. 3,200</span>

            </div>
          </div>


          {/* PASTA */}
          <div className="menu-card">

            <img
              src={pastaImage}
              alt="Creamy pasta"
            />

            <div className="menu-info">

              <div>

                <h3>Truffle Pasta</h3>

                <p>
                  Handmade pasta finished with creamy parmesan and
                  delicate truffle.
                </p>

              </div>

              <span>Rs. 1,650</span>

            </div>
          </div>


          {/* DESSERT */}
          <div className="menu-card">

            <img
              src={dessertImage}
              alt="Restaurant dessert"
            />

            <div className="menu-info">

              <div>

                <h3>Golden Dessert</h3>

                <p>
                  A delicate creation combining sweetness, texture
                  and seasonal flavors.
                </p>

              </div>

              <span>Rs. 950</span>

            </div>
          </div>

        </div>


        {/* FULL MENU BUTTON */}
        <button
          className="outline-btn menu-button"
          onClick={() => setShowFullMenu(!showFullMenu)}
        >
          {showFullMenu ? "HIDE FULL MENU" : "VIEW FULL MENU"}
        </button>


        {/* FULL MENU */}
        {showFullMenu && (

          <div className="full-menu">

            <h2>Full Aumbre Menu</h2>

            <div className="full-menu-item">
              <span>Classic Cream Soup</span>
              <strong>Rs. 750</strong>
            </div>

            <div className="full-menu-item">
              <span>Grilled Chicken Steak</span>
              <strong>Rs. 1,950</strong>
            </div>

            <div className="full-menu-item">
              <span>Beef Tenderloin</span>
              <strong>Rs. 3,500</strong>
            </div>

            <div className="full-menu-item">
              <span>Alfredo Pasta</span>
              <strong>Rs. 1,450</strong>
            </div>

            <div className="full-menu-item">
              <span>Chicken Parmesan</span>
              <strong>Rs. 1,800</strong>
            </div>

            <div className="full-menu-item">
              <span>Chocolate Lava Cake</span>
              <strong>Rs. 850</strong>
            </div>

            <div className="full-menu-item">
              <span>Fresh Lemon Cheesecake</span>
              <strong>Rs. 900</strong>
            </div>

          </div>

        )}

      </section>


      {/* QUOTE */}
      <section className="quote">

        <div className="quote-overlay"></div>

        <div className="quote-content">

          <p className="small-title">
            A MOMENT TO REMEMBER
          </p>

          <h2>
            "Good food brings people
            <br />
            together."
          </h2>

          <span>— AUMBRE</span>

        </div>

      </section>


      {/* GALLERY */}
      <section className="gallery section" id="gallery">

        <div className="section-heading">

          <p className="small-title">
            STEP INSIDE
          </p>

          <h2>
            The Aumbre Atmosphere
          </h2>

          <p>
            An intimate setting created for conversations,
            celebrations, and beautiful memories.
          </p>

        </div>


        <div className="gallery-grid">

          <img src={interiorImage} alt="Aumbre interior" />

          <img src={chickenImage} alt="Aumbre chicken" />

          <img src={steakImage} alt="Aumbre steak" />

          <img src={pastaImage} alt="Aumbre pasta" />

          <img src={dessertImage} alt="Aumbre dessert" />

          <img src={heroImage} alt="Aumbre restaurant" />

        </div>

      </section>


      {/* RESERVATION SECTION */}
      <section className="reservation">

        <div className="reservation-content">

          <p className="small-title">
            YOUR TABLE AWAITS
          </p>

          <h2>
            Make tonight
            <br />
            unforgettable.
          </h2>

          <p>
            Join us for an evening of exceptional food,
            warm hospitality, and timeless moments.
          </p>

          <button
            className="hero-btn"
            onClick={() => setShowReservation(true)}
          >
            MAKE A RESERVATION
          </button>

        </div>

      </section>


      {/* CONTACT */}
      <section className="contact section" id="contact">

        <div className="contact-heading">

          <p className="small-title">
            COME VISIT US
          </p>

          <h2>
            Find your way to Aumbre.
          </h2>

        </div>


        <div className="contact-grid">

          <div>

            <span>ADDRESS</span>

            <p>
              24 Starlight Avenue
              <br />
              Downtown District
            </p>

          </div>


          <div>

            <span>OPENING HOURS</span>

            <p>
              Monday — Thursday
              <br />
              5:00 PM — 11:00 PM
            </p>

          </div>


          <div>

            <span>CONTACT</span>

            <p>
              +92 300 1234567
              <br />
              hello@aumbre.com
            </p>

          </div>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="footer">

        <div className="footer-logo">
          AUMBRE
        </div>

        <p>
          An unforgettable dining experience.
        </p>

        <div className="footer-links">

          <a href="#home">HOME</a>

          <a href="#about">ABOUT</a>

          <a href="#menu">MENU</a>

          <a href="#gallery">GALLERY</a>

          <a href="#contact">CONTACT</a>

        </div>

        <small>
          © 2026 Aumbre. All rights reserved.
        </small>

      </footer>


      {/* RESERVATION POPUP */}
      {showReservation && (

        <div
          className="reservation-modal"
          onClick={() => setShowReservation(false)}
        >

          <div
            className="reservation-box"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="close-modal"
              onClick={() => {
                setShowReservation(false);
                setReservationMessage("");
              }}
            >
              ×
            </button>


            <p className="small-title">
              AUMBRE
            </p>

            <h2>
              Reserve Your Table
            </h2>


            {!reservationMessage ? (

              <form onSubmit={handleReservation}>

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

                <input
                  type="date"
                  required
                />

                <input
                  type="time"
                  required
                />

                <select
                  required
                  defaultValue=""
                >

                  <option value="" disabled>
                    Number of Guests
                  </option>

                  <option value="1">
                    1 Guest
                  </option>

                  <option value="2">
                    2 Guests
                  </option>

                  <option value="3">
                    3 Guests
                  </option>

                  <option value="4">
                    4 Guests
                  </option>

                  <option value="5">
                    5 Guests
                  </option>

                  <option value="6">
                    6 Guests
                  </option>

                  <option value="7">
                    7 Guests
                  </option>

                  <option value="8">
                    8 Guests
                  </option>

                </select>


                <button
                  type="submit"
                  className="hero-btn"
                >
                  CONFIRM RESERVATION
                </button>

              </form>

            ) : (

              <div className="reservation-success">

                <h3>
                  Thank You!
                </h3>

                <p>
                  {reservationMessage}
                </p>

                <button
                  className="outline-btn"
                  onClick={() => {
                    setShowReservation(false);
                    setReservationMessage("");
                  }}
                >
                  CLOSE
                </button>

              </div>

            )}

          </div>

        </div>

      )}

    </div>
  );
}

export default App;