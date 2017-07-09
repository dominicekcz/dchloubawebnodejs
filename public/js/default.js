let prevScrollStatus = 0
let actScrollStatus = 0
let menuHideBlock = 0
let menuHidden = 0
$(() => {
    //Načíst verzi a build webu do zápatí
    loadVersionAndBuild()
    $(document).scroll(() => {
        if ($(document).scrollTop() + $(window).height() >= $(document).height() - $("footer").height()) {
            actScrollStatus = 1
            menuHidden = 1
        } else {
            actScrollStatus = 0
            menuHidden = 0
        }
        if (actScrollStatus && !prevScrollStatus) {
            $("nav").transition({
                bottom: "-103px"
            }, 500, "easeOutExpo")
        } else if (!actScrollStatus && prevScrollStatus) {
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
        prevScrollStatus = actScrollStatus
    })
    $("div#menuToggle").click(menuToggle)
    $("header, main").click(() => {
        if(menuStatus) menuToggle()
    })
})

//Načíst verzi a build webu do zápatí
let loadVersionAndBuild = () => {
    $.post("../index/loadVersionAndBuild", function (res) {
        $("footer div:nth-child(2) p:nth-child(1)").html("Verze " + res[0].versionName)
        $("footer div:nth-child(2) p:nth-child(2)").html("Build " + res[0].versionNumber)
    }, "json")
}


let menuStatus = 0
let menuToggle = () => {
    if (!menuStatus) {
        $("nav").transition({
            bottom: 0
        }, 500, "easeOutExpo")
    } else if (menuStatus) {
        $("nav").transition({
            bottom: "-52px"
        }, 500, "easeOutExpo")
    }
    menuStatus = !menuStatus
}
