$(() => {
    $("button.readMsgs").click(loadReadMsgs)
})

let loadReadMsgs = () => {
    let readMsgs = ""
    $("section#messageManagerControls button").css({border: "none"})
    $("section#messageManagerControls button.readMsgs").css({borderBottom: "1px solid gray"})
    $.post("spravazprav/loadReadMsgs", (res) => {
        if(res.length == 0) readMsgs += "Žádné záznamy"
        for(let i = 0; i < res.length; i++){
            readMsgs += '<div class="overviewItem"><div class="overviewItemTitle">'+res[i].fullname+'</div><div class="overviewItemLine"></div><p>'+res[i].datetime+'</p><button data-id="'+res[i].id+'" class="overviewItemShow">Zobrazit</button><button data-id="'+res[i].id+'" class="overviewItemDelete">Smazat</button></div>'
        }
        readMsgs += '<script type="text/javascript" src="../public/js/msgManager/deleteMsg.js"></script>'
        $("section#messageManagerContainer").html(readMsgs)
    }, "json")
}