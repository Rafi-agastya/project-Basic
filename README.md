Medipet
project bertema rumah sakit hewan, disini saya menggunakan CRUD sederhana untuk mengelola pada bagian regist, serta ada beberapa method lain yang saya gunakan, 
seperti menghitung banyak data (lenght).

struktur yang saya buat sendiri disini saya menggunakan modularisasi beberapa file sesuai dengan intruksi final project, 
1. data (berisikan data dummy)
2. service(berisikan function2)
3. Controller(berisikan error handling, serta query parameter)
4. routes(API)
5. Index(sebagai port)

untuk cara menjalankan server yang saya buat menggunakan http://localhost:3000/animals, 
dan endpoint yang saya buat disini ada 6 end point, yaitu : 
router.get("/animals/count", countHewan);
router.get("/animals/:id", getHewanById);
router.get("/animals", getAllHewan);
router.post("/animals", createHewan);
router.patch("/animals/:id", updateHewan);
router.delete("/animals/:id", deleteHewanById);

mungkin hanya ini yang bisa saya sampaikan, kurang lebihnya mohon maaf, dan terimakasih kaka mentorr !!!
