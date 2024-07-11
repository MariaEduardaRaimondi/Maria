<?php

class multiplicacao {
    function AreaRetangulo($base, $altura) {
        return $base * $altura / 2;
    }     
}
$multiplicacaoClass = new multiplicacao();
echo $multiplicacaoClass->AreaRetangulo($_GET['valor1'],$_GET['valor2']);
    
