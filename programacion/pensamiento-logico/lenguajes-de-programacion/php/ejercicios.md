# Ejercicios

## Calculadora

```php
<?php
function suma($a, $b){
$res = $a + $b;
  print_r("El resultado de la suma es $res.");
  echo '<p>';
}

function resta($a, $b){
  $res = $a - $b;
  print_r("El resultado de la resta es $res.");
  echo '<p>';
}

function multiplicacion($a, $b){
  $res = $a * $b;
  print_r("El resultado de la multiplicación es $res.");
  echo '<p>';
}

function division($a, $b){
  $res = $a / $b;
  print_r("El resultado de la división es $res.");
  echo '<p>';
}

$res = 0;
  
while ($res <> 5){
  printf("Introduce el número de la opción que deseas realizar.");
   echo '<p>';
  printf("1. Sumar.");
   echo '<p>';
  printf("2. Restar.");
   echo '<p>';
  printf("3. Multiplicar.");
   echo '<p>';
  printf("4. Dividir.");
   echo '<p>';
  printf("5. Salir del programa.");
   echo '<p>';
   echo '<p>';
  
  $res = readline("Opción: ");
  if ($res >= 1 and $res < 5){
	$a = readline("Introduce el primer número.");
	$b = readline ("Introduce el segundo número.");
	
	if ($res == 1){
	  suma($a, $b);
	}
	elseif ($res == 2){
	  resta($a, $b);
	}
	elseif ($res == 3){
	  multiplicacion($a, $b);
	}
	elseif ($res == 4){
	  division($a, $b);
	}
  }
  elseif ($res <> 5){
	printf("Has seleccionado una opción incorrecta. Inténtalo de nuevo.");
	 echo '<p>';
  }
  else{
	printf("Has salido del programa. ¡Qué tengas excelente día!");
  }
}
?>
```

## Recomendaciones de lugares

```php
<?php

$weather = array("Bogotá" => "Cold", "Montería" => "Hot", "Medellín" => "Mild");
$location = array("Guajira" => "North", "Leticia" => "South", "Santander" => "East", "Antioquia" => "West");
$tourism = array("Santa Marta" => "Sea", "Villavicencio" => "Flat", "Riohacha" => "Desert", "Quidío" => "Valley");

$continue = 'yes';

while ($continue <> 'not'){
  echo("Choose a recomendation option");
  echo '<p>';
  echo("- Weather.");
  echo '<p>';
  echo("- Location.");
  echo '<p>';
  echo("- Tourism.");
  echo '<p>';
  $search = readline("Opcion1: ");
  echo '<p>';
  echo '<p>';
  
// mb_strlower para convertir todo el string en minúsculas y ucfirst para convertir la primera letra en mayúscula.
  
  $search = mb_strtolower($search);
  $search = ucfirst($search);
  echo $search;
  
  if ($search == "Weather"){
	echo("Choose a weather.");
	echo '<p>';
	echo("- Cold");
	echo '<p>';
	echo("- Mild");
	echo '<p>';
	echo("- Hot");
	echo '<p>';
	$search_opt = readline("Opción2: ");
	echo '<p>';
	echo '<p>';
  
	$search_opt = mb_strtolower($search_opt);
	$search_opt = ucfirst($search_opt);
	$recommendation = array_search($search_opt, $weather);
	
  }elseif ($search == "Location"){
	echo("Choose a location.");
	echo '<p>';
	echo("- North");
	echo '<p>';
	echo("- South");
	echo '<p>';
	echo("- East");
	echo '<p>';
	echo("- Weast");
	echo '<p>';
	$search_opt = readline("Opción3: ");
	echo '<p>';
	echo '<p>';
  
	$search_opt = mb_strtolower($search_opt);
	$search_opt = ucfirst($search_opt);
	$recommendation = array_search($search_opt, $location);
	
  }elseif ($search == "Tourism"){
	echo("Choose a tourism option.");
	echo '<p>';
	echo("- sea");
	echo '<p>';
	echo("- flat");
	echo '<p>';
	echo("- desert");
	echo '<p>';
	echo("- valley");
	echo '<p>';
	$search_opt = readline("Option: ");
  
	$search_opt = mb_strtolower($search_opt);
	$search_opt = ucfirst($search_opt);
	$recommendation = array_search($search_opt, $tourism);
	
  }else{
	echo("Error: You write a wrong option. Write a right one.");
  }
  echo("Our recommended place is $recommendation");
  echo '<p>';

  $continue = 1;

  while ($continue <> 'yes' and $continue <> 'not'){
	$continue = readline('Would you like to request another recommendation? Write "yes" or "not" as answer');
	if ($continue <> 'yes' and $continue <> 'not'){
	  echo("Error: you write an invalid answer. Try again.");
	}
  }
}

?>
```