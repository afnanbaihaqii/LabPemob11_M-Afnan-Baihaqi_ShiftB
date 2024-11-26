Nama : M Afnan Baihaqi
Nim : H1D022080
Shift : B


### ScreenShot
![Screenshot 2024-11-26 233804](https://github.com/user-attachments/assets/bb75af53-da24-4be6-99e8-dfe6d868819d)
![Screenshot 2024-11-26 233946](https://github.com/user-attachments/assets/e9f064c7-060f-4209-be95-9d59a9e0d374)
![Screenshot 2024-11-26 234016](https://github.com/user-attachments/assets/40f2806f-903d-40fe-b282-1ea4d8981c46)
![Screenshot 2024-11-26 234037](https://github.com/user-attachments/assets/0c87054a-2cd5-419e-956c-a436a0e67e7e)
![Screenshot 2024-11-26 234047](https://github.com/user-attachments/assets/1a675ea9-4bf3-453a-a2c1-902ff4d3def3)

### Penjelasan
Implementasi halaman HomePage.vue untuk aplikasi daftar tugas berbasis Ionic Vue. Halaman ini dirancang untuk mengelola daftar tugas aktif dan selesai dengan tampilan yang interaktif, responsif, dan fitur-fitur yang mencakup penambahan, pengeditan, penghapusan, pembaruan status, serta refresh data secara manual. Dalam template, struktur utama dimulai dengan IonPage yang mencakup IonHeader untuk menampilkan judul halaman dan IonContent sebagai bagian utama untuk menampilkan daftar tugas dan komponen lainnya. Salah satu fitur yang menonjol adalah penggunaan IonRefresher, yang memungkinkan pengguna menarik layar ke bawah untuk menyegarkan daftar tugas melalui metode handleRefresh.

Daftar tugas dibagi menjadi dua bagian, yaitu tugas aktif dan tugas yang telah selesai, masing-masing ditampilkan dalam komponen IonList. Tugas aktif ditampilkan secara langsung, sementara tugas selesai ditempatkan dalam komponen IonAccordion agar pengguna dapat melihatnya secara ringkas atau mendetail. Untuk setiap tugas, fitur geser (swipe) disediakan melalui IonItemSliding, memungkinkan pengguna mengakses opsi penghapusan di sisi kiri atau opsi pengeditan dan perubahan status di sisi kanan. Komponen tugas menggunakan elemen IonCard yang menampilkan informasi seperti judul, deskripsi, dan waktu pembaruan terakhir, yang diformat menggunakan pustaka date-fns untuk memberikan tampilan waktu relatif (e.g., 2 hours ago).

Di bagian bawah, terdapat tombol floating action button yang terintegrasi dengan InputModal untuk menambah atau mengedit tugas. Modal ini menggunakan two-way binding dengan properti isOpen untuk pengaturan visibilitas dan editingId untuk menentukan tugas yang sedang diedit. Data tugas dikelola menggunakan properti reaktif dari Vue seperti ref dan computed. Daftar tugas dipisahkan menjadi aktif dan selesai menggunakan computed properties activeTodos dan completedTodos, yang memfilter data berdasarkan status.

Pada bagian script, metode seperti loadTodos digunakan untuk mengambil data dari layanan Firestore melalui modul firestoreService. Data ini di-refresh secara berkala setiap menit menggunakan setInterval, dengan pembaruan waktu yang dipicu oleh ref timeUpdateTrigger. Metode handleSubmit menangani logika penambahan dan pengeditan tugas, termasuk validasi input dan komunikasi dengan Firestore. Penghapusan tugas dilakukan melalui metode handleDelete, sedangkan perubahan status tugas (aktif ke selesai atau sebaliknya) dilakukan oleh handleStatus, yang juga memberikan notifikasi kepada pengguna melalui fitur toast. Semua aksi dilengkapi dengan umpan balik visual, seperti penutupan otomatis elemen sliding item setelah aksi dilakukan.

Tampilan halaman diperkuat dengan gaya CSS kustom untuk memastikan responsivitas dan pengalaman pengguna yang optimal. Elemen seperti scrollable container memiliki scrollbar yang dirancang khusus untuk memberikan estetika yang lebih baik. Secara keseluruhan, halaman ini memadukan desain antarmuka yang bersih dengan fungsi interaktif yang kompleks, menjadikannya alat yang efektif untuk mengelola daftar tugas dalam aplikasi berbasis Ionic Vue.
