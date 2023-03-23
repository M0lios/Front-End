// EXO 1
/*var nombre = prompt("Saisissez un nombre");
console.log(nombre);
if(isNaN(nombre) == true){
    alert("cela n'est pas un nombre");
}
else{
    if(nombre%2 == 0){
        alert("Nombre pair");
    }
    else{
        alert("Nombre impair");
    }
}*/


// EXO 2
/*var annee = prompt("Saisissez votre année de naissance");
console.log(annee);
if(isNaN(annee) == true){
    alert("cela n'est pas un nombre");
}
else{
    let YearNow = new Date();
    let YearNowOk = YearNow.getFullYear();
    function DiffYear(YearNow,YearSaisi){
        return YearNow - YearSaisi;
    }
    console.log(DiffYear(YearNowOk,annee));
    if(DiffYear(YearNowOk,annee) >= 18){
        alert("Vous êtes majeur");
    }
    else{
        alert("Vous êtes mineur");
    }
}*/

// EXO 3
/*let nombre1 = prompt("Saisissez un nombre");
let operateur = prompt("Saisissez un opérateur (+,-,/,*)");
let nombre2 = prompt("Saisissez un deuxième nombre");

    function Operation(nombre1,operateur,nombre2){
	    if(operateur == "+"){
            return nombre1 + nombre2;
		}
	    if(operateur == "-"){
            return nombre1 - nombre2;
		}
	    if(operateur == "/"){
            return nombre1 / nombre2;
		}
	    if(operateur == "*"){
            return nombre1 * nombre2;
		}
    }

if(isNaN(nombre1) == true || isNaN(nombre2) == true || operateur != "+" && operateur != "-" && operateur != "/" && operateur != "*"){
    alert("erreur de saisi détecté");
}
else{
    if(nombre2 == 0 && operateur == "/"){
        alert("impossible de diviser par 0");
	}
	else{
        console.log(Operation(nombre1,operateur,nombre2));
	}
}*/

// EXO 4
/*let PrixUnitaire = prompt("Saisissez le prix unitaire du produit");
let Quantity = prompt("Saisissez la quantité de produit");

if(isNaN(PrixUnitaire) == true || isNaN(Quantity) == true){
    alert("erreur de saisi détecté");
}
else{
    var Total_cout = PrixUnitaire*Quantity;

    if(Total_cout >= 500){
        alert("Pas de Port !");
		var totalTOT = 0;
	    var remise = 0;
	}
	else{
	    var TOTpourc = (Total_cout * 2) / 100;
		if(TOTpourc <= 6)
		{
		    var totalTOT = 6;
		}
		else{
		    var totalTOT = TOTpourc;
		}
	}	
    // Remise
	if(Total_cout >= 100 && Total_cout <= 200){
	     var remise = (Total_cout * 5) / 100;
	}
	else if(Total_cout > 200){
	     var remise = (Total_cout * 10) / 100;
	}
	else {
	     var remise = 0;
	}	
	if((Total_cout - remise) <= 0){
	    var TOTFinal = 0 + totalTOT;
	}	
	else{
	    var TOTFinal = Total_cout - remise + totalTOT;
	}	
	console.log("PrixUnitaire : "+PrixUnitaire+" €");
	console.log("Quantity : "+Quantity);
	console.log("PrixTotal : "+Total_cout+" €");
	console.log("Frais de port : "+totalTOT+" €");
	console.log("Remise : "+remise+" €");
	console.log("TOTFinal : "+TOTFinal+" €");	
}*/

// EXO 5
/*let Celibataire = confirm("êtes vous célibataire ? (Ok/Annulé)");
let NbEnfant = prompt("Combien d'enfant avez-vous ?");
let Salaire = prompt("Votre salaire");

if(isNaN(NbEnfant) == true || isNaN(Salaire) == true){
    alert("erreur de saisi détecté");
}
else{

if(Celibataire == true){
   var PourcCelibataire = 20;
}
else{
   var PourcCelibataire = 25; // Maried
}

if(NbEnfant > 0){
   var PourcEnfant = NbEnfant*10;
}
else{
   var PourcEnfant = 0;
}

var TotalPourc = PourcCelibataire + PourcEnfant;

if(Salaire <= 1200){
    var Majoration = 10;
    if(TotalPourc >= (50+Majoration)){
        var newPourc = 50+Majoration;
    }
    else{
        var newPourc = TotalPourc+Majoration;
    }

}
else{
    if(TotalPourc >= 50){
        var newPourc = 50;
    }
    else{
        var newPourc = TotalPourc;
    }
}
	console.log("Status : "+PourcCelibataire+" %");
	console.log("Nombre d'enfant : "+NbEnfant);
	console.log("Ajout de (enfant) : "+PourcEnfant+" %");
	console.log("Total : "+(PourcCelibataire+PourcEnfant) +" %");
	console.log("Salaire : "+Salaire+" €");
	console.log("Majoration : "+Majoration+" %");	
	console.log("Participation total : "+newPourc+" %");	
}*/

