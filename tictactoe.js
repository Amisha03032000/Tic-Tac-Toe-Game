boxes = document.querySelectorAll(".box");
reset = document.querySelector("#reset")
msgContainer = document.querySelector(".msg-container");
msg= document.querySelector("#msg");

const resetBtn = document.querySelector("#reset");



let turnO = true;


let winnerArray = [ [0,1,2],
                    [3,4,5],
                    [6,7,8],
                    [0,3,6],
                    [1,4,7],
                    [2,5,8],
                    [0,4,8],
                    [2,4,6], ];



const disableboxes= () =>{
    for(box in boxes){
        box.disabled = true;
    }
}
const enableBoxes = () => {
    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false;
    });
};


const showWinner = (winner) => {
    
    msg.innerText = `Winner is ${winner}`;
    msgContainer.style.display = "block";
    disableboxes();
}


const checkWinner = () => {
   
   for( let oneSubarray of winnerArray){
        let pos1 = boxes[oneSubarray[0]].innerText;
        // console.log("position 1" + oneSubarray);
        // console.log("posi text =" + boxes[oneSubarray[0]].innerText)
        let pos2 = boxes[oneSubarray[1]].innerText;
        let pos3 = boxes[oneSubarray[2]].innerText;

        if(pos1 !== "" && pos2!== "" && pos3!== ""){
            if(pos1 === pos2 && pos2===pos3){
                console.log("winner is ", pos1);
                showWinner(pos1);
                return;
            }

            if ([...boxes].every(box => box.innerText !== "")) {
                msg.innerText = "It's a Draw! 🤝";
                msgContainer.style.display = "block";
            }
        }
   }

}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText = "O";
           
        }
        else{
            box.innerText = "X";
          
        }
       box.disabled= true;
       turnO = !turnO;
       checkWinner();
    })
});


resetBtn.addEventListener("click", () => {
    enableBoxes();
    msgContainer.style.display = "none";
    turnO = true;
});
