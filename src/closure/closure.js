function greetings() {
    let userName = "Mike";

    function displayUserName() {
        return `Hello ${userName}`
    }
    return displayUserName;
}

const g = greetings();
console.log(g);
console.log(g());