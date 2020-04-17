const iva = require("./modules/iva");
const log = require("./modules/logs");

console.log(`el valor del iva es ${iva.iva}%`);
log.info(`el valor del iva vehiculos es ${iva.ivaVehiculos}%`);
log.info(`el valor del iva canasta familiar es ${iva.ivaCanastaFamiliar}%`);
