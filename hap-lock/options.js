const fs = require("fs");
const rawOptions = fs.readFileSync('./options.json', 'utf8');

const optionsFromfile = JSON.parse(rawOptions);

// Verifica se todos os campos obrigatórios estão presentes no arquivo optionsFromfile
const requiredFields = ['device_manufacturer', 'device_serial_number', 'device_name'];
const missingFields = requiredFields.filter(field => !optionsFromfile[field]);

if (missingFields.length > 0) {
    throw new Error(`Campos obrigatórios ausentes: ${missingFields.join(', ')}`);
}

const options = {
    device: {
        manufacturer: optionsFromfile.device_manufacturer,
        serialNumber: optionsFromfile.device_serial_number,
        name: optionsFromfile.device_name
    }
};

module.exports = options;