// ==============================
// TEJ PORTFOLIO JAVASCRIPT
// ==============================

// Reveal elements when they enter the screen
const revealElements = document.querySelectorAll(
    ".section, .skill-card, .project-card, .education-card"
);

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15
    }
);

revealElements.forEach((element) => {
    element.classList.add("hidden");
    revealObserver.observe(element);
});


// ==============================
// TYPING EFFECT
// ==============================

const titles = [
    "Engineering Student",
    "Tech Builder",
    "Future Telecommunications Engineer",
    "Software Creator"
];

const typingElement = document.querySelector(".hero h2");

let titleIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {

    const currentTitle = titles[titleIndex];

    if (!deleting) {

        typingElement.textContent =
            currentTitle.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentTitle.length) {

            deleting = true;

            setTimeout(typeEffect, 1800);

            return;
        }

    } else {

        typingElement.textContent =
            currentTitle.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            titleIndex++;

            if (titleIndex >= titles.length) {
                titleIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 45 : 90
    );
}

typeEffect();


// ==============================
// NAVBAR SCROLL EFFECT
// ==============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


// ==============================
// CURRENT YEAR
// ==============================

const footer = document.querySelector("footer p");

if (footer) {

    footer.textContent =
        `© ${new Date().getFullYear()} Tej. Built with passion and technology.`;

}

// ==============================
// CONTACT FORM
// ==============================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        formMessage.textContent =
            "Thanks! Your message is ready to be sent.";

        contactForm.reset();

    });

}

// ==============================
// MOBILE MENU
// ==============================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });


    navMenu.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
        });

    });

}

// ==============================
// SCROLL TO TOP
// ==============================

const scrollTopButton = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
        scrollTopButton.classList.add("show");
    } else {
        scrollTopButton.classList.remove("show");
    }

});


if (scrollTopButton) {

    scrollTopButton.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

/* ==============================
   LIGHT / DARK MODE
   ============================== */

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {

    // Load saved theme
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
        themeToggle.textContent = "◐";
    } else {
        themeToggle.textContent = "✦";
    }

    // Toggle theme
    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {
            themeToggle.textContent = "◐";
            localStorage.setItem("theme", "light");
        } else {
            themeToggle.textContent = "✦";
            localStorage.setItem("theme", "dark");
        }

    });

}


/* TEJU — Scroll Reveal Animation */


/* TEJU — Scroll Reveal Animation */

const extraRevealElements = document.querySelectorAll(
    '.section, .contact-section .contact-heading, .contact-section .contact-container'
);

extraRevealElements.forEach((element) => {
    element.classList.add('reveal');
});

if ('IntersectionObserver' in window) {
    const extraRevealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12 }
    );

    extraRevealElements.forEach((element) => {
        extraRevealObserver.observe(element);
    });
}

/* CURRENT YEAR */

const yearElement = document.getElementById('currentYear');

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

/* TEJU — CURSOR GLOW */

const cursorGlow = document.getElementById('cursorGlow');

if (
    cursorGlow &&
    window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches
) {
    document.addEventListener('pointermove', (event) => {
        cursorGlow.style.left = `${event.clientX}px`;
        cursorGlow.style.top = `${event.clientY}px`;
    });
}