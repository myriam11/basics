// Bienvenue à ce premier challenge.
// Vous afficherez les resultats dans le terminal avec la commande:
// 'node <nom du ficher>'
// Pour que les resultats soient visible dans le terminal, vous utiliserez
// la fonction 'console.log'
// ex: console.log('simplon');
// ex: console.log(fonction());
// ex: console.log(nom de la variable);
// Lorque vous avez validé un exercice, mettez le en commentaire !!




//Additionnez ces deux termes et stockez le résultat dans une variable
//puis l'afficher
//const num1 = "4";
//const num2 = "5";//
//TODO

const chaine = "4 , 5";
const num1=parseInt("4") ;
const num2=parseInt ("5");

const resultat= (num1 + num2);
console.log(resultat);

/**Terminé**/

//Variables et opérateurs
//Déclarer deux variables avec comme valeur 4 et 5
//Créez une autre variable contenant l'addition des deux et l'afficher.

var  x = 4, y = 5 ;
var z = ( x + y );
console.log(resultat)
/**Terminé**/




//Les tableaux
//Déclarez un tableau avec 5 villes
//Afficher la ville à l'indice 3
//Ajouter une ville au tableau
//Supprimer la ville à l'indice 2


//TODO
const villes = ['Marseille','Londres','Berlin','Madrid','Lisbonne'];

console.log(villes[3]);
villes.push('Venise');


villes.splice(2,1);


console.log(villes);

//terminé//


//Les boucles
//
//Boucler sur le tableau 'array1' afin de monter chaque
//éléments au carré et afficher le tableau.

//const array1 = [2, 4, 8];
//TODO
const array1 = [2, 4, 8];
//TODO
for (let i=0 ; i<array1.length ; i++){
  console.log(Math.pow(array1[i],2));
}
//terminé//





// Le tableau suivant indique les notes d'une promo lointaine !
// Calculer la moyenne de cette promo et afficher le resultat
const promo = [12, 13, 17, 3, 14, 18];
var somme= 0
var n=promo.length;
for (let i=0 ; i<promo.length ; i++){
somme =somme+  promo[i];
}
var moyenne = somme/n;
  console.log(moyenne);
//terminé//

// Afficher la date d'aujourd'hui sous la forme:
// "Nous somme le [jour/mois/année] et il est [heure/minute]"
// Afficher ensuite "bonjour" si il est en 7h du matin et 17h
// et "bonsoir" s'il est entre 17h et 00H

var date=new Date;

console.log("Nous sommes le : " + (date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()));
console.log("il est : " + (date.getHours()+":"+(date.getMinutes())));
var heure =date.getHours();

if (7<=heure<=17){
  console.log("bonjour");
}
else if (17<heure<=00){
  console.log("bonsoir");
}

//terminé//




//les conditions
//Déclarez une variable "age" avec la valeur de votre choix.
//En utilisant les conditions 'if' et 'else' affichez :
//peut voter si 'age' est supérieur ou égal à 18
//ne peut pas voter si 'age' est inférieur à 18
var age=20
if (age<18){console.log('ne peut pas voter');}
else {console.log ('peut voter');}
//terminé//

//----------------- Fonctions -------------------

//Créez deux variables initialisées à 3 et 4.
//Créez une fonction qui retourne l'addition de ces deux valeurs.
//const add = (num1, num2) => {
//TO DO
//};

var var1 = 3 ;
var var2 = 4 ;
const add = (var1 , var2) => {
  return var1+var2;
};
console.log (add(var1,var2));
//terminé//





//Créez une fonction qui prend en paramètre la valeur i. La fonction doit
//retourner la valeur i au carré et l'afficher.

//const square = (number) => {
  //TODO
//};

const square =(number) => {
  return (Math.pow(number,2));
};
console.log(square(3));
//terminé//





// En utilisant la methode 'map', mettre la chaine de
// caractère en majuscule.
const beatles = ["paul", "john", "ringo", "george"];
const names = beatles[0].toUpperCase();
console.log(names);
const restOfNames = beatles.substr(1).toUpperCase();



//Créez un tableau nommé tab dont le premier
//élément est -2, le deuxième 3 et le troisième 4
//Créez une fonction qui soustrait chaque éléments du tableau au suivant.

const soustrait = (tableau) => {
 //TODO
};






//Créez une fonction qui renvoie la somme de chaque éléments du
//tableau si celui-ci est supérieur à 0.
const array2 = [-2, 4, -5, 3, 6];
const addPositiveNumber = (tableau) => {
 //TODO
};




//Créez une fonction qui prend un parametre 'r' et qui
//renvoie le périmetre d'un cercle.
const périmetreCercle = (r) => {
  //TODO
};

//Créez une fonction qui met la premiere lettre d'un mot en majuscule.
//Le reste du mot doit être en minuscule.
//Le mot est "SimPloN"
const capitalize = (word) => {
  //TODO
};



//Odd or Even
//Créez un fonction qui prend un nombre en parametre et qui renvoie :
//paire si le nombre est pair
//impaire si le nombre est impair
//Tips : jetez un coup d'oeil à l'opérateur '%' dans la doc.



//Mot inversé
//créez une fonction qui prend en paramètre une chaine de caractère.
//Cette fonction renvoie la chaine de caractère inversée.
//ex: reverseWord('simplon') ==> 'nolpmis'
//Aide : join(), split(), reverse()
const reverseWord = (word) => {
  //TODO
};


//créez une fonction qui renvoie la somme de tableau
const nombres = ["3", "5", "6", "2"];
