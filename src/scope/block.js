function fruits() {
    if (true) {
        var fruitOne = "apple"; //Function scope
        let fruitTwo = "Kiwi"; //Block scope
        const fruitThree = "banana"; //Block scope

        console.log(fruitTwo);
        console.log(fruitThree);
    }

    console.log(fruitOne);


}

fruits();