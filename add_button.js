var el = document.getElementById('test');
var menu = document.createElement('ul');  
menu.id = 'menupan';

var item1 = document.createElement('li');
item1.id = 'menu1';
item1.innerHTML = "설렁탕";

var item2 = document.createElement('li');
item2.id = 'menu2';
item2.innerHTML = "추어탕";

menu.appendChild(item1);  
menu.appendChild(item2);  

el.appendChild(menu);