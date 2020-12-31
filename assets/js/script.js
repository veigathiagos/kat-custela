function entrar(){
   let resp = document.getElementById('resp')

   if (resp.value == 'pic' || resp.value == 'Pic' || resp.value == 'PIC'){
      $("#acertou").modal('toggle');
   } else {
      $("#errou").modal('toggle');
   }
}

function sair(){
   localStorage.clear()
   window.location.href = "index.html";
}