let content1 = JSON.parse(localStorage.getItem('datos')) || []
const carrito = document.getElementById("carrito")
const del = document.getElementById("del")
let compra = document.getElementById("compra")



document.addEventListener("DOMContentLoaded",() => {
    content1.forEach(element => {
        const {id,name,precio,img} = element
        carrito.innerHTML += `
        
        <h3>${name}</h3>
        <img class="box" src="${img}" alt="">
        <p>&#36;${precio}</p>
        
        <a href="#"><button type="button" class="btn btn-primary" onclick="btn(${id})">Delate</button></a>
        `
    })

   
        suma();

        
})

const suma = () => {
    let valor = content1.reduce((suma, valor) => (typeof valor.precio == "number" ? suma + valor.precio: suma),0)
    del.innerHTML += `
    
        <p class="total">Total:&#36;${valor}</p>
        
    `
}



const btn = (idP) => {
    const produ = element => element.id !== idP
    const productoeliminar = content1.filter(produ)
    content1 = productoeliminar

        localStorage.setItem("datos",JSON.stringify(content1))
    window.location.reload()
}

compra.addEventListener("click", () => {
    alert("gracias por su compra")
    localStorage.removeItem("datos")
})
