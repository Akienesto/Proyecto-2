console.log(datos1.matches);
// console.log(datos1.matches[0].awayTeam);
// for (let i = 0; i < partidos.length; i++) {
//     console.log((partidos[i].awayTeam))
//     console.log((partidos[i].homeTeam))
//     console.log((partidos[i].referees))
//     console.log((partidos[i].score.fullTime))
// }
let partidos = (datos1.matches)

function crearTabla(matches) {
    let tabla_body = document.getElementById("tabla_body");
    for (let i = 0; i < matches.length; i++) {
        const tr = document.createElement("tr");
        let local1 = document.createElement("img");
        local1.setAttribute("src", "https://crests.football-data.org/" + matches[i].homeTeam.id + ".svg")
        let local = document.createElement("p");
        local.innerHTML = matches[i].homeTeam.name;
        let visitante1 = document.createElement("img");
        visitante1.setAttribute("src", "https://crests.football-data.org/" + matches[i].awayTeam.id + ".svg")
        let visitante = document.createElement("p");
        visitante.innerHTML = matches[i].awayTeam.name;
        let resultado1 = document.createElement("p");
        resultado1.innerHTML = matches[i].score.fullTime.homeTeam;
        let resultado2 = document.createElement("p");
        resultado2.innerHTML = matches[i].score.fullTime.awayTeam;
        let fecha = document.createElement("p");
        fecha.innerHTML = matches[i].utcDate;
        let jornada = document.createElement("p");
        jornada.innerHTML = matches[i].matchday;
        let datos3 = [local1,local, resultado1, resultado2, visitante,visitante1, fecha, jornada];
        for (let j = 0; j < datos3.length; j++) {
            const td = document.createElement("td");
            td.append(datos3[j]);
            tr.appendChild(td);
        }
        tabla_body.appendChild(tr);
        local1.classList.add("imagenes")
        visitante1.classList.add("imagenes")
    }
}

crearTabla(partidos);