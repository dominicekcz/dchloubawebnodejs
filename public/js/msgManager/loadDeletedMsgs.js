$(() => {
    $("button.deletedMsgs").click(loadDeletedMsgs)
})

let loadDeletedMsgs = () => {
    let deletedMsgs = ""
    $("section#messageManagerControls button").css({border: "none"})
    $("section#messageManagerControls button.deletedMsgs").css({borderBottom: "1px solid gray"})
    $.post("spravazprav/loadDeletedMsgs", (res) => {
        if(res.length == 0) deletedMsgs += "Žádné záznamy"
        for(let i = 0; i < res.length; i++){
            deletedMsgs += '<div class="overviewItem"><div class="overviewItemTitle">'+res[i].fullname+'</div><div class="overviewItemLine"></div><p>'+res[i].datetime+'</p><button data-id="'+res[i].id+'" class="overviewItemShow">Zobrazit</button><button data-id="'+res[i].id+'" class="overviewItemDelete">Obnovit</button><button data-id="'+res[i].id+'" class="overviewItemDelete">Odstranit</button></div>'
        }
        $("section#messageManagerContainer").html(deletedMsgs)
    }, "json")
}