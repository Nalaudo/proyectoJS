function prestamos() {
    let ingresosAnuales = prompt("Indique sus ingresos anuales, los cuales deben ser mayores a 1 Millón de pesos.");
    if (ingresosAnuales >= 1000000) {
        const tipoPrestamos = ["Personal", "Empresarial"];
        let userIndex = -1;
        do {
            let prestamoSeleccionado = prompt("Especifique el tipo de prestamo: "+tipoPrestamos.join(", "))
            for (let i = 0; i < tipoPrestamos.length; i++) {
                if (tipoPrestamos[i] === prestamoSeleccionado) {
                    userIndex = i;
                    break;
                }
            }
            if (userIndex > -1) {
                alert("Felicitaciones! Tiene aprobado su préstamo.")
                alert("Puede retirar el dinero en la sucursal más cercana llevando comprobantes de sueldo que avalen los ingresos que usted indicó.")
            } else {
                alert("Usted ingresó un dato equivocado, pruebe ingresar el tipo de préstamo respetando las mayúsculas inciales.");
            }
        }
        while (userIndex === -1);
    }   else {
            alert("Lo sentimos, pero no cumples con los requisitos mínimos para aplicar a este préstamo.");
        }
}