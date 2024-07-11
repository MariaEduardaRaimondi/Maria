<?php

class multiplicacao {
    function areaQuadrado($base, $altura) {
        return $base * $altura;
    }     
}
$multiplicacaoClass = new multiplicacao();
echo $multiplicacaoClass->areaQuadrado($_GET['valor1'],$_GET['valor2']);
    
