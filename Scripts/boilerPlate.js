document.addEventListener("DOMContentLoaded", () => {
    const navBarHTML = `
     <div class="nav-bar"> 
        <a href="./home.html" class="nav nav-btn">Home</a>
        <a href="./projects.html" class="nav nav-btn">Projects</a>
        
        <div class="logo-box">
            <a href="./home.html" class="nav nav-logo">
                <img class="logo" src="../Assets/Logo.png" alt="LEFOPTYUM">
            </a>
        </div>
        
        <a href="./contact.html" class="nav nav-btn">Contact</a>
        <a href="./about-me.html" class="nav nav-btn">About Me</a>
    </div>
    `;

    document.body.insertAdjacentHTML("afterbegin", navBarHTML);
});