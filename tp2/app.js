// API à utiliser pour le travail: https://randomuser.me/api/?results=5
let userData = []

async function fetchUser(){
    await fetch("https://randomuser.me/api/?results=5")
    .then((res) => res.json()).then((res) => {userData = res.results})
}

const userDisplay = async () =>{
    await fetchUser()

    document.body.innerHTML = userData
    .map(
        (user) => 
        `
        <div class="card">
            <img src=${user.picture.large} >
            <h3>Name: ${user.name.first} ${user.name.last}</h3>
            <h3>E-mail : ${user.email}</h3>
        </div>
        `
    )
}

userDisplay()
