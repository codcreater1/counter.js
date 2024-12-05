
const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const countlabel = document.getElementById("countlabel");
let count = 0;

increaseBtn.onclick = function() {
    count++;  // Increment the count variable
    countlabel.textContent = count;  // Update the text content of the label
};
decreaseBtn.onclick = function(){
    count--;
    countlabel.textContent =count;
}
resetBtn.onclick =function(){
    count =0;
    countlabel.textContent =count;
}