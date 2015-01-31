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

    $("#items-section").on('submit', '#updateForm', function(event) {
      event.preventDefault();
      var form = $(this);
      var item = {
        id: form.find('#updateID').val(),
        item: form.find('#updateTitle').val(),
        image: form.find('#updateImage').val(),
        details: form.find('#updateDetails').val(),
        price: form.find('#updatePrice').val()
      }
      productHome.renderUpdate(item);
    });
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

    // Finds the title of the item selected
    var productTitle = $(this).closest('article').find('h2').text();

    // Returns the object from the array that matches title
    var editItem = _.find(products, function(prod){
      return prod.item === productTitle;
    });

    var compiledTemplate = productHome.compileTmpl(editItem, template.edit);

    $(this).closest('article').replaceWith(compiledTemplate);
  },

  renderUpdate: function(data) {
    console.log(data);

    var itemIndex = data.id;

    products[itemIndex] = data;
    productHome.renderAllItems(products);

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
