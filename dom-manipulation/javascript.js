const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const redText = document.createElement('p')
redText.textContent = "Hey I'm red!"
redText.style.color = 'red'

container.appendChild(redText)

const blueH3 = document.createElement('h3')
blueH3.textContent = "I'm a blue h3!"
blueH3.style.color = "blue"

container.append(blueH3)




const myDiv = document.createElement('div')
myDiv.style.border = '3px solid black'
myDiv.style.backgroundColor = 'pink'

const divH1 = document.createElement('h1')
divH1.textContent = "I'm in a div!"

myDiv.append(divH1)

const divParagraph = document.createElement('p')
divParagraph.textContent = 'ME TOO!'

myDiv.append(divParagraph)

container.append(myDiv)

const allps = document.querySelectorAll('p')
console.log(allps)