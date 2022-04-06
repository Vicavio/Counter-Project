let left = document.createElement("button")
left.setAttribute('id', 'increase')
left.textContent = "increase"

let right = document.createElement('button')
right.setAttribute("id", "decrease")
right.textContent = "decrease"

let middle = document.createElement("output")
middle.setAttribute("id", "result")
middle.textContent = "0"

let title = document.createElement("h2")
title.textContent = "Counter Project"

document.body.append(title)
document.body.append(left)
document.body.append(middle)
document.body.append(right)



let count = 0;
left.onclick = function() {
    count += 1;
    middle.innerHTML = count;
  };
  right.onclick = function() {
    count -= 1;
    middle.innerHTML = count;
  };