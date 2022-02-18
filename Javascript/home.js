function getFetch(url) {
    fetch(url, {
        method: "GET",
        headers: {
            "X-Auth-Token": "43f17841c2c343cdba215bc1a0c80075"
        }
    }).then(response => {
        if (response.ok)
            return response.json();
    }).then(datos4 => {
        let equipos = datos4.teams;
        console.log(equipos)
        sacarEquipos(equipos);
    })
}

getFetch("https://api.football-data.org/v2/competitions/2014/teams");

// COGER DATOS DE OTRAS LIGAS
let premier = document.getElementById("premier");
premier.addEventListener("click", () => {
    const url = "https://api.football-data.org/v2/competitions/2021/teams";
    getFetch(url)
})
let serieA = document.getElementById("serieA");
serieA.addEventListener("click", () => {
    const url = "https://api.football-data.org/v2/competitions/2019/teams";
    getFetch(url)
})
let ligue1 = document.getElementById("ligue1");
ligue1.addEventListener("click", () => {
    const url = "https://api.football-data.org/v2/competitions/2015/teams";
    getFetch(url)
})
let laLiga = document.getElementById("laLiga");
laLiga.addEventListener("click", () => {
    const url = "https://api.football-data.org/v2/competitions/2014/teams";
    getFetch(url)
})
// FUNCION PARA SACAR ESCUDOS Y LINKS DE EQUIPOS
function sacarEquipos(teams1) {        
    let cuerpo = document.getElementById("tablaEquipos");
    cuerpo.innerText = ""
    for (let i = 0; i < teams1.length; i++) {
        let div = document.createElement("div");
        div.classList.add("divEscudos");
        let web = document.createElement("a");
        web.setAttribute("href",teams1[i].website)
        web.classList.add("web");
        let escudos = document.createElement("img");
        escudos.setAttribute("src",teams1[i].crestUrl)
        escudos.classList.add("imagenes1");
        let nombres = document.createElement("p");
        nombres.classList.add("nombres");
        div.append(escudos);
        web.appendChild(div);
        cuerpo.appendChild(web);
    }
}