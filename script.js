// Ambil nomor terakhir dari localStorage, mulai dari 118
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
  const jabatan = document.getElementById("jabatan").value.trim();
  const instansi = document.getElementById("instansi").value.trim();
  const kegiatan = document.getElementById("kegiatan").value.trim();
  const tanggal = document.getElementById("tanggal").value;

  if (!nama || !nip || !jabatan || !instansi || !kegiatan || !tanggal) {
    alert("Harap lengkapi semua field!");
    return;
  }

  const data = {
    nama,
    nip,
    jabatan,
    instansi,
    kegiatan,
    tanggal,
    nomor: generateNomor(),
  };

  localStorage.setItem("sertifikat", JSON.stringify(data));
  window.location.href = "preview.html";
}
