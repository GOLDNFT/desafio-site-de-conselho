document.getElementById('dice').addEventListener('click',function(e){
  this.style.display = "none"
  document.getElementById('advice').innerHTML = ""
  document.getElementById('dica').innerHTML = "gerando conselho..."

  fetch('https://api.adviceslip.com/advice').then(res => res.json()).then(dados => {
    document.getElementById('advice').innerHTML = `ADVICE #${dados.slip.id}`
    document.getElementById('dica').innerHTML = `${dados.slip.advice}`
      this.style.display = "block"
  }).catch((err)=>{
    document.getElementById('dica').innerHTML = " Eita! Não foi possível gerar conselho. Verifique sua conexão"
    this.style.display = "block"
  })
})