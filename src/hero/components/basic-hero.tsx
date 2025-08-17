import Image from 'next/image';

export function BasicHero() {
  return (
    <div className="space-y-4 py-2">
      <div>
        <h2 className="text-center text-8xl uppercase tracking-tight">
          ELIGE TU NUEVO DISEÑO
        </h2>
      </div>
      <div className="relative grid grid-cols-2 gap-x-2 py-4">
        <Image
          alt="Hero"
          className="h-full max-h-[420px] w-full object-cover object-center"
          height="500"
          src="/aretes1.jpg"
          width="500"
        />
        <Image
          alt="Hero"
          className="h-full max-h-[420px] w-full object-cover object-center"
          height="500"
          src="/reloj1.jpeg"
          width="500"
        />
      </div>
      <div className="bg-orange-100 py-8">
        <h2 className="text-center text-8xl uppercase tracking-tight">
          Sé un símbolo de{' '}
          <span className="relative">
            Belleza
            <span className="-translate-x-1/2 absolute top-2/3 left-1/2 h-[0.5px] w-[7ch] bg-primary-foreground" />
            <span className="-translate-x-1/2 absolute top-[70%] left-1/2 h-[0.5px] w-[7ch] bg-primary-foreground" />
            <span className="-translate-x-1/2 absolute top-[75%] left-1/2 h-[0.5px] w-[7ch] bg-primary-foreground" />
            <span className="-translate-x-1/2 absolute top-[80%] left-1/2 h-[0.5px] w-[7ch] bg-primary-foreground" />
          </span>
        </h2>
      </div>
    </div>
  );
}
