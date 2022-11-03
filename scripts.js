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

//exibir nome do continente (não sendo usado)
//function identificarArea(nomeArea){
//    document.getElementById('areaDestaque')
//    .innerHTML = nomeArea;
//}

//destacar continente
function destacarArea(id,caminho){
    document.getElementById(id).src = caminho;
}

//abrir barra lateral
function abrirNav(){
    var main = document.getElementById('main');
    document.getElementById('nav').style.width = '250px';
    main.style.marginLeft = '250px';
    document.getElementById('header').style.height = '13vh';
    document.getElementById('footer').style.height = '13vh';
    main.style.paddingTop = '13vh';
    main.style.paddingBottom = '13vh';
    document.getElementById('backscreen').style.width = '100%';
    document.getElementById('mainnomap').style.display = "none";
}

//fechar barra lateral
function fecharNav(){
    var main = document.getElementById('main');
    document.getElementById('nav').style.width = '0';
    document.getElementById('nav2').style.width = '0';
    main.style.marginLeft = '0';
    main.style.marginRight = '0';
    document.getElementById('header').style.height = '50px';
    document.getElementById('footer').style.height = '0';
    main.style.paddingTop = '50px';
    main.style.paddingBottom = '0';
    document.getElementById('backscreen').style.width = '0';
    document.getElementById('mainnomap').style.display = 'inline';
}

function abrirNav2(){
    var main = document.getElementById('main');
    document.getElementById('nav2').style.width = '250px';
    main.style.marginRight = '250px';
}

//abrir lista de continentes
function abrirCList(){
    var cLOpen = document.getElementById('conflictlist');
    var seta = document.getElementById('point1');
    if(cLOpen.style.height != '170px'){
        cLOpen.style.height = '170px';
        seta.style.transform = 'rotate(90deg)'
    }else if(cLOpen.style.height != '0px'){
        cLOpen.style.height = '0px';
        seta.style.transform = 'rotate(0deg)'
    }
}

