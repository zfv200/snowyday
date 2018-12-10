COLORCHANGE = true
SUNSET = true
let currentInnerColor = [120, 186, 215]
let currentOuterColor = [255, 255, 255]
let currentPercentage = 60

function sunset(){
  if (SUNSET){
    currentInnerColor = currentInnerColor.map(color=>color-=.2)
    currentOuterColor = currentOuterColor.map(color=>color-=.4)
    if (currentPercentage < 100){
      currentPercentage += .08
    }
  } else {
    currentInnerColor = currentInnerColor.map(color=>color+=.2)
    currentOuterColor = currentOuterColor.map(color=>color+=.4)
    if (currentPercentage > 61){
      currentPercentage -= .08
    }
  }

  if(currentInnerColor[2]<0 || currentInnerColor[2]>215){
    SUNSET = !SUNSET
  }

  let newInner = `rgb(${Math.floor(currentInnerColor[0])}, ${Math.floor(currentInnerColor[1])}, ${Math.floor(currentInnerColor[2])})`
  let newOuter = `rgb(${Math.floor(currentOuterColor[0])}, ${Math.floor(currentOuterColor[1])}, ${Math.floor(currentOuterColor[2])})`
  return [newInner, newOuter, currentPercentage]
  // return {"newInner": newInner, "newOuter": newOuter, "newPercentage": currentPercentage}
}

function duskOrDawn(){
  let interval = setInterval(()=>{
    let colorObj = sunset()
    document.querySelector('html').style.background = `radial-gradient(ellipse at bottom, ${colorObj[0]} ${colorObj[2]}%, ${colorObj[1]} 100%)`
  }, 10)
  return interval
}

let sunsetInt
document.addEventListener('keydown', (e)=>{
  if (e.keyCode===32){
    if (COLORCHANGE){
      sunsetInt = duskOrDawn()
    } else {
      clearInterval(sunsetInt)
    }
    COLORCHANGE = !COLORCHANGE
  }
})
