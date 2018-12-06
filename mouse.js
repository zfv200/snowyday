document.addEventListener('DOMContentLoaded', ()=>{
  let cursor = document.getElementById('cursor')
  let flakes = []

  let firstFlake = document.createElement('h1')
  firstFlake.className = "flake"
  firstFlake.innerHTML = "hi"
  cursor.appendChild(firstFlake)
  flakes.push(firstFlake)

  cursor.addEventListener('mousemove', (e)=>{
    flakes[0].style.top = e.clientY + 'px'
    flakes[0].style.left = e.clientX + 'px'
    console.log(flakes[0])
  })
})
