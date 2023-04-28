const srcAlbumMini = "albumsMini/"; // emplacement des images des albums en petit
const srcAlbum = "albums/"; // emplacement des images des albums en grand

var SeriesList = [];
var TitresList = [];
var AuteursList = [];
var AuteursNameList = [];

function LoadBD(albums){
	//Reset de l'id load_bd
	//document.getElementById("load_bd").innerHTML = "";
		
	for (const [key, value] of albums) {
		// id
		console.log(key);
		//Titre
		console.log(value.titre);
		//Numéro
		console.log(value.numero);
		//Série
		var search_serie = series.get(value.idSerie);
		console.log(search_serie.nom);
		//Auteur
		var search_auteur = auteurs.get(value.idAuteur);
		console.log(search_auteur.nom);
		// prix
		console.log(value.prix);
		
        
        //Si la Série n'est pas présent dans le tableau SeriesList
        if (SeriesList.indexOf(value.idSerie) == -1) {
            // on l'insert (push)
            SeriesList.push(value.idSerie);
			//Ajout dans le listing option
			var option = document.createElement("option");
			option.value = value.idSerie;
			option.innerText = search_serie.nom;
			document.getElementById("serie_search").appendChild(option);
        }
		
        
        //Si le Titre n'est pas présent dans le tableau TitresList
        if (TitresList.indexOf(key) == -1) {
            // on l'insert (push)
            TitresList.push(key);
			//Ajout dans le listing option
			var option = document.createElement("option");
			option.value = key;
			option.innerText = value.titre;
			document.getElementById("titre_search").appendChild(option);
        }
		
        
        //Si l'auteur n'est pas présent dans le tableau AuteursList
        if (AuteursList.indexOf(value.idAuteur) == -1) {
            // on l'insert (push)
            AuteursList.push(value.idAuteur);
			//Ajout dans le listing option			
			
			const auteur_nb = search_auteur.nom.split(', ');
			//On crée la liste des auteurs
			for (var y = 0; y < auteur_nb.length; y++) {
				var author_name = auteur_nb[y];
				//Si l'auteur n'est pas présent dans le tableau authorsList
				if (AuteursNameList.indexOf(author_name) == -1) {
					// on l'insert (push)
					AuteursNameList.push(author_name);
					// on l'insert dans le listing des options
					var option = document.createElement("option");
					option.value = author_name.toLowerCase(); // en minuscule
					option.innerText = author_name;
					document.getElementById("auteur_search").appendChild(option);
				}
			}
        }
		
		
	    // Build des cards
		var bddiv = document.createElement("div");
		bddiv.setAttribute("data-serie", search_serie.nom);
		bddiv.setAttribute("data-titre", value.titre);
		bddiv.setAttribute("data-auteur", search_auteur.nom);
		bddiv.setAttribute("data-id", key);
        document.getElementById("load_bd").appendChild(bddiv);
	
	
		bddiv.innerHTML = "<div class='card mb-3'>"
	+"<div class='row'>"
    +"<div class='col-lg-2 col-md-2 col-sm-6 col-xs-12 col-xs-B-12 d-flex align-items-center justify-content-center'>"
      +"<img class='img-fluid rounded-start' id='albumMini_"+ key +"'>"
	+"</div>"
    +"<div class='col-md-4 col-md-4 col-sm-6 col-xs-12 col-xs-B-12 d-flex align-items-center justify-content-center'>"
      +"<div class='card-body'>"
        +"<h5 class='card-title'>"+ search_serie.nom +" <span class='badge badge-warning float-right'>N°"+ value.idSerie +"</span></h5>"
        +"<p class='card-text'>"+ value.titre +"</p>"
        +"<p class='card-text'>"
			+"<button type='button' class='btn btn-outline-danger verticlal-center' data-bs-toggle='modal' data-bs-target='#ModalBD' data-id='"+key+"' id='"+key+"'>Afficher toutes les informations</button>"
		+"</p>"
      +"</div>"
    +"</div>"
    +"<div class='col-md-4 col-md-4 col-sm-6 col-xs-6 col-xs-B-12 d-flex align-items-center justify-content-center'>"
      +"<div class='card-body'>"
		+"<div class='verticlal-center'>"
		+"<div class='row'>"
		+"<div class='col-md-12 col-md-12 col-sm-12 col-xs-12 col-xs-B-12'>"
	        +"Prix par unité : <span id='prix_"+key+"'>"+ value.prix +"</span> €"
		+"</div>"
		+"</div>"
		+"</div>"
      +"</div>"
    +"</div>"
    +"<div class='col-md-2 col-md-2 col-sm-6 col-xs-6 col-xs-B-12 d-flex align-items-center justify-content-center'>"
      +"<div class='card-body'>"
			+"<button class='btn btn-outline-success verticlal-center'>Ajouter</button>"
      +"</div>"
    +"</div>"
    +"</div>"
  +"</div>";
		
		//Transformation pour photo
		var nomFic = search_serie.nom + "-" + value.numero + "-" + value.titre;
		
			// Utilisation d'une expression régulière pour supprimer 
			// les caractères non autorisés dans les noms de fichiers : '!?.":$
			nomFic = nomFic.replace(/'|!|\?|\.|"|:|\$/g, "");

        console.log(nomFic);
			afficheAlbums($("#albumMini_"+key), srcAlbumMini + nomFic + ".jpg", nomFic + ".jpg");
		
		
	}
	//On cache le loader
	$("#loader_bd").hide();
}



	/**
	 * Affichage des images, les effets sont chainés et traités
	 * en file d'attente par jQuery d'où les "stop()) et "clearQueue()" 
	 * pour éviter l'accumulation d'effets si défilement rapide des albums.
	 * 
	 * @param {object jQuery} $albumMini 
	 * @param {string} nomFic 
	 */
	function afficheAlbums($albumMini, nomFicMini, nomFicMini_alt) {
		$albumMini.stop(true, true).clearQueue().fadeOut(150, function () {
			$albumMini.attr('src', nomFicMini);
			$albumMini.attr('alt', nomFicMini_alt);
				$albumMini.slideDown(200);
		});
	}

// On charge toutes les BD au chargement de la page index
LoadBD(albums);

// Add -
document.getElementById("moins_item").addEventListener("click", function() {
	var value_init = document.getElementById("number_item_add").value;
	if(value_init > 1){
		document.getElementById("number_item_add").value = parseInt(value_init - 1);
	}
});

// Add +
document.getElementById("plus_item").addEventListener("click", function() {
	var value_init = document.getElementById("number_item_add").value;
	if(value_init < 101){
		document.getElementById("number_item_add").value = (parseInt(value_init)+1);
	}
});

//On lance le remplissage des infos dans le modal
const els = Array.from(document.querySelectorAll('[data-id]'));
for(const el of els) {
  el.addEventListener('click', () => {
	  console.log(el);
	  document.getElementById("load_bd").style.display = "block";
	  
	  console.log(el.id);
	  console.log(albums.get(el.id));
	  var value_focus = albums.get(el.id);
		//Titre
		console.log(value_focus.titre);
		//Numéro
		console.log(value_focus.numero);
		//Série
		var search_serie = series.get(value_focus.idSerie);
		console.log(search_serie.nom);
		//Auteur
		var search_auteur = auteurs.get(value_focus.idAuteur);
		console.log(search_auteur.nom);
		// prix
		console.log(value_focus.prix);

        document.getElementById("titleBD").innerHTML = search_serie.nom;
		
  });
}

// Si on change la valeur du select Serie
document.getElementById("serie_search").addEventListener('change', function() {
  var value_serie_change = document.getElementById("serie_search");
  //Reset des tableaux auteurs
  AuteursList = [];
  AuteursNameList = [];
  //on rebuild le search
  Rebuild_Titre_search(document.getElementById("serie_search").value);
});

//Rebuild de tout les titres et auteur en fonction de la série
function Rebuild_Titre_search(id_serie){
	//Reset du listing titre
	document.getElementById("titre_search").innerHTML = "";
	var searchtitreoption = document.createElement("option");
	searchtitreoption.setAttribute("value", "reset");
    document.getElementById("titre_search").appendChild(searchtitreoption);
	searchtitreoption.innerHTML = "-- Sélectionner un titre --";
	
	// Reset du listing auteur
	document.getElementById("auteur_search").innerHTML = "";
	var searchauteuroption = document.createElement("option");
	searchauteuroption.setAttribute("value", "reset");
    document.getElementById("auteur_search").appendChild(searchauteuroption);
	searchauteuroption.innerHTML = "-- Sélectionner un auteur --";

	for (const [key, value] of albums) {
		//Ajout dans le listing option si l'id.Serie est ok
		if(value.idSerie == id_serie){
			var option = document.createElement("option");
			option.value = key;
			option.innerText = value.titre;
			document.getElementById("titre_search").appendChild(option);			
			//Add auteur
			AddAuteur(value.idAuteur);
			console.log("valeur de l'auteur : "+value.idAuteur);
		}
		else if (id_serie == "reset"){
			var option = document.createElement("option");
			option.value = key;
			option.innerText = value.titre;
			document.getElementById("titre_search").appendChild(option);			
			//Add auteur
			AddAuteur(value.idAuteur);
		}
	}
}



// Si on change la valeur du select Serie
document.getElementById("titre_search").addEventListener('change', function() {
  var value_titre_change = document.getElementById("titre_search");
  //Reset des tableaux auteurs
  AuteursList = [];
  AuteursNameList = [];
	// Reset du listing auteur
	document.getElementById("auteur_search").innerHTML = "";
	var searchauteuroption = document.createElement("option");
	searchauteuroption.setAttribute("value", "reset");
    document.getElementById("auteur_search").appendChild(searchauteuroption);
	searchauteuroption.innerHTML = "-- Sélectionner un auteur --";
	
	
  //on rebuild le search auteur
  //On Cible la valeur de la BD -> Auteur
  var cible_bd = albums.get(value_titre_change.value);
  //console.log("valeur de l'auteur : "+cible_bd.idAuteur);
  AddAuteur(cible_bd.idAuteur);
  
});


// Build de l'auteur
function AddAuteur(idAuteur){
		var search_auteur = auteurs.get(idAuteur);
		console.log(search_auteur.nom);
		//Si l'auteur n'est pas présent dans le tableau AuteursList
        if (AuteursList.indexOf(idAuteur) == -1) {
            // on l'insert (push)
            AuteursList.push(idAuteur);
			//Ajout dans le listing option			
			
			const auteur_nb = search_auteur.nom.split(', ');
			//On crée la liste des auteurs
			for (var y = 0; y < auteur_nb.length; y++) {
				var author_name = auteur_nb[y];
				//Si l'auteur n'est pas présent dans le tableau authorsList
				if (AuteursNameList.indexOf(author_name) == -1) {
					// on l'insert (push)
					AuteursNameList.push(author_name);
					// on l'insert dans le listing des options
					var option = document.createElement("option");
					option.value = author_name.toLowerCase(); // en minuscule
					option.innerText = author_name;
					document.getElementById("auteur_search").appendChild(option);
				}
			}
        }
}

// Si on click sur le bouton reset
document.getElementById("reset_filtre").addEventListener('click', function() {
  $('#serie_search').prop('selectedIndex', 0);
  var value_serie_change = document.getElementById("serie_search");
  //Reset des tableaux auteurs
  AuteursList = [];
  AuteursNameList = [];
  //on rebuild le search
  Rebuild_Titre_search(document.getElementById("serie_search").value);	
});


// Si on click sur le bouton rechercher
document.getElementById("Search").addEventListener('click', function() {

//On affiche le loader
$("#loader_bd").show();




//On cible la valeur de lu listing série
var value_serie_change = document.getElementById("serie_search");


//Valeur textuel du select
choice_serie = value_serie_change.selectedIndex;
texte_du_select_serie = value_serie_change.options[choice_serie].text;
	
//On cible toutes les data-search-serie de serie
const els_serie = document.querySelectorAll('[data-serie]');

  //Si serie n'est pas vide
  if(document.getElementById("serie_search").value != "reset"){
    for (var x = 0; x < els_serie.length; x++){
		
		
          if(els_serie[x].dataset.serie == texte_du_select_serie){
			
			$(els_serie[x]).show();
			
			console.log("oui");
          }
	  
	  
	  
	  else{
		  $(els_serie[x]).hide();
	  }
    }
  }
  else{
	//Si titre et auteur son vide
    if(document.getElementById("titre_search").value == "reset" && document.getElementById("auteur_search").value == "reset"){	  
		for (var x = 0; x < els_serie.length; x++){
			$(els_serie[x]).show();
		}
	}
  }
  
  
//On cible la valeur de lu listing titre
var value_titre_change = document.getElementById("titre_search");
//Valeur textuel du select
choice_titre = value_titre_change.selectedIndex;
texte_du_select_titre = value_titre_change.options[choice_titre].text;
	
//On cible toutes les data-titre de titre
const els_titre = document.querySelectorAll('[data-titre]');

  //Si titre n'est pas vide
  if(document.getElementById("titre_search").value != "reset"){
    for (var x = 0; x < els_titre.length; x++){
		
		
          if(els_titre[x].dataset.titre == texte_du_select_titre){
			
			$(els_titre[x]).show();
			
			console.log("oui");
          }
	  
	  
	  
	  else{
		  $(els_titre[x]).hide();
	  }
    }
  }
  else{	  
	//Si titre et auteur son vide
    if(document.getElementById("serie_search").value == "reset" && document.getElementById("auteur_search").value == "reset"){	  
		for (var x = 0; x < els_titre.length; x++){
			$(els_titre[x]).show();
		}
	}
  }
  
  
//On cible la valeur de lu listing auteur
var value_auteur_change = document.getElementById("auteur_search");
//Valeur textuel du select
choice_auteur = value_auteur_change.selectedIndex;
texte_du_select_auteur = value_auteur_change.options[choice_auteur].text;
	
//On cible toutes les data-auteur de auteur
const els_auteur = document.querySelectorAll('[data-auteur]');

  //Si auteur n'est pas vide
  if(document.getElementById("auteur_search").value != "reset"){
    for (var x = 0; x < els_auteur.length; x++){
		var count_auto = 0;
		var auteur_see = els_auteur[x].dataset.auteur.split(', ');

			for (var y = 0; y < auteur_see.length; y++) {
				var author_name = auteur_see[y];
				console.log("recherche de "+texte_du_select_auteur + " dans "+els_auteur[x].dataset.auteur);
				//Si l'auteur correspond au listing on fait +1
				if (author_name == texte_du_select_auteur) {
					count_auto++;
				}
			}		
		
		
          if(count_auto > 0){
			
			$(els_auteur[x]).show();
			
			console.log("oui");
          }
	  
	  
	  
	  else{
		  $(els_auteur[x]).hide();
	  }
    }
  }
  else{	  
	//Si auteur et auteur son vide
    if(document.getElementById("serie_search").value == "reset" && document.getElementById("titre_search").value == "reset"){	  
		for (var x = 0; x < els_auteur.length; x++){
			$(els_auteur[x]).show();
		}
	}
  }
  
  
  
  
	//On cache le loader
	$("#loader_bd").hide();

});




