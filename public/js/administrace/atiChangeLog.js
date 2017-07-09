$(() => {
    $("form input#versionUpdate").click(versionUpdate)
    $("form input#buildUpdate").click(buildUpdate)
    loadLastChangeLog()
})

let versionUpdate = (e) => {
    e.preventDefault
    let data = {
        versionName: $("form input#versionName").val(),
        versionNumber: $("form input#versionNumber").val(),
        versionDesc: $("form textarea#versionDesc").val(),
        versionChanges: $("form textarea#versionChanges").val()
    }
    if (data.versionName == "" || data.versionNumber == "" || data.versionDesc == "" || data.versionChanges == "") {
        $("form input#versionUpdate").css({
            color: "white",
            background: "#c42e2e",
            border: "2px solid #c42e2e"
        })
        setTimeout(() => {
            $("form input#versionUpdate").css({
                color: "white",
                background: "none",
                color: "rgba(56, 131, 234, 0.75)",
                border: "2px solid rgba(56, 131, 234, 0.5)"
            })
        }, 2000)
    } else {
        $.post("atiVersionUpdate", data, (res) => {
            if (res == 1) {
                $("form input#versionUpdate").css({
                    color: "white",
                    background: "#2fc357",
                    border: "2px solid #2fc357"
                })
                setTimeout(() => {
                    $("form input#versionUpdate").css({
                        color: "white",
                        background: "none",
                        color: "rgba(56, 131, 234, 0.75)",
                        border: "2px solid rgba(56, 131, 234, 0.5)"
                    })
                }, 2000)
                $("form input#versionName, form input#versionNumber, form textarea#versionDesc, form textarea#versionChanges").val("")
            } else {
                $("form input#versionUpdate").css({
                    color: "white",
                    background: "#c42e2e",
                    border: "2px solid #c42e2e"
                })
                setTimeout(() => {
                    $("form input#versionUpdate").css({
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

let buildUpdate = (e) => {
        e.preventDefault
    let data = {
        buildNumber: $("form input#buildNumber").val()
    }
    if (data.buildNumber == "") {
        $("form input#buildUpdate").css({
            color: "white",
            background: "#c42e2e",
            border: "2px solid #c42e2e"
        })
        setTimeout(() => {
            $("form input#buildUpdate").css({
                color: "white",
                background: "none",
                color: "rgba(56, 131, 234, 0.75)",
                border: "2px solid rgba(56, 131, 234, 0.5)"
            })
        }, 2000)
    } else {
        $.post("atiBuildUpdate", data, (res) => {
            if (res == 1) {
                $("form input#buildUpdate").css({
                    color: "white",
                    background: "#2fc357",
                    border: "2px solid #2fc357"
                })
                setTimeout(() => {
                    $("form input#buildUpdate").css({
                        color: "white",
                        background: "none",
                        color: "rgba(56, 131, 234, 0.75)",
                        border: "2px solid rgba(56, 131, 234, 0.5)"
                    })
                }, 2000)
                $("form input#buildNumber").val("")
            } else {
                $("form input#buildUpdate").css({
                    color: "white",
                    background: "#c42e2e",
                    border: "2px solid #c42e2e"
                })
                setTimeout(() => {
                    $("form input#buildUpdate").css({
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
    $.post("loadLastAtiChangeLog", (res) => {
        $("section#lastChangeLog").html('<h1>Poslední vydaná aktualizace <span>Atiho</span></h1><h1>Aktualizace <span>'+res[0].versionName+'</span></h1><h2>'+res[0].descript+'</h2><div id="separatorLine"></div><p>'+res[0].changes+'</p>')
    }, "json")
}
