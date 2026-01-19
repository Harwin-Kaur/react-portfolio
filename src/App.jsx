
import './App.css'

function App() {


  return (
    <>
     {/* <!-- dar mode toggler --> */}

    <input type="checkbox" id="darkMode" />
    <div className="wrapper">
      <label for="darkMode">
        <i className="fa-solid fa-circle-half-stroke"></i
      ></label>
      {/* <!-- navbar --> */}
      <header>
        <div className="header container flex">
          <div className="logo flex">
            <div>Prem</div>
            <div className="line"> Engineer</div>
          </div>
          <label for="hamburgerMenu">
            <i className="fa-solid fa-bars"></i>
          </label>

          <input type="checkbox" id="hamburgerMenu" />
          <div className="menu">
            <ul className="flex navigation">
              <li><a href="#hero">Home</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </header>
      {/* <!-- hero section  --> */}
      <section className="hero-section container" id="hero">
        <div className="grid hero">
          <div className="left flex">
            <div>Hi I'm <span>Prem Acharya</span></div>
            <div className="tag">Soft. Engineer</div>
            <p>I love coding and teach others what I Know</p>
            <div>
              <a href="./assets/prem.png" download>
                <button>
                  Download CV <i className="fa-solid fa-download"></i>
                </button>
              </a>
            </div>
          </div>
          <div className="right flex">
            <img src="./assets/prem.png" alt="prem speaking" />
          </div>
        </div>
      </section>

      {/* <!-- banner section  --> */}
      <section className="flex banner container">
        <div className="flex info-content">
          <div className="flex-center icon-container">
            <i className="fa-solid fa-award"></i>
          </div>
          <div>
            <span>IT</span>
            <p>Graduation</p>
          </div>
        </div>
        <div className="info-divider"></div>

        <div className="flex info-content">
          <div className="flex-center icon-container">
            <i className="fa-solid fa-award"></i>
          </div>
          <div>
            <span>5+ Projects</span>
            <p>Completed</p>
          </div>
        </div>
        <div className="info-divider"></div>

        <div className="flex info-content">
          <div className="flex-center icon-container">
            <i className="fa-solid fa-award"></i>
          </div>
          <div>
            <span>1+ Year</span>
            <p>Experience</p>
          </div>
        </div>
      </section>

      {/* <!-- skills section  --> */}
      <div className="skills" id="skills">
        <h2 className="title">
          <span>Skills</span>
        </h2>
        <div className="container flex skills-container">
          <div>
            <i className="fa-brands fa-html5" style="color: orange"></i>
            <span>HTML</span>
          </div>
          <div>
            <i className="fa-brands fa-css3-alt" style="color: blue"></i>
            <span>CSS</span>
          </div>
          <div>
            <i className="fa-brands fa-js" style="color: yellow"></i>
            <span>Javascript</span>
          </div>
          <div>
            <i className="fa-brands fa-github"></i>
            <span>Github</span>
          </div>
          <div>
            <i className="fa-brands fa-figma" style="color: purple"></i>
            <span>Figma</span>
          </div>
        </div>
      </div>

      {/* <!-- project section  --> */}
      <section className="projects container" id="projects">
        <h2 className="title">
          <span>My Projects</span>
        </h2>

        <div className="grid project-container">
          <div className="project-card">
            <div className="top">
              <img src="./assets/p.png" alt="" width="100%" />
            </div>
            <div className="bottom container">
              <div className="links">
                <a href=""><i className="fa-brands fa-github"></i></a>

                <a href="">
                  <i className="fa-brands fa-chrome"></i>
                </a>
              </div>
              <h3>Personal portfolio</h3>
              <p>Techstack: HTML, CSS, Javascript, React</p>
            </div>
          </div>
          <div className="project-card">
            <div className="top">
              <img src="./assets/p.png" alt="" width="100%" />
            </div>
            <div className="bottom container">
              <div className="links">
                <a href=""><i className="fa-brands fa-github"></i></a>

                <a href="">
                  <i className="fa-brands fa-chrome"></i>
                </a>
              </div>
              <h3>Personal portfolio</h3>
              <p>Techstack: HTML, CSS, Javascript, React</p>
            </div>
          </div>
          <div className="project-card">
            <div className="top">
              <img src="./assets/p.png" alt="" width="100%" />
            </div>
            <div className="bottom container">
              <div className="links">
                <a href=""><i className="fa-brands fa-github"></i></a>

                <a href="">
                  <i className="fa-brands fa-chrome"></i>
                </a>
              </div>
              <h3>Personal portfolio</h3>
              <p>Techstack: HTML, CSS, Javascript, React</p>
            </div>
          </div>

          <div className="project-card">
            <div className="top">
              <img src="./assets/p.png" alt="" width="100%" />
            </div>
            <div className="bottom container">
              <div className="links">
                <a href=""><i className="fa-brands fa-github"></i></a>

                <a href="">
                  <i className="fa-brands fa-chrome"></i>
                </a>
              </div>
              <h3>Personal portfolio</h3>
              <p>Techstack: HTML, CSS, Javascript, React</p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- about me section  --> */}
      <section className="about" id="about">
        <h2 className="title">
          <span>About Me</span>
        </h2>
        <div className="container flex about-conent">
          <div className="flex-center myImg">
            <img src="./assets/prem.png" alt="prem's image" width="100%" />
          </div>
          <div className="my-bio container">
            <h2>Prem Acharya</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
              voluptas tempore eveniet exercitationem voluptatibus consequuntur
              magni ducimus quis deserunt maxime, voluptatum natus quaerat est
              molestiae? Earum, sunt pariatur? Voluptatem, assumenda!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequuntur nisi accusamus dignissimos voluptatum nam harum hic
              assumenda ad nesciunt, inventore impedit et culpa maxime natus
              placeat quidem quisquam corrupti sunt.
            </p>
            <p>Sydney, Australia</p>
            <div>
              <div className="tag">Interest</div>
              <div className="flex">
                <span>Coding</span>
                <span>Football</span>
                <span>Super Hero Movies</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Contact section  --> */}
      <section className="contact" id="contact">
        <h2 className="title">
          <span>Contact</span>
        </h2>

        <div className="flex social">
          <a href=""><i className="fa-brands fa-linkedin"></i></a>
          <a href=""><i className="fa-brands fa-github"></i></a>
          <a href=""><i className="fa-brands fa-youtube"></i></a>
          <a href=""><i className="fa-solid fa-mobile"></i></a>
        </div>
        <h3>OR</h3>

        <div className="flex-center">
          <a href="" className="email-section flex-center">
            <span>youremail@gmail.com</span>
            <div className="email-icon flex-center">
              <i className="fa-solid fa-paper-plane"></i>
            </div>
          </a>
        </div>
      </section>

      {/* <!-- Footer section  --> */}
      <footer className="flex-center">
        <div className="top flex">
          <div className="links">
            <h3>Links</h3>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="socials">
            <h3>Social Links</h3>
            <ul>
              <li><a href="">LinkedIn</a></li>
              <li><a href="">Github</a></li>
              <li><a href="">Facebook</a></li>
              <li><a href="">Youtube</a></li>
            </ul>
          </div>
        </div>
        <div className="bottom">
          &copy; Copy right all reserved 2024 || Made by me with 🚀
        </div>
      </footer>
      <a href="#hero">
        <div className="goUp flex-center">
          <i className="fa-solid fa-chevron-up"></i>
        </div>
      </a>
    </div>
    </>
  )
}

export default App
