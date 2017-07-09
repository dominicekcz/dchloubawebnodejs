$(() => {
    $.post("owebu/loadChangeLogs", (res) => {
        let html = ""
        for(let i = 0; i < res.length; i++){
            html += '<section><h1>Aktualizace <span>'+res[i].versionName+'</span></h1><h2>'+res[i].descript+'</h2><div id="separatorLine"></div><p>'+res[i].changes+'</p></section>'
            if(res.length > 1 && i < res.length - 1) html += '<div id="longSepLine"></div>'
        }
        $("main").html(html)
    }, "json")
})