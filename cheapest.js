const phones = [
    {name:'Samsung', camera: 12, storage: '32gb', price:32000,color:'silver'},
    {name:'Walton', camera: 10, storage: '16gb', price:12000,color:'silver'},
    {name:'iphone', camera: 10, storage: '64gb', price:82000,color:'silver'},
    {name:'Xaomi', camera: 10, storage: '46gb', price:52000,color:'black'},
    {name:'Oppo', camera: 10, storage: '16gb', price:42000,color:'silver'},
    {name:'Nokia', camera: 10, storage: '16gb', price:23000,color:'silver'},
    {name:'HTC', camera: 10, storage: '16gb', price:62000,color:'silver'},
];

function cheapestPhone (phones){
    let cheapest = phones[0];
    for(let i = 0; i < phones.length; i++){
      const phone = phones[i];
      if(phone.price < cheapest.price){
        cheapest = phone;
      } 
    }
    return cheapest;
}
const mySelection = cheapestPhone(phones);
console.log(mySelection);


// Explore Highest price :::