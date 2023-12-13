//----------------NAVBAR-----------------
window.addEventListener("scroll", function () {
    var header = this.document.querySelector('#header');
    header.classList.toggle('rolagem', window.scrollY > 600)
})

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

            container.style.height = '180px';
        }
    });

    container.appendChild(elem);
}

// aplicamos em todos os elementos .expand na página.
document.querySelectorAll('.expand').forEach(function (elem) {
    createExpander(elem);
});

//----------------CONTACT-COPY-EMAIL-----------------
document.querySelectorAll(".contact-copy-email").forEach(copyEmailContainer => {
    const copyInput = copyEmailContainer.querySelector(".copy-email-input");
    const copyButton = copyEmailContainer.querySelector(".copy-email-button");


    copyInput.addEventListener("focus", () => copyInput.select());

    copyButton.addEventListener("click", () => {
        const text = copyInput.value;

        copyInput.select();
        navigator.clipboard.writeText(text);

        copyInput.value = "Copiado!";
        setTimeout(() => copyInput.value = text, 2000);
    })
});

