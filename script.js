const question = "What planet is know as the 'Red Planet'?";
const choices = ["Earth", "Mars", "Jupiter", "Saturn"];
const correctAnswer = "Mars";
function checkAnswer(button){
  if(button.value === correctAnswer){
  const match = document.getElementById("result");
  match.innerHTML = result;
  console.log("Correct!");
  }else{
    document.getElementById("result").innerHTML = "Wrong!";
  }
  for(let i = 1; i <5; i++){
  document.getElementById(`choice${i}`).disabled = true;
  }
}
function displayQuestion(){
  const select = document.getElementById("question");
  select.innerHTML = question;
  for(let i=0; i < 4; i++){
    const btn = document.getElementById(`choice${i+1}`);
    btn.innerHTML = choices[i];
    btn.value = choices[i];
  }
}
displayQuestion();