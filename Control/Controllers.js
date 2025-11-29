import {
  addDataHewan,
  getAllDataHewan,
  getDataHewanById,
  updateDataHewan,
  deleteDataHewan,
  countDataHewan
} from "../Service/Services.js";

// CREATE
export const createHewan = (req, res) => {
  try {
    const body = req.body;

    // Daftar field yang wajib diisi
    const requiredFields = [
      "NamaPemilik",
      "NomorTelefon",
      "NamaHewan",
      "JenisHewan",
      "JenisKelamin",
      "Tanggal",
      "Berat",
      "Keluhan"
    ];

    // Cek field mana yang kosong
    const missingFields = requiredFields.filter(field => !body[field]);

    if (missingFields.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Field wajib kosong: " + missingFields.join(", ")
      });
    }

    const data = addDataHewan(
      body.NamaPemilik,
      body.NomorTelefon,
      body.NamaHewan,
      body.JenisHewan,
      body.JenisKelamin,
      body.Tanggal,
      body.Berat,
      body.Keluhan
    );

    res.status(201).json({
      success: true,
      message: "Data hewan berhasil ditambahkan",
      data
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};



// READ (All) + Query Parameter
export const getAllHewan = (req, res) => {
  try {
    const filters = req.query; // dynamic query parameter
    const data = getAllDataHewan(filters);

    res.status(200).json({
      success: true,
      total: data.length,
      data
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


// READ BY ID (Path Parameter)
export const getHewanById = (req, res) => {
  try {
    const { id } = req.params;
    const data = getDataHewanById(id);

    res.status(200).json({
      success: true,
      data
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message
    });
  }
};


// UPDATE (/:id)
export const updateHewan = (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;

    const updated = updateDataHewan(id, body);

    res.status(200).json({
      success: true,
      message: "Data berhasil diperbarui",
      data: updated
    });

  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};

// DELETE (/:id)
export const deleteHewanById = (req, res) => {
  try {
    const { id } = req.params;
    const removed = deleteDataHewan(id);

    res.status(200).json({
      success: true,
      message: "Data hewan berhasil dihapus",
      data: removed
    });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};


// COUNT
export const countHewan = (req, res) => {
  try {
    const total = countDataHewan();
    res.status(200).json({ success: true, total });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
