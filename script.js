let boxes = document.querySelectorAll('.box');
let btn = document.querySelectorAll('.btn')
let para = document.querySelector('.para');
let reset = document.querySelector('.reset');
let newgame = document.querySelector('.newgame');
let winningpattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

]

let turnO = true;

function resetgame (){
    newgame.classList.remove('add')
    turnO=true;
    btn.forEach(button=> {
        button.innerText=""
        
        button.disabled=false;
    });
    para.innerText = '';
}

newgame.addEventListener('click', resetgame)

reset.addEventListener('click', resetgame )

function checkallthebtndisabled(){
    let btndisabled = true;
    for(button of btn){
        if(button.disabled==false){
            btndisabled=false
        }

    }

    if(btndisabled){
        para.innerText = `Game Draw`;
        newgame.classList.add('add');
    }

}

function checkwinning(){
  for (let pattern of winningpattern) {
    let value1 = btn[pattern[0]].innerText;
    let value2 = btn[pattern[1]].innerText;
    let value3 = btn[pattern[2]].innerText;

    if(value1!="" && value2!=""  && value3!=""){
        if(value1==value2 && value2 ==value3){
            para.innerText = `winning ${value1} Turn`;
            newgame.classList.add('add')

            console.log(value1, value2, value3);


            btn.forEach(button=> button.disabled=true)
            
        }
    }

    checkallthebtndisabled();
}
}

function Markturn (e){
    let button = e.target;
    button.innerText = turnO ? "O" : "X";
    if(turnO){
        button.style.color="blue"
    }
    else{
        button.style.color="purple"
    }
    button.disabled=true;
    turnO = !turnO;

    checkwinning();

}

btn.forEach(button=> button.addEventListener('click', Markturn))
