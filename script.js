function showSection(id) {
  document.querySelectorAll('main section').forEach(sec => sec.classList.remove('visible'));
  document.getElementById(id).classList.add('visible');
}

function toggleTheme() {
  document.body.classList.toggle('night');
}

function playAudio(file) {
  const audio = new Audio('audio/' + file);
  audio.play();
}
