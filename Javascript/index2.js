function getFetch(url) {
    fetch(url, {
        method: "GET",
        headers: {
            "X-Auth-Token": "43f17841c2c343cdba215bc1a0c80075"
        }
    }).then(response => {
        if (response.ok)
            return response.json();
    }).then(datos2 => {
                let clasificacion = datos2.standings[0].table;
        console.log(clasificacion)
        quitarSpinner();
        crearTabla(clasificacion);
    })
}
getFetch("https://api.football-data.org/v2/competitions/2014/standings");

let premier = document.getElementById("premier");
premier.addEventListener("click",()=> {
    const url = "https://api.football-data.org/v2/competitions/2021/standings";
    getFetch(url)
})
let serieA = document.getElementById("serieA");
serieA.addEventListener("click",()=> {
    const url = "https://api.football-data.org/v2/competitions/2019/standings";
    getFetch(url)
})
let ligue1 = document.getElementById("ligue1");
ligue1.addEventListener("click",()=> {
    const url = "https://api.football-data.org/v2/competitions/2015/standings";
    getFetch(url)
})
let laLiga = document.getElementById("laLiga");
laLiga.addEventListener("click",()=> {
    const url = "https://api.football-data.org/v2/competitions/2014/standings";
    getFetch(url)
})

function crearTabla(lista) {
    let tabla_body = document.getElementById("tabla_body");
    tabla_body.innerText = ""
    for (let i = 0; i < lista.length; i++) {
        const tr = document.createElement("tr");
        let posicion = document.createElement("p");
        posicion.innerHTML = lista[i].position;
        posicion.classList.add("posicion");
        let escudos = document.createElement("img");
        escudos.setAttribute("src",lista[i].team.crestUrl)
        escudos.classList.add("imagenes");
        let equipos = document.createElement("p");
        equipos.innerHTML = lista[i].team.name;
        let puntos = document.createElement("p");
        puntos.innerHTML = lista[i].points;
        puntos.classList.add("puntos");
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
        let datos3 = [posicion ,escudos, equipos, puntos, pj, pg, pp, pe, gf, gc, dg];
        for (let j = 0; j < datos3.length; j++) {
            const td = document.createElement("td");
            td.append(datos3[j]);
            tr.appendChild(td);
        }
        tabla_body.appendChild(tr);
    }
}

function quitarSpinner() {
    let spinner = document.getElementById("spinner")
    spinner.style.display = "none"
    spinner.style.visibility = "hidden"
}