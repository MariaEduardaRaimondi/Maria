<?php

class soma {
    function heBissexto($ano) {
    if(($ano % 4 == 0 && $ano % 100 != 0)|| ($ano % 400 == 0)) {

return 1; // ano bissexto
    } else{

      return 0;//nao é bissexto
          }
      
}
}
$somaClass = new soma();
if ($somaClass->heBissexto((int)$_GET['valor'])) {
    echo "e bissexto";
}
else{
echo "nao e bissexto";
}
