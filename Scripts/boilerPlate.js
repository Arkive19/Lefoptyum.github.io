document.addEventListener("DOMContentLoaded", () => {
    const navBarHTML = `
     <div class="nav-bar"> 
        <div class="logo-box" id="toggle">
            <a href="#" class="nav nav-logo">
                <img class="logo" src="../Assets/Logo.png" alt="MACHIKNELEFOPTYUM">
            </a>
        </div>
        <div class="nav-links" id="nav-links">
            <a href="../" class="nav nav-btn">Home</a>
            <a href="../projects" class="nav nav-btn">Projects</a>
            <a href="../contact" class="nav nav-btn">Contact</a>
            <a href="../about-me" class="nav nav-btn">About Me</a>
        </div>
        <div id="menu" class="nav-popup-menu">
          <ul>
            <li><a href="../">Home</a></li>
            <li><a href="../projects">Projects</a></li>
            <li><a href="../contact">Contact</a></li>
            <li><a href="../about-me">About Me</a></li>
          </ul>
        </div>
     </div>
    `;
    document.body.insertAdjacentHTML("afterbegin", navBarHTML);

    // Hamburger logic: only on small screens
    const theToggle = document.getElementById("toggle");
    const menu = document.getElementById("menu");
    function toggleMenu() {
      if (window.innerWidth <= 1167) {
        menu.classList.toggle("active");
      }
    }
    theToggle.addEventListener("click", function (e) {
      if (window.innerWidth <= 1167) {
        e.preventDefault();
        toggleMenu();
      }
    });
    // Hide menu when clicking a link (on mobile)
    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 1167) {
          menu.classList.remove("active");
        }
      });
    });
    // Hide menu if window resized above 1167px
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1167) {
        menu.classList.remove("active");
      }
    });
});