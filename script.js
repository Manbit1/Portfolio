let darkmode = localStorage.getItem("darkmode")
const themeswitcher = document.getElementById("theme-switcher")
const githubButton = document.getElementById("github")
const omar = document.getElementById("omar")
const buttonBox = document.getElementById("button-grouping")

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
