const api = "http://localhost:3000/producto";
const produc2 = "http://localhost:3000/produc2";
const grupo = document.getElementById("grupo")
const grupo2 = document.getElementById("grupo2")
const apiconsul = "http://localhost:3000/producto/";
const apiconsuldos = "http://localhost:3000/produc2/";
let content1 = JSON.parse(localStorage.getItem('datos')) || []
// let content2 = JSON.parse(localStorage.getItem('datos')) || []




// hacer peticion
const peticion = async (producto) => {
    const buscar = await fetch(producto)
    const jsno = await buscar.json()
    muestra(jsno)
}

peticion(api)

const muestra = (producto) => {
    grupo.innerHTML = ""
    producto.forEach(element => {
        const {id,name,precio,img} = element
            const div = document.createElement("div");
            div.classList.add("container2")
            

            div.innerHTML += `
                        <img class="box"  src="${img}" alt="">
                        <h3>${name}</h3>
                        <p>&#36;${precio}</p>
                        <a href="#"><button type="button" class="btn btn-primary" onclick="btn(${id})">Comprar</button></a>
                       
            `
            grupo.appendChild(div)
    });
}


// llevando la información al localstorage
const btn = async (idbtn) => {
    // alert(idbtn)

    const buton = await fetch(apiconsul)
    const butoncar = await buton.json()

    buscarproduc = butoncar.find(producto => producto.id == idbtn)
     const {id,name,precio,img} = buscarproduc
     const arreglo = {
        id,name,precio,img
     }

     content1.unshift(arreglo)
     localStorage.setItem("datos",JSON.stringify(content1))
}




// 
const peticion2 = async (producto2) => {
    const buscar2 = await fetch(producto2)
    const jsno2 = await buscar2.json()
    muestra2(jsno2)
}
// hacemos la petición a la api
peticion2(produc2)

const muestra2 = (producto2) => {
    grupo2.innerHTML = ""
    producto2.forEach(element => {
        const {id,name,precio,img} = element
            const div = document.createElement("div");
            div.classList.add("container2")
            

            div.innerHTML += `
                        <img class="box"  src="${img}" alt="">
                        <h3>${name}</h3>
                        <p>&#36;${precio}</p>
                        <a href="#"><button type="button" class="btnn btn btn-primary" onclick="btnn(${id})">Comprar</button></a>
                       
            `
            grupo2.appendChild(div)
    });
}


        const btnn = async (idbtnn) => {
            // alert(idbtnn)

            const buton2 = await fetch(apiconsuldos)
            const butoncar2 = await buton2.json()

            buscarproduc2 = butoncar2.find(producto2 => producto2.id == idbtnn)
             const {id,name,precio,img} = buscarproduc2
             const arreglo2 = {
                id,name,precio,img
             }

             content1.unshift(arreglo2)
             localStorage.setItem("datos",JSON.stringify(content1))
        }

   