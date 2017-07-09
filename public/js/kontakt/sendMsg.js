$(() => {
    $("form input#contactSend").click((e) => {
        e.preventDefault
        let data = {
            fullname: $("form input#contactName").val(),
            email: $("form input#contactEmail").val(),
            text: $("form textarea#contactMessage").val()
        }
        let atPos = data.email.indexOf("@")
        let dotPos = data.email.lastIndexOf(".")
        if (atPos<1 || dotPos<atPos+2 || dotPos+2>=data.email.length) {
            $("form input#contactSend").css({
                color: "white",
                background: "#c42e2e",
                border: "2px solid #c42e2e"
            })
            setTimeout(() => {
                $("form input#contactSend").css({
                    color: "white",
                    background: "none",
                    color: "rgba(56, 131, 234, 0.75)",
                    border: "2px solid rgba(56, 131, 234, 0.5)"
                })
            }, 2000)
            return false;
        }
        if (data.fullname == "" || data.email == "" || data.text == "") {
            $("form input#contactSend").css({
                color: "white",
                background: "#c42e2e",
                border: "2px solid #c42e2e"
            })
            setTimeout(() => {
                $("form input#contactSend").css({
                    color: "white",
                    background: "none",
                    color: "rgba(56, 131, 234, 0.75)",
                    border: "2px solid rgba(56, 131, 234, 0.5)"
                })
            }, 2000)
        } else {
            $.post("kontakt/sendMsg", data, (res) => {
                if (res == 1) {
                    $("form input#contactSend").css({
                        color: "white",
                        background: "#2fc357",
                        border: "2px solid #2fc357"
                    })
                    setTimeout(() => {
                        $("form input#contactSend").css({
                            color: "white",
                            background: "none",
                            color: "rgba(56, 131, 234, 0.75)",
                            border: "2px solid rgba(56, 131, 234, 0.5)"
                        })
                    }, 2000)
                    $("form input#contactName, form input#contactEmail, form textarea#contactMessage").val("")
                } else {
                    $("form input#contactSend").css({
                        color: "white",
                        background: "#c42e2e",
                        border: "2px solid #c42e2e"
                    })
                    setTimeout(() => {
                        $("form input#contactSend").css({
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
