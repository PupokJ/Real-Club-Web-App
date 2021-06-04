$(document).ready(function () {
  $(".category-item").click(function () {
    let catElement = $(this).attr("category");
    //Ocultando
    $(".product-item").hide();
    //Mostrar por categoria
    $('.product-item[category="' + catElement + '"]').show();
  });
  $('.dropdownlink[category="all"]').click(function () {
    $(".product-item").show();
  });
});
