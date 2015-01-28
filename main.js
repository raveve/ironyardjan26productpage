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

    $("#items-section").on('click', '.edit-item', productHome.updateItem);

    $("#items-section").on('click', '.delete-item', productHome.deleteItem);
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

    var item = $(this).closest('article').find('h2').text();
    console.log(item);
    var details = $(this).closest('article').find('p').text();
    var image = $(this).closest('article').find('img').attr('src');
    var price = $(this).closest('article').find('h3').text();

    $(this).closest('article').replaceWith (
      '<article>' +
      '<form>' +
      '<h2>Edit Item</h2>' +
      '<p><label for="item">Item Name</label> ' +
      '<input type="text" value="' + item + '" ></p>'
      +
      + '<p>' + '<label for="image">' + "Image" + '</label>' + ' '
      + '<input type="text" value="' + image + '" >'  + '</p>'
      + '<p>' + '<label for="details">' + "Details" + '</label>' + ' '
      + '<textarea name="">' + details + '</textarea>' + '</p>'
      + '<p>' + '<label for="price">' + "Price" + '</label>' + ' '
      + '<input type="text" value=' + price + ' >' + '</p>'
      + '<p>' + '<button class="save-edit-button">' + "Update Product"
      + '</button>' + '</p>'
      + '</form>' +
      '<article>'
    );

    products.splice(itemIndex, 1, editItem);

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
    });

});
