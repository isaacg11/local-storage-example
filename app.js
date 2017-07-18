let grade = document.getElementById('grade');
let score = document.getElementById('score');

function saveGrade() {
  localStorage.setItem("grade", score.value);
}

function getGrade() {
  grade.innerHTML = localStorage.getItem("grade");
}
