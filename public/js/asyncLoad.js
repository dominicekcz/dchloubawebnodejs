$(() => {    
    
    let URLsDB = [
        {name: "index", title: "O mně"},
        {name: "blog", title: "Blog"},
        {name: "kontakt", title: "Kontakt"},
        {name: "ati", title: "Ati"},
        {name: "spravaclanku", title: "Správa článků"},
        {name: "spravazprav", title: "Správa zpráv"},
        {name: "ch404", title: "Stránka nenalezena"},
        {name: "ch403", title: "Přístup zakázán"}
    ]
    
    $("a.internalLink").click(function(e){
        e.preventDefault()
        $("main").click()
        let link = $(this).attr("href")
        loadPage(link)
    })
    
    let loadPage = (URL) => {
        $("section#loadingLayer").css({display: "block"}).transition({
            opacity: 1
        }, 500, "easeOutExpo")
        $.get("../" + URL + "/asyncRender", (res) => {
            $("main").html(res)
            setTitleAndPushState(URL)
        })
    }
    
    let setTitleAndPushState = (URL) => {
        for(let i = 0; i < URLsDB.length; i++)
            if(URL == URLsDB[i].name) document.title = URLsDB[i].title + " | Dominik Chlouba"
        history.pushState(null, null, "../" + URL)
        $(document).scrollTop(0)
        $("section#loadingLayer").transition({
            opacity: 0
        }, 500, "easeOutExpo")
        setTimeout(() => {
            $("section#loadingLayer").css({display: "none"})
        }, 500)
        firstAtiTip()
        changeAtiTips()
    }
    
    window.addEventListener("popstate", () => {
        let link = window.location.pathname.replace("/", "")
        if(link == "") link = "index"
        loadPage(link)
    })    
})