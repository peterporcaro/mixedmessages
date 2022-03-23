//hello hello
const firstPart = ["It\'s time for some ", 'You should really ', 'Swag is defined as: '];
const time = ['cardio', 'upper body', 'lower body'];
const really = ['clean your room.', 'do the dishes.', 'do something productive.'];
const swag = ['being swag.', 'being cool.', 'not listening to the government.'];

const giveMessage = () => {
    const randNum = Math.floor(Math.random() * 3);
    const randInd = Math.floor(Math.random() * 3);

    if (randNum === 0) {
        console.log(`${firstPart[0]}${time[randInd]}`);
    } else if (randNum === 1) {
        console.log(`${firstPart[1]}${really[randInd]}`);
    } else if (randNum === 2) {
        console.log(`${firstPart[2]}${swag[randInd]}`);
    }
}

giveMessage();