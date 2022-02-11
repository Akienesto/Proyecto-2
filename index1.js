quitarAlerta1();
quitarAlerta2();
function getFetch(url) {
    fetch(url, {
        method: "GET",
        headers: {
            "X-Auth-Token": "43f17841c2c343cdba215bc1a0c80075"
        }
    }).then(response => {
        if (response.ok)
            return response.json();
    }).then(datos1 => {
        let partidos = datos1.matches;
        console.log(partidos)
        let boton = document.getElementById("boton");
        boton.addEventListener("click", () => {
            filtros(partidos);
        })
        let reset1 = document.getElementById("reset")
        reset1.addEventListener("click",() => {
            quitarAlerta1();
            quitarAlerta2();
            reset();
            crearTabla(partidos);
        })
        quitarSpinner();
        crearTabla(partidos);
    })
}

getFetch("https://api.football-data.org/v2/competitions/2014/matches");

let premier = document.getElementById("premier");
premier.addEventListener("click",()=> {
    const url = "https://api.football-data.org/v2/competitions/2021/matches";
    getFetch(url)
})
let serieA = document.getElementById("serieA");
serieA.addEventListener("click",()=> {
    const url = "https://api.football-data.org/v2/competitions/2019/matches";
    getFetch(url)
})
let ligue1 = document.getElementById("ligue1");
ligue1.addEventListener("click",()=> {
    const url = "https://api.football-data.org/v2/competitions/2015/matches";
    getFetch(url)
})
let laLiga = document.getElementById("laLiga");
laLiga.addEventListener("click",()=> {
    const url = "https://api.football-data.org/v2/competitions/2014/matches";
    getFetch(url)
})
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
        resultado = matches[i].score.fullTime.homeTeam + "-" + matches[i].score.fullTime.awayTeam
        if (resultado === "null-null") {
            resultado = "Por jugar"
        } else {
            resultado.textContent = matches[i].score.fullTime.homeTeam + "-" + matches[i].score.fullTime.awayTeam
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
function reset() {
    document.getElementById("reset").value = ""
    let radioBoton = document.querySelectorAll("input[type=radio]")
    for (i in radioBoton) {
        radioBoton[i].checked = false;
    }
}
function filtros(equipos) {
    let buscar = document.getElementById("buscarEq").value;
    let radioBoton = document.querySelector("input[type=radio]:checked")
    if (buscar == "") {
        return alerta1();
    }
    let inputEq = equipos.filter(e => {
        if ((e.homeTeam.name.toLowerCase().includes(buscar.toLowerCase())) || (e.awayTeam.name.toLowerCase().includes(buscar.toLowerCase()))) {
            return true;
        } else {
            return false;
        }
    })
    if (inputEq.length === 0) {
        return alerta2();
    }
    if (radioBoton === null) {
        return crearTabla(inputEq);
    }
    let resultados2 = inputEq.filter(r => {
        if (radioBoton.value === "ganados") {
            if ((r.homeTeam.name.toLowerCase().includes(buscar.toLowerCase()) && r.score.winner == "HOME_TEAM") ||
                (r.awayTeam.name.toLowerCase().includes(buscar.toLowerCase()) && (r.awayTeam.name.toLowerCase()) && (r.score.winner == "AWAY_TEAM"))) {
                return true;
            }
        }
        if (r.score.winner === "DRAW" && radioBoton.value === "empatados") {
            return true;
        }
        if (radioBoton.value === "perdidos") {
            if ((r.homeTeam.name.toLowerCase().includes(buscar.toLowerCase()) && r.score.winner == "AWAY_TEAM") ||
                (r.awayTeam.name.toLowerCase().includes(buscar.toLowerCase()) && (r.awayTeam.name.toLowerCase()) && (r.score.winner == "HOME_TEAM"))) {
                return true;
            }
        }
        if (radioBoton.value === "porJugar" && r.status == "SCHEDULED") {
            return true;
        }
    })
    console.log(resultados2);
    crearTabla(resultados2);
}
function quitarSpinner() {
    let spinner = document.getElementById("spinner")
    spinner.style.display = "none"
    spinner.style.visibility = "hidden"
}
function alerta1() {
    let alerta1 = document.getElementById("alerta1")
    alerta1.style.display = "block"
}
function quitarAlerta1() {
    let alerta1 = document.getElementById("alerta1")
    alerta1.style.display = "none"
}
function alerta2() {
    let alerta2 = document.getElementById("alerta2")
    alerta2.style.display = "block"
}
function quitarAlerta2() {
    let alerta2 = document.getElementById("alerta2")
    alerta2.style.display = "none"
}