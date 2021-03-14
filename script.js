let cells = []
let switchPlayers = 0;
let yourScore = document.getElementById("yourScore")
let computerScore = document.getElementById("computerScore")
let result = document.getElementById("result")
let avoidBug = true
let tie = document.getElementById("tie")

let playAgain = document.getElementById("playAgain")
playAgain.addEventListener('click', ()=> {reset()})

for(let i = 1; i < 10; i++){
    cell = 'cell' + i
    cells.push(document.getElementById(cell))
}

for(let i = 0; i < cells.length; i++){
    cells[i].addEventListener('click', (e) => {play(e)})
}


section = document.querySelector(".container")


function play(e) {
    cellSelected = e.target

    if((cellSelected.childElementCount === 0) && (cellSelected.parentElement.parentElement=== section) && (switchPlayers === 0)){
        
        let x = document.createElement("span");
            x.classList.add('⨯');
            x.innerHTML='⨯'
        cellSelected.appendChild(x)
        if(checkWinner() === false){
            switchPlayers = 1
        }
        setTimeout(computerPlays, 600) 
        
    }
    
}

function computerPlays(){
    let cellsForComputer = []
    for(let i = 0; i < cells.length; i++){
        if(cells[i].childElementCount === 0){
            cellsForComputer.push(cells[i])
        }
    }
    
    let randomSpace = cellsForComputer[Math.floor(Math.random() * cellsForComputer.length)];
    if((cellsForComputer.length > 0) && (switchPlayers === 1)){
        let o = document.createElement("span");
        o.classList.add("〇");
        o.innerHTML='〇'
        randomSpace.appendChild(o)
        switchPlayers = 0
    }
    
    checkWinner()
}

    
function checkWinner(){
   if(avoidBug === true && switchPlayers !== 'STOP'){
        if((cells[0].childElementCount > 0) && (cells[1].childElementCount > 0) &&(cells[2].childElementCount > 0 )){
            if( (cells[0].children.item(0).innerHTML === cells[1].children.item(0).innerHTML) && (cells[0].children.item(0).innerHTML === cells[2].children.item(0).innerHTML)){

                if(cells[0].children.item(0).innerHTML === '⨯'){
                    cells[0].children.item(0).style.color='green'
                    cells[1].children.item(0).style.color='green'
                    cells[2].children.item(0).style.color='green'
                    yourScore.innerHTML = Number(yourScore.innerHTML) + 1
                    result.style.color = "green"
                    result.innerHTML = "YOU WON!"
                    switchPlayers = 'STOP'
                    console.log('aqui')
                    avoidBug === false
                    return true
                }
                else {
                    cells[0].children.item(0).style.color='red'
                    cells[1].children.item(0).style.color='red'
                    cells[2].children.item(0).style.color='red'
                    computerScore.innerHTML = Number(computerScore.innerHTML) + 1
                    result.style.color = "red"
                    result.innerHTML = "YOU LOST!"
                    switchPlayers = 'STOP'
                    return true
                }
            }
        }
        
        if((cells[3].childElementCount > 0) && (cells[4].childElementCount > 0) &&(cells[5].childElementCount > 0 )){
            if( (cells[3].children.item(0).innerHTML === cells[4].children.item(0).innerHTML) && (cells[4].children.item(0).innerHTML === cells[5].children.item(0).innerHTML)){
                if(cells[3].children.item(0).innerHTML === '⨯'){
                    cells[3].children.item(0).style.color='green'
                    cells[4].children.item(0).style.color='green'
                    cells[5].children.item(0).style.color='green'
                    yourScore.innerHTML = Number(yourScore.innerHTML) + 1
                    result.style.color = "green"
                    result.innerHTML = "YOU WON!"
                    switchPlayers = 'STOP'
                    avoidBug === false
                    return true
                }
                else {
                    cells[3].children.item(0).style.color='red'
                    cells[4].children.item(0).style.color='red'
                    cells[5].children.item(0).style.color='red'
                    computerScore.innerHTML = Number(computerScore.innerHTML) + 1
                    result.style.color = "red"
                    result.innerHTML = "YOU LOST!"
                    switchPlayers = 'STOP'
                    return true
                }
            }
        }
        
        if((cells[6].childElementCount > 0) && (cells[7].childElementCount > 0) &&(cells[8].childElementCount > 0 )){
            if( (cells[06].children.item(0).innerHTML === cells[7].children.item(0).innerHTML) && (cells[7].children.item(0).innerHTML === cells[8].children.item(0).innerHTML)){
                if(cells[6].children.item(0).innerHTML === '⨯'){
                    cells[6].children.item(0).style.color='green'
                    cells[7].children.item(0).style.color='green'
                    cells[8].children.item(0).style.color='green'
                    yourScore.innerHTML = Number(yourScore.innerHTML) + 1
                    result.style.color = "green"
                    result.innerHTML = "YOU WON!"
                    switchPlayers = 'STOP'
                    avoidBug === false
                    return true
                }
                else {
                    cells[6].children.item(0).style.color='red'
                    cells[7].children.item(0).style.color='red'
                    cells[8].children.item(0).style.color='red'
                    computerScore.innerHTML = Number(computerScore.innerHTML) + 1
                    result.style.color = "red"
                    result.innerHTML = "YOU LOST!"
                    switchPlayers = 'STOP'
                    return true
                }
            }
        }
   
        if((cells[0].childElementCount > 0) && (cells[3].childElementCount > 0) &&(cells[6].childElementCount > 0 )){
            if( (cells[0].children.item(0).innerHTML === cells[3].children.item(0).innerHTML) && (cells[3].children.item(0).innerHTML === cells[6].children.item(0).innerHTML)){
                if(cells[0].children.item(0).innerHTML === '⨯'){
                    cells[0].children.item(0).style.color='green'
                    cells[3].children.item(0).style.color='green'
                    cells[6].children.item(0).style.color='green'
                    yourScore.innerHTML = Number(yourScore.innerHTML) + 1
                    result.style.color = "green"
                    result.innerHTML = "YOU WON!"
                    switchPlayers = 'STOP'
                    avoidBug === false
                    return true
                }
                else {
                    cells[0].children.item(0).style.color='red'
                    cells[3].children.item(0).style.color='red'
                    cells[6].children.item(0).style.color='red'
                    computerScore.innerHTML = Number(computerScore.innerHTML) + 1
                    result.style.color = "red"
                    result.innerHTML = "YOU LOST!"
                    switchPlayers = 'STOP'
                    avoidBug === false
                    return true
                }
            }
        }

        if((cells[1].childElementCount > 0) && (cells[4].childElementCount > 0) &&(cells[7].childElementCount > 0 )){
            if( (cells[1].children.item(0).innerHTML === cells[4].children.item(0).innerHTML) && (cells[4].children.item(0).innerHTML === cells[7].children.item(0).innerHTML)){
                if(cells[1].children.item(0).innerHTML === '⨯'){
                    cells[1].children.item(0).style.color='green'
                    cells[4].children.item(0).style.color='green'
                    cells[7].children.item(0).style.color='green'
                    yourScore.innerHTML = Number(yourScore.innerHTML) + 1
                    result.style.color = "green"
                    result.innerHTML = "YOU WON!"
                    switchPlayers = 'STOP'
                    avoidBug === false
                    return true
                }
                else {
                    cells[1].children.item(0).style.color='red'
                    cells[4].children.item(0).style.color='red'
                    cells[7].children.item(0).style.color='red'
                    computerScore.innerHTML = Number(computerScore.innerHTML) + 1
                    result.style.color = "red"
                    result.innerHTML = "YOU LOST!"
                    switchPlayers = 'STOP'
                    return true
                }
            }
        }

        if((cells[2].childElementCount > 0) && (cells[5].childElementCount > 0) &&(cells[8].childElementCount > 0 )){
            if( (cells[2].children.item(0).innerHTML === cells[5].children.item(0).innerHTML) && (cells[5].children.item(0).innerHTML === cells[8].children.item(0).innerHTML)){
                if(cells[2].children.item(0).innerHTML === '⨯'){
                    cells[2].children.item(0).style.color='green'
                    cells[5].children.item(0).style.color='green'
                    cells[8].children.item(0).style.color='green'
                    yourScore.innerHTML = Number(yourScore.innerHTML) + 1
                    result.style.color = "green"
                    result.innerHTML = "YOU WON!"
                    switchPlayers = 'STOP'
                    avoidBug === false
                    return true
                }
                else {
                    cells[2].children.item(0).style.color='red'
                    cells[5].children.item(0).style.color='red'
                    cells[8].children.item(0).style.color='red'
                    computerScore.innerHTML = Number(computerScore.innerHTML) + 1
                    result.style.color = "red"
                    result.innerHTML = "YOU LOST!"
                    switchPlayers = 'STOP'
                    return true
                }
            }
        }


        if((cells[0].childElementCount > 0) && (cells[4].childElementCount > 0) &&(cells[8].childElementCount > 0 )){
            if( (cells[0].children.item(0).innerHTML === cells[4].children.item(0).innerHTML) && (cells[4].children.item(0).innerHTML === cells[8].children.item(0).innerHTML)){
                if(cells[0].children.item(0).innerHTML === '⨯'){
                    cells[0].children.item(0).style.color='green'
                    cells[4].children.item(0).style.color='green'
                    cells[8].children.item(0).style.color='green'
                    yourScore.innerHTML = Number(yourScore.innerHTML) + 1
                    result.style.color = "green"
                    result.innerHTML = "YOU WON!"
                    switchPlayers = 'STOP'
                    avoidBug === false
                    return true
                }
                else {
                    cells[0].children.item(0).style.color='red'
                    cells[4].children.item(0).style.color='red'
                    cells[8].children.item(0).style.color='red'
                    computerScore.innerHTML = Number(computerScore.innerHTML) + 1
                    result.style.color = "red"
                    result.innerHTML = "YOU LOST!"
                    switchPlayers = 'STOP'
                    return true
                }
            }
        }

        if((cells[6].childElementCount > 0) && (cells[4].childElementCount > 0) &&(cells[2].childElementCount > 0 )){
            if( (cells[6].children.item(0).innerHTML === cells[4].children.item(0).innerHTML) && (cells[4].children.item(0).innerHTML === cells[2].children.item(0).innerHTML)){
                if(cells[6].children.item(0).innerHTML === '⨯'){
                    cells[6].children.item(0).style.color='green'
                    cells[4].children.item(0).style.color='green'
                    cells[2].children.item(0).style.color='green'
                    yourScore.innerHTML = Number(yourScore.innerHTML) + 1
                    result.style.color = "green"
                    result.innerHTML = "YOU WON!"
                    switchPlayers = 'STOP'
                    avoidBug === false
                    return true
                }
                else {
                    cells[6].children.item(0).style.color='red'
                    cells[4].children.item(0).style.color='red'
                    cells[2].children.item(0).style.color='red'
                    computerScore.innerHTML = Number(computerScore.innerHTML) + 1
                    result.style.color = "red"
                    result.innerHTML = "YOU LOST!"
                    switchPlayers = 'STOP'
                    
                    return true
                }
            }
    }
    let cellsWithChildren = 0;
    for(let i = 0; i < cells.length; i++){
        if(cells[i].childElementCount > 0){
            cellsWithChildren = cellsWithChildren + 1
        }
        if(cellsWithChildren === 9){
            result.style.color = "white"
            result.innerHTML = "YOU TIED!"
            switchPlayers = 'STOP'
            tie.innerHTML = Number(tie.innerHTML) + 1
            return true
        }
    }
   
    }
    return false

}



function reset(){
    for(let i = 0; i < cells.length; i++){
        if(cells[i].childElementCount > 0){
            cells[i].children.item(0).remove()
        }
    }
    result.innerHTML = ""
    switchPlayers = 0
    avoidBug = true
}