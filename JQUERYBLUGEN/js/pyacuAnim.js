
/*Start Creating My Main Svg with Class c In Width And Height In The Page*/
var mySvg = document.createElement('svg');
mySvg.id = 'c';
document.body.prepend(mySvg);
mySvg.width =  1170;
mySvg.height = 500;


var myRect = document.getElementById('rect');
myRect.id = 'rect';
myRect.style.width = '100%';
myRect.style.height= '100%';
myRect.style.margin = '10px';
myRect.style.x = 0;
myRect.style.y = 0;
myRect.style.rx = 50;
myRect.style.ry = 50;
myRect.style.fill = '#ca133e';
mySvg.appendChild('<rect />');


/*Start Creating My Main Rect In Svg In Width And Height In The Page*/
/*
var myContainer = document.createElementByTagName('<rect />');
myContainer.id = 'container';
container.width = '100%';
container.Height = '100%';
container.fill = '#000';
container.x = 0;
container.y = 0;
container.rx = 0;
container.ry = 0;
*/