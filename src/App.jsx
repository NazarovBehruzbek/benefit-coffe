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
      <main className="px-6 py-2 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold ">BENEFIT COFFEE</h1>
      </main>

      {/* FOOTER: Lokatsiya + Yandex Map */}
      <footer className="bg-black text-white py-4 px-4">
        <h2 className="text-xl font-semibold text-center mb-4">Biz bilan bog'laning</h2>
        {/* Social Media Links */}
        <div className="flex flex-col items-center md:flex-row md:justify-center gap-6 mt-8 text-sm">
          {/* Instagram */}
          <div className="flex items-center gap-2">
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

          {/* Telegram */}
          <div className="flex items-center gap-2">
            <TelegramIcon />
            <a
              href="https://t.me/benefitcoffeeuz"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              t.me/benefitcoffeeuz
            </a>
          </div>
        </div>
        {/* Yandex Maps */}
        <div className="w-full max-w-5xl mx-auto">
          <div className="flex flex-col  gap-1 p-4">
            {/* First Location */}
            <div className="flex-1">
              <div className="flex items-center gap-2 justify-center  mb-2">
                <LocationIcon />
                <span className="font-medium">1-Manzil</span>
              </div>
              <p className="text-sm mb-4 text-center ">Toshkent, Shayxontohur tumani, Jarariq dahasi, 1B</p>
              <div className="flex mb-2 items-center justify-center gap-2 text-sm">
                <PhoneIcon />
                <a href="tel:+998943342252" className="underline">
                  +998 94 334 22 52
                </a>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg mb-2">
                <div className="relative h-72 w-full sm:max-w-[60%] mx-auto">
                  <iframe
                    src="https://yandex.uz/map-widget/v1/?ll=69.177293%2C41.341014&mode=search&oid=169795685713&ol=biz&z=16.56"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allowFullScreen
                    title="Benefit Coffee - 1-я локация"
                    className="absolute top-0 left-0 w-full h-full"
                  ></iframe>
                </div>
              </div>

            </div>

            {/* Second Location */}
            <div className="flex-1">
              <div className="flex items-center gap-2 justify-center ">
                <LocationIcon />
                <span className="font-medium">2-Manzil</span>
              </div>
              <p className="text-sm mb-4 text-center">Toshkent, Olmazor tumani, Nurafshon ko'chasi</p>
              <div className="flex mb-2 items-center justify-center gap-2 text-sm">
                <PhoneIcon />
                <a href="tel:+998943042252" className="underline">
                  +998 94 304 22 52
                </a>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg mb-2">
                <div className="relative h-72 w-full sm:max-w-[60%] mx-auto">
                  <iframe
                    src="https://yandex.uz/map-widget/v1/?ll=69.249155%2C41.340671&pt=69.249155%2C41.340671&z=16"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allowFullScreen
                    title="Benefit Coffee - 2-я локация"
                    className="absolute top-0 left-0 w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>
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

const TelegramIcon = () => (
  <svg
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM15.89 8.31L14.5 15.7C14.37 16.45 13.99 16.59 13.37 16.26L10.8 14.3L9.53 15.55C9.37 15.71 9.24 15.84 8.94 15.84L9.19 13.24L13.88 9.12C14.09 8.93 13.83 8.83 13.55 9.02L7.74 12.6L5.19 11.81C4.45 11.6 4.43 11.18 5.33 10.81L15.17 6.5C15.77 6.25 16.29 6.57 16.1 7.32L15.89 8.31Z"
      fill="currentColor"
    />
  </svg>
);

export default App;