/*var modele = "Laguna";
switch (modele)
{
case "508" :
console.log("Modèle 508 : marque Peugeot");
break;
case "Laguna" :
console.log("Modèle Laguna : marque Renault");
break;
case "C5" :
console.log("Modèle C5 : marque Citroën");
break;
}*/

/*var i=0
console.log("Table de multiplication par 5");
console.log("=============================");
do
{
resultat = 5 * i;
console.log("5 * "+i+" = "+resultat);
i++;
} while (i <= 10) ;*/

/*var tableau = ["Paul", "Pierre", "Anne", "Sophie"];
for (var i in tableau)
{
console.log(tableau[i]);
}*/


// EXO 1 P7
/*let i = 0;
let prenom = "Départ";
var tab=new Array();

while (prenom != ""){
 let prenom = prompt("Le prénom numéro "+(i+1));
 tab[i]=prenom;
 i++;
 if(prenom == ""){
     break;
 }
 else{
     console.log("Prénom saisi : "+prenom);
 }
}



var longueur=tab.length;
console.log("Nombre de prénom saisi : "+(longueur-1));*/

//EXO 2 P7
/*var N = prompt("saississez un chiffre");

for(var i = 1; i < N; i++){
	console.log(i);
}*/

//EXO 3 P7
/*var N = prompt("saississez un chiffre");
var somme = 0;

for(var i = 0; i < N; i++){
	var somme = parseInt(somme) + parseInt(i);
	console.log(i);
}
alert(somme); */

// EXO 4 P7
/*let n1 = prompt("Saisissez un nombre n1");
let n2 = prompt("Saisissez un nombre n2");

var total = 0;

for (var i = n1; i <= n2; i++) {  
  console.log(i);
  total = parseInt(total) + i;
  console.log(total);
}*/

// EXO 5 P7
/*let i = 0;
let nombre = "Départ";
let total = 0;

while (nombre != ""){
 let nombre = prompt("Le nombre numéro "+(i+1));
 i++; 
 total += parseInt(nombre);
 console.log("Nombre saisi : "+nombre);
 if(nombre == "0"){
     console.log("Moyenne saisi : "+parseInt(total/(i-1)));
     break;	 
 }
}*/

// EXO 6 P7
/*let i = 0;
let nombre = 1;
var tab=new Array();
while (nombre != 0){
 let nombre = prompt("Le nombre numéro "+(i+1)); 
 if(nombre == "0"){
     console.log("Min saisi : "+parseInt(Math.min(...tab)));
     console.log("Max saisi : "+parseInt(Math.max(...tab))); 
     break;	 
 }
 else {
 tab[i]=nombre;
 console.log("Nombre saisi : "+nombre);
 console.log("tab : "+tab[i]); 
 i++;
 }
}*/


// EXO 7 P7
/*let N = prompt("Saisissez un nombre N");
let X = prompt("Saisissez un nombre X");

var i = 1;
console.log("Table de multiplication par 5");
console.log("=============================");
while (i<=N){
 resultat = X*i;
 console.log(i+" x "+X+" = "+resultat);
 i++;
}*/

// EXO 8 P7

/*function compterNbVoyelles(mot) {
    let nbVoyelles = 0;
    let voyelles = ['a', 'e', 'i', 'o', 'u', 'y'];
	
    for (let lettre of mot) {
        if (voyelles.includes(lettre.toLowerCase())) {
            nbVoyelles++;
        }
    }
    return "il y a " +nbVoyelles+" voyelle(s)";
}

let mot = prompt("Saisissez un mot");

console.log(compterNbVoyelles(mot));*/

