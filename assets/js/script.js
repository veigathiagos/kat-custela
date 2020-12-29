function entrar(){
   let resp = document.getElementById('resp')

   if (resp.value == 'pic'){
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