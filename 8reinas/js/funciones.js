var reinasPorColocar = 8;
var reinasColocadas = 0;

function colocarReina(celda) {
    if (window.getComputedStyle(celda).backgroundImage == "none") {
        if (reinasColocadas < 8) {
            celda.style.backgroundImage = "url(./img/reina.png)";
            celda.style.backgroundSize = "cover";
            var renglon = celda.parentElement.rowIndex;
            var columna = celda.cellIndex;
            var tablero = document.getElementById("tabla");

            // Bloquear filas y columnas
            for (let i = 0; i < 8; i++) {
                if (columna != i) {
                    tablero.rows[renglon].cells[i].removeAttribute("onclick");
                    tablero.rows[renglon].cells[i].style.backgroundColor = "#ff0000";
                }
                if (renglon != i) {
                    tablero.rows[i].cells[columna].removeAttribute("onclick");
                    tablero.rows[i].cells[columna].style.backgroundColor = "#ff0000";
                }
            }

            // Bloquear diagonales
            var r, c;
            r = renglon;
            c = columna;
            while (r >= 0 && c < 8) {
                tablero.rows[r].cells[c].removeAttribute("onclick");
                tablero.rows[r].cells[c].style.backgroundColor = "#ff0000";
                r--;
                c++;
            }

            r = renglon;
            c = columna;
            while (c >= 0 && r < 8) {
                tablero.rows[r].cells[c].removeAttribute("onclick");
                tablero.rows[r].cells[c].style.backgroundColor = "#ff0000";
                r++;
                c--;
            }

            r = renglon;
            c = columna;
            while (r >= 0 && c >= 0) {
                tablero.rows[r].cells[c].removeAttribute("onclick");
                tablero.rows[r].cells[c].style.backgroundColor = "#ff0000";
                r--;
                c--;
            }

            r = renglon;
            c = columna;
            while (r < 8 && c < 8) {
                tablero.rows[r].cells[c].removeAttribute("onclick");
                tablero.rows[r].cells[c].style.backgroundColor = "#ff0000";
                r++;
                c++;
            }

            reinasPorColocar--;
            reinasColocadas++;
        }
    } else {
        celda.style.backgroundImage = "none";
        var renglon = celda.parentElement.rowIndex;
        var columna = celda.cellIndex;
        var tablero = document.getElementById("tabla");

        // Restaurar las celdas
        for (let i = 0; i < 8; i++) {
            tablero.rows[renglon].cells[i].setAttribute("onclick", "colocarReina(this)");
            tablero.rows[renglon].cells[i].style.backgroundColor = "";
            tablero.rows[i].cells[columna].setAttribute("onclick", "colocarReina(this)");
            tablero.rows[i].cells[columna].style.backgroundColor = "";
        }

        // Restaurar diagonales
        var r, c;
        r = renglon;
        c = columna;
        while (r >= 0 && c < 8) {
            tablero.rows[r].cells[c].setAttribute("onclick", "colocarReina(this)");
            tablero.rows[r].cells[c].style.backgroundColor = "";
            r--;
            c++;
        }

        r = renglon;
        c = columna;
        while (c >= 0 && r < 8) {
            tablero.rows[r].cells[c].setAttribute("onclick", "colocarReina(this)");
            tablero.rows[r].cells[c].style.backgroundColor = "";
            r++;
            c--;
        }

        r = renglon;
        c = columna;
        while (r >= 0 && c >= 0) {
            tablero.rows[r].cells[c].setAttribute("onclick", "colocarReina(this)");
            tablero.rows[r].cells[c].style.backgroundColor = "";
            r--;
            c--;
        }

        r = renglon;
        c = columna;
        while (r < 8 && c < 8) {
            tablero.rows[r].cells[c].setAttribute("onclick", "colocarReina(this)");
            tablero.rows[r].cells[c].style.backgroundColor = "";
            r++;
            c++;
        }

        reinasPorColocar++;
        reinasColocadas--;
    }

    document.getElementById("reinasColoca").innerHTML = "Reinas por colocar: " + reinasPorColocar;
    document.getElementById("reinasColoca1").innerHTML = "Reinas Colocadas: " + reinasColocadas;
}







function solucion1(valor) {

  var celdas = document.getElementById("tabla");

  switch (valor) {
    case "1":
      celdas.rows[0].cells[3].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[1].cells[6].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[2].cells[2].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[3].cells[7].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[4].cells[1].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[5].cells[4].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[6].cells[0].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[7].cells[5].style = "background-image: url(./img/reina.png); background-size:cover;";
      break;

    case "2":
      celdas.rows[0].cells[4].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[1].cells[1].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[2].cells[3].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[3].cells[6].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[4].cells[2].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[5].cells[7].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[6].cells[5].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[7].cells[0].style = "background-image: url(./img/reina.png); background-size:cover;";
      break;

    case "3":
      celdas.rows[0].cells[3].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[1].cells[1].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[2].cells[6].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[3].cells[2].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[4].cells[5].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[5].cells[7].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[6].cells[4].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[7].cells[0].style = "background-image: url(./img/reina.png); background-size:cover;";
      break;

    case "4":
      celdas.rows[0].cells[3].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[1].cells[5].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[2].cells[7].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[3].cells[2].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[4].cells[0].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[5].cells[6].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[6].cells[4].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[7].cells[1].style = "background-image: url(./img/reina.png); background-size:cover;";
      break;

    case "5":
      celdas.rows[0].cells[2].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[1].cells[5].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[2].cells[7].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[3].cells[0].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[4].cells[3].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[5].cells[6].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[6].cells[4].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[7].cells[1].style = "background-image: url(./img/reina.png); background-size:cover;";
      break;

    case "6":
      celdas.rows[0].cells[4].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[1].cells[2].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[2].cells[7].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[3].cells[3].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[4].cells[6].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[5].cells[0].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[6].cells[5].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[7].cells[1].style = "background-image: url(./img/reina.png); background-size:cover;";
      break;

    default:
      alert("No");
      break;
  }
}