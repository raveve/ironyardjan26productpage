var productHome =  {

  init: function() {
    productHome.initStyling();
    productHome.initEvents();
  },

  initStyling: function() {
    productHome.renderAllItems(products);
  },

  initEvents: function() {
    $(".new-item form").on('submit', function (event) {
      event.preventDefault();
      productHome.createItem();
    });

    $('article').on('click', '.delete-item', productHome.deleteItem);
  },

  createItem: function () {
    var newItem = {
      item: $('.new-item input[name="item"]').val(),
      details: $('.new-item textarea[name="details"]').val(),
      image: $('.new-item input[name="image"]').val(),
      price: $('.new-item input[name="price"]').val()
    };

    products.push(newItem);
    productHome.renderAllItems(products);

    $('.new-item input').val('');
    $('.new-item textarea').val('');

    $(".new-item").addClass("hide");
    $(".submit-item-button").addClass("hide");
  },

  updateItem: function() {
    event.preventDefault();
    products[data-index] = {
      items: $('.new-item input[name="item"]').val(),
      details: $('.new-item textarea[name="details"]').val(),
      images: $('.new-item input[name="image"]').val(),
      price: $('.new-item input[name="price"]').val()
    }
  },

  deleteItem: function(event) {
    event.preventDefault();
    var itemIndex = $(this).closest('article').data('index');

    console.log(itemIndex);
    products.splice(itemIndex, 1);
    productHome.renderAllItems(products);
  },

  compileTmpl: function (data, tmpl) {
    var tmpl = _.template(tmpl);
    return tmpl(data);
  },

  renderAllItems: function (allItems) {
    var tmplStr = ""
    var compiledTmpl = _.template(template.post);

    _.each(allItems, function (item, index, arr) {
      item.idx = index;
      tmplStr += compiledTmpl(item);
    });

    $("#items-section").html(tmplStr);
  }
};

$(document).ready(function() {

    productHome.init();

    // Add New Items button shows form upon click
    $(".new-button").click(function (event) {
      event.preventDefault();

      $(".new-item").removeClass("hide");
      $(".submit-item-button").removeClass("hide");
      $(".save-edit-button").addClass("hide");
    });

    // Edit button shows form upon click
    $(".edit-item").click(function (event) {
      event.preventDefault();

      $(".new-item").removeClass("hide");
      $(".save-edit-button").removeClass("hide");
      $(".submit-item-button").addClass("hide");
    });

});
