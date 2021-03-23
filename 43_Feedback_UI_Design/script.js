const ratings = document.querySelectorAll(".rating")
const ratingsContainer = document.querySelector(".ratings-container")
const sendBtn = document.querySelector("#send")
const panel = document.getElementById("panel")

let selectedRating = "Satisfied"

ratingsContainer.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("rating")) {
    removeActive()
    e.target.parentNode.classList.add("active")
    selectedRating = e.target.nextElementSibling.innerHTML
  }
})

sendBtn.addEventListener("click", (e) => {
  panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank You</strong>
    <br />
    <strong>Feedback: ${selectedRating}</strong>
    <p style="margin-top: 10px">We'll use your feedback to improve our customer support</p>
  `
})

function removeActive() {
  ratings.forEach(el => el.classList.remove("active"))
}