
console.log('Welcome to Webpack');

var ele = document.createElement('div');
ele.innerHTML = '';

const list = ['Apple', 'is', 'in', 'the', 'tree.'];
list.forEach( (item) => {
  ele.innerHTML = ele.innerHTML + item + ' ';
})

document.body.appendChild(ele);
