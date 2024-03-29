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
        estadisticas(partidos);
        estadisticas1(partidos);
        quitarSpinner();
    })
}
getFetch("https://api.football-data.org/v2/competitions/2014/matches");

// COGER DATOS DE OTRAS LIGAS
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

// FUNCION PARA MEDIA GOLEADORA
function estadisticas(stats) {
    let estPart = []
     for (let i = 0; i < stats.length; i++) {   //COGER SOLO PARTIDOS ACABADOS
        let partidoFin = stats[i].status
        if (partidoFin != "FINISHED") {
            continue
        }
        let localId = stats[i].homeTeam.id
        let visitId = stats[i].awayTeam.id
        let localName = stats[i].homeTeam.name          //DECLARAR VARIABLES
        let visitName = stats[i].awayTeam.name
        let localGoals = stats[i].score.fullTime.homeTeam
        let visitGoals = stats[i].score.fullTime.awayTeam

        let localFound;                  //ENCONTRAR EQUIPOS LOCALES
        estPart.forEach(x => {
            if (x.id === localId) {
                localFound = x
            }
        })
        if (localFound == undefined) {   //CREAR ARRAY estPart[] LOCAL
            estPart.push({
                id: localId,
                name: localName,
                goals: localGoals,
                matches: 1
            })
        } else {
            localFound.matches++                 //AÑADIR GOLES COMO LOCAL POR PARTIDO
            localFound.goals += localGoals
        }

        let visitFound;                    //ENCONTRAR EQUIPOS VISITANTES
        estPart.forEach(x => {
            if (x.id === visitId) {
                visitFound = x
            }
        })
        if (visitFound == undefined) {    //CREAR ARRAY estPart[] VISITANTE
            estPart.push({
                id: visitId,
                name: visitName,
                goals: visitGoals,
                matches: 1
            })
        } else {
            visitFound.matches++               //AÑADIR GOLES COMO VISITANTE POR PARTIDO
            visitFound.goals += visitGoals
        }
    }
    for (let j = 0; j < estPart.length; j++) {         //RECORRER ARRAY CREADA estPart[] Y HACER MEDIA,ORDENADA CON SORT
        let media = estPart[j].goals / estPart[j].matches
        estPart[j].avg = media
        estPart.sort(function (a, b) {
            return b.avg - a.avg
        })
    }
    console.log(estPart)

    function crearTabla(medias) {              //CREAR TABLA DE MEDIA GOLEADORA(LOS 5 PRIMEROS CON SPLICE)
        let tabla_body = document.getElementById("tabla_body");
        tabla_body.innerText = ""
        let equipos5 = estPart.splice(0, 5)
        for (let i = 0; i < equipos5.length; i++) {
            const tr = document.createElement("tr");
            let escudo = document.createElement("img");
            escudo.setAttribute("src", "https://crests.football-data.org/" + equipos5[i].id + ".svg")
            escudo.classList.add("imagenes")
            let equipo = document.createElement("p");
            equipo.innerHTML = equipos5[i].name;
            let goles = document.createElement("p");
            goles.innerHTML = equipos5[i].goals;
            let partidos1 = document.createElement("p");
            partidos1.innerHTML = equipos5[i].matches;
            let media1 = document.createElement("p");
            media1.innerHTML = equipos5[i].avg.toFixed(2);
            let datos4 = [escudo, equipo, goles, partidos1, media1];
            for (let j = 0; j < datos4.length; j++) {
                const td = document.createElement("td");
                td.append(datos4[j]);
                tr.appendChild(td);
            }
            tabla_body.appendChild(tr);

        }
    }
    crearTabla(estPart);
}
// FUNCION MENOS GOLEADOS COMO VISITANTE
function estadisticas1(stats) {
    let estPart1 = []
    for (let i = 0; i < stats.length; i++) {       //COGER SOLO PARTIDOS ACABADOS
        let partidoFin = stats[i].status
        if (partidoFin != "FINISHED") {
            continue
        }

        let visitId = stats[i].awayTeam.id
        let visitName = stats[i].awayTeam.name
        let localGoals = stats[i].score.fullTime.homeTeam

        let visitFound;                 //ENCONTRAR EQUIPOS VISITANTES
        estPart1.forEach(x => { 
            if (x.id === visitId) {
                visitFound = x
            }
        })
        if (visitFound == undefined) {            //CREAR ARRAY estPar1[] VISITANTE
            estPart1.push({
                id: visitId,
                name: visitName,
                goals: localGoals,
                matches: 1
            })
        } else {
            visitFound.matches++                   //AÑADIR GOLES LOCALES CONTRA EL VISITANTE
            visitFound.goals += localGoals
        }
    }

    estPart1.sort(function (a, b) {              //ORDENAR DE MENOR A MAYOR
        return a.goals - b.goals
    })

    console.log(estPart1)

    function crearTabla1(medias) {            //CREAR TABLA MENOS GOLEADOS COMO VISITANTE(LOS 5 PRIMEROS CON SPLICE)
        let tabla_body2 = document.getElementById("tabla_body2");
        tabla_body2.innerText = ""
        let equipos6 = estPart1.splice(0, 5)
        for (let i = 0; i < equipos6.length; i++) {
            const tr = document.createElement("tr");
            let escudo = document.createElement("img");
            escudo.setAttribute("src", "https://crests.football-data.org/" + equipos6[i].id + ".svg")
            escudo.classList.add("imagenes")
            let equipo = document.createElement("p");
            equipo.innerHTML = equipos6[i].name;
            let goles = document.createElement("p");
            goles.innerHTML = equipos6[i].goals;
            let partidos2 = document.createElement("p");
            partidos2.innerHTML = equipos6[i].matches;
            let datos5 = [escudo, equipo, goles, partidos2];
            for (let j = 0; j < datos5.length; j++) {
                const td = document.createElement("td");
                td.append(datos5[j]);
                tr.appendChild(td);
            }
            tabla_body2.appendChild(tr);

        }
    }
    crearTabla1(estPart1)
}
estadisticas1(partidos)
// QUITAR SPINNER
function quitarSpinner() {
    let spinner = document.getElementById("spinner")
    spinner.style.display = "none"
    spinner.style.visibility = "hidden"
}