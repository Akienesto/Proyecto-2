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
    tabla_body.innerText = ""
    for (let i = 0; i < matches.length; i++) {
        const tr = document.createElement("tr");
        let local1 = document.createElement("img");
        local1.setAttribute("src", "https://crests.football-data.org/" + matches[i].homeTeam.id + ".svg")
        local1.classList.add("imagenes")
        let local = document.createElement("p");
        local.innerHTML = matches[i].homeTeam.name;
        let visitante1 = document.createElement("img");
        visitante1.setAttribute("src", "https://crests.football-data.org/" + matches[i].awayTeam.id + ".svg")
        visitante1.classList.add("imagenes")
        let visitante = document.createElement("p");
        visitante.innerHTML = matches[i].awayTeam.name;
         resultado =  matches[i].score.fullTime.homeTeam + "-" + matches[i].score.fullTime.awayTeam
        if (resultado === "null-null"){
            resultado = "Por jugar"
        }else {
            resultado.textContent =  matches[i].score.fullTime.homeTeam + "-" + matches[i].score.fullTime.awayTeam
        }
        let fecha = new Date(matches[i].utcDate);
        let jornada = document.createElement("p");
        jornada.innerHTML = matches[i].matchday;
        jornada.classList.add("jornada")
        let datos3 = [local1, local, resultado, visitante, visitante1, fecha.toLocaleString(), jornada];
        for (let j = 0; j < datos3.length; j++) {
            const td = document.createElement("td");
            td.append(datos3[j]);
            tr.appendChild(td);
        }
        tabla_body.appendChild(tr);
    }
}
crearTabla(partidos);

let boton = document.getElementById("boton");
boton.addEventListener("click", () => {
    filtros(partidos);
})

function filtros(equipos) {
    let buscar = document.getElementById("buscarEq").value;
    let inputEq = equipos.filter(e => {
        if ((e.homeTeam.name.toLowerCase().includes(buscar.toLowerCase())) || (e.awayTeam.name.toLowerCase().includes(buscar.toLowerCase()))){
            return true;
        }
        else {
            return false;
        }
    })
    crearTabla(inputEq);
}

