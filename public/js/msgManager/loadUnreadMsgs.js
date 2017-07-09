$(() => {
    loadUnreadMsgs()
    $("button.unreadMsgs").click(loadUnreadMsgs)
})

let loadUnreadMsgs = () => {
    let unreadMsgs = ""
    $("section#messageManagerControls button").css({border: "none"})
    $("section#messageManagerControls button.unreadMsgs").css({borderBottom: "1px solid gray"})
    $.post("spravazprav/loadUnreadMsgs", (res) => {
        if(res.length == 0) unreadMsgs += "Žádné záznamy"
        for(let i = 0; i < res.length; i++){
            unreadMsgs += '<div class="overviewItem"><div class="overviewItemTitle">'+res[i].fullname+'</div><div class="overviewItemLine"></div><p>'+res[i].datetime+'</p><button data-id="'+res[i].id+'" class="overviewItemShow">Zobrazit</button><button data-id="'+res[i].id+'" class="overviewItemDelete">Smazat</button></div>'
        }
        unreadMsgs += '<script type="text/javascript" src="../public/js/msgManager/deleteMsg.js"></script>'
        $("section#messageManagerContainer").html(unreadMsgs)
    }, "json")
}