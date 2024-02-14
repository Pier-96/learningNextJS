import { useEffect, useRef } from 'react';

// Importa el archivo de audio si es necesario

const DannyAudio = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const reproducirAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div>
      <button className={`bg-pink-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4`} onClick={reproducirAudio}>Click para sonido🔊</button>
      <audio ref={audioRef} autoPlay>
        <source src="/danny.mp3" type="audio/mpeg" />
        Tu navegador no soporta la reproducción de audio.
      </audio>
    </div>
  );
}

export default DannyAudio;
