$(() => {
    $("form input#descriptUpdate").click(descriptUpdate)
    loadLastChangeLog()
})

let descriptUpdate = (e) => {
    e.preventDefault
    let data = {
        descriptText: $("form textarea#descriptText").val()
    }
    if (data.descriptText == "") {
        $("form input#descriptUpdate").css({
            color: "white",
            background: "#c42e2e",
            border: "2px solid #c42e2e"
        })
        setTimeout(() => {
            $("form input#descriptUpdate").css({
                color: "white",
                background: "none",
                color: "rgba(56, 131, 234, 0.75)",
                border: "2px solid rgba(56, 131, 234, 0.5)"
            })
        }, 2000)
    } else {
        $.post("./atiDescriptUpdate", data, (res) => {
            if (res == 1) {
                $("form input#descriptUpdate").css({
                    color: "white",
                    background: "#2fc357",
                    border: "2px solid #2fc357"
                })
                setTimeout(() => {
                    $("form input#descriptUpdate").css({
                        color: "white",
                        background: "none",
                        color: "rgba(56, 131, 234, 0.75)",
                        border: "2px solid rgba(56, 131, 234, 0.5)"
                    })
                }, 2000)
                $("form textarea#descriptText").val("")
            } else {
                $("form input#descriptUpdate").css({
                    color: "white",
                    background: "#c42e2e",
                    border: "2px solid #c42e2e"
                })
                setTimeout(() => {
                    $("form input#descriptUpdate").css({
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
}

let loadLastChangeLog = () => {
    $.post("./loadAtiDescript", (res) => {
        $("section#lastChangeLog").html('<h1>Aktuální popis <span>Atiho</span></h1><h2>Níže ho můžete změnit...</h2><div id="separatorLine"></div><p>'+res[0].atiDescript+'</p>')
    }, "json")
}
