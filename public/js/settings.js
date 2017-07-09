//Změna schématu webu
let cssItems = [
    "default",
    "about",
    "blog",
    "contact",
    "articlemanager",
    "messagemanager",
    "ati",
    "aboutweb",
    "faq"
]
$("section#settingsPanel div.optionsOpt .checkBoxTheme").change(() => {
    if($("section#settingsPanel div.optionsOpt .checkBoxTheme:checked").length != 0){
        $.post("index/changeThemeOption", {themeOption: "dark"}, () => {
            notify(0, "Probíhá změna schématu na tmavý.")
            $("link#schemeCSS").remove()
            for(let i = 0; i < cssItems.length; i++){
                $("head").append('<link id="schemeCSS" rel="stylesheet" type="text/css" href="../public/css/dark/'+ cssItems[i] +'.css">')
            }
        })
    }
    else{
        $.post("index/changeThemeOption", {themeOption: "light"}, () => {
            notify(0, "Probíhá změna schématu na světlý.")
            $("link#schemeCSS").remove()
            for(let i = 0; i < cssItems.length; i++){
                $("head").append('<link id="schemeCSS" rel="stylesheet" type="text/css" href="../public/css/light/'+ cssItems[i] +'.css">')
            }
        })
    }
})

$("section#settingsPanel div.optionsOpt .checkBoxMainIndic").change(() => {
    if($("section#settingsPanel div.optionsOpt .checkBoxMainIndic:checked").length != 0){
        $.post("index/changeMainIndicOption", {mainIndicOption: "1"}, () => {
            notify(0, "Hlavní indikátor upozornění aktivován.")
            $("div#navButton").append('<div class="navBtnNotifLabel">0</div>')
        })
    }
    else{
        $.post("index/changeMainIndicOption", {mainIndicOption: "0"}, () => {
            notify(0, "Hlavní indikátor upozornění deaktivován!")
            $("div.navBtnNotifLabel").remove()
        })
    }
})

$("section#settingsPanel div.optionsOpt .checkBoxQuietHour").change(() => {
    if($("section#settingsPanel div.optionsOpt .checkBoxQuietHour:checked").length != 0){
        $.post("index/changeQuietHourOption", {quietHourOption: "1"}, () => {
            notify(1, "Tichý režim byl aktivován! - Nefunkční")
        })
    }
    else{
        $.post("index/changeQuietHourOption", {quietHourOption: "0"}, () => {
            notify(1, "Tichý režim byl deaktivován. - Nefunkční")
        })
    }
})

$("section#settingsPanel div.optionsOpt .checkBoxTips").change(() => {
    if($("section#settingsPanel div.optionsOpt .checkBoxTips:checked").length != 0){
        $.post("index/changeTipsOption", {tipsOption: "1"}, () => {
            notify(0, "Tipy a rady byli aktivovány.")
            $("div#headerTitle").remove()
            $("header").append('<div id="tipsContainer"><div id="pulse"><span class="pulse low"></span></div><svg x="0px" y="0px" viewBox="0 0 297 297" style="enable-background:new 0 0 297 297;" xml:space="preserve"><path d="M67.083,49l-66.75,66.5h33c18.226,0,33,14.774,33,33s-14.774,33-33,33H0v0.5l66.916,66L297,147.996L67.083,49z"/></svg><span>Vítejte, koukněme se, co je nového...</span></div>')
            startTips()
        })
    }
    else{
        $.post("index/changeTipsOption", {tipsOption: "0"}, () => {
            notify(0, "Tipy a rady byli deaktivovány.")
            $("div#tipsContainer").remove()
            $("header").append('<div id="headerTitle">DChlouba</div>')
        })
    }
})

$("section#settingsPanel div.optionsOpt .checkBoxAti").change(() => {
    if($("section#settingsPanel div.optionsOpt .checkBoxAti:checked").length != 0){
        $.post("index/changeAtiOption", {atiOption: "1"}, () => {
            notify(0, "Atiho chatovací okénko aktivováno. Více informací viz. stránka 'Chat bot Ati'.")
            $("body").append('<section id="atiChat"><div id="bot"></div><script src="https://unpkg.com/botframework-webchat/botchat.js"></script><script>BotChat.App({directLine: { secret: "OVI4QVqdKh4.cwA.GUo.0ynLPHiujKCpGlBkSiUCZuTJzqN2kYFiAjVC_3vArlg" }, user: { id: "Ty" },bot: { id: "Ati" },resize: "detect"}, document.getElementById("bot"));</script></section>')
        })
    }
    else{
        $.post("index/changeAtiOption", {atiOption: "0"}, () => {
            notify(0, "Atiho chatovací okéno bylo deaktivováno!")
            $("section#atiChat").remove()
        })
    }
})