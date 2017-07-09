$(() => {
    let newArtImgFrom = null

    $("div.fullArtImg").css({
        backgroundImage: "url(../public/img/articlemanager/noimgfound.png)"
    })

    $("input#newArtTitle").keyup(function () {
        $("div.fullArtTitle").html($(this).val())
    })

    $("textarea#newArtShortText").keyup(function () {
        $("div.fullArtShortText").html($(this).val())
    })

    $("textarea#newArtLongText").keyup(function () {
        $("div.fullArtLongText").html($(this).val())
    })

    $("input#newArtColor").change(function () {
        $("div.fullArtTitle").css({
            color: $(this).val()
        })
        $("div.fullArtLine").css({
            backgroundColor: $(this).val()
        })
    })

    $("input#newArtImgPath").change(function () {
        $("input#newArtImgURL").val("http://www.")
        newArtImgFrom = 0
        if (this.files && this.files[0]) {
            let reader = new FileReader()
            reader.onload = function (e) {
                $('input#newArtShowImg').attr('src', e.target.result)
                $("div.fullArtImg").css({
                    backgroundImage: "url(" + e.target.result + ")"
                })
            }
            reader.readAsDataURL(this.files[0])
        }
    })

    $("input#newArtImgURL").change(function () {
        $("input#newArtImgPath").val("")
        newArtImgFrom = 1
        $('input#newArtShowImg').attr('src', $(this).val())
        $("div.fullArtImg").css({
            backgroundImage: "url(" + $(this).val() + ")"
        })
    })

    $("button#newArtPublish").click(() => {
        let checkValues = {
            ImgURL: $("input#newArtImgURL").val(),
            ImgPath: $("input#newArtImgPath").val(),
            Color: $("input#newArtColor").val(),
            Title: $("input#newArtTitle").val(),
            ShortText: $("textarea#newArtShortText").val(),
            LongText: $("textarea#newArtLongText").val()
        }
        let checkCount = 0
        if (checkValues.ImgPath != "" || checkValues.ImgURL != "http://www.") {
            $("input#newArtImgURL, input#newArtImgPath").css({
                border: "1px solid #efefef"
            })
            checkCount++
        } else {
            notify("Některá důležitá pole nebyla vyplněna! Doplňte zbylé informace, abychom mohli příspěvek zveřejnit.")
            $("input#newArtImgURL, input#newArtImgPath").css({
                border: "1px solid red"
            })
        }

        if (checkValues.Title == "") {
            notify("Některá důležitá pole nebyla vyplněna! Doplňte zbylé informace, abychom mohli příspěvek zveřejnit.")
            $("input#newArtTitle").css({
                border: "1px solid red"
            })
        } else {
            $("input#newArtTitle").css({
                border: "1px solid #efefef"
            })
            checkCount++
        }

        if (checkValues.ShortText == "") {
            notify(1, "Některá důležitá pole nebyla vyplněna! Doplňte zbylé informace, abychom mohli příspěvek zveřejnit.")
            $("textarea#newArtShortText").css({
                border: "1px solid red"
            })
        } else {
            $("textarea#newArtShortText").css({
                border: "1px solid #efefef"
            })
            checkCount++
        }

        if (checkValues.LongText == "") {
            notify("Některá důležitá pole nebyla vyplněna! Doplňte zbylé informace, abychom mohli příspěvek zveřejnit.")
            $("textarea#newArtLongText").css({
                border: "1px solid red"
            })
        } else {
            $("textarea#newArtLongText").css({
                border: "1px solid #efefef"
            })
            checkCount++
        }

        if (checkCount == 4)
            $.post("spravaclanku/addNewArt", checkValues, () => {
                closeNewArt()
                notify(2, "Váš příspěvěk byl zveřejněn.")
            })
    })

    $("button#newArtCancel").click(() => {
        closeNewArt()
        notify(0, "Váš příspěvěk byl zrušen. Všechny změny, které jste provedli byli anulovány.")
    })

    let closeNewArt = () => {
        $("input#newArtImgURL").val("http://www.").css({
            border: "1px solid #efefef"
        })
        $("input#newArtImgPath").val("").css({
            border: "1px solid #efefef"
        })
        $("input#newArtColor").val("#000000")
        $("input#newArtTitle").val("").css({
            border: "1px solid #efefef"
        })
        $("textarea#newArtShortText").val("").css({
            border: "1px solid #efefef"
        })
        $("textarea#newArtLongText").val("").css({
            border: "1px solid #efefef"
        })
        $("section#fullBackgroundLayer, section#newArtContainer").transition({
            opacity: 0
        }, 500, "easeOutExpo")
        setTimeout(() => {
            $("section#fullBackgroundLayer, section#newArtContainer").css({
                display: "none"
            })
        }, 500)
    }
})
