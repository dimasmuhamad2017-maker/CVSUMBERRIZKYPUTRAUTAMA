'use client';

import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronRight, Award, Users, Package, Leaf, Sprout, Tractor } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <img 
                  src="/logo.png" 
                  alt="CV SUMBER RIZKY PUTRA UTAMA Logo" 
                  className="w-10 h-10 mr-3"
                />
                <div>
                  <h1 className="text-xl font-bold text-gray-900">CV SUMBER RIZKY PUTRA UTAMA</h1>
                  <p className="text-xs text-green-600 font-medium">INDUSTRI RANSUM MAKANAN HEWAN</p>
                </div>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#beranda" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Beranda</a>
              <a href="#tentang" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Tentang</a>
              <a href="#produk" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Produk</a>
              <a href="#kontak" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Kontak</a>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-green-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#beranda" className="block px-3 py-2 text-gray-700 hover:text-green-600 font-medium">Beranda</a>
              <a href="#tentang" className="block px-3 py-2 text-gray-700 hover:text-green-600 font-medium">Tentang</a>
              <a href="#produk" className="block px-3 py-2 text-gray-700 hover:text-green-600 font-medium">Produk</a>
              <a href="#kontak" className="block px-3 py-2 text-gray-700 hover:text-green-600 font-medium">Kontak</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="beranda" className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Solusi Nutrisi Terbaik untuk
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-amber-600"> Hewani Anda</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                CV SUMBER RIZKY PUTRA UTAMA adalah perusahaan terpercaya dalam industri ransum makanan hewan, 
                menyediakan nutrisi berkualitas tinggi untuk mendukung pertumbuhan dan kesehatan ternak Anda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all transform hover:scale-105 shadow-lg">
                  Hubungi Kami
                </button>
                <button className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-all">
                  Lihat Produk
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-green-100 to-amber-100 rounded-2xl p-8 shadow-xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 text-center shadow-md">
                    <Tractor className="w-12 h-12 text-green-600 mx-auto mb-3" />
                    <h3 className="font-bold text-gray-800">Produk Berkualitas</h3>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center shadow-md">
                    <Sprout className="w-12 h-12 text-amber-600 mx-auto mb-3" />
                    <h3 className="font-bold text-gray-800">Bahan Alami</h3>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center shadow-md">
                    <Award className="w-12 h-12 text-green-600 mx-auto mb-3" />
                    <h3 className="font-bold text-gray-800">Terpercaya</h3>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center shadow-md">
                    <Users className="w-12 h-12 text-amber-600 mx-auto mb-3" />
                    <h3 className="font-bold text-gray-800">Layanan Prima</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tentang <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-amber-600">Kami</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mengenal lebih dekat CV SUMBER RIZKY PUTRA UTAMA, mitra terpercaya dalam industri pakan ternak
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Komitmen Kami Terhadap Kualitas</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                CV SUMBER RIZKY PUTRA UTAMA telah berdedikasi dalam industri ransum makanan hewan dengan 
                komitmen kuat untuk menyediakan produk berkualitas tinggi. Kami memahami betapa pentingnya 
                nutrisi yang tepat untuk pertumbuhan hewan ternak Anda.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Dengan menggunakan bahan baku pilihan dan teknologi produksi modern, kami memastikan 
                setiap produk yang kami hasilkan memenuhi standar kualitas tertinggi dan memberikan 
                manfaat optimal untuk kesehatan dan produktivitas ternak.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <ChevronRight className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Bahan baku berkualitas tinggi</span>
                </div>
                <div className="flex items-center">
                  <ChevronRight className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Formulasi nutrisi seimbang</span>
                </div>
                <div className="flex items-center">
                  <ChevronRight className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Harga kompetitif</span>
                </div>
                <div className="flex items-center">
                  <ChevronRight className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Layanan pengiriman tepat waktu</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-amber-50 rounded-2xl p-8">
              <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Visi Kami</h4>
                <p className="text-gray-600">
                  Menjadi produsen pakan ternak terkemuka yang menyediakan solusi nutrisi 
                  inovatif dan berkelanjutan untuk mendukung industri peternakan nasional.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Misi Kami</h4>
                <p className="text-gray-600">
                  Memproduksi pakan ternak berkualitas tinggi dengan harga terjangkau, 
                  memberikan layanan terbaik kepada pelanggan, dan terus berinovasi 
                  untuk kemajuan industri peternakan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produk" className="py-20 bg-gradient-to-b from-green-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Produk <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-amber-600">Unggulan</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Berbagai jenis pakan ternak berkualitas tinggi untuk memenuhi kebutuhan nutrisi hewan peliharaan Anda
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-6">
                <Package className="w-12 h-12 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Pakan Ayam</h3>
                <p className="text-gray-600 mb-4">
                  Formula khusus untuk ayam pedaging, petelur, dan ayam kampung dengan 
                  kandungan protein dan nutrisi seimbang.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Protein tinggi 18-22%</li>
                  <li>• Vitamin dan mineral lengkap</li>
                  <li>• Tanpa pengawet berbahaya</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-6">
                <Package className="w-12 h-12 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Pakan Sapi</h3>
                <p className="text-gray-600 mb-4">
                  Nutrisi lengkap untuk sapi perah, sapi potong, dan anak sapi dengan 
                  formulasi yang disesuaikan kebutuhan.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Energi dan protein optimal</li>
                  <li>• Serat berkualitas tinggi</li>
                  <li>• Meningkatkan produksi susu</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-green-500 to-amber-600 p-6">
                <Package className="w-12 h-12 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Pakan Kambing</h3>
                <p className="text-gray-600 mb-4">
                  Pakan seimbang untuk kambing perah dan kambing potong dengan 
                  kandungan gizi yang optimal untuk pertumbuhan.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Mudah dicerna</li>
                  <li>• Meningkatkan nafsu makan</li>
                  <li>• Kaya vitamin B kompleks</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Hubungi <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-amber-600">Kami</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Siap melayani kebutuhan pakan ternak Anda dengan profesional dan terpercaya
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="bg-gradient-to-br from-green-50 to-amber-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Informasi Kontak</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-green-100 rounded-lg p-3 mr-4">
                      <MapPin className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Alamat</h4>
                      <p className="text-gray-600">
                        Dusun Wahas, Kel. Wahas, Kec. Balongpanggang<br />
                        Kab. Gresik, Prov. Jawa Timur
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-green-100 rounded-lg p-3 mr-4">
                      <Phone className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Telepon</h4>
                      <p className="text-gray-600">0852-8570-4297</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-green-100 rounded-lg p-3 mr-4">
                      <Mail className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-600">info@sumberizkyputrautama.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-white rounded-xl shadow-md">
                  <h4 className="font-semibold text-gray-900 mb-3">Jam Operasional</h4>
                  <div className="space-y-2 text-gray-600">
                    <p>Senin - Jumat: 08:00 - 17:00</p>
                    <p>Sabtu: 08:00 - 15:00</p>
                    <p>Minggu: Tutup</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-gradient-to-br from-green-600 to-amber-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Kirim Pesan</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nama Lengkap</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
                      placeholder="Masukkan nama Anda"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Nomor Telepon</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
                      placeholder="Masukkan nomor telepon"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Pesan</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
                      placeholder="Jelaskan kebutuhan Anda"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Kirim Pesan
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <img 
                  src="/logo.png" 
                  alt="CV SUMBER RIZKY PUTRA UTAMA Logo" 
                  className="w-10 h-10 mr-3"
                />
                <div>
                  <h3 className="text-xl font-bold">CV SUMBER RIZKY PUTRA UTAMA</h3>
                  <p className="text-sm text-green-400">INDUSTRI RANSUM MAKANAN HEWAN</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Perusahaan terpercaya dalam industri pakan ternak, menyediakan nutrisi berkualitas 
                tinggi untuk mendukung pertumbuhan dan kesehatan hewan peliharaan Anda.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#beranda" className="hover:text-white transition-colors">Beranda</a></li>
                <li><a href="#tentang" className="hover:text-white transition-colors">Tentang Kami</a></li>
                <li><a href="#produk" className="hover:text-white transition-colors">Produk</a></li>
                <li><a href="#kontak" className="hover:text-white transition-colors">Kontak</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CV SUMBER RIZKY PUTRA UTAMA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}