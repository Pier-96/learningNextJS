import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <p className="h-12 w-12 rotate-[30deg]">🥸🥸</p>
      <p className="text-[88px]">🐶</p>
    </div>
  );
}