// EXO 9 P7
/*let LetMoin20 = 0;
let LetPlus40 = 0;
let Let20_40 = 0;
let Vieux = 0;

let age = 1;
let i = 0;

var tab=new Array();

while (age < 100){
 let age = prompt("L'âge de la personne N° "+(i+1)); 
 if(age >= 100){
     Vieux++
     console.log("Nombre de personne moins de 20 ans : "+LetMoin20);
     console.log("Nombre de personne plus de 40 ans : "+LetPlus40);
     console.log("Nombre de personne moins de 20 ans : "+Let20_40);
     console.log("Nombre de centenaire : "+Vieux);
     break;	 
 }
 else {
 console.log("âge saisi : "+age);
 if(age < 20){
     LetMoin20++
 }
 else if(age > 40 && age < 100){
     LetPlus40++
 }
 else if(age >= 20 && age <= 40){
     Let20_40++
 }
 
 i++;
 }
}*/

// EXO 10 P7

/*let nombrePremier = prompt("Saisissez un nombre");



function nbrPremier(nbr)
{
    // Si le nombre est inférieur à 2 alors il n'est pas premier
    if (nbr<=1) return "Nombre non premier";
	//On attaque la boucle
    for (var i = 2; i <= nbr-1; i++)	    
        if (nbr % i == 0) return "Nombre non premier";
    // on retourne vrai
    return "Nombre premier";
}


console.log(nbrPremier(nombrePremier));*/


// EXO 11 P7
/*var nombreMagique = parseInt(Math.random()*100);
var nombre1 = 1;

console.log("Nombre magique : "+nombreMagique);
while (nombre1 > 0){
 var nombreSaisi = prompt("Saisissez un nombre");
 
 if(nombreSaisi == nombreMagique){
     alert("Bravo vous avez trouvé !, le chiffre était bien le : "+nombreMagique);
	 var rejouer = confirm("voulez-vous rejouer ?");
	 if(rejouer == false)
	 {
         break;
	 }
	 else{
	     nombreMagique = parseInt(Math.random()*100);
         console.log("Nombre magique : "+nombreMagique);
	 }
 }
 else{ 
     if(nombreSaisi < nombreMagique){
         alert("Le nombre magique est plus grand");
	 }
	 else{
         alert("Le nombre magique est plus petit");
	 }
     console.log("Nombre saisi : "+nombreSaisi);
 }
}*/


//EXO 1 P8

/*x = parseInt(Math.random()*10);
y = parseInt(Math.random()*10);

// Déclaration de la fonction cube() :
function cube(nombre)
{
 return nombre*nombre*nombre;
}

// Déclaration du produit
function produit(x, y) {
    return x * y;
}

function afficheImg(image){
    return "<img src='"+image+"'>";
}

image = "img/papillon.jpg";

document.write("Le cube de "+x+" est égale à "+cube(x));
document.write("<br>");
document.write("Le produit de "+x+" x "+y+" est égale à "+produit(x,y));
document.write("<br>");
document.write(afficheImg(image));*/


//EXO 2 P8
//table de X
/*var Affichertable = prompt("Quelle table afficher ?");
for(var i = 0; i <= 10; i++){
console.log(i+" x "+Affichertable+" = "+(i*Affichertable));
}*/

//EXO 3 P8
/*var phrase = prompt("Ta phrase :");
var nb_mot_lettre = 0;

function compteMots(phrase){
    var mot = phrase.split(' ');
    for(var i = 0; i < mot.length; i++)
    {
        if("Lettre" == mot[i] || "lettre" == mot[i])
		{
            nb_mot_lettre++;
		}
    }
    return nb_mot_lettre;
}
console.log("Il y a "+compteMots(phrase)+" mot(s) #lettre dans la phrase.");*/

//EXO 4 P8

/*var phrase = prompt("Ta phrase :");
var rech_lettre_mot = prompt("que recherche tu (lettre) :");
var nb_mot_lettre = 0;

function compteMots(phrase){
    var mot = phrase.split(' ');
    for(var i = 0; i < mot.length; i++)
    {
        if(rech_lettre_mot == mot[i])
		{
            nb_mot_lettre++;
		}
		else{		
            for (let lettre of mot[i]) {
                if (lettre.toLowerCase().includes(rech_lettre_mot)) {
                   nb_mot_lettre++;
                }
            }
		}
    }
    return nb_mot_lettre;
}
console.log("Il y a "+compteMots(phrase)+" mot(s)/lettre(s) #"+rech_lettre_mot+" dans la phrase.");*/

