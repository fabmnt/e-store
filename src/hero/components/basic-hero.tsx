import Image from 'next/image';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';

export function BasicHero() {
  return (
    <div className="space-y-4 overflow-hidden 2xl:space-y-10">
      <div>
        <h2 className="motion-translate-y-in-100 text-center text-8xl uppercase tracking-tight">
          ELIGE TU NUEVO ESTILO
        </h2>
      </div>
      <div className="motion-translate-y-in-100 grid h-[600px] w-full grid-cols-2 py-4">
        <AspectRatio className="relative w-full" ratio={1 / 1}>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 z-50 w-full transform space-y-12 px-8 text-center">
            <div className="font-light text-white text-xl uppercase">
              Para ella
            </div>
            <h4 className="text-5xl text-white leading-14 tracking-wider">
              Lorem ipsum dolor sit amet consectetur
            </h4>
            <Button
              className="cursor-pointer rounded-none bg-orange-300 text-black uppercase hover:bg-orange-200"
              size="lg"
            >
              Ver productos
            </Button>
          </div>
          <Image
            alt="Hero"
            className="object-cover object-center opacity-90 blur-[1px] brightness-90 contrast-125"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src="/aretes1.jpg"
          />
          <div className="absolute inset-0 h-full w-full bg-black/50" />
        </AspectRatio>
        <AspectRatio className="relative w-full" ratio={1 / 1}>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 z-50 w-full transform space-y-12 px-8 text-center">
            <div className="font-light text-white text-xl uppercase">
              Para él
            </div>
            <h4 className="text-5xl text-white leading-14 tracking-wider">
              Lorem ipsum dolor sit amet consectetur
            </h4>
            <Button
              className="cursor-pointer rounded-none bg-orange-300 text-black uppercase hover:bg-orange-200"
              size="lg"
            >
              Ver productos
            </Button>
          </div>
          <Image
            alt="Hero"
            className="object-cover object-center opacity-90 blur-[1px] brightness-90 contrast-125"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src="/reloj1.jpeg"
          />
          <div className="absolute inset-0 h-full w-full bg-black/50" />
        </AspectRatio>
      </div>
    </div>
  );
}
