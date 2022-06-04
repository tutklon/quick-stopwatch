const [stopWatch, last , startBtn, stopBtn] = [
  ...document.querySelectorAll("#stopwatch , #last , #start-btn , #stop-btn"),
];
let interval , timeline = [0 , 0 , 0] , baseText = "00:00:00"
const addZero = nm => nm > 9 ? nm : "0" + nm

startBtn.addEventListener('click' , () => {
  last.innerHTML = ""
  // Reset Timeline
  timeline = timeline.map(t => t = 0)
  stopBtn.classList.remove('disable')
  startBtn.classList.add('disable')
  interval = setInterval(() => {
    // if second equals 60 , then increase the minute and reset second
    if(timeline[2] == 60){
      timeline[1] += 1
      timeline[2] = 0
    }
    // if minute equals 60 , then increase the hour and reset minute
    if(timeline[1] == 60){
      timeline[0] += 1
      timeline[1] = 0
    }
    timeline[2] += 1
    stopWatch.innerHTML = `${addZero(timeline[0])}:${addZero(timeline[1])}:${addZero(timeline[2])}`
  } , 1000)
})

stopBtn.addEventListener('click' , () => {
  startBtn.classList.remove('disable')
  stopBtn.classList.add('disable')
  clearInterval(interval)
  last.innerHTML = stopWatch.innerHTML
  stopWatch.innerHTML = baseText
})