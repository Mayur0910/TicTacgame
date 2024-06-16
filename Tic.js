let boxs =document.querySelectorAll(".box");
let newBtn =document.querySelector("#newBtn");
let resetBtn =document.querySelector("#reset");

let turnO =true;
const winpattern =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const btndisbled =()=>{
    for(box of boxs){
        box.disabled=true;
    }
}

const winner =(winner)=>{
    document.querySelector("#msgid").innerText=`Winner is ${winner}`;
    document.querySelector("#cont").classList.add("hide");
    btndisbled();
    newGame();
}

const reset =()=>{
    resetBtn.addEventListener("click",()=>{
        for(let box of boxs){
        box.innerText="";
        box.disabled=false;
        }
    })
}


const newGame = ()=>{
    newBtn.addEventListener("click",()=>{
        for(box of boxs){
            box.disabled=false;
            document.querySelector("#cont").classList.remove("hide");
            document.querySelector("#msgid").classList.add("hide");
            box.innerText="";
        }
    })
};

boxs.forEach((box)=>{
    box.addEventListener("click",() =>{
        if(turnO){
          box.innerText="O";
          box.style.color="red";
          turnO=false;
        }else{
            box.innerText="X";
            box.style.color="Green";
            turnO=true;
        }
        box.disabled=true;
        reset();
        newGame();
        checkWinner();
    })
});

const checkWinner =()=>{
    for(pattern of winpattern){
       let pos1Val = boxs[pattern[0]].innerText;
       let pos2Val = boxs[pattern[1]].innerText;
       let posVal3 = boxs[pattern[2]].innerText;

       if(pos1Val !="" && pos2Val !="" && posVal3 !=""){
        if(pos1Val === pos2Val && pos2Val ===posVal3){
            winner(pos1Val);    
            box.disabled=true;
          }
       }
    }       
};