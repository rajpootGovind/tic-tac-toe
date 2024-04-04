let boxes=document.querySelectorAll(".box");
const reset=document.querySelector("#resetBtn");
let newGameBtn= document.querySelector("#newBtn");
let mssgContainer= document.querySelector(".mssgContainer");
let mssg = document.querySelector("#mssg");

let turn0=true; //palayer01/player02
let winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];

const newGame=()=>{
    turn0=true;
    enaableBoxes();
    mssgContainer.classList.add("hide")
}
boxes.forEach((box) => {
    box.addEventListener("click", ()=>{

        if(turn0){
            box.innerText="O";
            turn0=false;
        }else{
            box.innerText="X";
            turn0=true;
        };
        box.disabled=true;
        checkWinner();
    });
    
});
const disabledBoxes= ()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enaableBoxes= ()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

let showWinner=(winner)=>{
    mssg.innerText=`Congratulations! Winner is ${winner}` ;
    mssgContainer.classList.remove("hide");
    disabledBoxes()
}
let showresult=()=>{
    mssg.innerText=`Game Draw !`;
    mssgContainer.classList.remove("hide");
    // disabledBoxes();}
}

let checkWinner= ()=>{
    for(let patterns of winPatterns){
        // console.log(patterns[0],patterns[1],patterns[2]);
        // console.log(boxes[patterns[0]].innerText,
        //             boxes[patterns[1]].innerText,
        //             boxes[patterns[2]].innerText
        //             );
         let pos1value = boxes[patterns[0]].innerText;
         let pos2value = boxes[patterns[1]].innerText;
         let pos3value = boxes[patterns[2]].innerText;
         if(pos1value!="" && pos2value!="" && pos3value!=""){
             if(pos1value===pos2value && pos2value===pos3value && pos3value===pos1value){
                 console.log("winner",pos1value);
                 showWinner(pos1value);
             }       
         }
    }
}

newGameBtn.addEventListener("click",newGame);
resetBtn.addEventListener("click",newGame);

