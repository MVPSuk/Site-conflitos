function abrirNav(){
    document.getElementById('nav').style.width = '18vw';
    document.getElementById('backscreen').style.width = '100%';
}

function fecharNav(){
    document.getElementById('nav').style.width = '0';
    document.getElementById('nav2').style.width = '0';
    document.getElementById('backscreen').style.width = '0';
}

function abrirNav2(continente) {
    abrirNav();

    lista = continente.getAttribute('data-lists-names').split(',');
    links = continente.getAttribute('data-lists-links').split(',');
    all = '';
    for (i = 0; i < lista.length; i++) {
        all += '<li><a href="' + links[i] + '">' + lista[i] + '</a></li>';
    }

    document.getElementById('title').innerHTML = "Conflitos<br><b>" + continente.getAttribute('continente') + "</b>";
    document.getElementById('nav2-1').innerHTML = '<ul>' + all + '</ul>';
    document.getElementById('nav2').style.width = '18vw';
    document.getElementById('conflictlist').style.height = '170px';
    document.getElementById('pointconflictlist').style.transform = 'rotate(90deg)';
}

function abrirCList() {
    var cLOpen = document.getElementById('conflictlist');
    var seta = document.getElementById('pointconflictlist');

    if (cLOpen.style.height != '170px') {
        cLOpen.style.height = '170px';
        seta.style.transform = 'rotate(90deg)';
    } else if (cLOpen.style.height != '0px') {
        cLOpen.style.height = '0px';
        seta.style.transform = 'rotate(0deg)';
    }
}