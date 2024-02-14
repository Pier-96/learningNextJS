'use client'
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
      "porque bro?",
      "sabes que soy el mas fuerte del grupo GYM no?",
      "isra no es capaz de programar esto bro",
      "danny dame los 44 euros bro lo estoy pasando mal",
      "FCK QUEVEDO",
      "xq no bro?",
      "BRO?!",
      "te vas a perder al mejor premade bot!",
      "mi lucian es gOD",
      "danny mi dinero!",
      "danny 2 meses paro y out!",
      "FVCK URUGUAY",
      "porfa?",
      "me voy a suicidar",
      "ISRA GO 42",
      "ALEX VUELVE AL GYM BRO",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <main>
    <div className="flex flex-col items-center justify-center h-screen -mt-16">
      {yesPressed ? (
        <>
        <img src="https://gifdb.com/images/high/uruguay-homer-simpson-782n9bg2baep6596.webp" />
        <div className="text-4xl font-bold my-4">te haces el argentino y sos de uruguay</div>
        </>
      ) : (
        <>
          <img className="h-[200px]" src="https://c.tenor.com/qm9nzBWdC9IAAAAC/tenor.gif" />
          <h1 className="text-4xl my-4">Agustin quieres ser mi san valentin?</h1>
          <div>
            <button
              className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Claro pa
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