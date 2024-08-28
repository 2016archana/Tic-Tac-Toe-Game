let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newbtn = document.querySelector("#newbtn");
let msg = document.querySelector(".msg");
let winmsg = document.querySelector("#winmsg");

let turnO = true;

const winning_pattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  enableBoxes();
  msg.classList.add("hide");
};

const disableBoxes = () => {
  boxes.forEach(box => {
    box.disabled = true;
    box.style.pointerEvents = "none";
  });
};

const enableBoxes = () => {
  boxes.forEach(box => {
    box.disabled = false;
    box.innerText = "";
    box.style.pointerEvents = "auto"; 
  });
};

const showWinner = winner => {
  winmsg.innerText = `Congratulations, Winner is ${winner}`;
  msg.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winning_pattern) {
    let [a, b, c] = pattern;
    if (boxes[a].innerText && boxes[a].innerText === boxes[b].innerText && boxes[a].innerText === boxes[c].innerText) {
      showWinner(boxes[a].innerText);
      return;
    }
  }
};

boxes.forEach(box => {
  box.addEventListener("click", () => {
    if (!box.innerText) { // Prevent overriding existing text
      box.innerText = turnO ? "O" : "X";
      turnO = !turnO;
      box.style.pointerEvents = "none";
      checkWinner();
    }
  });
});

newbtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
