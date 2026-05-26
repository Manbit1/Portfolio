let darkmode = localStorage.getItem("darkmode")
const themeswitcher = document.getElementById("theme-switcher")
const header = document.getElementById("greetings")
const time = new Date().getHours()
setGreetings()

const enableDarkmode = () => {
  document.body.classList.add("darkmode")
  localStorage.setItem("darkmode", "active")
}

const disableDarkmode = () => {
  document.body.classList.remove("darkmode")
  localStorage.setItem("darkmode", null)
}

if (darkmode === "active") enableDarkmode()

themeswitcher.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode")
  darkmode === "active" ? disableDarkmode() : enableDarkmode()
})

function setGreetings() {
  if (time < 5) {
    header.innerHTML = "Good Late Evening🌙"
  } else if (time >= 5 && time < 12) {
    header.innerHTML = "Good Morning☕"
  } else if (time >= 12 && time < 17) {
    header.innerHTML = "Good Afternoon🌞"
  } else if (time >= 17) {
    header.innerHTML = "Good Evening🌙"
  }
}
