$(() => {
    $("input#loginCheck").click((e) => {
        e.preventDefault()
        var data = {user: $("input#loginUser").val(), pass: $("input#loginPass").val()}
        $.post("index/prihlaseni", data, (res) => {
            if(res == 1){
                $("input#loginUser, input#loginPass").val("")
                $("div#loginButton").css({display: "none"})
                $("div#logoutButton, a#articlemanagerButton, a#messagemanagerButton").css({display: "block"})
                $("section#loginPanel").transition({
                    right: "-310px"
                }, 500, "easeOutExpo")
                notify(2, "Přihlášení proběhlo úspěšně.")
            }
            else
                notify(1, "Zkontrolujte správnost zadaným přihlašovacích údajů.")
        })
    })
    
    $("div#logoutButton").click((e) => {
        e.preventDefault()
        $.post("index/odhlasit", () => {
            $("div#loginButton").css({display: "block"})
            $("div#logoutButton, a#articlemanagerButton, a#messagemanagerButton").css({display: "none"})
            notify(0, "Odhlášení proběhlo úspěšně.")
        })
    })
})