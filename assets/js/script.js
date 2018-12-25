// Check off todo items
$('ul.list').on("click", "li.item", function(){
    $(this).toggleClass("checked");
});

$('ul.list').on("click", "span.delete", function(event){
    $(this).parent().fadeOut(500, function(){
            $(this).remove();
    });
    event.stopPropagation();
});

$('input[type="text"]').keypress(function(event){
    if (event.which === 13) {
        var newToDo = $(this).val();
        if (newToDo){
            $(this).val("");
            $('ul.list').append('<li class="item"><span class="delete"><i class="fa fa-trash"></i></span>' + newToDo + '</li>');
        }
    }
});

$('span.plus').click(function(){
    $("input[type='text']").fadeToggle();
})