$(() => {
    $("form input#logIn").click((e) => {
        e.preventDefault
        let data = {
            user: $("form input#logName").val(),
            pass: $("form input#logPass").val(),
        }
        if (data.user == "" || data.pass == "") {
            $("form input#logIn").css({
                color: "white",
                background: "#c42e2e",
                border: "2px solid #c42e2e"
            })
            setTimeout(() => {
                $("form input#logIn").css({
                    color: "white",
                    background: "none",
                    color: "rgba(56, 131, 234, 0.75)",
                    border: "2px solid rgba(56, 131, 234, 0.5)"
                })
            }, 2000)
        } else {
            $.post("administrace/login", data, (res) => {
                if (res == 1) {
                    $("form input#logIn").css({
                        color: "white",
                        background: "#2fc357",
                        border: "2px solid #2fc357"
                    })
                    setTimeout(() => {
                        $("form input#logIn").css({
                            color: "white",
                            background: "none",
                            color: "rgba(56, 131, 234, 0.75)",
                            border: "2px solid rgba(56, 131, 234, 0.5)"
                        })
                    }, 2000)
                    $("form input#logName, form input#logPass").val("")
                    document.location.reload()
                } else {
                    $("form input#logIn").css({
                        color: "white",
                        background: "#c42e2e",
                        border: "2px solid #c42e2e"
                    })
                    setTimeout(() => {
                        $("form input#logIn").css({
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
