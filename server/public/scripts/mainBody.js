const renderMusicEvents = async () => {
    const response = await fetch('/musicEvents')
    const data = await response.json()

    const mainContent = document.getElementById('main-content')

    if (data) {
        data.map(musicEvent => {
            const card = document.createElement('div')
            card.classList.add('card')

            const topContainer = document.createElement('div')
            topContainer.classList.add('top-container')

            const bottomContainer = document.createElement('div')
            bottomContainer.classList.add('bottom-container')

            topContainer.style.backgroundImage = "url('https://www.festivalpro.com/articles/1568.png')"
            topContainer.style.opacity = 0.8

            const name = document.createElement('h3')
            name.textContent = musicEvent.eventName
            bottomContainer.appendChild(name)

            const artist = document.createElement('h2')
            artist.textContent = musicEvent.artistName
            bottomContainer.appendChild(artist)

            const date = document.createElement('p')
            date.textContent = 'On ' + musicEvent.dateTime
            bottomContainer.appendChild(date)


            const link = document.createElement('a')
            link.textContent = 'Read More >'
            link.setAttribute('role', 'button')
            link.href = `/musicEvents/${musicEvent.id}`
            bottomContainer.appendChild(link)

            card.appendChild(topContainer)
            card.appendChild(bottomContainer)

            mainContent.appendChild(card)
        })
    }
    else {
        const notAvailable = document.createElement('h2')
        notAvailable.textContent = "No Events Available for you darling!"
        mainContent.appendChild(notAvailable)
    }
}

const renderMusicEvent = async () => {
    const requestedId = parseInt(window.location.href.split('/').pop())

    const response = await fetch('/musicEvents')
    const data = await response.json()

    const eventContent = document.getElementById('event-content')

    let event

    event = data.find(event => event.id === requestedId)


    if (event){
        
        document.getElementById('image').src = "https://www.festivalpro.com/articles/1568.png"
        document.getElementById('eventName').textContent = event.eventName
        document.getElementById('artistName').textContent = event.artistName
        document.getElementById('dateTime').textContent = 'On: ' + event.dateTime
        document.getElementById('venue').textContent = 'Venue: ' + event.venue
        document.getElementById('price').textContent = 'Price: $' + event.ticketPrice
        document.getElementById('genre').textContent = event.genre
        document.title = `Listicle - ${event.eventName}`
        
    }
    else {
        // If no music event is found with the requested ID, redirect to the 404 page.
        window.location.href = '/404.html'
    }
}

const mainContent = document.getElementById('main-content');
const eventContent = document.getElementById('event-content');

// This simplified logic correctly determines which function to run.
if (mainContent) {
    renderMusicEvents();
} 
else if (eventContent) {
    renderMusicEvent();
}