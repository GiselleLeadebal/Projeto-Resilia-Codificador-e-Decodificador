var selecao = document.querySelector('#selecionar')
var passos = document.querySelector('.passos')
selecao.addEventListener('change', function () {
    if (selecao.value == 'cesar') {
        passos.style = 'display: flex'
    } else {
        passos.style = 'display: none'
    }
})

