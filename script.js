const line = document.querySelector(".line")
const next = document.querySelector(".next")
const prev = document.querySelector(".prev")
const circles = document.querySelectorAll(".circle")
let lineLength = 0
next.addEventListener("click", function() {
if(lineLength < 3)
lineLength++
if(lineLength === 1){
line.style.width = "33.3%"
next.disabled = prev.disabled = false
}
if(lineLength === 2){
line.style.width = "66.6%"
next.disabled = prev.disabled = false
}
if(lineLength === 3){
line.style.width = "99.9%"
next.disabled = true
prev.disabled = false
}
paintCircles()
})
prev.addEventListener("click", function() {
if(lineLength > 0)
lineLength--
if(lineLength === 0){
prev.disabled = true
next.disabled = false
line.style.width = "0%"
}
if(lineLength === 1){
line.style.width = "33.3%"
prev.disabled = next.disabled = false
}
if(lineLength === 2){
line.style.width = "66.6%"
next.disabled = prev.disabled = false
}
paintCircles()
})
function paintCircles() {
for(let i = 0; i < 4; i++) {
if(i <= lineLength) {
circles[i].classList.add("active")
} else {
circles[i].classList.remove("active")
}
}
}





