export default function Contact() {
    return (
        <section className="bg-gray-100 " id="kontak">
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Mutiara Laminating</h2>
            <p className="mt-4 text-lg text-gray-500">Jl. Btn, Komp. Bangun Reksa Indah II Blok V No.18, RT.007/RW.006, Pd. Pucung, Kec. Karang Tengah, Kota Tangerang, Banten 15157</p>
        </div>
        <div className="mt-16 lg:mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="rounded-lg overflow-hidden">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.5927426770388!2d106.703291!3d-6.21471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f9f3a3b5d1d3:0xbcdf79510b5524e5!2sJl. Btn Blok V No.18, RT.007/RW.006, Pd. Pucung, Kec. Karang Tengah, Kota Tangerang, Banten 15157!5e0!3m2!1sid!2sid!4v1701757678280!5m2!1sid!2sid" width="600" height="450" style={{border: 0}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div>
                    <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                        <div className="px-6 py-4">
                            <h3 className="text-lg font-medium text-gray-900">Detail Alamat</h3>
                            <p className="mt-1 text-gray-600">Komp. Bangun Reksa Indah II Blok V No.18</p>
                        </div>
                        <div className="border-t border-gray-200 px-6 py-4">
                            <h3 className="text-lg font-medium text-gray-900">Hours</h3>
                            <p className="mt-1 text-gray-600">Senin - Jumat: 07.30 - 17.00</p>
                            <p className="mt-1 text-gray-600">Sabtu: 07.30 - 16.00</p>
                            <p className="mt-1 text-gray-600">Minggu: Tutup</p>
                        </div>
                        <div className="border-t border-gray-200 px-6 py-4">
                            <h3 className="text-lg font-medium text-gray-900">Kontak</h3>
                            <p className="mt-1 text-gray-600">Email: admin@mutiaralaminating.com</p>
                            <p className="mt-1 text-gray-600">WhatsApp: +62 812-1786-9431</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    )
}