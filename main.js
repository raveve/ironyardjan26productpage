var productHome =  {

  init: function() {
    productHome.initStyling();
    productHome.initEvents();
  },

  initStyling: function() {
    productHome.renderAllItems(products);
  },

// Creates new item upon hitting submit button
  initEvents: function() {
    $(".new-item form").on('submit', function (event) {
      event.preventDefault();
      productHome.createItem();
    });

    $('article').on('click', '.delete-item', productHome.deleteItem);
  },

// Allows the creation of a new item on the form
  createItem: function () {
    var newItem = {
      item: $('.new-item input[name="item"]').val(),
      details: $('.new-item textarea[name="details"]').val(),
      image: $('.new-item input[name="image"]').val(),
      price: $('.new-item input[name="price"]').val()
    };

// Pushes the new item into the array
    products.push(newItem);
    productHome.renderAllItems(products); // Renders all array items to the page

// Clears the input text areas
    $('.new-item input').val('');
    $('.new-item textarea').val('');

// Hides submit buttons
    $(".new-item").addClass("hide");
    $(".submit-item-button").addClass("hide");
  },

// Editing the individual items on the form
  updateItem: function(event) {
    event.preventDefault();

    var item = $(this).closest('article').find('h2').text(),
    var details = $(this).closest('article').find('p').text(),
    var image = $(this).closest('article').find('img').attr('src'),
    var price = $(this).closest('article').find('h3').text()

    $(this).closest('article').replaceWith (
      '<form>' +
      '<input type=text value=' + item + ' >'
      + '<input type=url value=' + image + ' >'
      + '<textarea name=>' + details + '</textarea>'
      + '<input type=text value=' + price + ' >'
      + '<button class="save-edit-button">' + "Update Product" + '</button>'
      + '</form>'
    );

    products.splice(thisIndex, 1, editItem);

    productPage.renderAllItems(products);
  },

// Removing the item's object from the array upon deletion
  deleteItem: function(event) {
    event.preventDefault();
    var itemIndex = $(this).closest('article').data('index');

    console.log(itemIndex);
    products.splice(itemIndex, 1);

    $(this).closest('article').remove();
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
