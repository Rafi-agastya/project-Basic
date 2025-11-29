import { DataHewan } from "../data";

//Create
function addDataHewan (NamaPemilik, NomorTelefon, NamaHewan, JenisHewan, JenisKelamin, Tanggal, Berat, Keluhan) {
const TambahData = {
    id: DataHewan.length + 1,
    NamaPemilik: NamaPemilik,
    NomorTelefon: NomorTelefon,
    NamaHewan: NamaHewan,
    JenisHewan: JenisHewan,
    JenisKelamin: JenisKelamin,
    Tanggal: Tanggal,
    Berat: Berat,
    Keluhan: Keluhan
};
    DataHewan.push(TambahData);
    return(TambahData);
}

//Read keseluruhan
function LihatDataKeseluruhan(filters) {
  if (!filters || Object.keys(filters).length === 0) {
    return DataHewan;
  }

  return DataHewan.filter(data => {
    return Object.entries(filters).every(([key, value]) => {
        if (data[key]==null) return false;
        return String(data[key]).toLowerCase() === String(value).toLowerCase();
    });
  });
} 

//read byId
function getDataHewanById(id) {
  const hewan = DataHewan.find(h => h.id === Number(id));
  if (!hewan) {
    throw new Error("Data tidak ditemukan");
  }
  return hewan;
}


//delete
function deleteDataHewan(id) {
  const index = DataHewan.findIndex(data => data.id === Number(id));
  if (index === -1) {
    throw new Error("Data tidak ditemukan");
  }

  const removed = DataHewan.splice(index, 1)[0];
  return removed;
}


//update
function updateDataHewan(id, updatePayload) {
  const hewanId = Number(id);
  const index = DataHewan.findIndex(h => h.id === hewanId);

  if (index === -1) {
    throw new Error("Data hewan tidak ditemukan");
  }

  // Update hanya field yang dikirim
  for (const [key, value] of Object.entries(updatePayload)) {
    if (value !== undefined) {
      DataHewan[index][key] = value;
    }
  }

  return DataHewan[index];
}

//melihat Banyak data hewan
function BanyakDataHewan() {
  return DataHewan.length;
}




