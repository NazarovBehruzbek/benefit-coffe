import React from "react";

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* HEADER: Logo */}
      <header className="p-6 flex justify-center bg-black">
        <img
          src="/logo.png"
          alt="Benefit Coffee Logo"
          className="h-32 w-auto"
        />
      </header>

      {/* MAIN: Qisqacha ma'lumot */}
      <main className="px-6 py-6 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">BENEFIT COFFEE</h1>
      </main>

      {/* FOOTER: Lokatsiya + Yandex Map */}
      <footer className="bg-black text-white py-4 px-4 text-center space-y-6">
        <h2 className="text-xl font-semibold">Biz bilan bog'laning</h2>

        {/* Location */}
        <div className="flex justify-center items-center gap-2 text-sm">
          <LocationIcon />
          <span>Toshkent, Shayxontohur tumani, Jarariq dahasi, 1B</span>
        </div>
        {/* Aloqa ma'lumotlari: location, telefon, instagram */}
        <div className="flex flex-col md:flex-row md:justify-center md:items-center gap-4 text-sm">
          {/* Phone */}
          <div className="flex items-center gap-2 justify-center">
            <PhoneIcon />
            <a href="tel:+998901783533" className="underline">
              +998 94 334 22 52
            </a>
          </div>

          {/* Instagram */}
          <div className="flex items-center gap-2 justify-center">
            <InstagramIcon />
            <a
              href="https://instagram.com/benefit_coffee_"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              @BENEFIT COFFEE
            </a>
          </div>
        </div>

        {/* Yandex Map */}
        <div className="w-full max-w-2xl mx-auto rounded-lg overflow-hidden shadow-lg mt-6">
          <div className="relative h-96">
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

// SVG ICONS
const PhoneIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path d="M3 5a2 2 0 012-2h2a1 1 0 011 1v3a1 1 0 01-.293.707l-1.414 1.414a16 16 0 006.586 6.586l1.414-1.414A1 1 0 0116 14h3a1 1 0 011 1v2a2 2 0 01-2 2h-1c-6.627 0-12-5.373-12-12V5z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zM12 8a4 4 0 100 8 4 4 0 000-8zm6-2a1 1 0 110 2 1 1 0 010-2z" />
  </svg>
);

const LocationIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path d="M12 11c1.656 0 3-1.343 3-3S13.656 5 12 5s-3 1.343-3 3 1.344 3 3 3zm0 10s8-6.5 8-11a8 8 0 10-16 0c0 4.5 8 11 8 11z" />
  </svg>
);

export default App;
