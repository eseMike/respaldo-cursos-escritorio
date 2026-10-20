//Enhaced object literals

function newUser(user, age, country, uID) {
    return {
        user,
        age,
        country,
        id: uID
    }
}

console.log(newUser("mike", 32, "México", 2));