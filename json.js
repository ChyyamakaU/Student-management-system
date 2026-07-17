let car = {
    brand: "Honda", model: "civic", year: 2018, owner: {name: "Amaka", city:"Jos"}, features: ["bluetooth", " camera"] }

let cars = JSON.stringify(car, null, 2);
console.log(cars)

let myCar =JSON.parse (cars)
console.log(myCar)
console.log(myCar.owner.name)
console.log(myCar.features[1])

console.log(car.brand === myCar.brand)





// 4
let users =[{
    firstName: "John", lastName:"Doe", age: 50, isActive: true},
    {  firstName: "Joe", lastName:"Doe", age: 20, isActive: false}
]