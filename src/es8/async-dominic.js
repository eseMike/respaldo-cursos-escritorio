console.clear();

const userList = [
    { id: 1, name: "Mike", city: 4 },
    { id: 2, name: "Gina", city: 3 },
    { id: 3, name: "Pam", city: 2 },
    { id: 4, name: "Cecy", city: 1 }
]

const citiesList = {
    1: "Barcelona",
    2: "New York",
    3: "Santo Domingo",
    4: "Madrid"
}

function getUsers() {
    return new Promise((resolved, reject) => {
        setTimeout(() => {
            resolved(userList);
        }, 2000);
    });
}


function getCities() {
    return new Promise((resolved, reject) => {
        setTimeout(() => {
            resolved(citiesList);
        }, 1000);
    })
}

// getUsers().then(res => {
//     console.log("Users", res);
// })

// getCities().then(res => {
//     console.log("ciudades", res);
// })

const usersPromise = getUsers();
// usersPromise.then(users => {
//     console.log("User => ", users);
//     return getCities;
// }).then(cities => {
//     console.log("Cities =>", cities);
// })



async function getInfo() {
    const users = await getUsers();
    const cities = await getCities();
    console.log("Usuarios => ", users);
    console.log("Ciudades =>", cities);
}

getInfo();