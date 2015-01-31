var template = {};

template.post = [
  "<article data-index='<%= idx %>'>",
  "<h2><%= item %></h2>",
  "<img src='<%= image %>'>",
  "<p><%= details %></p>",
  "<h3><%= price %></h3>",
  "<h4><button class='delete-item'>Delete</button></h4>",
  "<h4><button class='edit-item'>Edit</button></h4>",
  "</article>"

].join("");

template.edit = [
  "<article>",
  "<form id='updateForm'>",
  "<h2>Edit Item</h2>",
  "<input id='updateID' type='hidden' value='<%= idx %>'>",
  "<p><label for='item'>Item Name </label>",
  "<input id='updateTitle' type='text' value='<%= item %>'></p>",
  "<p><label for='image'>Image </label>",
  "<input id='updateImage' type='text' value='<%= image%>'</p>",
  "<p><label for='details'>Details </label>",
  "<textarea id='updateDetails' name=''><%= details%></textarea></p>",
  "<p><label for='price'>Price </label>",
  "<input id='updatePrice' type='text' value='<%= price %>'></p>",
  "<p><button type='submit' class='save-edit-button'>Update Product</button></p>",
  "</form>",
  "<article>"

].join("");
