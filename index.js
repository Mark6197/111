let products=[{id:1,name:"eggs",price:19.99},{id:2,name:"bread",price:8.9},{id:3,name:"milk",price:5.75}]

localStorage.setItem("products",JSON.stringify(products))

const p=JSON.parse(localStorage.getItem("products"))
    
console.log(p)

p.push({id:4,name:"avocado",price:15.00})

localStorage.setItem("products",JSON.stringify(p))
