// console.log(datos2);
console.log(datos2.standings[0].table)
let clasificacion = (datos2.standings[0].table);
// for (let i = 0; i < clasificacion.length; i++) {
//     console.log((clasificacion[i].team))
//     console.log((clasificacion[i].position))
//     console.log((clasificacion[i].points))
//     console.log((clasificacion[i].playedGames))
//     console.log((clasificacion[i].won))
//     console.log((clasificacion[i].lost))
//     console.log((clasificacion[i].draw))
//     console.log((clasificacion[i].goalsFor))
//     console.log((clasificacion[i].goalsAgainst))
//     console.log((clasificacion[i].goalDifference))
// }
function crearTabla(lista) {
    let tabla_body = document.getElementById("tabla_body");
    for (let i = 0; i < lista.length; i++) {
        const tr = document.createElement("tr");
        let escudos = document.createElement("img");
        escudos.setAttribute("src",lista[i].team.crestUrl)
        escudos.classList.add("imagenes")
        let equipos = document.createElement("p");
        equipos.innerHTML = lista[i].team.name;
        let puntos = document.createElement("p");
        puntos.innerHTML = lista[i].points;
        let pj = document.createElement("p");
        pj.innerHTML = lista[i].playedGames;
        let pg = document.createElement("p");
        pg.innerHTML = lista[i].won;
        let pp = document.createElement("p");
        pp.innerHTML = lista[i].lost;
        let pe = document.createElement("p");
        pe.innerHTML = lista[i].draw;
        let gf = document.createElement("p");
        gf.innerHTML = lista[i].goalsFor;
        let gc = document.createElement("p");
        gc.innerHTML = lista[i].goalsAgainst;
        let dg = document.createElement("p");
        dg.innerHTML = lista[i].goalDifference;
        let datos3 = [escudos, equipos, puntos, pj, pg, pp, pe, gf, gc, dg];
        for (let j = 0; j < datos3.length; j++) {
            const td = document.createElement("td");
            td.append(datos3[j]);
            tr.appendChild(td);
        }
        tabla_body.appendChild(tr);
    }
}

crearTabla(clasificacion);