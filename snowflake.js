document.addEventListener('DOMContentLoaded', ()=>{
  let cursorSpace = document.getElementById('cursor')
  let flakes = []

  function animateFlake(flake){
    flake.style.top = parseInt(flake.style.top) + 4 + 'px'
    flake.className = 'flake fadeOut'
  }

  function meltFlake(flake, interval){
    flake.parentNode.removeChild(flake)
    flakes = flakes.slice(1)
    clearInterval(interval)
  }

  function letFlakeFall(flake){
    let interval = setInterval(()=>animateFlake(flake), 30);
    setTimeout(()=>{
      meltFlake(flake, interval)
    }, 1000)
  }

  function createFlake(e){
    let flake = document.createElement('div')
    flakes.push(flake)
    flake.className = "flake"
    flake.style.top = e.clientY + 'px'
    flake.style.left = e.clientX + 'px'
    cursorSpace.appendChild(flake)
    return flake
  }

  cursorSpace.addEventListener('mousemove', (e)=>{
    let flake = createFlake(e)
    letFlakeFall(flake)
  })
})
