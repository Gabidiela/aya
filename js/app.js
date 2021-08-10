function galeria(Nimg){
    let modal = document.getElementById('modal');
    modal.classList.replace("hide", "modal");

    let imgbox = document.getElementsByName('img')[Nimg];
    let imgmodal = document.getElementById('img');
    imgmodal.src = imgbox.src;

    let label = document.getElementsByName('legenda')[Nimg];
    let labelmodal = document.getElementById('label');

    labelmodal.innerHTML = label.innerHTML;
}

function fechar(){
    let modal = document.getElementById('modal');
    modal.classList.replace("modal", "hide");
}