document.getElementById(`onclick`).onclick = botonPrestamo
document.getElementById(`onclick2`).onclick = botonPrestamo
function botonPrestamo() {
    document.getElementById(`prestamo`).innerHTML = `<h2 id="prestamo2">HAGA CLICK AQUÍ PARA OBTENER SU PRÉSTAMO ¡YA!</h2>`
    document.getElementById(`prestamo2`).onclick = formPrestamos 
}
function formPrestamos() {
    let ingresosAnuales = prompt(`Indicá tus ingresos anuales, los cuales deben ser mayores a 1 Millón de pesos.`)
    if (ingresosAnuales >= 1000000) {
        let edadCliente = prompt(`Indicá tu edad, recordá que debés ser mayor de edad.`)
        if (edadCliente >= 18) {
            const tipoPrestamos = [`Personal`, `Empresarial`, `Estudios`, `Hipotecarios`]
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
                    alert(`Felicitaciones! Tenés aprobado tu préstamo.`)
                    alert(`Podés retirar el dinero en la sucursal más cercana llevando comprobantes de sueldo que avalen los ingresos que indicaste.`)
                    document.getElementById(`prestamo`).innerHTML = `<h2>¡¡FELICITACIONES!! Corré al banco ¡YA!</h2>`
                } else {
                    alert(`Ingresaste un dato equivocado, probá ingresando el tipo de préstamo respetando las mayúsculas inciales.`)
                }
            } while (userIndex === -1);
        } else {
                alert(`Lo sentimos, pero no cumples con los requisitos mínimos para aplicar a este préstamo.`)
                document.getElementById(`prestamo`).innerHTML = `<h2>Lo sentimos, no cumples la edad mínima requerida :'(</h2><p>Para reintentarlo recarga la pagina</p>`
        }
    } else {
            alert(`Lo sentimos, pero no cumples con los requisitos mínimos para aplicar a este préstamo.`)
            document.getElementById(`prestamo`).innerHTML = `<h2>Lo sentimos, no cumples los ingresos mínimos requeridos :'(</h2><p>Para reintentarlo recarga la pagina</p>`
    }
}
