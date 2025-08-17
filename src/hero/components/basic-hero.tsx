import Image from 'next/image';

export function BasicHero() {
  return (
    <div className="space-y-4 overflow-hidden 2xl:space-y-10">
      <div>
        <h2 className="motion-translate-y-in-100 text-center text-8xl uppercase tracking-tight">
          ELIGE TU NUEVO ESTILO
        </h2>
      </div>
      <div className="motion-translate-y-in-100 relative grid grid-cols-2 gap-x-2 py-4 2xl:gap-x-6">
        <Image
          alt="Hero"
          className="h-full max-h-[420px] w-full object-cover object-center 2xl:max-h-[650px]"
          height="500"
          src="/aretes1.jpg"
          width="500"
        />
        <Image
          alt="Hero"
          className="h-full max-h-[420px] w-full object-cover object-center 2xl:max-h-[650px]"
          height="500"
          src="/reloj1.jpeg"
          width="500"
        />
      </div>
    </div>
  );
}
