
var app = document.getElementById("app-hook");

const list = ['Weclome to Webpack!', 'This is a starter seed app.'];
list.forEach( (item) => {
  var node = document.createElement('div');
  node.textContent = item;
  app.appendChild(node)
})
