//ajustar imagem
window.onload = function () {
    var ImageMap = function (map, img) {
        var n,
            areas = map.getElementsByTagName('area'),
            len = areas.length,
            coords = [],
            previousWidth = 5760;
        for (n = 0; n < len; n++) {
            coords[n] = areas[n].coords.split(',');
        }
        this.resize = function () {
            var n, m, clen,
                x = img.offsetWidth / previousWidth;
            for (n = 0; n < len; n++) {
                clen = coords[n].length;
                for (m = 0; m < clen; m++) {
                    coords[n][m] *= x;
                }
                areas[n].coords = coords[n].join(',');
            }
            previousWidth = img.offsetWidth;
            return true;
        };
        window.onresize = this.resize;
    },
        imageMap = new ImageMap(document.getElementById('mapa'), document.getElementById('mapaimg'));
    imageMap.resize();
    return;
}

//destacar continente
function destacarArea(caminho) {
    document.getElementById('mapaimg').src = caminho;
}

//abrir barra lateral esquerda
function abrirNav() {
    var main = document.getElementById('main');

    document.getElementById('nav').style.width = '18vw';
    main.style.paddingLeft = '18vw';
    document.getElementById('header').style.height = '13vh';
    document.getElementById('footer').style.height = '13vh';
    main.style.paddingTop = '13vh';
    main.style.paddingBottom = '13vh';
    document.getElementById('backscreen').style.width = '100%';
    //document.getElementById('mainnomap').style.display = "none";
}

//fechar barras laterais
function fecharNav() {
    var main = document.getElementById('main');

    document.getElementById('nav').style.width = '0';
    document.getElementById('nav2').style.width = '0';
    main.style.paddingLeft = '0';
    main.style.paddingRight = '0';
    document.getElementById('header').style.height = '50px';
    document.getElementById('footer').style.height = '0';
    main.style.paddingTop = '50px';
    main.style.paddingBottom = '0';
    document.getElementById('backscreen').style.width = '0';
    //document.getElementById('mainnomap').style.display = 'block';
}

//abrir barra lateral esquerda, direita e lista de continentes
function abrirNav2(continente) {
    abrirNav();

    var main = document.getElementById('main');
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
    main.style.paddingRight = '18vw';
}

//abrir lista de continentes
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

