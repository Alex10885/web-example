let car = {
    color: 'red',
    maxSpeed: 250,
    downgrade: downgradeSpeedcar,
    
    audio:{
        brand: 'Sony',
        speakers: 12
    }
};

// let age = 2;
// let suprime = age*2;

// alert('элемент найден '+ typeof(element));
// alert(element);
console.log(car.color);
car.color = 'green';
console.log(car.color);



colorReset(car);

let speed = editMaxspeed;
speed(car);

console.log(carBeep("Би-би"));
console.log(car.Beep);

car.downgrade(car);
car.downgrade(car);


 let anonym = () => { 
     
    return"объект car: ";
};

 console.log(anonym ());

(() => console.log("мы стрелочная функция"))();




function colorReset(theCar){
   if (theCar.color == 'red'){
    console.log('цвет по умолчанию'+theCar.color);
   } else if (theCar.color == 'green' ){
        theCar.color = 'red';
    console.log('цвет изменен на ' + theCar.color);
   }
}

function editMaxspeed(theCar){
    console.log('скорость в стоке: '+theCar.maxSpeed + ' км/ч');
    theCar.maxSpeed = 400;
    console.log('скорость после тюнинга: '+ theCar.maxSpeed + ' км/ч');
}

function downgradeSpeedcar(theCar) {
    if (theCar.maxSpeed != 250){
        theCar.maxSpeed = 250;
        console.log('Параметр скорости сброшен. максимальная скорость равна: ' + theCar.maxSpeed + ' км/ч');
    } else if (theCar.maxSpeed == 250 ) {
        console.log('Максимальная скорость равна стоковой ' + theCar.maxSpeed);
    }

}

function carBeep(beep){
    return beep;

}


