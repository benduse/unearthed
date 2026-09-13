const header = document.querySelector('header')

const headerContainer = document.createElement('div')
headerContainer.className = 'header-container'

const headerLeft =document.createElement('div')
headerLeft.className = 'header-left'

const img = document.createElement('img')
img.src = '/logo.png'
img.alt = 'Logo'


const headerTitle = document.createElement('h1')
headerTitle.textContent = 'UnEarthed'


headerLeft.appendChild(img)
headerLeft.appendChild(headerTitle)

const headerRight = document.createElement('div')
headerRight.className = 'header-right'

const headerButton = document.createElement('button')
headerButton.textContent = 'Home'

headerButton.addEventListener('click', function handleClick(){
    window.location='/'
})

headerRight.appendChild(headerButton)

headerContainer.appendChild(headerLeft)
headerContainer.appendChild(headerRight)

header.appendChild(headerContainer)