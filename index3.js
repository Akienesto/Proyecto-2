let partidos = (datos1.matches)
console.log(partidos)
function estadisticas (stats) {
    let estPart = []
    for (let i = 0; i < stats.length; i++) {
        let partidoFin = stats[i].status
        if (partidoFin != "FINISHED") {
            continue
        }
        let localId = stats[i].homeTeam.id
        let visitId = stats[i].awayTeam.id
        let localName = stats[i].homeTeam.name
        let visitName = stats[i].awayTeam.name
        let localGoals = stats[i].score.fullTime.homeTeam
        let visitGoals = stats[i].score.fullTime.awayTeam
        
        let localFound;
        estPart.forEach( x =>{
            if (x.id === localId){
                localFound = x
            }
        })
        if (localFound == undefined) {
            estPart.push({
                id : localId,
                name : localName,
                goals : localGoals,
                matches : 1
            })
        } else {
            localFound.matches++
            localFound.goals += localGoals
        }

        let visitFound;
        estPart.forEach( x =>{
            if (x.id === visitId){
                visitFound = x
            }
        })
        if (visitFound == undefined) {
            estPart.push({
                id : visitId,
                name : visitName,
                goals : visitGoals,
                matches : 1
            })
        } else {
            visitFound.matches++
            visitFound.goals += visitGoals
        }
    } 
    for (let j = 0; j < estPart.length; j++) {
        let media = estPart[j].goals / estPart[j].matches
        estPart[j].avg = media
        estPart.sort(function(a,b)
        {return b.avg-a.avg})
    }
    console.log(estPart)
    function crearTabla(medias) {
        let tabla_body = document.getElementById("tabla_body");
        let equipos5 = estPart.splice(5,15)
        for (let i = 0; i < equipos5.length; i++) {
            const tr = document.createElement("tr");
            let equipo = document.createElement("p");
            equipo.innerHTML = medias[i].name;
            let goles = document.createElement("p");
            goles.innerHTML = medias[i].goals;
            let partidos1 = document.createElement("p");
            partidos1.innerHTML = medias[i].matches;
            let media1 = document.createElement("p");
            media1.innerHTML = medias[i].avg;
            let datos4 = [equipo,goles,partidos1,media1];
            for (let j = 0; j < datos4.length; j++) {
                const td = document.createElement("td");
                td.append(datos4[j]);
                tr.appendChild(td); 
            }
            tabla_body.appendChild(tr);
            
        }
    }
    crearTabla(estPart)
}
estadisticas(partidos)
