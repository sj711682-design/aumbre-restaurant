import "./App.css";

import heroImage from "./images/hero.jpg";
import chickenImage from "./images/chicken.jpg";
import steakImage from "./images/steak.jpg";
import pastaImage from "./images/pasta.jpg";
import dessertImage from "./images/dessert.jpg";
import interiorImage from "./images/interior.jpg";

function App() {
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

        <button className="reservation-btn">RESERVATION</button>
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

          <button className="hero-btn">BOOK A TABLE</button>
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

          <button className="outline-btn">DISCOVER OUR STORY</button>
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

          <div className="menu-card">
            <img src={chickenImage} alt="Signature chicken dish" />

            <div className="menu-info">
              <div>
                <h3>Herb Roasted Chicken</h3>
                <p>
                  Tender roasted chicken, seasonal vegetables and
                  aromatic herbs.
                </p>
              </div>

              <span>$24</span>
            </div>
          </div>


          <div className="menu-card">
            <img src={steakImage} alt="Grilled steak" />

            <div className="menu-info">
              <div>
                <h3>Prime Grilled Steak</h3>
                <p>
                  Premium cut grilled to perfection with a rich
                  house sauce.
                </p>
              </div>

              <span>$38</span>
            </div>
          </div>


          <div className="menu-card">
            <img src={pastaImage} alt="Creamy pasta" />

            <div className="menu-info">
              <div>
                <h3>Truffle Pasta</h3>
                <p>
                  Handmade pasta finished with creamy parmesan and
                  delicate truffle.
                </p>
              </div>

              <span>$22</span>
            </div>
          </div>


          <div className="menu-card">
            <img src={dessertImage} alt="Restaurant dessert" />

            <div className="menu-info">
              <div>
                <h3>Golden Dessert</h3>
                <p>
                  A delicate creation combining sweetness, texture
                  and seasonal flavors.
                </p>
              </div>

              <span>$14</span>
            </div>
          </div>

        </div>

        <button className="outline-btn menu-button">
          VIEW FULL MENU
        </button>
      </section>


      {/* QUOTE */}
      <section className="quote">
        <div className="quote-overlay"></div>

        <div className="quote-content">
          <p className="small-title">A MOMENT TO REMEMBER</p>

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
          <p className="small-title">STEP INSIDE</p>

          <h2>The Aumbre Atmosphere</h2>

          <p>
            An intimate setting created for conversations, celebrations,
            and beautiful memories.
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


      {/* RESERVATION */}
      <section className="reservation">
        <div className="reservation-content">
          <p className="small-title">YOUR TABLE AWAITS</p>

          <h2>
            Make tonight
            <br />
            unforgettable.
          </h2>

          <p>
            Join us for an evening of exceptional food, warm hospitality,
            and timeless moments.
          </p>

          <button className="hero-btn">MAKE A RESERVATION</button>
        </div>
      </section>


      {/* CONTACT */}
      <section className="contact section" id="contact">
        <div className="contact-heading">
          <p className="small-title">COME VISIT US</p>

          <h2>Find your way to Aumbre.</h2>
        </div>

        <div className="contact-grid">
          <div>
            <span>ADDRESS</span>
            <p>24 Starlight Avenue<br />Downtown District</p>
          </div>

          <div>
            <span>OPENING HOURS</span>
            <p>
              Monday — Thursday<br />
              5:00 PM — 11:00 PM
            </p>
          </div>

          <div>
            <span>CONTACT</span>
            <p>
              +1 234 567 890<br />
              hello@aumbre.com
            </p>
          </div>
        </div>
      </section>


      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-logo">AUMBRE</div>

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

        <small>© 2026 Aumbre. All rights reserved.</small>
      </footer>

    </div>
  );
}

export default App;