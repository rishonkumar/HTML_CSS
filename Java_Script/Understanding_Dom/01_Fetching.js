document

document.getElementById('one')



var heading = document.getElementById('one')

// to change the color
heading.style.backgroundColor

heading.style.color = 'red'

heading.style.backgroundColor = 'cyan'

// to access elements by tag

var headings = document.getElementsByTagName('h1');

headings

// to change text of second heading
headings[1].innerText = "Second Heading";

// to access by class
var para = document.getElementsByClassName('para')

para[0].style.backgroundColor = 'blue'

// to access by      selectors
var hea = document.querySelector('#one');

hea.innerText = "Hey"
