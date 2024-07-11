<?php

class soma {


    function swap($a, $b) {
        $temp = $a;
        $a = $b;
        $b = $temp;

        return "Valores apos a troca: A = {$a}, B = {$b}";
    }
        
}
$somaClass = new soma();
echo $somaClass->swap($_GET['valor1'],$_GET['valor2']);