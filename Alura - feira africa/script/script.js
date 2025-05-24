cancelar.addEventListener("click", function(){
    document.getElementById("secResponse").classList.remove('hidden')
    document.getElementById("secResponse").classList.add('secResponse')
})


//POP UP
function abrirPopup() {
  document.getElementById('popup').style.display = 'flex';
}

function fecharPopup() {
  document.getElementById('popup').style.display = 'none';
}

function inicio() {
  window.location.href = "/index.html"
}
