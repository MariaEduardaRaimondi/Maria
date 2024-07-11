<?php

class MaiorValor {
    function buscarMaiorvalor ($a, $b, $c) {
        $maior = $a;
        
    if ($b > $maior)
        {
            $maior = $b;
        }
        if ($b > $maior)
        {
            $maior = $c;
        }

return $maior; 
}
}
$MaiorValorClass = new MaiorValor();
echo $MaiorValorClass->buscarMaiorValor($_GET['valor1'],$_GET['valor2'],$_GET['valor3']);


