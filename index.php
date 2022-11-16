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
    <?php require_once('include/default.require.php');?>
    <main id="main">
        <img id="mapaimg" src="imgs/mapamundi.png" alt="Mapa Mundi" usemap="#map" onmouseover="destacarArea('imgs/mapamundi.png');"/>
        <!--<div id="mainnomap"></div>-->
    <?php require_once 'include/map.require.php';?>
    </main>
    <footer id="footer"></footer>
</body>
</html>
