



window.addEventListener("load", function() {
  // Class permettant de creer un labyrinthe;
  var Map = {
    init: function(grid, pos) {
      this.grid = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        ["in", 0, 0, 0, 0, 0, 0, 1, 2, 0, 1, 1],
        [1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 1, 1, 1, 1, 0, 0, 4, 1, 1],
        [1, 1, 0, 3, 1, 0, 0, 0, 1, 1, 1, 1],
        [1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, "out"],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
      ];

      this.pos = [0, 2];
    },

    /*
    function display : afficher le labyrinthe
        Pour chaque row de Map
            creer une row
                Pour chaque element d'une row
                    ajouter un <td> a la row en fonction du symbole
            Ajouter chaque row a Labyrinthe
    */
    display: function() {
      for (var y = 0; y < this.grid.length; y++) {
        var row = "<tr>";

        for (var x = 0; x < this.grid[y].length; x++) {
          if (this.grid[y][x] === 1) {
            row += '<td bgcolor="black"></td>';
          } else if (x === this.pos[0] && y === this.pos[1]) {
            row +=
              '<td id="image-dwwm"><img class="img-circle" src="img/dwwm.png" alt="DWWM"></td>';
          } else if (this.grid[y][x] === "in") {
            row +=
              '<td><i class="fa fa-minus-circle" aria-hidden="true"></i></td>';
          } else if (this.grid[y][x] === "out") {
            row +=
              '<td><i class="fa fa-long-arrow-right" aria-hidden="true"></i></td>';
          } else {
            row += "<td></td>";
          }
        }
        document
          .getElementById("labyrinthe")
          .insertAdjacentHTML("beforeEnd", row);
      }
    },

    /*
    function check: verifier le deplacement
        si on est en dehors du labyrinthe, deplacement impossible
        si this.grid[x][y] === 1 on rencontre un mur
        si this.grid[x][y] === 'out' on a gagné
    */
    check: function(x, y) {
      if (
        x < 0 ||
        y < 0 ||
        x > this.grid[0].length - 1 ||
        y > this.grid.length - 1
      ) {
      // déplacement impossible
	  console.log("déplacement impossible ! (vous êtes au début/fin");
      } else if (this.grid[y][x] === 1) {
      // il y a un mur
	  console.log("mur !");
      } else if (this.grid[y][x] === "out") {
        return this.pos = [0, 2];
      } else {
        return [x, y];
      }
    }
  };

  /*
function listenToKeyboard: fonction appliqué a l'ecoute du clavier
    on modifie les coordonnées apres verification
    on actualise le labyrinthe
*/
  function listenToKeyboard(e) {
    var key = e.keyCode;
    var move;
    switch (key) {
      case 39:
        move = labyrinthe.check(labyrinthe.pos[0] + 1, labyrinthe.pos[1]);
		if (move !== undefined) {
        labyrinthe.pos[0] = move[0];
        labyrinthe.pos[1] = move[1];
		}
		document.getElementById("labyrinthe").innerHTML = "";
        labyrinthe.display();
        document.getElementById("image-dwwm").innerHTML = "<img class='img-circle' src='img/dwwm_droite.png' alt='DWWM'>";
        break;
      case 37:
        move = labyrinthe.check(labyrinthe.pos[0] - 1, labyrinthe.pos[1]);
		if (move !== undefined) {
        labyrinthe.pos[0] = move[0];
        labyrinthe.pos[1] = move[1];
		}
        document.getElementById("labyrinthe").innerHTML = "";
        labyrinthe.display();
        document.getElementById("image-dwwm").innerHTML = "<img class='img-circle' src='img/dwwm_gauche.png' alt='DWWM'>";
        break;
      case 40:
        move = labyrinthe.check(labyrinthe.pos[0], labyrinthe.pos[1] + 1);
		if (move !== undefined) {
        labyrinthe.pos[0] = move[0];
        labyrinthe.pos[1] = move[1];
		}
        document.getElementById("labyrinthe").innerHTML = "";
        labyrinthe.display();
        document.getElementById("image-dwwm").innerHTML = "<img class='img-circle' src='img/dwwm_bas.png' alt='DWWM'>";
        break;
      case 38:
        move = labyrinthe.check(labyrinthe.pos[0], labyrinthe.pos[1] - 1);
		if (move !== undefined) {
        labyrinthe.pos[0] = move[0];
        labyrinthe.pos[1] = move[1];
		}
        document.getElementById("labyrinthe").innerHTML = "";
        labyrinthe.display();
        document.getElementById("image-dwwm").innerHTML = "<img class='img-circle' src='img/dwwm_haut.png' alt='DWWM'>";
        break;
      default:
        console.log("touche inconnue");
    }
  }

  var labyrinthe = Object.create(Map);
  labyrinthe.init();
  labyrinthe.display();

  document.addEventListener("keydown", listenToKeyboard);
});



/*labyrinthe est js
réaliser un algo pour sortir du labinthe
simplement avancer
et peut tourner que sur la gauche*/