const fs = require('fs');

// Utworzenie pliku his.txt, do którego będą zapisywane dane
fs.writeFile('his.txt', '', (err) => {
  if (err) throw err;
  console.log('Plik his.txt został utworzony.');
});

// Dodanie funkcji obsługującej zapisywanie danych po kliknięciu przycisku "Kontynuuj"
const form = document.getElementById('login');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const imie = document.getElementById('im').value;
  const nazwisko = document.getElementById('na').value;
  const dane = `Imię: ${imie}\nNazwisko: ${nazwisko}\n\n`;
  fs.appendFile('his.txt', dane, (err) => {
    if (err) throw err;
    console.log('Dane zostały zapisane.');
  });
});

// Odczytanie danych z pliku his.txt
fs.readFile('his.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
