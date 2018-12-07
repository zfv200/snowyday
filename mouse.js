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
    flake.className = 'flake fadeOut'
    // if (flake && parseInt(flake.style.top > 500)){
    //   flake.parentNode.removeChild(flake)
    // console.log("called!")
    // }
  }

  function letFlakeFall(flake){
    // flake.style.opacity = 1
    let interval = setInterval(()=>flakeAnimation(flake), 30);
    function clearFlake(flake, interval){
      flake.parentNode.removeChild(flake)
      flakes = flakes.slice(1)
      clearInterval(interval)
    }
    setTimeout(()=>{
      clearFlake(flake, interval)
    }, 2000)
    // if (flake.style.opacity==="0"){
    //   flake.parentNode.removeChild(flake)
    //   clearInterval(interval)
    // }
    // if (parseInt(flake.style.top)>500){
    //   clearInterval(interval)
    // }
  }

  function fadeOutFlake(flake){

  }

  cursor.addEventListener('mousemove', (e)=>{
    // console.log("called!")
    if (e.clientX%2===0){
      // console.log(flakes.length<maxFlakes)
      let flake = document.createElement('div')
      flakes.push(flake)
      flake.setAttribute('position', flakes.length)
      flake.className = "flake"
      // flake.innerHTML = "hi"
      cursorSpace.appendChild(flake)
      flake.style.top = e.clientY + 'px'
      flake.style.left = e.clientX + 'px'
      letFlakeFall(flake)
    }
    // }
    // if (flakes.length>maxFlakes){
    //   flakes.forEach(flake=>{
    //     flake.parentNode.removeChild(flake)
    //     flakes = []
    //   })
    // }
    // else {
    // }
  })
})
