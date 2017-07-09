$(() => {
    $("button.moreFromArt").click(function () {
        let data = {
            id: $(this).data("id")
        }
        $.post("blog/showFullArt", data, (res) => {
            $("div.fullArtImg").css({
                backgroundImage: "url(" + res[0].imgURL + ")"
            })
            $("div.fullArtTitle").html(res[0].artTitle).css({
                color: res[0].artColor
            })
            $("div.fullArtLine").css({
                backgroundColor: res[0].artColor
            })
            $("div.fullArtShortText").html(res[0].artShortText)
            $("div.fullArtLongText").html(res[0].artLongText)
            $("section#fullBackgroundLayer, section#fullArtLayer").css({
                display: "block"
            }).transition({
                opacity: 1
            }, 500, "easeOutExpo")
            $("body").css({overflow: "hidden"})
        }, "json")
    })

    $("button.fullArtClose").click(() => {
        $("section#fullBackgroundLayer, section#fullArtLayer").transition({
            opacity: 0
        }, 500, "easeOutExpo")
        setTimeout(() => {
            $("section#fullBackgroundLayer, section#fullArtLayer").css({
                display: "none"
            })
        }, 500)
        $("body").css({overflow: "auto"})
    })
})
