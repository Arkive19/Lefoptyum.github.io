document.addEventListener("DOMContentLoaded", () => {
    const navBarHTML = `
     <div class="nav-bar"> 
        <div class="logo-box" id="toggle">
            <a href="#" class="nav nav-logo">
                <img class="logo" src="../Assets/Logo.png" alt="LEFOPTYUM">
            </a>
        </div>
        <div class="nav-links" id="nav-links">
            <a href="./home.html" class="nav nav-btn">Home</a>
            <a href="./projects.html" class="nav nav-btn">Projects</a>
            <a href="./contact.html" class="nav nav-btn">Contact</a>
            <a href="./about-me.html" class="nav nav-btn">About Me</a>
        </div>
        <div id="menu" class="nav-popup-menu">
          <ul>
            <li><a href="./home.html">Home</a></li>
            <li><a href="./projects.html">Projects</a></li>
            <li><a href="./contact.html">Contact</a></li>
            <li><a href="./about-me.html">About Me</a></li>
          </ul>
        </div>
     </div>
    `;
    document.body.insertAdjacentHTML("afterbegin", navBarHTML);

    // Hamburger logic: only on small screens
    const theToggle = document.getElementById("toggle");
    const menu = document.getElementById("menu");
    function toggleMenu() {
      if (window.innerWidth <= 1134) {
        menu.classList.toggle("active");
      }
    }
    theToggle.addEventListener("click", function (e) {
      if (window.innerWidth <= 1134) {
        e.preventDefault();
        toggleMenu();
      }
    });
    // Hide menu when clicking a link (on mobile)
    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 1134) {
          menu.classList.remove("active");
        }
      });
    });
    // Hide menu if window resized above 1134px
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1134) {
        menu.classList.remove("active");
      }
    });
});