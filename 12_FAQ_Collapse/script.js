const button = document.querySelectorAll(".faq-toggle")

button.forEach(btn => {
  btn.addEventListener("click", () => {
    button.parentNode.classList.toggle("active")
  })
})