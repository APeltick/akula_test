var formSelectHover = 0;
$(".form-select").each(function() {
    var $input = $(this).find("input"),
        $ul = $(this).find("> ul"),
        $ulDrop =  $ul.clone().addClass("form-select-drop");
    $(this)
        .append('<span class="arrow arrow-bottom"></span>', $ulDrop)
        .on({
            hover : function() { formSelectHover ^= 1; },
            click : function() { $ulDrop.toggleClass("show"); }
        });
    // PRESELECT
    $ul.add($ulDrop).find("li[data-value='"+ $input.val() +"']").addClass("selected");
    // MAKE SELECTED
    $ulDrop.on("click", "li", function(evt) {
        evt.stopPropagation();
        $input.val($(this).data("value")); // Update hidden input value
        $ul.find("li").eq($(this).index()).add(this).addClass("selected")
            .siblings("li").removeClass("selected");
    });
    // UPDATE LIST SCROLL POSITION
    $ul.on("click", function() {
        var liTop = $ulDrop.find("li.selected").position().top;
        $ulDrop.scrollTop(liTop + $ulDrop[0].scrollTop);
    });
});
// CLOSE ALL OPNED
$(document).on("mouseup", function(){
    if(!formSelectHover) $(".form-select-drop").removeClass("show");
});