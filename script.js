const menuIcon = document.querySelector(".mobile");
const navMenu = document.querySelector("#nav-menu");

menuIcon.addEventListener("click", () => {
  navMenu.classList.toggle("show-nav");
  menuIcon.classList.toggle("fa-bars");
  menuIcon.classList.toggle("fa-x");
});

const navLinks = document.querySelectorAll("#nav-menu a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show-nav");
    menuIcon.classList.add("fa-bars");
    menuIcon.classList.remove("fa-x");
  });
});

// Scroll to Top Button Logic
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// contact form submission
const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  status.textContent = "Sending message...";

  const data = {
    name: form.name.value,
    email: form.email.value,
    subject: form.subject.value,
    message: form.message.value,
  };

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      window.location.href = "/thank-you.html";
    } else {
      status.textContent = "Something went wrong. Try again.";
    }
  } catch (err) {
    status.textContent = "Network error. Please try again.";
  }
});
