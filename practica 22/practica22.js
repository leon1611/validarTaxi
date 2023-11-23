'use strict'


let car = { 
    marca: "chevrolet",    
    categoria: "subv",
    modelo:"Onix Turbo",
    ageFabrication: 2020,
    asientos: 5,
    color: "negro",
    matricula: true
 }

function validarTaxi(car) { 
    let currentYear=2023;
    let years= currentYear - car.ageFabrication;
    
    if(years<=10){
       return true;
    } else {
        return false;
    }
}
 let result = validarTaxi(car);
alert("La prueba fue: "  +result);