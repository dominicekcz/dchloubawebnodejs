const adminSecs = [
    $("div#adminMsgs"),
    $("div#adminBlog"),
    $("div#adminAti"),
    $("div#adminUpdates")
]
$(() => {
    $("div#sectionNav ul li").click(loadSection)
})

let loadSection = function () {
    const secID = $(this).data("id")
    for (let i = 0; i < adminSecs.length; i++) {
        adminSecs[i].css({display: "none"})
    }
    adminSecs[secID].css({display: "block"})
}
