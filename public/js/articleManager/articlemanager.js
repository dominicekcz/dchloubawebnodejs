$("button.newArt").click(function () {
    $("section#fullBackgroundLayer, section#newArtContainer").css({
        display: "block"
    }).transition({
        opacity: 1
    }, 500, "easeOutExpo")
    changeControlsBottomBorder()
    $(this).css({borderBottom: "1px solid gray"})
})

$("button.artOverview").click(function(){
    
})

let changeControlsBottomBorder = () => {
    $("section#articleManagerControls button").each(function(){
        $(this).css({borderBottom: "1px solid transparent"})
    })
}
