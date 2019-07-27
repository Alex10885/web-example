class alphaMale {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;

    }
    sayName() {
        console.log(`${this.firstName} ${this.lastName}`);
    }

}




let car = {
    color: 'red',
    drivers: ['Иван', 'Сергей', 'Алексей', 'Петр'],

    getDrivers: function (inlex) {
        console.log('Водитель ' +
            this.drivers[inlex]);
    },

    open() {
        console.log('открыл свое корыто');
    }

};

let array = [1, ' сегодня ', ' хорошая ', ' погода ', ' я ', ' один ',
    {
        color: 'red'
    }
];


car.getDrivers(0);
car.open();

console.log(array[6]);



for (let i = 0; i < car.drivers.length; i++) {
    console.log(car.drivers[i]);
}

console.log('==========================');

for (let i = car.drivers.length - 1; i >= 0; i--) {
    console.log(car.drivers[i]);
}