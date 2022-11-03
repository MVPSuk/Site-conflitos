<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Conflitos</title>
    <link rel="stylesheet" href="styles.css"> 
    
    <script src="https://kit.fontawesome.com/b397ee59be.js" crossorigin="anonymous"></script>
    <script src="scripts.js"></script>
</head>
<body>
    <div id="backscreen" onclick="fecharNav()"></div>
    <header id="header">
	    <a href="#" id="btn-abrir" onclick="abrirNav()"><i class="fa-solid fa-bars"></i></a>
      <!--<h2 id="title">Conflitos ao redor do globo</h2>-->
	
        <!-- <div class="language">
            <a href="#">
                <img src="imgs/ptbr.png" alt="Português-BR">
            </a>
            <a href="#">
                <img src="imgs/english.png" alt="English-EUA">
            </a>
        </div> -->
    </header>

    <nav id="nav">
	<a href="#" id="btn-fechar" onclick="fecharNav()"><div id="redcircle"><i class="fa-solid fa-xmark"></i></div></a>
        <!-- <a href="#">Página Inicial</a>
        <details>
            <summary>Conflitos</summary>
            <a href="index.php">Oriente Médio</a>
            <a href="#">Ásia</a>
            <a href="#">Europa</a>
            <a href="#">América</a>
            <a href="#">África</a>
        </details>
        <a href="#">Sobre</a> -->
        <ul>
            <li>
                <a href="../../index.php">Página Inicial</a>
            </li>
            <li>
                <a href="#" onclick="abrirCList()"><i id="point1" class="fa-solid fa-angle-right"></i> Conflitos</a>
                <ul id="conflictlist">
                    <li>
                        <a href="#">Oriente Médio</a>
                    </li>
                    <li>
                        <a href="#">Ásia</a>
                    </li>
                    <li>
                        <a href="#">Europa</a>
                    </li>
                    <li>
                        <a href="../america.php">América</a>
                    </li>
                    <li>
                        <a href="#">África</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#">Sobre</a>
            </li>
        </ul>
        <p>&copy;2022 - IFNMG</p>
    </nav>

    <main id="main">
        
    </main>
    <footer id="footer"></footer>
</body>
</html>