function generateNomor() {
  let counter = parseInt(localStorage.getItem("cert_counter")) || 118;
  counter++;
  localStorage.setItem("cert_counter", counter);

  const no = String(counter).padStart(4, "0");
  const year = new Date().getFullYear();

  return `${no}/SERT-I/5400/11/PemprovSumbar/${year}`;
}

function kirimData() {
  const nama = document.getElementById("nama").value.trim();
  const nip = document.getElementById("nip").value.trim();
  const instansi = document.getElementById("instansi").value.trim();

  // VALIDASI
  if (!nama || !nip || !instansi) {
    alert("Harap lengkapi semua field!");
    return;
  }

  const data = {
    nama,
    nip,
    instansi,
    nomor: generateNomor(),
  };

  localStorage.setItem("sertifikat", JSON.stringify(data));

  // PINDAH HALAMAN
  window.location.href = "preview.html";
}
