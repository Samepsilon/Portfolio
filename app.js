// Determine current page
function getCurrentPage() {
  const path = window.location.pathname
  if (path.includes("experience.html")) return "experience"
  if (path.includes("contact.html")) return "contact"
  return "about"
}

// Update navigation indicator
function updateNavIndicator() {
  const currentPage = getCurrentPage()
  const navLinks = document.querySelectorAll(".nav-link")
  const indicator = document.querySelector(".nav-indicator")

  navLinks.forEach((link) => {
    link.classList.remove("active")
  })

  const activeLink = document.querySelector(`[data-page="${currentPage}"]`)
  if (activeLink) {
    activeLink.classList.add("active")
    const { offsetLeft, offsetWidth } = activeLink
    indicator.style.width = offsetWidth + "px"
    indicator.style.left = offsetLeft + "px"
  }
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  updateNavIndicator()
  window.addEventListener("resize", updateNavIndicator)
})

// Smooth scroll for hash links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  })
})
