const bgImage = document.getElementById("background")
const password = document.getElementById("password")

password.addEventListener("input", (e) => {
  const input = e.target.value
  bgImage.style.filter = `blur(${20 - (input.length*2)}px)`
})