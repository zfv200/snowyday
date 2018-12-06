document.addEventListener('DOMContentLoaded', ()=>{
  let cursorSpace = document.getElementById('cursor')
  // let flakes = []
  //
  // for (let i = 0;i<150;i++){
  //   let flake = document.createElement('div')
  //   flake.className = "flake"
  //   flake.dataId
  //   // debugger;
  //   // firstFlake.innerHTML = "hi"
  //   cursor.appendChild(flake)
  //   flakes.push(flake)
  // }
  //
  // function flakeMovement(){
  //
  // }

  // cursor.addEventListener('mousemove', (e)=>{
  //   flakes.forEach(flake=>{
  //     flake.style.top = e.clientY + (Math.random() * 800) + 'px'
  //     flake.style.left = e.clientX + (Math.random()*800) + 'px'
  //   })
  // })
  let maxFlakes = 50
  let flakes = []

  function flakeAnimation(flake){
    // if (parseInt(flake.style.top) > 500){
    //   if (flakes.length>0){
    //     flakes.length--
    //   }
    // }
    flake.style.top = parseInt(flake.style.top) + 5 + 'px'
    // if (flake && parseInt(flake.style.top > 500)){
    //   flake.parentNode.removeChild(flake)
    // }
  }

  function letFlakeFall(flake){
    let interval = setInterval(()=>flakeAnimation(flake), 30);
    // if (parseInt(flake.style.top)>500){
    //   clearInterval(interval)
    // }
  }

  cursor.addEventListener('mousemove', (e)=>{
    if (flakes.length < maxFlakes){
      // console.log(flakes.length<maxFlakes)
      let flake = document.createElement('div')
      flakes.push(flake)
      flake.className = "flake"
      // flake.innerHTML = "hi"
      cursorSpace.appendChild(flake)
      flake.style.top = e.clientY + 'px'
      flake.style.left = e.clientX + 'px'
      letFlakeFall(flake)
    } else {
      flakes.forEach(flake=>{
        flake.parentNode.removeChild(flake)
        flakes = []
      })
    }
  })
})
