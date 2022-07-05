document.getElementById(`onclick`).onclick = botonPrestamo
document.getElementById(`onclick2`).onclick = botonPrestamo
function botonPrestamo() {
    document.getElementById(`prestamo`).innerHTML = `<h2 id="prestamo2">HAGA CLICK AQUÍ PARA OBTENER SU PRÉSTAMO ¡YA!</h2>`
    document.getElementById(`prestamo2`).onclick = formPrestamos 
}
function formPrestamos() {
    let ingresosAnuales = prompt(`Indicá tus ingresos anuales, los cuales deben ser mayores a 1 Millón de pesos.`)
    let edadCliente = false
    ingresosAnuales >= 1000000 ? edadCliente = prompt(`Indicá tu edad, recordá que debés ser mayor de edad y no puedes tener más de 70 años.`) : sessionStorage.setItem(`formPrestamos`, `3`)
        if ((edadCliente >= 18) && (edadCliente <= 70)) {
            const tipoPrestamos1 = [`Personal`, `Hipotecario`]
            const tipoPrestamos2 = [`Empresarial`, `Estudio`]
            const tipoPrestamos = [...tipoPrestamos1, ...tipoPrestamos2]
            console.log(tipoPrestamos)
            let userIndex = -1;
            do {
                let prestamoSeleccionado = prompt(`Especificá el tipo de prestamo: `+ tipoPrestamos.join(", "))
                for (let i = 0; i < tipoPrestamos.length; i++) {
                    if (tipoPrestamos[i] === prestamoSeleccionado) {
                        userIndex = i;
                        break;
                    }
                }
                userIndex > -1 && sessionStorage.setItem(`formPrestamos`, `1`)
            } while (userIndex === -1);
        } else {
                sessionStorage.setItem(`formPrestamos`, `2`)
        }
    let aprobado = sessionStorage.getItem(`formPrestamos`) === `1` && `<h2>¡¡FELICITACIONES!! Corré al banco ¡YA!</h2>`
    document.getElementById(`prestamo`).innerHTML = (aprobado || `<h2>Lo sentimos, pero no cumples con los requisitos mínimos para aplicar a este préstamo. :'(</h2>`)
}
//usuarios (solo admin, sitio en desarrollo, solo pruebas)
const usuarios = {
    nombre: "Admin",
    edad: 18
}
const {nombre, edad} = usuarios
console.log("Nombre: " + nombre +", "+ "Edad: "+ edad)