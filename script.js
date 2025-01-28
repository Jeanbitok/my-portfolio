// Highlight navigation links based on the current section
const navLinks = document.querySelectorAll("nav ul li a");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    let currentSection = "";

    // Determine the section in view
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        // Check if the pageYOffset is within the section
        if (pageYOffset >= sectionTop - 50 && pageYOffset < sectionTop + sectionHeight) {
            currentSection = section.getAttribute("id");
        }
    });

    // Update the "active" class on navigation links
    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
});

// Smooth scroll for navigation links
const smoothScrollLinks = document.querySelectorAll("nav ul li a");

smoothScrollLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent default jump behavior

        const targetId = link.getAttribute("href").slice(1); // Get target section ID
        const targetSection = document.getElementById(targetId);

        targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    });
});

// Button click animation
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        button.classList.add("clicked");

        // Remove the class after the animation ends
        setTimeout(() => {
            button.classList.remove("clicked");
        }, 200);
    });
});
