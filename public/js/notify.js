//Vygenerování notifikace
let notify = (type, msg) => {
    let notifType = {
        types: ["56, 108, 206, 0.85", "181, 35, 35, 0.85", "56, 206, 102, 0.85"]
    }
    const thisBlock = "section#notificationBanner"
    $(thisBlock).text(msg)
    $(thisBlock).css({backgroundColor: "rgba(" + notifType.types[type] + ")"})
    if($(window).width() >= 700){
        $(thisBlock).css({display: "block", bottom: "auto", top: "-150px"}).transition({
        top: "55px"
    }, 500, "easeOutExpo")
    setTimeout(() => {
        $(thisBlock).transition({
            top: "-150px"
        }, 500, "easeInExpo")
    }, 4000)
    }
    else{
        $(thisBlock).css({display: "block", top: "auto", bottom: "-150px"}).transition({
        bottom: "55px"
    }, 500, "easeOutExpo")
    setTimeout(() => {
        $(thisBlock).transition({
            bottom: "-150px"
        }, 500, "easeInExpo")
    }, 4000)
    }    
}