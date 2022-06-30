const width = 28
const grid = document.querySelector('.grid')
const scoreDisplay = document.getElementById('score')
let squares = []

// 0 - pacdots
// 1 - wall
// 2 - ghost lair
// 3 - powerpellets
// 4 - empty

const layout = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
]

//create board
// function createBoard() {
//     for (let i = 0; i < layout.length; i++) {
//         //create a square
//         const square = document.createElement('div')
//         //put  square in grid
//         grid.appendChild(square)
//         //put square in squares array
//         squares.push(square)
        
        
//         if (layout[i] === 0) {
//             squares[i].classList.add('pac-dot')
//         } 
//         if (layout[i] === 1) {
//             squares[i].classList.add('wall')
//         }
//     }
// }

// createBoard()


         function board(){
                
                layout.map(el => {
                    let square = document.createElement('div')
                    grid.appendChild(square)
            
                squares.push(square)
                    if (el === 0) {
                        square.classList.add('pac-dot')
                    } else if (el === 1) {
                        square.setAttribute('class','wall')
                    } else if (el === 2) {
                        square.setAttribute('class','ghost-lair')
                    } else if (el === 3) {
                        square.setAttribute('class','power-pellet')
                    }
                    
                }
            )
                
                
            }
            board()
// down - 40
// up key - 38
// left - 37
// right - 39
//starting position of pacman

let pacmanCurrentIndex = 490
squares[pacmanCurrentIndex].setAttribute('class', 'pacman')

//moving pacman in the board 
//https://www.keyCode.info

document.addEventListener('keyup', movePacMan)
function movePacMan(e){
    squares[pacmanCurrentIndex].classList.remove('pacman')
    switch(e.key){
        case "ArrowUp" :
            if(!squares[pacmanCurrentIndex -width].classList.contains('ghost-lair') && !squares[pacmanCurrentIndex -width].classList.contains('wall'))
            pacmanCurrentIndex -= width
            break;
        case "ArrowDown" :
            if(!squares[pacmanCurrentIndex +width].classList.contains('ghost-lair') && !squares[pacmanCurrentIndex + width].classList.contains('wall'))
            pacmanCurrentIndex += width
            break;
        case "ArrowRight" :
            if(!squares[pacmanCurrentIndex +1].classList.contains('ghost-lair') &&!squares[pacmanCurrentIndex +1].classList.contains('wall'))
            pacmanCurrentIndex += 1
            if (pacmanCurrentIndex === 391) {
                pacmanCurrentIndex = 364
            }
            break;
         case "ArrowLeft" :
            if(!squares[pacmanCurrentIndex -1].classList.contains('ghost-lair') &&!squares[pacmanCurrentIndex -1].classList.contains('wall'))
            pacmanCurrentIndex -= 1
            if (pacmanCurrentIndex === 364) {
                pacmanCurrentIndex = 391
            }

            break;
    }
    
        squares[pacmanCurrentIndex].classList.add('pacman')
        dotsEaten()
        powerDotsEaten()
   
}
//Eat the green dots

function dotsEaten(){
     if(squares[pacmanCurrentIndex].classList.contains('pac-dot'))
        {
            squares[pacmanCurrentIndex].classList.remove('pac-dot')
            count++;
            scoreDisplay.textContent = count;
        }
}
//Eat the big power dot
function powerDotsEaten(){
    if(squares[pacmanCurrentIndex].classList.contains('power-pellet'))
    {
        squares[pacmanCurrentIndex].classList.remove('power-pellet')
        count += 10;
        scoreDisplay.textContent = count;
        
        //scaring the ghosts
        ghosts.forEach(ghost => ghost.isScared = true)
        
        //use setTimeout to unscare ghosts after 10 seconds   
        setTimeout((()=>{ghosts.forEach(ghost => ghost.isScared = false)}), 10000)  
        
    }
}

 

class Ghost{
    constructor(className, startIndex, speed){
        this.className = className
        this.startIndex = startIndex
        this.speed = speed
        this.currentIndex = startIndex
        this.isScared = false
        this.timerId = NaN
    }
}
//===> array of ghosts we'll need 4 ghosts

const ghosts =[
    new Ghost('blinky', 348, 250),
    new Ghost('pinky', 376, 400),
    new Ghost('inky', 351, 300),
    new Ghost('clyde', 379, 500)

]
 ghosts.forEach(ghost => {
    squares[ghost.currentIndex].classList.add(ghost.className)
    squares[ghost.currentIndex].classList.add('ghost')
})
 
//moving Ghosts 
ghosts.forEach(ghost => moveGhosts(ghost))
function moveGhosts(ghost){
   let directions =[-1, +1, -width, +width]
   let direction = directions[Math.floor(Math.random() * directions.length)]

   ghost.timerId = setInterval(function(){ 
    if(
        !squares[ghost.currentIndex + direction].classList.contains('wall') &&
       !squares[ghost.currentIndex + direction].classList.contains('ghost')
      )
         { 
            squares[ghost.currentIndex].classList.remove(ghost.className)
            squares[ghost.currentIndex].classList.remove('ghost', 'scared-ghost')

              ghost.currentIndex += direction

            squares[ghost.currentIndex].classList.add(ghost.className)
            squares[ghost.currentIndex].classList.add('ghost')
         }  
  
   else direction = directions[Math.floor(Math.random() * directions.length)]
        
   if(ghost.isScared)
        {
        squares[ghost.currentIndex].classList.add("scared-ghost")
        }
    if(ghost.isScared && squares[pacmanCurrentIndex].classList.contains("scared-ghost"))
        {
        ghost.currentIndex = ghost.startIndex
        }
      },ghost.speed)

    
    }
