var timeRequiredToBuy = function(tickets, k) {
  let seconds = 0
  while(tickets.length) {
    tickets[0] = tickets[0] - 1
    if(tickets[k] === 0) {
        seconds++
        break
    }
    let removeFirst = tickets.shift()
    if(removeFirst > 0) {
      tickets.push(removeFirst)
    }
    k--
    seconds++
    if(k<0) {
      k=tickets.length-1
    }
  }
  return seconds
}

console.log(timeRequiredToBuy([2,3,2], 2)) //154