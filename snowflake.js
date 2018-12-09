
document.addEventListener('DOMContentLoaded', ()=>{
  let cursorSpace = document.getElementById('cursor')
  let flakes = []

  function animateFlake(flake){
    flake.style.top = parseInt(flake.style.top) + 4 + 'px'
    flake.className = 'flake fadeOut'
  }

  function meltFlake(flake, interval=null){
    flake.parentNode.removeChild(flake)
    if (flake.className!=="flakeBurst"){
      flakes = flakes.slice(1)
    }
    if (interval){
      clearInterval(interval)
    }
  }

  function letFlakeFall(flake){
    let interval = setInterval(()=>animateFlake(flake), 30);
    setTimeout(()=>{
      meltFlake(flake, interval)
    }, 1000)
  }

  function flakeBurstFall(flake){
    let interval = setInterval(()=>{
      flake.style.top = parseInt(flake.style.top) + 2 + 'px'
    }, 15)
    setTimeout(()=>{
      meltFlake(flake, interval)
    }, 950)
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

  //clickFunc

  document.addEventListener('click', (e)=>{
    snowFlakeBurst(e)    
  })

  function snowFlakeBurst(e){
    for (let i = 0;i<10;i++){
      let yOffset = Math.floor(Math.random() * 50) + i
      let xOffset = Math.floor(Math.random() * 250) + i
      let flakeBurst = document.createElement('div')
      flakeBurst.className = "flakeBurst"
      flakeBurst.style.top = e.clientY - 120 + yOffset + (i*10) + 'px'
      flakeBurst.style.left = e.clientX - 120 + xOffset + 'px'
      cursorSpace.appendChild(flakeBurst)
      flakeBurstFall(flakeBurst)
    }
  }
})