//EXO 5 P8

/*var str1 = prompt("saissiser votre tableau");;
var str2 = ";";
var n = 2;

function strtok(str1, str2, n){    
    var splitage = str1.split(str2);
    for (var i = 0; i < splitage.length; i++) {
	    if(i == n){		
            return splitage[i];
		}
    }
}

console.log(strtok(str1,str2,n));*/

// EXO FUN

/*var i = 0;
var etoile = "";
while(i < 5){
etoile += " *"
document.write(etoile);
document.write("<br>");
i++
}


var i = 1;
var chiffre = "";
while(i < 7){
chiffre += " "+i
document.write(chiffre);
document.write("<br>");
i++
}*/



//EXO 1 P9
/*var NbColonne = prompt("Combien de valeur(s)/colonne(s) désirez-vous ?");
var tab = [];
for(var i = 0; i < NbColonne; i++){
	tab[i] = prompt("Saissisez une valeur");
	console.log("Colonne "+(i+1)+" : "+tab[i]);
}*/

//EXO 2 P9








































//EXO 3 P9
/*var tabPrenom = ["Guillaume","Damien","Alessandro","Jessica","Coralie","Kaz","Manu","Eloise","Prici","Jo","Alex","Axel","Kevin","Matthieu","Michel","Séverine","Moussa","Jason","Tanguy","Marie"];
var PrenomValideId = "";

function lanceTableau(){
for(var i = 0; i < tabPrenom.length; i++){
	console.log(tabPrenom[i]);
}
}

lanceTableau();

var searchPrenom = prompt("Prénom à saisir");
for(var i = 0; i < tabPrenom.length; i++){
	if(searchPrenom == tabPrenom[i])
	{
		PrenomValideId = i;
	}
}
if(PrenomValideId != ""){
	console.log(tabPrenom.length);
    console.log("Prénom existant !");
	tabPrenom.splice(PrenomValideId, 1);
    tabPrenom.push('');
	console.log(tabPrenom.length);
    lanceTableau();
}
else{
    console.log("Prénom non existant !");
}*/

//EXO 4 P9


/*function sort(tab){
    var changed;
    do{
        changed = false;
        for(var i=0; i < tab.length-1; i++) {
            if(tab[i] > tab[i+1]) {
                var tmp = tab[i];
                tab[i] = tab[i+1];
                tab[i+1] = tmp;
                changed = true;
            }
        }
    } while(changed);
}
var tab = [5, 8, 11, 6, 1, 9, 3];
sort(tab);
console.log(tab);*/


//EXO 5 P9 
/*var tab = [666, 1, 7, 69, 33, 13]
var j = 1;
var n = tab.length;
while(j != n){
	i = j - 1;
	tmp = tab[j];	
	while(i > -1 && tab[i] > tmp){		
		tab[i+1] = tab[i];
		i = i - 1;		
	}
    tab[i+1] = tmp;
	j = j + 1;
}*/

//EXO 6 P9


var Horaires = ["03:15:55", "02:15:55"];

var cumulesecondes = 0;

for(var i = 0; i < Horaires.length; i++)
{
    var separation = Horaires[i].split(':');
	
    for(var j = 0; j < separation.length; j++)
    {
        if(j == 0)
		{
			cumulesecondes += (separation[j]*3600);
		}
        if(j == 1)
		{
			cumulesecondes += (separation[j]*60);
		}
        if(j == 2)
		{
			cumulesecondes += (separation[j]*1);
		}
    }
}
console.log(cumulesecondes);

function conversion_seconde_heure(time) {
	var reste=time;
	var result='';
 
	var nbJours=Math.floor(reste/(3600*24));
	reste -= nbJours*24*3600;
 
	var nbHours=Math.floor(reste/3600);
	reste -= nbHours*3600;
 
	var nbMinutes=Math.floor(reste/60);
	reste -= nbMinutes*60;
 
	var nbSeconds=reste;
 
	if (nbJours>0)
	    result=result+nbJours+'j ';

	if (nbHours>0)
	    result=result+nbHours+'h ';
 
	if (nbMinutes>0)
	    result=result+nbMinutes+'min ';
 
	if (nbSeconds>0)
	    result=result+nbSeconds+'s ';
 
	return result;
}

console.log(conversion_seconde_heure(cumulesecondes));















