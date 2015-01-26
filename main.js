var productHome =  {

  init: function() {
    productHome.initStyling();
    productHome.initEvents();
    productHome.addProducts(products);
  },

  initStyling: function(){
    console.log('styling loaded correctly');
  },

  initEvents: function(){
    console.log('events loaded correctly');
  },


addProducts: function(allProducts) {
  allProducts.forEach(function (product, index, array) {
    $("section").append(
      "<article>" +
      "<h2>" + product.item + "</h2>"
      + "<img src=" + product.image + ">"
      + "<p>" + product.details + "</p>"
      + "<h2>" + product.price + "</h2>"
      + "</article>"
    );
  });
}

};

jQuery(document).ready(function() {

    productHome.init();

});
