let boxes = document.querySelectorAll(".box"); 
let resetBtn = document.querySelector("#Reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector("#msg-container"); 
let Nmsg = document.querySelector("#msg");
let found = false;



let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7], 
    [2, 5, 8], 
    [2, 4, 6], 
    [3, 4, 5],
    [6, 7, 8]
];


const resetGame = () => 
    {
       
     if(found==true)  
        {

            turnO = true;
            enabledBoxes();
            msgContainer.classList.add('hide'); 
            
    }      
    else
    {
        enabledBoxes();
        Nmsg.innerText='';
    }
    
   
};
 





boxes.forEach((box, index) => 
    {
    box.addEventListener("click", () =>
         {
        if (turnO)
             {
            box.innerText = "O";
            turnO = false;
        }
         else
          {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinnner();
    });
});

const disabledBoxes = () =>
     {
    for (let box of boxes)
         {
        box.disabled = true;
    }
};

const enabledBoxes = () => 
    {
    for (let box of boxes) 
        {
        box.disabled = false;
        box.innerText = " ";
    }
};

const showWinnner = (Winner) =>
     {
    Nmsg.innerText = `Congratulations, Winner is ${Winner}`;
    NmsgContainer.classElement.remove('hide');
    disabledBoxes();

   
};

const checkWinnner = () =>
     {
    for (let pattern of winPatterns) 
        {
        console.log([pattern[0]], [pattern[1]], [pattern[2]]);
        console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);

        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") 
            {
            if (pos1val === pos2val && pos2val === pos3val) 
                {
                console.log('Winner');
                showWinnner(pos1val); 
                break;
            }
        }
    }
};







resetBtn.addEventListener("click",resetGame);




    
