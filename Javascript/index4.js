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
function sacarEquipos(teams1) {
    let cuerpo = document.getElementById("tablaEquipos");
    cuerpo.innerText = ""
    for (let i = 0; i < teams1.length; i++) {
        let div1 = document.createElement("div");
        let div = document.createElement("div");
        let web = document.createElement("a");
        web.setAttribute("href",teams1[i].website)
        web.innerHTML = teams1[i].website;
        web.classList.add("web");
        let escudos = document.createElement("img");
        escudos.setAttribute("src",teams1[i].crestUrl)
        escudos.classList.add("imagenes1");
        let nombres = document.createElement("p");
        nombres.innerHTML = teams1[i].name;
        nombres.classList.add("nombres");
        div1.append(escudos);
        div.appendChild(web);
        div1.append(div)
        div1.appendChild(nombres)
        cuerpo.appendChild(div1);
    }
}