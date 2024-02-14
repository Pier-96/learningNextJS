'use client'
import { useState } from "react";
import DannyAudio from "@/app/ui/dashboard/audiodanny";

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
      "entonces pagame los 44 de eladio ya mismo",
      "te vas a quedar sin carrito en el lol",
      "piensatelo otra vez!",
      "te voy a matar monoconchasumare!",
      "xq eres tan hermosa y a la vez tan dificil?",
      "cuando gym?!",
      "puessshh te vassshh perma vale?!",
      "bro?",
      "dale ya ecuapan!",
      "me cago en tus muertos!",
      "me voy a comer al fercho!",
      "me voy a comer la pelusa!",
      "me voy a suicidar",
      "isra no eres capaz de hacer esto eh papu",
      "ahora en serio pagame que he gastado mucho este mes",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <main>
    <div className="flex flex-col items-center justify-center h-screen -mt-16">
      {yesPressed ? (
        <>
        <img src="https://c.tenor.com/qcNoCsFEFj8AAAAC/tenor.gif" />
        <div className="text-4xl font-bold my-4">COMO?? toma plomo mono conchatumare</div>
        </>
      ) : (
        <>
        <DannyAudio></DannyAudio>
          <img className="h-[200px]" src="https://c.tenor.com/ZgXzEEbQTp0AAAAd/tenor.gif" />
          <h1 className="text-4xl my-4">Danny ecuapan quieres ser mi chamana por san valentin?</h1>
          <div>
            <button
              className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Claro papu    
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