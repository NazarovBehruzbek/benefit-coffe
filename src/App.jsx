import React from "react";

const App = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* HEADER: Logo */}
      <header className="p-6 flex justify-center">
        <img
          src="/logo.png"
          alt="Benefit Coffee Logo"
          className="h-32 w-auto"
        />
      </header>

      {/* MAIN: Qisqacha ma'lumot */}
      <main className="px-6 py-12 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-[#333] mb-4">
          Benefit Coffee – Siz uchun foydali dam!
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Bizning missiyamiz – sizni har bir qultumda eng yaxshi ta’m va energiya bilan ta’minlash.
          Tabiiy mahsulotlar, zamonaviy texnologiya va doimiy xizmat – Toza energiya va yaxshi kayfiyat — har kuni Benefit Coffee bilan!
        </p>
      </main>

      {/* FOOTER: Lokatsiya + Yandex Map */}
      <footer className="bg-black text-white py-10 px-4 text-center space-y-4">
        <h2 className="text-xl font-semibold">Biz bilan bog'laning</h2>
        <p className="text-sm">
          📍 Toshkent shahri, Yakkasaroy tumani, Qahramon ko'chasi, 15-uy
        </p>

        <div className="w-full max-w-2xl mx-auto rounded-lg overflow-hidden shadow-lg">
          <div className="relative h-96">
            {/* Yandex Map iframe */}
            <iframe
              src="https://yandex.uz/map-widget/v1/?ll=69.177293%2C41.341014&mode=search&oid=169795685713&ol=biz&z=16.56"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              title="Benefit Coffee Lokatsiya"
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
