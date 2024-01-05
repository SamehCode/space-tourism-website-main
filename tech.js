
let allBullets = Array.from(document.querySelectorAll('#tech-bullets li'))
let techName = document.getElementById('name');
let desc = document.getElementById('desc');
let img = document.querySelector('.content .image img');

allBullets.forEach((bullet, idx) => {
    let fetchedDataTech;
    bullet.addEventListener('click', e => {
        let miniMedia = window.matchMedia("(max-width: 767px)") 
        allBullets.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active')
        fetch('./starter-code/data.json')
        .then(response => {
            let data = response.json()
            return data
        })
        .then(data => {
            fetchedDataTech = data.technology;
            console.log(fetchedDataTech)
            techName.innerHTML = fetchedDataTech[idx].name;
            desc.innerHTML = fetchedDataTech[idx].description;
            if(miniMedia.matches) {
                img.src = '/starter-code/' + fetchedDataTech[idx].images.landscape

            } else {
                img.src = '/starter-code/' + fetchedDataTech[idx].images.portrait

            }
        })
    })
})


