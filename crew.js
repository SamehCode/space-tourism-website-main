// crew logic
let role = document.getElementById('role');
let name = document.getElementById('name');
let bio = document.getElementById('bio');
let crewBullets = Array.from(document.querySelectorAll('.crew ul.bullets li'));
let crewImg = document.querySelector('.crew .image img');
console.log(crewImg)

crewBullets.forEach((bullet, idx) => {
    bullet.addEventListener('click', e => {
        crewBullets.forEach(bullet => bullet.classList.remove('active'))
        e.target.classList.add('active')
        fetch('./starter-code/data.json')
        .then(response => {
            let data = response.json()
            return data
        })
        .then(data => {
            console.log(data.crew) 
            role.innerHTML = data.crew[idx].role;
            name.innerHTML = data.crew[idx].name;
            crewImg.src = 'starter-code/' + data.crew[idx].images.webp
            bio.innerHTML = data.crew[idx].bio;
        })
        
    })
})

