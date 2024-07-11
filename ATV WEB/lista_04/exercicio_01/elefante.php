<?php

class soma {
    function somaDoisValores($valor1, $valor2){
        return $valor1 + $valor2;
    }
}
$somaClass = new soma();
echo $somaClass->somaDoisValores($_GET['valor1'],$_GET['valor2']);