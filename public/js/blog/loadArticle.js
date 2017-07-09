let loadArt = (artId) => {
    $("div#fullArticle").scrollTop(0)
    let data = {
        id: artId
    }
    $.post("blog/loadArt", data, (res) => {
        $("div#fullArticle").css({backgroundImage: "url(" + res.imgURL + ")"})
        $("div#fullArticle h1").html(res.artTitle)
        $("div#fullArticle div.articleTime p").html(res.artDatetime)
        $("div#fullArticle div.articleMain p.articleShort").html(res.artShortText)
        $("div#fullArticle div.articleMain p.articleLong").html(res.artLongText)
        $("div#fullArticle").transition({
            top: 0
        }, 500, "easeOutExpo")
        $("body").css({overflow: "hidden"})
        menuHideBlock = 1
        $("nav div#menuToggle, nav div#backButton").transition({
            left: "+=53px"
        }, 500, "easeOutExpo")
        if (menuHidden) {
            if (menuStatus) {
                $("nav").transition({
                    bottom: 0
                }, 500, "easeOutExpo")
            } else if (!menuStatus) {
                $("nav").transition({
                    bottom: "-52px"
                }, 500, "easeOutExpo")
            }

        }
    }, "json")
}