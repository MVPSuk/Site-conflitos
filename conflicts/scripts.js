function abrirNav(){
    document.getElementById('nav').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';
    document.getElementById('backscreen').style.width = '100%';
}

function fecharNav(){
    document.getElementById('nav').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
    document.getElementById('backscreen').style.width = '0';
}

function abrirCList(){
    var cLOpen = document.getElementById('conflictlist').style.height;
    if(cLOpen=='0px'){
        document.getElementById('conflictlist').style.height = '170px';
        document.getElementById('point1').style.transform = 'rotate(90deg)'
    }else{
        document.getElementById('conflictlist').style.height = '0px';
        document.getElementById('point1').style.transform = 'rotate(0deg)'
    }
}