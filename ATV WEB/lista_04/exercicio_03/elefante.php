<?php

class Soma {
    function hepar ($numero) {
        return $numero % 2;
    }     
}
$somaClass = new Soma();
if($somaClass->hepar ($_GET['valor'])==0){
    echo "numero par";
}
else{
    echo "numero impar";
}
