function entrar(){
   let resp = document.getElementById('resp')

   if (resp.value == 'pic' || resp.value == 'Pic' || resp.value == 'PIC'){
      window.location.href = "carta.html";
      localStorage.setItem('senha', resp)
   } else {
      alert('Resposta incorreta, tente novamente')
   }
}

function sair(){
   localStorage.clear()
   window.location.href = "index.html";
}