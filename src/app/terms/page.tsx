'use client';

import { ArrowLeft, FileText, AlertCircle, CheckCircle, Gavel, Users } from 'lucide-react';
import Link from 'next/link';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <img 
                  src="/logo.png" 
                  alt="CV SUMBER RIZKY PUTRA UTAMA Logo" 
                  className="w-10 h-10 mr-3"
                />
                <div>
                  <h1 className="text-xl font-bold text-gray-900">CV SUMBER RIZKY PUTRA UTAMA</h1>
                  <p className="text-xs text-green-600 font-medium">TERMS & CONDITIONS</p>
                </div>
              </Link>
            </div>
            
            <div className="flex items-center">
              <Link
                href="/"
                className="flex items-center text-gray-700 hover:text-green-600 transition-colors font-medium"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Kembali ke Beranda
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Syarat & Ketentuan <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-amber-600">CV SUMBER RIZKY PUTRA UTAMA</span>
            </h1>
            <p className="text-lg text-gray-600">
              Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Introduction */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <AlertCircle className="w-6 h-6 text-green-600 mr-3" />
              Pendahuluan
            </h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-4">
                Selamat datang di website <strong>CV SUMBER RIZKY PUTRA UTAMA</strong>. Syarat dan Ketentuan ini 
                mengatur penggunaan website dan layanan kami dalam industri ransum makanan hewan. 
                Dengan mengakses atau menggunakan website kami, Anda setuju untuk terikat oleh syarat dan ketentuan ini.
              </p>
              <p>
                Jika Anda tidak setuju dengan bagian mana pun dari syarat dan ketentuan ini, 
                Anda tidak boleh menggunakan website atau layanan kami.
              </p>
            </div>
          </section>

          {/* Company Information */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Users className="w-6 h-6 text-green-600 mr-3" />
              Informasi Perusahaan
            </h2>
            <div className="bg-green-50 rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Identitas Perusahaan</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li><strong>Nama:</strong> CV SUMBER RIZKY PUTRA UTAMA</li>
                    <li><strong>Bidang Usaha:</strong> Industri Ransum Makanan Hewani</li>
                    <li><strong>Alamat:</strong> Dusun Wahas, Kel. Wahas, Kec. Balongpanggang</li>
                    <li><strong>Kabupaten:</strong> Gresik, Provinsi Jawa Timur</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Kontak Perusahaan</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li><strong>Telepon:</strong> 0852-8570-4297</li>
                    <li><strong>Email:</strong> info@sumberizkyputrautama.com</li>
                    <li><strong>Website:</strong> www.sumberizkyputrautama.com</li>
                    <li><strong>Jam Operasional:</strong> Senin-Sabtu, 08:00-17:00</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Services */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Layanan Kami</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-600 mb-4">
                <strong>CV SUMBER RIZKY PUTRA UTAMA</strong> menyediakan layanan berikut:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Produksi dan penjualan pakan ternak berkualitas tinggi</li>
                <li>Konsultasi nutrisi untuk hewan ternak</li>
                <li>Pengiriman produk ke seluruh wilayah layanan</li>
                <li>Layanan purna jual dan dukungan teknis</li>
                <li>Informasi produk dan panduan penggunaan</li>
              </ul>
            </div>
          </section>

          {/* User Responsibilities */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
              Tanggung Jawab Pengguna
            </h2>
            <div className="space-y-4">
              <div className="bg-amber-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Sebagai pengguna, Anda setuju untuk:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Memberikan informasi yang akurat dan lengkap</li>
                  <li>Menggunakan website hanya untuk tujuan yang sah</li>
                  <li>Tidak melakukan aktivitas yang merugikan perusahaan</li>
                  <li>Mematuhi semua peraturan yang berlaku</li>
                  <li>Menjaga kerahasiaan informasi akun Anda</li>
                </ul>
              </div>
              
              <div className="bg-red-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Anda dilarang untuk:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Menyalin atau mendistribusikan konten tanpa izin</li>
                  <li>Menggunakan website untuk kegiatan penipuan</li>
                  <li>Mengganggu atau merusak sistem website</li>
                  <li>Mengirimkan virus atau malware</li>
                  <li>Melanggar hak kekayaan intelektual</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Products and Services */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Produk dan Layanan</h2>
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Kualitas Produk</h3>
              <p className="text-gray-600 mb-4">
                Kami berkomitmen untuk menyediakan produk pakan ternak dengan:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Kualitas bahan baku yang terjamin</li>
                <li>Formulasi nutrisi yang seimbang</li>
                <li>Standar keamanan pangan yang ketat</li>
                <li>Lisensi dan sertifikasi yang lengkap</li>
              </ul>
              
              <h3 className="font-semibold text-gray-900 mb-3 mt-6">Harga dan Pembayaran</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Harga dapat berubah sewaktu-waktu tanpa pemberitahuan terlebih dahulu</li>
                <li>Pembayaran harus dilakukan sesuai dengan metode yang disepakati</li>
                <li>Pembayaran tunai atau transfer bank diutamakan</li>
                <li>Biaya pengiriman ditanggung pembeli</li>
              </ul>
            </div>
          </section>

          {/* Ordering and Delivery */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pemesanan dan Pengiriman</h2>
            <div className="bg-gray-50 rounded-lg p-6 text-gray-600">
              <div className="mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Prosedur Pemesanan:</h3>
                <ol className="list-decimal list-inside space-y-1">
                  <li>Konsultasi kebutuhan produk</li>
                  <li>Pemesanan melalui telepon, email, atau langsung</li>
                  <li>Konfirmasi ketersediaan stok</li>
                  <li>Pembayaran sesuai kesepakatan</li>
                  <li>Penjadwalan pengiriman</li>
                </ol>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Kebijakan Pengiriman:</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Pengiriman dilakukan pada hari kerja</li>
                  <li>Waktu pengiriman disesuaikan dengan jarak</li>
                  <li>Pembeli bertanggung jawab atas penerimaan barang</li>
                  <li>Klaim kerusakan harus diajukan maksimal 24 jam</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Intellectual Property */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Hak Kekayaan Intelektual</h2>
            <div className="bg-amber-50 rounded-lg p-6 text-gray-600">
              <p className="mb-4">
                Semua konten di website ini, termasuk namun tidak terbatas pada:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Teks, gambar, grafik, dan logo</li>
                <li>Nama merek "CV SUMBER RIZKY PUTRA UTAMA"</li>
                <li>Formulasi produk dan informasi teknis</li>
                <li>Desain dan tata letak website</li>
              </ul>
              <p>
                Merupakan hak milik <strong>CV SUMBER RIZKY PUTRA UTAMA</strong> dan dilindungi oleh 
                hukum hak cipta dan merek dagang yang berlaku di Indonesia.
              </p>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pembatasan Tanggung Jawab</h2>
            <div className="bg-red-50 rounded-lg p-6 text-gray-600">
              <p className="mb-4">
                <strong>CV SUMBER RIZKY PUTRA UTAMA</strong> tidak bertanggung jawab atas:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Kerugian tidak langsung, insidental, atau konsekuensial</li>
                <li>Keterlambatan pengiriman karena force majeure</li>
                <li>Kesalahan penggunaan produk oleh konsumen</li>
                <li>Kerusakan akibat transportasi pihak ketiga</li>
                <li>Kehilangan data atau informasi digital</li>
              </ul>
              <p className="mt-4">
                Tanggung jawab maksimal kami sebatas nilai pembelian produk yang bersangkutan.
              </p>
            </div>
          </section>

          {/* Termination */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pemutusan Layanan</h2>
            <div className="bg-gray-50 rounded-lg p-6 text-gray-600">
              <p className="mb-4">
                Kami berhak untuk:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Menghentikan layanan kepada pengguna yang melanggar syarat</li>
                <li>Membatasi akses ke website tanpa pemberitahuan</li>
                <li>Membatalkan pesanan jika diperlukan</li>
                <li>Memperbarui syarat dan ketentuan sewaktu-waktu</li>
              </ul>
            </div>
          </section>

          {/* Governing Law */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Hukum yang Berlaku</h2>
            <div className="bg-green-50 rounded-lg p-6 text-gray-600">
              <p>
                Syarat dan Ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum yang berlaku 
                di Republik Indonesia. Setiap sengketa akan diselesaikan melalui musyawarah terlebih dahulu, 
                dan jika tidak mencapai kesepakatan, akan diselesaikan melalui pengadilan yang berwenang di Gresik, Jawa Timur.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Hubungi Kami</h2>
            <div className="bg-gradient-to-r from-green-600 to-amber-600 rounded-lg p-6 text-white">
              <p className="mb-4">
                Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, 
                silakan hubungi kami:
              </p>
              <div className="space-y-2">
                <p><strong>CV SUMBER RIZKY PUTRA UTAMA</strong></p>
                <p>📍 Dusun Wahas, Kel. Wahas, Kec. Balongpanggang, Kab. Gresik, Prov. Jawa Timur</p>
                <p>📞 0852-8570-4297</p>
                <p>📧 info@sumberizkyputrautama.com</p>
              </div>
            </div>
          </section>

          {/* Agreement */}
          <section className="mb-10">
            <div className="border-2 border-green-600 rounded-lg p-6 text-center">
              <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Persetujuan</h3>
              <p className="text-gray-600">
                Dengan menggunakan website dan layanan <strong>CV SUMBER RIZKY PUTRA UTAMA</strong>, 
                Anda menyatakan telah membaca, memahami, dan menyetujui Syarat dan Ketentuan ini.
              </p>
            </div>
          </section>

          {/* Footer */}
          <div className="border-t pt-8 text-center">
            <p className="text-gray-500 text-sm">
              Syarat & Ketentuan ini berlaku efektif sejak {new Date().toLocaleDateString('id-ID')} 
              dan merupakan kesepakatan yang mengikat antara Anda dan <strong>CV SUMBER RIZKY PUTRA UTAMA</strong>.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}