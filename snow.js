let snowyDayWidth = 1600;
let snowyDayHeight = 800;
let snowField = document.getElementById('snow')

addSnow(snowyDayWidth, snowyDayHeight, 400);
startSnowFall(2, snowField.childNodes);

function placementFunc(){
  return {
          "top": Math.floor((Math.random() * snowyDayHeight) + 1),
          "left": Math.floor((Math.random() * snowyDayWidth) + 1)
        };
}

function addSnow(snowyDayWidth, snowyDayHeight, snowFlakes) {
  for (let i = 0; i < snowFlakes; i++) {
    let snow = document.createElement('div');
    let placement = placementFunc()
    snow.style.top = placement["top"] + 'px';
    snow.style.left = placement["left"] + 'px';
    snow.style.position = 'absolute';
  	snowField.appendChild(snow);
  }
}

function snowFaintness(index){
  if (index%7===0){
    return ' '
  }
  return index % 2 == 0 ? 'faint' : 'clear'
}

function snowSpeed(index){
  if (index%7===0){
    return 1
  }
  if (index%6===0) {
    return index%2===0 ? 2 : -1
  }
  return 0
}

function getSnowMovementPx(flake, index, speed){
  let currentTop = parseInt(flake.style.top)
  let topChangeAmount = speed + snowSpeed(index)

  return currentTop + topChangeAmount < 800 ? currentTop + topChangeAmount : 0
}

function snowAnimation(speed, flakes){
  for(let i = 1;i<flakes.length;i++){
    flakes[i].className = 'snow' + ' ' + 'white' + ' ' + snowFaintness(i);
    let movement = getSnowMovementPx(flakes[i], i, speed)
    flakes[i].style.top = movement + 'px'
  }
}

function startSnowFall(speed, flakes) {
  setInterval(()=>snowAnimation(speed, flakes), 30);
}
