const fs = require('fs');
const path = require('path');

const folderPath = './hosted';

// Membuat folder 'hosted' jika belum ada
if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath);
}

// Membuat file dari 1-100.html
for (let i = 1; i <= 100; i++) {
  const fileName = path.join(folderPath, `${i}.html`);
  const fileContent = `<html><head><title>File ${i}</title></head><body><h1>File ${i}</h1></body></html>`;

  fs.writeFileSync(fileName, fileContent);

  console.log(`File ${fileName} berhasil dibuat.`);
}

console.log('Proses selesai.');
