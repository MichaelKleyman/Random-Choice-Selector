const tagsElem = document.getElementById('tags');
const textAreaElem = document.getElementById('textarea');

textAreaElem.focus()

textAreaElem.addEventListener('keyup', function(event) {
    createTags(event.target.value)

    if (event.key === 'Enter') {
        setTimeout(() => {event.target.value = ''}, 10)


        randomSelect();
    }
});

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());
    tagsElem.innerHTML = '';

    tags.forEach(tag => {
        const tagElem = document.createElement('span');
        tagElem.classList.add('tag');
        tagElem.innerText = tag; 
        tagsElem.appendChild(tagElem);
    })
};

function randomSelect() {
    const times = 30;

    const interval = setInterval(() => {
        const randomTag = pickRandomTag();

        highlight(randomTag);

        setTimeout(() => {unHighlight(randomTag)}, 100)
    }, 100);
    
    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            const randomTag = pickRandomTag();

            highlight(randomTag);

        }, 100)

    }, times * 100)
};

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');

    return tags[Math.floor(Math.random() * tags.length)]
}

function highlight(tag) {
    tag.classList.add('highlight');
}

function unHighlight(tag) {
    tag.classList.remove('highlight');
}