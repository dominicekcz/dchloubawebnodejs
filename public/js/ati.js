$(() => {
    let atiWindowStatus = false
    $("div#tipsContainer svg").click(() => {
        if(!atiWindowStatus) $("div#bot").css({opacity: 1, left: 0})
        else $("div#bot").css({opacity: 0, left: "-300px"})
        atiWindowStatus = !atiWindowStatus
    })
})

