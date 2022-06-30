document.getElementById(`onclick`).onclick = botonPrestamo
document.getElementById(`onclick2`).onclick = botonPrestamo
function botonPrestamo() {
    document.getElementById(`prestamo`).innerHTML = `<h2 id="prestamo2">HAGA CLICK AQUÍ PARA OBTENER SU PRÉSTAMO ¡YA!</h2>`
    document.getElementById(`prestamo2`).onclick = formPrestamos 
}
function formPrestamos() {
    let ingresosAnuales = prompt(`Indicá tus ingresos anuales, los cuales deben ser mayores a 1 Millón de pesos.`)
    if (ingresosAnuales >= 1000000) {
        let edadCliente = prompt(`Indicá tu edad, recordá que debés ser mayor de edad y no puedes tener más de 70 años.`)
        if ((edadCliente >= 18) && (edadCliente <= 70)) {
            const tipoPrestamos = [`Personal`, `Empresarial`, `Estudios`, `Hipotecarios`]
            const enJSON = (JSON.stringify(tipoPrestamos))
            console.log(enJSON) //es para que el desarrollador pueda ver por la consola que el array es correcto (no se me ocurría en que usar el JSON)
            let userIndex = -1;
            do {
                let prestamoSeleccionado = prompt(`Especicá el tipo de prestamo: `+tipoPrestamos.join(`, `))
                for (let i = 0; i < tipoPrestamos.length; i++) {
                    if (tipoPrestamos[i] === prestamoSeleccionado) {
                        userIndex = i;
                        break;
                    }
                }
                if (userIndex > -1) {
                    sessionStorage.setItem(`formPrestamos`, `1`)
                } else {
                    alert(`Ingresaste un dato equivocado, probá ingresando el tipo de préstamo respetando las mayúsculas inciales.`)
                }
            } while (userIndex === -1);
        } else {
                sessionStorage.setItem(`formPrestamos`, `2`)
        }
    } else {
            sessionStorage.setItem(`formPrestamos`, `3`)
    }
    if (sessionStorage.getItem(`formPrestamos`) === `1`) {
        document.getElementById(`prestamo`).innerHTML = `<h2>¡¡FELICITACIONES!! Corré al banco ¡YA!</h2>`
        alert(`Felicitaciones! Tenés aprobado tu préstamo.`)
        alert(`Podés retirar el dinero en la sucursal más cercana llevando comprobantes de sueldo que avalen los ingresos que indicaste.`)
    } else {
        document.getElementById(`prestamo`).innerHTML = `<h2>Lo sentimos, pero no cumples con los requisitos mínimos para aplicar a este préstamo. :'(</h2>`
        alert(`Lo sentimos, pero no cumples con los requisitos mínimos para aplicar a este préstamo.`)
    }
}
