
const buttons = {
    btn1: document.getElementById("btn1"),
    btn2: document.getElementById("btn2"),
    btn3: document.getElementById("btn3"),
    btn4: document.getElementById("btn4"),
    btn5: document.getElementById("btn5"),
    btn6: document.getElementById("btn6"),
    btn7: document.getElementById("btn7"),
    btn8: document.getElementById("btn8"),
    btn9: document.getElementById("btn9"),
}


let currentPlayer =1;

const checkProgress = () =>{
if (btn1.innerText === "X" && btn2.innerText === "X" && btn3.innerText==="X")
{
    alert("player X wins")
    let b = 0;
}

if (btn4.innerText === "X" && btn5.innerText === "X" && btn6.innerText==="X")
{
    alert("player X wins")
    b = 0;
}

if (btn7.innerText === "X" && btn8.innerText === "X" && btn9.innerText==="X")
{
    alert("player X wins")
    b = 0;
}

if (btn1.innerText === "X" && btn4.innerText === "X" && btn7.innerText==="X")
{
    alert("player X wins")
    b = 0;
}

if (btn2.innerText === "X" && btn5.innerText === "X" && btn8.innerText==="X")
{
    alert("player X wins")
    b = 0;
}

if (btn3.innerText === "X" && btn6.innerText === "X" && btn9.innerText==="X")
{
    alert("player X wins")
    b = 0;
}

if (btn1.innerText === "X" && btn5.innerText === "X" && btn9.innerText==="X")
{
    alert("player X wins")
    b = 0;
}

if (btn3.innerText === "X" && btn5.innerText === "X" && btn7.innerText==="X")
{
    alert("player X wins")
    b = 0;
}



if (btn1.innerText === "O" && btn2.innerText === "O" && btn3.innerText==="O")
{
    alert("player O wins")
    a = 1;
}

if (btn4.innerText === "O" && btn5.innerText === "O" && btn6.innerText==="O")
{
    alert("player O wins")
    a = 1;
}

if (btn7.innerText === "O" && btn8.innerText === "O" && btn9.innerText==="O")
{
    alert("player O wins")
    a = 1;
}

if (btn1.innerText === "O" && btn4.innerText === "O" && btn7.innerText==="O")
{
    alert("player O wins")
    a = 1;
}

if (btn2.innerText === "O" && btn5.innerText === "O" && btn8.innerText==="O")
{
    alert("player O wins")
    a = 1;
}

if (btn3.innerText === "O" && btn6.innerText === "O" && btn9.innerText==="O")
{
    alert("player O wins")
    a = 1;
}

if (btn1.innerText === "O" && btn5.innerText === "O" && btn9.innerText==="O")
{
    alert("player O wins")
    a = 1;
}

if (btn3.innerText === "O" && btn5.innerText === "O" && btn7.innerText==="O")
{
    alert("player O wins")
    a = 1;
}

for (const key in buttons){
    const button = buttons[key];
    if (button.innerText === ""){
        return;
    }
    
}

alert("drawn")





//   if((btn1.innerText === "O" && btn2.innerText === "X" && btn3.innerText==="O")
//   && (btn4.innerText === "O" && btn5.innerText === "X" && btn6.innerText==="X")
//   && (btn7.innerText === "X" && btn8.innerText === "O" && btn9.innerText==="O") 
//   ||
//   ((btn1.innerText === "O" && btn2.innerText === "X" && btn3.innerText==="O")
//   && (btn4.innerText === "X" && btn5.innerText === "X" && btn6.innerText==="O")
//   && (btn7.innerText === "O" && btn8.innerText === "O" && btn9.innerText==="X")
// ) 
// ||
// ((btn1.innerText === "X" && btn2.innerText === "O" && btn3.innerText==="X")
// && (btn4.innerText === "O" && btn5.innerText === "X" && btn6.innerText==="X")
// && (btn7.innerText === "O" && btn8.innerText === "X" && btn9.innerText==="O")
// ) 
// ||
// ((btn1.innerText === "X" && btn2.innerText === "X" && btn3.innerText==="O")
// && (btn4.innerText === "O" && btn5.innerText === "O" && btn6.innerText==="X")
// && (btn7.innerText === "X" && btn8.innerText === "O" && btn9.innerText==="X")
// )
// ||
// ((btn1.innerText === "X" && btn2.innerText === "X" && btn3.innerText==="O")
// && (btn4.innerText === "O" && btn5.innerText === "O" && btn6.innerText==="X")
// && (btn7.innerText === "X" && btn8.innerText === "O" && btn9.innerText==="X")
// ))


// {
//     alert("Match Draw")
// }

}

const play = (btn) =>{
    const button = buttons[btn];
    if(currentPlayer === 1){
        button.innerText = "X";
        currentPlayer=2;
    }
    else{
        button.innerText = "O";
        currentPlayer=1;
    }

    button.disabled = true;
    checkProgress();
};

const reset = () =>{
    for (const key in buttons){
        const button = buttons [key];
        button.disabled = false;
        button.innerText="";
    }
};