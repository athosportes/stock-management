 import toastr from 'toastr';

 toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-bottom-left",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "100",
    "hideDuration": "300",
    "timeOut": "2000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }

  export function mostrarMensatgem(titulo, mensagem, tipo) {
       toastr[tipo](mensagem, titulo)
  }

  export function mensagemErro(mensagem){
    mostrarMensatgem('Erro', mensagem, 'error')
  }

  export function mensagemSucesso(){
    mostrarMensatgem('Produto salvo com sucesso!', 'success')
  }

  export function mensagemAlert(mensagem){
    mostrarMensatgem('Alert', mensagem, 'warning')
  }