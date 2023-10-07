//if, else, nested if

var nilai = 175;

if (nilai >= 160) {
  console.log("Anda tinggi");
} else if (nilai >= 150) {
  console.log("Anda kurang tinggi");
} else
  console.logCD("Apakah anda masi bocil?");
  
  if (nilai >= 150) {
    console.log("Yok tumbuh lagi yok bisa yok.");
  } else {
    console.log("Anda pendek imut.");
  }


  //switch  case

var hari = "Jumat";

switch (hari) {
  case "Senin":
    console.log("Awali minggu ini dengan senin bahagia, semoga harimu tidak senin terus.");
    break;
  case "Selasa":
    console.log("Hari ini hari Selasa, hari kedua minggu ini. Semangat yokk 3 hari lagi weekend muach.");
    break;
  case "Rabu":
    console.log("Hari Rabu, pertengahan minggu, wih keren udah setengah mingu aja semnagatmu membara.");
    break;
  case "Kamis":
    console.log("Hari Kamis, empat hari sudah kamu lewati. Gass tinggal besok abistu holideyyyy");
    break;
  case "Jumat":
    console.log("Hari Jumat, Last week yeayy besok bisa holidayy");
    break;
  default:
    console.log("Ini bukan hari kerja.");
}

//for statement

for (var i = 1; i <= 100; i++) {
  console.log("Perulangan ke-" + i);
}


// while, do while

var angka = 2;

while (angka <= 5) {
  console.log("Angka ke-" + angka);
  angka++;
}


//function

function tambahkan(a, b) {
  return a + b;
}

var hasilPenambahan = tambahkan(9, 9);
console.log("Hasil penambahan: " + hasilPenambahan);

