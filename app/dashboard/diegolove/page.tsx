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
      "estas seguro cabron?",
      "no homo eh",
      "piensatelo otra vez!",
      "te vas a quedar sin piropos",
      "xq no bro?",
      "no te arrepentiras!",
      "no te voy a carrilear eh",
      "bro?",
      "no seas cabezooon!",
      "porfa 😭!",
      "cabronnn acepta",
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
        <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
        <div className="text-4xl font-bold my-4">Booof PERO SIN MARICONADAS EH</div>
        </>
      ) : (
        <>
          <img className="h-[200px]" src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif" />
          <h1 className="text-4xl my-4">Diegote papasote quieres ser mi san valentin?</h1>
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