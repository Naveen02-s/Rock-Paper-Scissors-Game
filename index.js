let compChoice_dis = document.querySelector('.compChoice_dis');
let result_dis = document.querySelector('.result_dis');

let scoreStr = localStorage.getItem('Score'); 
function resetScore(){
  score = {
    win: 0,
    lose: 0,
    tie:0,
  };
  dis_score();
  result_dis.innerText = "";
  compChoice_dis.classList.remove('Rock', 'Paper', 'Scissors');
}

  let score = JSON.parse(scoreStr) || {
    win: 0,
    lose: 0,
    tie:0,
  };

  dis_score = function(){
    document.querySelector('#win_score').innerText = score.win;
    document.querySelector('#lose_score').innerText = score.lose;
    document.querySelector('#tie_score').innerText = score.tie;
  };

function gen_compChoice(){
//This will generate random number between 0 and 3
  let randomNo = Math.random()*3;
  if(randomNo <= 1){
    return 'Rock';
  }
  else if( randomNo <= 2){
    return 'Paper';
  }
  else{
    return 'Scissors';
  }
}

function showCompChoice(compChoice){

  if(compChoice_dis.classList.length > 1){
    console.log('Removed')
    compChoice_dis.classList.remove('Rock', 'Paper', 'Scissors');
    compChoice_dis.classList.add(compChoice);
  }
  else{
    compChoice_dis.classList.add(compChoice);
  }
}


function genResult(userMove,compMove){
  if(userMove === compMove){
    score.tie++;
    return 'Tie'
  }
  if(userMove === 'Rock'){
    if(compMove === 'Paper'){
      score.lose++;
      return 'Lost'
    }
    else{
      score.win++;
      return 'Won'
    }
  }
  else if(userMove === 'Paper'){
    if(compMove === 'Scissors'){
      score.lose++;
      return 'Lost'
    }
    else {
      score.win++;
      return 'Won'
    }
  }
  else{
    if(compMove === 'Rock'){
      score.lose++;
      return 'Lost'
    }
    else {
      score.win++;
      return 'Won'
    }
  }
}

function showResult(compChoice,finalResult){
  if(finalResult == 'Tie'){
    result_dis.innerText = `It's a tie.`;
    result_dis.style.color = '#757575'
  }
  else if(finalResult == `Lost`){
    result_dis.innerText = `Hard luck! You lost`
    result_dis.style.color = '#F44336'
  }
  else{
    result_dis.innerText = 'Congrats! You have won.'
    result_dis.style.color = '#43A047'
  }
  localStorage.setItem('Score', JSON.stringify(score));
  dis_score();
}
