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
