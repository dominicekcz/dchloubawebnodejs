const atiSecs = [
    {
        title: "/prehled",
        ident: "section#atiOverviewContainer",
        pageTitle: "Přehled"
    },
    {
        title: "/podrobnosti",
        ident: "section#atiDetailsContainer",
        pageTitle: "Podrobnosti"
    },
    {
        title: "/manual",
        ident: "section#atiManualContainer",
        pageTitle: "Manuál"
    },
    {
        title: "/soukromi",
        ident: "section#atiPrivacyContainer",
        pageTitle: "Ochrana soukromí"
    },
    {
        title: "/podminky",
        ident: "section#atiTermsContainer",
        pageTitle: "Podmínky užívání"
    }
]

let loadSecs = (secsIndex) => {
    const secsURL = window.location.pathname.replace("/ati", "")
    if (secsURL == "") history.pushState(null, null, "ati" + atiSecs[0].title)
    let atiSecsIndex = secsIndex
    for (let i = 0; i < atiSecs.length; i++) {
        if (atiSecs[i].title == secsURL) atiSecsIndex = i
        $(atiSecs[i].ident).css({
            display: "none"
        })
    }
    if (atiSecsIndex > 0) {
        $("section#atiControls button").each(function () {
            $(this).css({
                borderBottom: "1px solid transparent"
            })
        })
        $("section#atiControls button:nth-child(2)").css({
            borderBottom: "1px solid gray"
        })
    }
    $(atiSecs[atiSecsIndex].ident).css({
        display: "block"
    })
    document.title = "Ati - " + atiSecs[atiSecsIndex].pageTitle + " | Dominik Chlouba"
}

$(() => {
    $("section#atiControls button").click(function () {
        const atiSecsIndex = $(this).data("id")
        $("section#atiControls button").each(function () {
            $(this).css({
                borderBottom: "1px solid transparent"
            })
        })
        $(this).css({
            borderBottom: "1px solid gray"
        })
        history.pushState(null, null, "/ati" + atiSecs[atiSecsIndex].title)
        loadSecs(atiSecsIndex)
    })
    
    $("section#atiDetailsContainer button").click(function(){
        const atiSecsIndex = $(this).data("id")
        $("section#atiControls button").each(function () {
            $(this).css({
                borderBottom: "1px solid transparent"
            })
        })
        $(this).css({
            borderBottom: "1px solid gray"
        })
        history.pushState(null, null, "/ati" + atiSecs[atiSecsIndex].title)
        loadSecs(atiSecsIndex)
    })
})
