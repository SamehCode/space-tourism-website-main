let allLis = Array.from(document.querySelector('.destination .info ul').children);
let name = document.getElementById('name');
let desc = document.getElementById('desc');
let planetImg = document.getElementById('planetImg');
let distance = document.getElementById('distance');
let travel = document.getElementById('travel')

console.log(allLis)

allLis.forEach((li, idx) => {
    li.addEventListener('click', e => {
        allLis.forEach(li => li.classList.remove('active'));
        
        console.log(e.target.classList.add('active'))
        fetch('./starter-code/data.json')
        .then(response => {
            let data = response.json()
            return data
        })
        .then(data => {
           data.destinations.forEach(d => {
            name.innerHTML = data.destinations[idx].name;
            desc.innerHTML = data.destinations[idx].description;
            distance.innerHTML = data.destinations[idx].distance;
            travel.innerHTML = data.destinations[idx].travel;
            // planetImg.src = 'url(' + './assets/destination/' + + data.destinations[idx].images[0] + '.png)'
            // planetImg.src =  data.destinations[idx].images.png
            planetImg.src = '/starter-code/' + data.destinations[idx].images.png
            })

        })
    })
})




