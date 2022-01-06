const api = "http://localhost:3000/producto";
const grupo = document.getElementById("grupo")
const apiconsul = "http://localhost:3000/producto/";
let content1 = JSON.parse(localStorage.getItem('datos')) || []

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

   