$(() => {
    $("form input#blogPublish").click((e) => {
        e.preventDefault
        let data = {
            imgurl: $("form input#blogImgURL").val(),
            title: $("form input#blogTitle").val(),
            short: $("form textarea#blogShort").val(),
            long: $("form textarea#blogLong").val()
        }
        if (data.imgurl == "" || data.title == "" || data.short == "" || data.long == "") {
            $("form input#blogPublish").css({
                color: "white",
                background: "#c42e2e",
                border: "2px solid #c42e2e"
            })
            setTimeout(() => {
                $("form input#blogPublish").css({
                    color: "white",
                    background: "none",
                    color: "rgba(56, 131, 234, 0.75)",
                    border: "2px solid rgba(56, 131, 234, 0.5)"
                })
            }, 2000)
        } else {
            $.post("administrace/publishArt", data, (res) => {
                if (res == 1) {
                    $("form input#blogPublish").css({
                        color: "white",
                        background: "#2fc357",
                        border: "2px solid #2fc357"
                    })
                    setTimeout(() => {
                        $("form input#blogPublish").css({
                            color: "white",
                            background: "none",
                            color: "rgba(56, 131, 234, 0.75)",
                            border: "2px solid rgba(56, 131, 234, 0.5)"
                        })
                    }, 2000)
                    $("form input#blogImgURL, form input#blogTitle, form textarea#blogShort, form textarea#blogLong").val("")
                } else {
                    $("form input#blogPublish").css({
                        color: "white",
                        background: "#c42e2e",
                        border: "2px solid #c42e2e"
                    })
                    setTimeout(() => {
                        $("form input#blogPublish").css({
                            color: "white",
                            background: "none",
                            color: "rgba(56, 131, 234, 0.75)",
                            border: "2px solid rgba(56, 131, 234, 0.5)"
                        })
                    }, 2000)
                }
            })
        }
        return false
    })
})
