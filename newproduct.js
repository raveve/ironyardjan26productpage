var template = {};

template.post = [
  "<article data-index='<%= idx %>'>",
  "<h2><%= item %></h2>",
  "<img src=<%= image %>>",
  "<p><%= details %></p>",
  "<h3><%= price %></h3>",
  "<p><button class='delete-item'>Delete</button></p>",
  "<p><button class='edit-item'>Edit</button></p>",
  "</article>"

].join("");


template.section = "<p><%= selftext %></p>";
