"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 10 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Ni de coña",
      "estas segura?",
      "nadie te va a soportar gritar en valo",
      "dale boluda/sciocco!",
      "te vas a quedar sin carrito",
      "te quedas sin proteccion de egipcios eh!",
      "te vas arrepentir...!",
      "te vas a perder un compi de viajes",
      "bro?",
      "no seas cabezona!",
      "porfa 😭!",
      "ME ESTAS JODIENDO",
      "porfa?",
      "me voy a suicidar",
      "voy a por una soga",
      "me he morido;(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <main>
    <div className="flex flex-col items-center justify-center h-screen -mt-16">
      {yesPressed ? (
        <>
          <img src="https://gifdb.com/images/high/snoopy-safe-travel-qehpnevetcu9i6kd.webp" />
          <div className="text-4xl font-bold my-4">Ueee!! y en junio pa egipto ✈️ y Cairo🪨 </div>
        </>
      ) : (
        <>
          <img className="h-[200px]" src="https://gifdb.com/images/high/cute-pusheen-valentines-day-pgyu3d9w4dmb1zyz.webp" />
          <h1 className="text-4xl my-4">🇦🇷Veroo🇮🇹 wacha quieres ser mi san valentin?</h1>
          <div>
            <button
              className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Si, eres el mejor!
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
    </main>
  );
}