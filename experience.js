// Handle experience card clicks
document.querySelectorAll(".experience-card").forEach((card) => {
  card.addEventListener("click", () => {
    const id = card.getAttribute("data-id")
    window.location.href = `experience-detail.html?id=${id}`
  })
})

