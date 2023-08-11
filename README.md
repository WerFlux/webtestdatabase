# Laptop Database
Laptop Database adalah sebuah website simple untuk melakukan sistem CRUD (Create, Read, Update, Delete) dan menggunakan framework React untuk frontend dan Express untuk backend dan juga menggunakan MySQL untuk databasenya.

Website ini sangat simple dan mungkin sangat mudah untuk dilakukannya pembobolan.

Aplikasi yang dibutuhkan
- XAMPP
- Node.js

## Langkah-Langkah

- Download XAMPP di [link](https://sourceforge.net/projects/xampp/files/XAMPP%20Windows/8.2.4/xampp-windows-x64-8.2.4-0-VS16-installer.exe) ini.
- Download Node.js di [link](https://nodejs.org/dist/v18.17.1/node-v18.17.1-x64.msi) ini.

Jika semuanya sudah didownload, kita akan masuk ke cara berikutnya
### Instalasi XAMPP, Konfigurasi Database dan Backend
- Buka file XAMPP yang sudah didownload
- Kemudian klik next saja hingga proses instalasi sedang berjalan. XAMPP akan diinstalasi di folder `C:/xampp`
- Jika  mendapatkan dialog dari `Windows Security Alert` dikarenakan `Apache HTTP Server` pilih `Allow access`
- Jika sudah, klik `Finish`
- Akan dibuka aplikasi `XAMPP Control Panel`, pilih start untuk module `MySQL` dan `Apache`. Jika sudah distart, klik `Admin` dari module `MySQL`.
- Klik `New` atau `Baru` (jika Indonesia) untuk membuat Database.
- Isi nama databasenya. Nama database seharusnya panjang dan tidak mudah ditebak, contoh: `database_laptop_xiczzx12k31j23nk`. Lalu klik `Create` atau `Buat`
- Kemudian cari tombol `Import` kemudian klik.
- Kemudian klik Choose File. File SQL sudah ada difolder Websitenya, cari aja yang extensionnya .sql
- Jika sudah, kebawah dan klik import.

Jika sudah, maka sudah berhasil membuat databasenya sekarang konfigurasi backendnya.

- Pergi ke folder Websitenya dan cari folder backend.
- Buat file bername .env (pastikan namanya .env tidak .env.txt atau semacamnya)
- Isi file tersebut dengan data dibawah.
```plaintext
DATABASE_HOST = 'localhost'
DATABASE_USER = 'root'
DATABASE_PASSWORD = 
DATABASE_NAME = 
LAPTOP_DATA_TABLE = 
```
- Isi DATABASE_NAME dengan nama database yang sebelumnya dibuat. Jika lupa, buka website `localhost/phpmyadmin` untuk melihatnya.
- Isi Laptop Data Table dengan nama table yang sekarang, defaultnya adalah `data_base_laptop_109293192`
- Jika sudah, kita akan masuk ke step instalasi Node.js nya.

### Instalasi Node.js dan Konfigurasi Frontend
- Buka file Node.js yang sudah didownload.
- Kemudian klik next dan klik tombol yang I accept the terms in the License Agreement kemudian next lagi saja seterusnya dan diakhiri dengan `Install` dan tunggu. Jika sudah, klik finish.
- Jika ingin tahu apakah Node.js sudah terinstal atau belum. Buka `Command Prompt` di Windows Search dan run command ini.
```bash
node --version
```
Jika undefined command atau semacamnya tandanya Node.js belum terinstall, silahkan liat Youtube.
- Jika sudah terinstall, buka 2 `Command Prompt` dan ini mungkin step yang cukup ribet. Jika sudah membuka 2 command prompt, kamu harus mencari path dari website yang kamu download. Sebagai contoh, saya mendownload website ini di path `C:/Users/User/Downloads/website` berarti saya harus melakukan command ini di command prompt yang pertama.
```bash
cd C:/Users/User/Downloads/website
```
Intinya folder website yang didownload deh terus tinggal dipakein command `cd ` aja. Pastikan kedua command prompt itu sudah masuk kedalam folder website.
- Lalu, gunakan command ini dimasing-masing command prompt seperti ini.
```plaintext
Backend Command Prompt
cd backend

Frontend Command Prompt
cd frontend
```
- Jika sudah, gunakan dimasing-masing command prompt lagi dengan command ini.
```plaintext
npm install
```
- Jika sudah, untuk command prompt pertama kita akan jalankan sebagai backend dengan command seperti ini.
```plaintext
cd backend
node server.js
```
- Untuk command prompt kedua kita akan jalankan sebagai frontend dengan command seperti ini.
```plaintext
cd frontend
npm start
```
- Jika sudah dijalankan keduanya. Nantinya akan membuat ke website `localhost:3000` dan itulah websitenya.



# Laptop Database
Laptop Database adalah sebuah website simple untuk melakukan sistem CRUD (Create, Read, Update, Delete) dan menggunakan framework React untuk frontend dan Express untuk backend dan juga menggunakan MySQL untuk databasenya.

Website ini sangat simple dan mungkin sangat mudah untuk dilakukannya pembobolan.

Aplikasi yang dibutuhkan
- XAMPP
- Node.js

## Langkah-Langkah

- Download XAMPP di [link](https://sourceforge.net/projects/xampp/files/XAMPP%20Windows/8.2.4/xampp-windows-x64-8.2.4-0-VS16-installer.exe) ini.
- Download Node.js di [link](https://nodejs.org/dist/v18.17.1/node-v18.17.1-x64.msi) ini.

Jika semuanya sudah didownload, kita akan masuk ke cara berikutnya
### Instalasi XAMPP, Konfigurasi Database dan Backend
- Buka file XAMPP yang sudah didownload
- Kemudian klik next saja hingga proses instalasi sedang berjalan. XAMPP akan diinstalasi di folder `C:/xampp`
- Jika  mendapatkan dialog dari `Windows Security Alert` dikarenakan `Apache HTTP Server` pilih `Allow access`
- Jika sudah, klik `Finish`
- Akan dibuka aplikasi `XAMPP Control Panel`, pilih start untuk module `MySQL` dan `Apache`. Jika sudah distart, klik `Admin` dari module `MySQL`.
- Klik `New` atau `Baru` (jika Indonesia) untuk membuat Database.
- Isi nama databasenya. Nama database seharusnya panjang dan tidak mudah ditebak, contoh: `database_laptop_xiczzx12k31j23nk`. Lalu klik `Create` atau `Buat`
- Kemudian cari tombol `Import` kemudian klik.
- Kemudian klik Choose File. File SQL sudah ada difolder Websitenya, cari aja yang extensionnya .sql
- Jika sudah, kebawah dan klik import.

Jika sudah, maka sudah berhasil membuat databasenya sekarang konfigurasi backendnya.

- Pergi ke folder Websitenya dan cari folder backend.
- Buat file bername .env (pastikan namanya .env tidak .env.txt atau semacamnya)
- Isi file tersebut dengan data dibawah.
```plaintext
DATABASE_HOST = 'localhost'
DATABASE_USER = 'root'
DATABASE_PASSWORD = 
DATABASE_NAME = 
LAPTOP_DATA_TABLE = 
```
- Isi DATABASE_NAME dengan nama database yang sebelumnya dibuat. Jika lupa, buka website `localhost/phpmyadmin` untuk melihatnya.
- Isi Laptop Data Table dengan nama table yang sekarang, defaultnya adalah `data_base_laptop_109293192`
- Jika sudah, kita akan masuk ke step instalasi Node.js nya.

### Instalasi Node.js dan Konfigurasi Frontend
- Buka file Node.js yang sudah didownload.
- Kemudian klik next dan klik tombol yang I accept the terms in the License Agreement kemudian next lagi saja seterusnya dan diakhiri dengan `Install` dan tunggu. Jika sudah, klik finish.
- Jika ingin tahu apakah Node.js sudah terinstal atau belum. Buka `Command Prompt` di Windows Search dan run command ini.
```bash
node --version
```
Jika undefined command atau semacamnya tandanya Node.js belum terinstall, silahkan liat Youtube.
- Jika sudah terinstall, buka 2 `Command Prompt` dan ini mungkin step yang cukup ribet. Jika sudah membuka 2 command prompt, kamu harus mencari path dari website yang kamu download. Sebagai contoh, saya mendownload website ini di path `C:/Users/User/Downloads/website` berarti saya harus melakukan command ini di command prompt yang pertama.
```bash
cd C:/Users/User/Downloads/website
```
Intinya folder website yang didownload deh terus tinggal dipakein command `cd ` aja. Pastikan kedua command prompt itu sudah masuk kedalam folder website.
- Lalu, gunakan command ini dimasing-masing command prompt seperti ini.
```plaintext
Backend Command Prompt
cd backend

Frontend Command Prompt
cd frontend
```
- Jika sudah, gunakan dimasing-masing command prompt lagi dengan command ini.
```plaintext
npm install
```
- Jika sudah, untuk command prompt pertama kita akan jalankan sebagai backend dengan command seperti ini.
```plaintext
cd backend
node server.js
```
- Untuk command prompt kedua kita akan jalankan sebagai frontend dengan command seperti ini.
```plaintext
cd frontend
npm start
```
- Jika sudah dijalankan keduanya. Nantinya akan membuat ke website `localhost:3000` dan itulah websitenya.