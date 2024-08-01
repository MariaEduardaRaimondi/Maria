<?php

class Soma {
    function converteFahrenheitParaCelsius($fahrenheit) {
      $celsius = ($fahrenheit - 32) * 5 / 9;
      return $celsius;
    }
      
}

$somaClass = new Soma ();

echo $somaClass->converteFahrenheitParaCelsius($_GET['valor']);
