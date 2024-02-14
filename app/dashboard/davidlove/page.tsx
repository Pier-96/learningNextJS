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
      "No",
      "como que 33?",
      "me estas jodiendo",
      "mewing!",
      "dale pelotudoo",
      "andrea cerda!",
      "adri rusa loca!",
      "diego papasote",
      "cris crush",
      "MESSI>RONALDO!",
      "porfa 😭!",
      "FVCK REAL MADRID DE MIERDA",
      "porfa?",
      "me voy a suicidar",
      "estoy cansado jefe",
      "voy a seguir trabajando :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <main>
    <div className="flex flex-col items-center justify-center h-screen -mt-16">
      {yesPressed ? (
        <>
        <img src="https://gifdb.com/images/high/cheater-detected-valorant-warning-dmjv2r1hah7yrlp6.webp" />
        <div className="text-4xl font-bold my-4">QUE HACES MARICON?? 🏳️‍🌈</div>
        </>
      ) : (
        <>
          <img className="h-[200px]" src="https://gifdb.com/images/high/f1-happy-dance-alonso-ottxqhrc910691n9.webp" />
          <h1 className="text-4xl my-4">David perraco quieres ser mi san valentin?</h1>
          <div>
            <button
              className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Si, eres el mejor
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