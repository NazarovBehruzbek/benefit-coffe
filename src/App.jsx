import React from "react";

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* HEADER: Logo */}
      <header className="p-6 flex justify-center bg-black">
        <img
          src="/logo.png"
          alt="Benefit Coffee Logo"
          className="h-32 w-auto "
        />
      </header>

      {/* MAIN: Qisqacha ma'lumot */}
      <main className="px-6 py-12 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">
          BENEFIT COFFEE
        </h1>
      </main>

      {/* FOOTER: Lokatsiya + Yandex Map */}
      <footer className="bg-black text-white py-10 px-4 text-center space-y-4">
        <h2 className="text-xl font-semibold">Biz bilan bog'laning</h2>
        <p className="text-sm">
          📍 Toshkent, Shayxontohur tumani, Jarariq dahasi, 1B
        </p>
        <p className="text-sm">
          ☎️ Telefon: <a href="tel:+998901783533" className="underline">+998 90 178 35 33</a>
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
