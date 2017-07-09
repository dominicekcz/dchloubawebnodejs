let loadArticles = () => {
    let articlesCache = ""
    let data = {
        maxArt: 3,
        actPage: 1
    }
    $.post("blog/loadArticles", (res) => {
        if(res.length == 0) articlesCache += "Žádné články"
        for (let i = 0; i < res.length; i++) {
            articlesCache += '<article><div class="artTitle" style="color: ' + res[i].artColor + '">' + res[i].artTitle + '</div><div class="artLine" style="background-color: ' + res[i].artColor + '"></div><div class="artShortText">' + res[i].artShortText.substring(0, 350) + '...</div><button data-id="' + res[i].id + '" class="moreFromArt">Zobrazit více</button></article>'
        }
        articlesCache += '<script type="text/javascript" src="../public/js/blog/loadFullArt.js"></script>'
        $("section#blogContainer").html(articlesCache)
    }, "json")
    /*$.post("blog/articlesControls", (res) => {
        
    }, "json")*/
}
