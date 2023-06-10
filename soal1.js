const prompt = require('prompt-sync')();

const input = prompt('Masukkan bilangan genap: ');
const number = parseInt(input);

if (number < 0) {
  console.log('Tidak bisa input bilangan negatif');
} else if (number % 2 !== 0) {
  console.log('Tidak bisa input bilangan ganjil');
} else {
  const result = Math.sqrt(number);
  console.log(`Akar pangkat 2 dari ${number} adalah: ${result}`);
}