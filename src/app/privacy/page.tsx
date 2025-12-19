'use client';

import { ArrowLeft, Shield, Eye, Lock, Database, UserCheck } from 'lucide-react';
import Link from 'next/link';

export default function Privacy() {
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
                  <p className="text-xs text-green-600 font-medium">PRIVACY POLICY</p>
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
              <Shield className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Kebijakan Privasi <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-amber-600">CV SUMBER RIZKY PUTRA UTAMA</span>
            </h1>
            <p className="text-lg text-gray-600">
              Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Introduction */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Eye className="w-6 h-6 text-green-600 mr-3" />
              Pendahuluan
            </h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-4">
                Di <strong>CV SUMBER RIZKY PUTRA UTAMA</strong>, kami sangat memperhatikan privasi dan keamanan data pribadi Anda. 
                Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, melindungi, dan membagikan informasi 
                pribadi Anda ketika Anda menggunakan website dan layanan kami dalam industri ransum makanan hewan.
              </p>
              <p>
                Dengan menggunakan website kami, Anda menyetujui praktik-praktik yang dijelaskan dalam kebijakan ini.
              </p>
            </div>
          </section>

          {/* Data Collection */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Database className="w-6 h-6 text-green-600 mr-3" />
              Informasi yang Kami Kumpulkan
            </h2>
            <div className="space-y-4">
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Informasi Pribadi</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Nama lengkap</li>
                  <li>Nomor telepon</li>
                  <li>Alamat email</li>
                  <li>Alamat pengiriman</li>
                  <li>Informasi bisnis/perusahaan</li>
                </ul>
              </div>
              
              <div className="bg-amber-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Informasi Teknis</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Alamat IP</li>
                  <li>Jenis browser</li>
                  <li>Waktu akses</li>
                  <li>Halaman yang dikunjungi</li>
                  <li>Informasi perangkat</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Usage */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <UserCheck className="w-6 h-6 text-green-600 mr-3" />
              Penggunaan Informasi
            </h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-600 mb-4">
                Kami menggunakan informasi yang dikumpulkan untuk tujuan-tujuan berikut:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-3">
                <li><strong>Penyediaan Layanan:</strong> Memproses pesanan dan menyediakan produk pakan ternak</li>
                <li><strong>Komunikasi:</strong> Menghubungi Anda mengenai pesanan, layanan, dan penawaran khusus</li>
                <li><strong>Penyempurnaan Layanan:</strong> Menganalisis penggunaan untuk meningkatkan website dan layanan kami</li>
                <li><strong>Keamanan:</strong> Melindungi website dan pengguna dari aktivitas penipuan atau ilegal</li>
                <li><strong>Kepatuhan Hukum:</strong> Mematuhi kewajiban hukum dan peraturan yang berlaku</li>
              </ul>
            </div>
          </section>

          {/* Data Protection */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Lock className="w-6 h-6 text-green-600 mr-3" />
              Perlindungan Data
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                <strong>CV SUMBER RIZKY PUTRA UTAMA</strong> berkomitmen untuk melindungi data pribadi Anda dengan:
              </p>
              <div className="bg-green-50 rounded-lg p-6">
                <ul className="list-disc list-inside space-y-2">
                  <li>Enkripsi data selama transmisi dan penyimpanan</li>
                  <li>Akses terbatas ke informasi pribadi</li>
                  <li>Langkah-langkah keamanan fisik dan teknis</li>
                  <li>Pelatihan rutin staf tentang perlindungan data</li>
                  <li>Audit keamanan berkala</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Third Party Sharing */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pembagian dengan Pihak Ketiga</h2>
            <div className="bg-gray-50 rounded-lg p-6 text-gray-600">
              <p className="mb-4">
                Kami tidak menjual, menyewakan, atau membagikan informasi pribadi Anda dengan pihak ketiga untuk keperluan 
                pemasaran tanpa persetujuan Anda. Kami hanya membagikan informasi dalam kondisi berikut:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Dengan penyedia layanan yang membantu operasi bisnis kami</li>
                <li>Untuk memenuhi persyaratan hukum atau perintah pengadilan</li>
                <li>Untuk melindungi hak, properti, atau keselamatan kami atau pengguna lain</li>
                <li>Dengan afiliasi perusahaan dengan persetujuan yang tepat</li>
              </ul>
            </div>
          </section>

          {/* User Rights */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Hak Anda sebagai Pengguna</h2>
            <div className="bg-amber-50 rounded-lg p-6">
              <p className="text-gray-600 mb-4">
                Sebagai pengguna, Anda memiliki hak untuk:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Mengakses informasi pribadi yang kami simpan tentang Anda</li>
                <li>Memperbaiki informasi yang tidak akurat</li>
                <li>Menghapus informasi pribadi Anda (dengan batasan tertentu)</li>
                <li>Menolak pemasaran langsung dari kami</li>
                <li>Meminta salinan data pribadi Anda</li>
              </ul>
            </div>
          </section>

          {/* Cookies */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Kebijakan Cookie</h2>
            <div className="bg-gray-50 rounded-lg p-6 text-gray-600">
              <p className="mb-4">
                Website kami menggunakan cookie untuk meningkatkan pengalaman pengguna:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Cookie Esensial:</strong> Diperlukan untuk fungsi dasar website</li>
                <li><strong>Cookie Performa:</strong> Membantu kami memahami cara penggunaan website</li>
                <li><strong>Cookie Fungsionalitas:</strong> Mengingat preferensi Anda</li>
              </ul>
              <p className="mt-4">
                Anda dapat mengatur browser untuk menolak cookie, namun ini dapat mempengaruhi fungsionalitas website.
              </p>
            </div>
          </section>

          {/* Changes to Policy */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Perubahan Kebijakan</h2>
            <div className="bg-green-50 rounded-lg p-6 text-gray-600">
              <p>
                Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Perubahan akan diposting di halaman ini 
                dengan tanggal "Terakhir diperbarui" yang baru. Kami mendorong Anda untuk secara berkala meninjau kebijakan ini.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Hubungi Kami</h2>
            <div className="bg-gradient-to-r from-green-600 to-amber-600 rounded-lg p-6 text-white">
              <p className="mb-4">
                Jika Anda memiliki pertanyaan atau kekhawatiran tentang kebijakan privasi kami, 
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

          {/* Footer */}
          <div className="border-t pt-8 text-center">
            <p className="text-gray-500 text-sm">
              Kebijakan Privasi ini berlaku efektif sejak {new Date().toLocaleDateString('id-ID')} dan merupakan 
              bagian dari komitmen <strong>CV SUMBER RIZKY PUTRA UTAMA</strong> terhadap perlindungan data pelanggan.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}