<?php

class multiplicacao {
    function AreaCirculo($raio) {
      $pi = 3.14159;
        return $pi * $raio * $raio;
    }
      
}
$multiplicacaoClass = new multiplicacao();
echo $multiplicacaoClass->AreaCirculo($_GET['valor1']);
    
