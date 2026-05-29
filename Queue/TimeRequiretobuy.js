var timeRequiredToBuy = function(tickets, k) {
  let seconds = 0
  let currentIndex = k
  while(tickets.length > 1) {
    if(tickets[0] > 0) {
      tickets[0] = tickets[0] - 1
      if(tickets[currentIndex] < 1) {
        seconds++
        break
      }
      let save = tickets.shift()
      tickets.push(save)
      currentIndex--
      if(currentIndex < 0) {
        currentIndex = tickets.length -1
      }
      seconds++
    } else {
              seconds++

      if(currentIndex < 0) {
        currentIndex = tickets.length -1
      }
      tickets.shift()
    }
  }
  return seconds
};
console.log(timeRequiredToBuy([84,49,5,24,70,77,87,8], 3))