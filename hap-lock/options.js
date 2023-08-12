const fs = require("fs");
const rawOptions = fs.readFileSync('./options.json', 'utf8');

const optionsFromfile = JSON.parse(rawOptions)
const options = {
    device: {
        manufacturer: optionsFromfile.device_manufacturer,
        serialNumber: optionsFromfile.device_serial_number
    }

}

module.exports = options