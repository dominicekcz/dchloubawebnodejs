$(() => {
    $("button.overviewItemDelete").click(deleteMsg)
})

let deleteMsg = function(){
    let data = {id: $(this).data("id")}
    $.post("spravazprav/deleteMsg", data, () => {
        $("div.overviewItem").each(function(){
            if($(this).children("button.overviewItemDelete").data("id") == data.id) $(this).remove()
        })
        notify(1, "Zpráva byla přesunuta do koše.")
    })
}