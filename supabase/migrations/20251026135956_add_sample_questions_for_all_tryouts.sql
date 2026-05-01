/*
  # Add Sample Questions for All Tryouts

  ## Overview
  Add comprehensive sample questions for TWK, TIU, and TKP tryouts.

  ## Changes
  1. Add 10 questions for TWK (Tes Wawasan Kebangsaan)
  2. Add 10 questions for TIU (Tes Intelegensi Umum)
  3. Add 10 questions for TKP (Tes Karakteristik Pribadi)

  ## Notes
  - Questions are realistic and based on actual CPNS exam patterns
  - Each question has 4-5 options with correct answer and explanation
*/

-- Add TWK Questions (Tes Wawasan Kebangsaan)
INSERT INTO questions (tryout_id, question_number, question_text, option_a, option_b, option_c, option_d, option_e, correct_answer, explanation) VALUES
('1c0fbcc3-aafb-437f-821d-c5194cfb77fc', 1, 'Pancasila sebagai dasar negara Indonesia tercantum dalam...', 'Pembukaan UUD 1945 alinea ke-4', 'Batang Tubuh UUD 1945', 'Penjelasan UUD 1945', 'Tap MPR No. XVIII/MPR/1998', 'Dekrit Presiden 5 Juli 1959', 'A', 'Pancasila sebagai dasar negara tercantum dalam Pembukaan UUD 1945 alinea ke-4.'),
('1c0fbcc3-aafb-437f-821d-c5194cfb77fc', 2, 'Sila pertama Pancasila adalah Ketuhanan Yang Maha Esa. Makna dari sila ini adalah...', 'Indonesia adalah negara teokrasi', 'Negara berdasarkan pada satu agama tertentu', 'Negara menjamin kemerdekaan setiap warga negara untuk memeluk agama', 'Negara tidak mengakui adanya agama', 'Semua agama harus sama ajarannya', 'C', 'Sila Ketuhanan Yang Maha Esa menjamin kemerdekaan setiap warga negara untuk memeluk agama dan kepercayaannya.'),
('1c0fbcc3-aafb-437f-821d-c5194cfb77fc', 3, 'Sistem pemerintahan negara Indonesia berdasarkan UUD 1945 adalah...', 'Presidensial', 'Parlementer', 'Semi Presidensial', 'Monarki Konstitusional', 'Federalisme', 'A', 'Indonesia menganut sistem pemerintahan presidensial dimana presiden adalah kepala negara sekaligus kepala pemerintahan.'),
('1c0fbcc3-aafb-437f-821d-c5194cfb77fc', 4, 'Bhinneka Tunggal Ika berarti...', 'Berbeda-beda tetapi tetap satu', 'Satu untuk semua', 'Bersatu kita teguh', 'Berbeda itu indah', 'Persatuan dalam perbedaan', 'A', 'Bhinneka Tunggal Ika adalah semboyan Indonesia yang berarti "Berbeda-beda tetapi tetap satu jua".'),
('1c0fbcc3-aafb-437f-821d-c5194cfb77fc', 5, 'Lembaga negara yang berwenang mengubah dan menetapkan UUD adalah...', 'DPR', 'MPR', 'Presiden', 'Mahkamah Konstitusi', 'BPK', 'B', 'MPR memiliki wewenang mengubah dan menetapkan UUD sesuai Pasal 3 ayat 1 UUD 1945.'),
('1c0fbcc3-aafb-437f-821d-c5194cfb77fc', 6, 'Hak asasi manusia di Indonesia dijamin dalam UUD 1945 Bab...', 'Bab VIII', 'Bab X', 'Bab XA', 'Bab XII', 'Bab XIV', 'C', 'HAM dijamin dalam UUD 1945 Bab XA Pasal 28A sampai 28J.'),
('1c0fbcc3-aafb-437f-821d-c5194cfb77fc', 7, 'Proklamasi kemerdekaan Indonesia dibacakan pada tanggal...', '17 Agustus 1945', '18 Agustus 1945', '1 Juni 1945', '22 Juni 1945', '5 Juli 1959', 'A', 'Proklamasi kemerdekaan Indonesia dibacakan pada 17 Agustus 1945 oleh Soekarno-Hatta.'),
('1c0fbcc3-aafb-437f-821d-c5194cfb77fc', 8, 'Negara Indonesia adalah negara kesatuan yang berbentuk...', 'Republik', 'Monarki', 'Kerajaan', 'Federasi', 'Serikat', 'A', 'Berdasarkan UUD 1945 Pasal 1 ayat 1, Negara Indonesia adalah negara kesatuan yang berbentuk republik.'),
('1c0fbcc3-aafb-437f-821d-c5194cfb77fc', 9, 'Kedaulatan berada di tangan rakyat dan dilaksanakan menurut...', 'Undang-Undang Dasar', 'Ketetapan MPR', 'Peraturan Pemerintah', 'Keputusan Presiden', 'Peraturan Daerah', 'A', 'Pasal 1 ayat 2 UUD 1945 menyatakan kedaulatan berada di tangan rakyat dan dilaksanakan menurut UUD.'),
('1c0fbcc3-aafb-437f-821d-c5194cfb77fc', 10, 'Lambang negara Indonesia adalah...', 'Garuda Pancasila', 'Burung Merak', 'Harimau', 'Komodo', 'Elang Jawa', 'A', 'Garuda Pancasila adalah lambang negara Indonesia yang melambangkan kekuatan dan kemerdekaan.');

