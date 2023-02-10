const homeScore = document.getElementById("home-score")
const guestScore = document.getElementById("guest-score")
const homeAdd1Btn = document.getElementById("home+1-btn")
const homeAdd2Btn = document.getElementById("home+2-btn")
const homeAdd3Btn = document.getElementById("home+3-btn")
const guestAdd1Btn = document.getElementById("guest+1-btn")
const guestAdd2Btn = document.getElementById("guest+2-btn")
const guestAdd3Btn = document.getElementById("guest+3-btn")
const resetBtn = document.getElementById("reset-btn")
let homeScoreVar = 0
let guestScoreVar = 0

homeAdd1Btn.addEventListener("click", function () {
  homeScoreVar +=1
  homeScore.innerHTML = homeScoreVar
})

homeAdd2Btn.addEventListener("click", function () {
  homeScoreVar +=2
  homeScore.innerHTML = homeScoreVar
})

homeAdd3Btn.addEventListener("click", function () {
  homeScoreVar +=3
  homeScore.innerHTML = homeScoreVar
})


guestAdd1Btn.addEventListener("click", function () {
  guestScoreVar += 1
  guestScore.innerHTML = guestScoreVar
})

guestAdd2Btn.addEventListener("click", function () {
  guestScoreVar += 2
  guestScore.innerHTML = guestScoreVar
})

guestAdd3Btn.addEventListener("click", function () {
  guestScoreVar += 3
  guestScore.innerHTML = guestScoreVar
})

resetBtn.addEventListener("click", function () {
  homeScoreVar = 0
  guestScoreVar = 0
  homeScore.innerHTML = homeScoreVar
  guestScore.innerHTML = guestScoreVar
})