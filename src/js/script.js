//----------------ABOUT-TAB-----------------
//Elemento ja abre aberto
document.getElementById("defaultOpen").click();

function openTab(evt, Linkname) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(Linkname).style.display = "block";
    evt.currentTarget.className += " active";
}

//----------------ABOUT-EXPANDER-----------------
function createExpander(container) {
    var elem;

    elem = document.createElement('div');
    elem.className = 'expander show';
    elem.innerHTML = 'Mais';

    elem.addEventListener('click', function () {
        // se o conteúdo estiver ocultado, altera o height
        // para que se adapte ao tamanho do conteúdo.
        // Se não, apenas retorna ao tamanho original (350px).
        if (elem.className === 'expander show') {
            elem.innerHTML = 'Ocultar';
            elem.className = 'expander hide';

            container.style.height = 'auto';
        } else {
            elem.innerHTML = 'Mais';
            elem.className = 'expander show';

            container.style.height = '350px';
        }
    });

    container.appendChild(elem);
}

// aplicamos em todos os elementos .expand na página.
document.querySelectorAll('.expand').forEach(function (elem) {
    createExpander(elem);
});