-- Add TIU Questions (Tes Intelegensi Umum)
INSERT INTO questions (tryout_id, question_number, question_text, option_a, option_b, option_c, option_d, option_e, correct_answer, explanation) VALUES
('f05e02e4-620c-457d-88dd-1e1bbab1b3a4', 1, 'Jika 3x + 5 = 20, maka nilai x adalah...', '5', '4', '6', '3', '7', 'A', '3x + 5 = 20, maka 3x = 15, sehingga x = 5.'),
('f05e02e4-620c-457d-88dd-1e1bbab1b3a4', 2, 'Antonim dari kata RAJIN adalah...', 'Malas', 'Tekun', 'Giat', 'Aktif', 'Semangat', 'A', 'Antonim (lawan kata) dari rajin adalah malas.'),
('f05e02e4-620c-457d-88dd-1e1bbab1b3a4', 3, 'Deret angka: 2, 4, 8, 16, ... Angka selanjutnya adalah...', '24', '20', '32', '30', '28', 'C', 'Pola deret adalah kelipatan 2, jadi 16 x 2 = 32.'),
('f05e02e4-620c-457d-88dd-1e1bbab1b3a4', 4, 'Jika semua A adalah B, dan semua B adalah C, maka...', 'Semua A adalah C', 'Semua C adalah A', 'Tidak ada A yang C', 'Beberapa A adalah C', 'Tidak dapat disimpulkan', 'A', 'Berdasarkan silogisme, jika A adalah B dan B adalah C, maka A adalah C.'),
('f05e02e4-620c-457d-88dd-1e1bbab1b3a4', 5, '25% dari 80 adalah...', '20', '15', '25', '30', '10', 'A', '25% x 80 = 25/100 x 80 = 20.'),
('f05e02e4-620c-457d-88dd-1e1bbab1b3a4', 6, 'Sinonim dari kata CERDAS adalah...', 'Bodoh', 'Pintar', 'Lambat', 'Malas', 'Lelah', 'B', 'Sinonim (persamaan kata) dari cerdas adalah pintar.'),
('f05e02e4-620c-457d-88dd-1e1bbab1b3a4', 7, 'Jika hari ini Senin, 100 hari lagi adalah hari...', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu', 'A', '100 hari = 14 minggu + 2 hari, jadi Senin + 2 hari = Rabu.'),
('f05e02e4-620c-457d-88dd-1e1bbab1b3a4', 8, 'BUKU : PERPUSTAKAAN = OBAT : ...', 'Rumah Sakit', 'Apotek', 'Dokter', 'Pasien', 'Penyakit', 'B', 'Analogi: Buku disimpan di perpustakaan, obat disimpan di apotek.'),
('f05e02e4-620c-457d-88dd-1e1bbab1b3a4', 9, 'Harga barang setelah diskon 20% adalah Rp 80.000. Harga awal barang adalah...', 'Rp 100.000', 'Rp 96.000', 'Rp 90.000', 'Rp 110.000', 'Rp 120.000', 'A', 'Jika 80% = 80.000, maka 100% = 80.000 ÷ 0.8 = 100.000.'),
('f05e02e4-620c-457d-88dd-1e1bbab1b3a4', 10, 'Manakah yang berbeda dari yang lain? MERAH, HIJAU, BIRU, BESAR, KUNING', 'MERAH', 'HIJAU', 'BIRU', 'BESAR', 'KUNING', 'D', 'BESAR bukan warna, sedangkan yang lain adalah nama warna.');

-- Add TKP Questions (Tes Karakteristik Pribadi)
INSERT INTO questions (tryout_id, question_number, question_text, option_a, option_b, option_c, option_d, option_e, correct_answer, explanation) VALUES
('eda65cef-405c-47e8-bcb0-1084f4f41b59', 1, 'Ketika rekan kerja Anda melakukan kesalahan yang merugikan tim, sikap Anda adalah...', 'Diam saja karena bukan urusan saya', 'Langsung melaporkan ke atasan', 'Membicarakan dengan yang bersangkutan secara baik-baik', 'Menyebarkan kepada rekan lain', 'Membiarkan saja', 'C', 'Sikap terbaik adalah membicarakan dengan yang bersangkutan secara baik-baik untuk menyelesaikan masalah.'),
('eda65cef-405c-47e8-bcb0-1084f4f41b59', 2, 'Anda ditugaskan menyelesaikan pekerjaan mendesak, tetapi ada undangan acara keluarga. Anda akan...', 'Mengutamakan acara keluarga', 'Menyelesaikan pekerjaan terlebih dahulu', 'Meminta rekan lain menggantikan', 'Datang sebentar ke acara lalu kembali bekerja', 'Izin tidak masuk kerja', 'B', 'Sebagai ASN profesional, pekerjaan mendesak harus diprioritaskan.'),
('eda65cef-405c-47e8-bcb0-1084f4f41b59', 3, 'Atasan Anda memberikan kritik terhadap kinerja Anda. Sikap Anda adalah...', 'Marah dan membela diri', 'Menerima dengan lapang dada dan berbenah', 'Cuek saja', 'Menghindari atasan', 'Mengundurkan diri', 'B', 'Kritik harus diterima sebagai masukan untuk perbaikan kinerja.'),
('eda65cef-405c-47e8-bcb0-1084f4f41b59', 4, 'Anda melihat rekan kerja melakukan kecurangan. Tindakan Anda adalah...', 'Ikut melakukan hal yang sama', 'Melaporkan sesuai prosedur', 'Pura-pura tidak tahu', 'Mengancam akan melaporkan', 'Meminta bagian dari keuntungan', 'B', 'Melaporkan sesuai prosedur adalah tindakan yang benar dan profesional.'),
('eda65cef-405c-47e8-bcb0-1084f4f41b59', 5, 'Target kerja Anda sulit tercapai. Yang Anda lakukan adalah...', 'Menyerah dan berhenti berusaha', 'Bekerja lebih keras dan mencari solusi', 'Menyalahkan sistem', 'Meminta target dikurangi', 'Mengabaikan target', 'B', 'Sikap pantang menyerah dan mencari solusi adalah karakter ASN yang baik.'),
('eda65cef-405c-47e8-bcb0-1084f4f41b59', 6, 'Dalam tim, Anda lebih suka...', 'Bekerja sendiri tanpa kolaborasi', 'Bekerja sama dan berbagi peran', 'Menyuruh orang lain bekerja', 'Menghindar dari tanggung jawab', 'Hanya mengerjakan bagian mudah', 'B', 'Kerja sama tim dan berbagi peran adalah kunci keberhasilan organisasi.'),
('eda65cef-405c-47e8-bcb0-1084f4f41b59', 7, 'Anda menemukan cara lebih efisien untuk pekerjaan rutin. Anda akan...', 'Menyimpan untuk diri sendiri', 'Membagikan kepada tim dan atasan', 'Menjual ide tersebut', 'Merahasiakan dari rekan', 'Menggunakan untuk kepentingan pribadi', 'B', 'Berbagi inovasi untuk kemajuan bersama adalah sikap ASN yang baik.'),
('eda65cef-405c-47e8-bcb0-1084f4f41b59', 8, 'Saat menghadapi konflik dengan rekan kerja, Anda akan...', 'Membalas dengan konflik yang lebih besar', 'Menyelesaikan dengan musyawarah', 'Mengabaikan dan mendiamkan', 'Melibatkan pihak lain untuk memojokkan', 'Mengundurkan diri', 'B', 'Penyelesaian konflik dengan musyawarah adalah cara terbaik.'),
('eda65cef-405c-47e8-bcb0-1084f4f41b59', 9, 'Anda diminta lembur tanpa kompensasi tambahan. Sikap Anda adalah...', 'Menolak dengan tegas', 'Bersedia jika memang pekerjaan mendesak', 'Menuntut bayaran lebih', 'Marah kepada atasan', 'Mengajak rekan lain menolak', 'B', 'Dedikasi terhadap tugas adalah sikap profesional ASN.'),
('eda65cef-405c-47e8-bcb0-1084f4f41b59', 10, 'Ketika diberi tanggung jawab baru yang belum Anda kuasai, Anda akan...', 'Menolak karena tidak mampu', 'Menerima dan belajar dengan cepat', 'Menerima tapi tidak serius mengerjakannya', 'Meminta diganti orang lain', 'Mengeluh kepada semua orang', 'B', 'Sikap terbuka untuk belajar dan berkembang sangat penting bagi ASN.')
ON CONFLICT (tryout_id, question_number) DO NOTHING;

-- Update total_questions for each tryout
UPDATE tryouts SET total_questions = 10 WHERE id = '1c0fbcc3-aafb-437f-821d-c5194cfb77fc';
UPDATE tryouts SET total_questions = 10 WHERE id = 'f05e02e4-620c-457d-88dd-1e1bbab1b3a4';
UPDATE tryouts SET total_questions = 10 WHERE id = 'eda65cef-405c-47e8-bcb0-1084f4f41b59';
