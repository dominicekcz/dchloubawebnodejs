$(() => {
    loadMsgs()
})

let loadMsgs = () => {
    $.post("loadMsgs", (res) => {
        let html = ""
        for(let i = 0; i < res.length; i++){
            let msgStatus
            if(res[i].viewed == 0) msgStatus = "Nepřečteno"
            else msgStatus = "Přečteno"
            html += '<div class="msgBlock"><h1>Stav: <span>'+msgStatus+'</span></h1><h2>'+res[i].datetime+'</h2><div id="separatorLine"></div><p>Zpráva od '+res[i].fullname+' s e-mailovou adresou '+res[i].email+'</p><a class="internalLink" href="./zobrazitzpravu/'+res[i].id+'"><button>Zobrazit zprávu</button></a></div>'
            if(i != res.length - 1) html += '<div id="longSepLine"></div>'
        }
        $("section#loadedMsgs").append(html)
    }, "json")
}