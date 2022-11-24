const url = 'https://www.42frases.com.br/wp-content/uploads/2020/09/voce-ora-deus-ouve.jpg'
const btn = document.querySelector('#btn')

function openInNewTab(url) {
const win = window.open(url, 'blank')
win.focus()
}

btn.addEventListener('click', () => {
    openInNewTab(url)
})

$(document).ready(function(){
    $('#toggle').click(function () {

        if (!$(this).hasClass('ativo')) {
            $(this).addClass('ativo');
            $('#menu').fadeIn(300);
        } else {
            $(this).removeClass('ativo');
            $('#menu').fadeOut(300);
        }
    });
});