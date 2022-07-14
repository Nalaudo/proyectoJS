document.getElementById(`body`).innerHTML = `<header id="header"></header><hr><section id="nav"></section><hr><main id="main"></main><footer id="footer"></footer><script src="js/index.js"></script>`
document.getElementById(`header`).innerHTML = `<h1 id="titulo">Banco BRR - Préstamos al instante</h1>`
document.getElementById(`nav`).innerHTML = `<span id="inicio">Inicio</a></span><span id="prestamos">Préstamos</span>`
inicioFunc()
document.getElementById(`inicio`).onclick = inicioFunc
function inicioFunc() {
    document.getElementById(`head`).innerHTML = `Inicio | Banco BRR`
    document.getElementById(`main`).innerHTML = `<h2>No se que haces acá, andá a pedir tu préstamo ¡YA!</h2>`.toUpperCase()
}
document.getElementById(`prestamos`).onclick = prestamosFunc
function prestamosFunc() {
    document.getElementById(`head`).innerHTML = `Préstamos | Banco BRR`
    document.getElementById(`main`).innerHTML = `<h2 id="formulario">HAGA CLICK AQUÍ PARA OBTENER SU PRÉSTAMO ¡YA!</h2>` 
    document.getElementById(`formulario`).onclick = formPrestamos
    Toastify({
        text: "Ya estás más cerca de obtener tu préstamo!",
        duration: 3000
        }).showToast();
    function formPrestamos() {
        let ingresosAnuales = prompt(`Indicá tus ingresos anuales, los cuales deben ser mayores a 1 Millón de pesos.`)
        let edadCliente = false
        ingresosAnuales >= 1000000 ? edadCliente = prompt(`Indicá tu edad, recordá que debés ser mayor de edad y no puedes tener más de 70 años.`) : sessionStorage.setItem(`formPrestamos`, `3`)
            if ((edadCliente >= 18) && (edadCliente <= 70)) {
                const tipoPrestamos1 = [`Personal`, `Hipotecario`]
                const tipoPrestamos2 = [`Empresarial`, `Estudio`]
                const tipoPrestamos = [...tipoPrestamos1, ...tipoPrestamos2]
                let userIndex = -1
                do {
                    let prestamoSeleccionado = prompt(`Especificá el tipo de prestamo: `+ tipoPrestamos.join(", "))
                    for (let i = 0; i < tipoPrestamos.length; i++) {
                        if (tipoPrestamos[i] === prestamoSeleccionado) {
                            userIndex = i
                            break
                        }
                    }
                    userIndex > -1 && sessionStorage.setItem(`formPrestamos`, `1`)
                } while (userIndex === -1)
            } else {
                    sessionStorage.setItem(`formPrestamos`, `2`)
            }
        let toastAprobado = 
        sessionStorage.getItem(`formPrestamos`) === `1` ? 
        Toastify({
            text: "Préstamo aprobado :)", 
            duration: 3000, 
            style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          }
        }).showToast() 
        : Toastify({
            text: "Prestamo desaprobado :(", 
            duration: 3000,
            style: {
                background: "linear-gradient(to right, #e26923, #ff0000)",
              }
        }).showToast()
        let aprobado = sessionStorage.getItem(`formPrestamos`) === `1` && `<h2 id="aprobado">¡¡FELICITACIONES!! Corré al banco ¡YA!</h2>`.toUpperCase()
        let desaprobado = sessionStorage.getItem(`formPrestamos`) != `1` && `<h2 id="desaprobado">Lo sentimos, pero no cumples con los requisitos mínimos para aplicar a este préstamo. :'(</h2>`.toUpperCase()
        document.getElementById(`main`).innerHTML = (aprobado || desaprobado)
    }
}
//usuarios (sitio en desarrollo, solo pruebas)
fetch("https://my-json-server.typicode.com/Nalaudo/JSONserver/users")
    .then((resp) => resp.json())
    .then((users) => {
        console.log(users)
    })