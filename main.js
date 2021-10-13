// load dom elements 

let user_options = document.querySelectorAll('#selection_pane div')
let user_choice_field = document.getElementById('user-choice')
let computer_choice_field = document.getElementById('computer-choice')
let player_scoreboard = document.getElementById('player__scoreboard')
let computer_scoreboard = document.getElementById('com__scoreboard')
let status_info = document.getElementById('status__info')



swal('Hello and Welcome to this game!',
"this game is called ~game of rps(rock, paper , scissors)~  \n\n The game rules are pretty basic, A player selects either rock, paper or scissors .\n\n \n#Rock defeats scissor \n#paper covers rock \n#Scissors cuts paper \n \n ✅✅✅ENJOY✅✅✅  \n\n Made with 💖 by Eskay! ",
'success')



const pickRandom = (arr) => arr[Math.floor(Math.random() * arr.length)]//function to select a random element from an array


function computerWinning(){
    status_info.innerHTML = 'Computer Wins!'
    status_info.style.color = '#e24529e5'
}


function playerWinning(){
    status_info.innerHTML = 'Player Wins!'
    status_info.style.color = 'rgb(16, 165, 16)'
    
}


let com_score = 0
let player_score = 0


user_options.forEach((ele) => {
    ele.addEventListener('click', () => {
        // console.log(ele.innerHTML)
        user_choice_field.innerHTML = ele.innerHTML
        computer_choice_field.innerHTML = pickRandom(user_options).innerHTML

        let com_choice = computer_choice_field.innerHTML
        let player_choice = user_choice_field.innerHTML
        
        if(player_choice.includes('rock') && com_choice.includes('paper')){
            console.log('you lose')
            com_score++
            computerWinning()
            
        }
        else if(player_choice.includes('rock') && com_choice.includes('scissors')){
            console.log('you win')
            player_score++
            playerWinning()            
        }
        else if(player_choice.includes('paper') && com_choice.includes('rock')){
            console.log('you win')
            player_score++
            playerWinning()
        }
        else if(player_choice.includes('paper') && com_choice.includes('scissors')){
            console.log('you lose')
            com_score++
            computerWinning()
        }
        else if(player_choice.includes('scissors') && com_choice.includes('paper')){
            console.log('you win')
            player_score++
            playerWinning()
        }
        else if(player_choice.includes('scissors') && com_choice.includes('rock')){
            console.log('you lose')
            com_score++
            computerWinning()
        }
        else{
            console.log('tie')
            status_info.style.color = 'grey'
            status_info.innerHTML = 'Tie!'
        }

        player_scoreboard.innerHTML = player_score
        computer_scoreboard.innerHTML = com_score
    })
})




