'use client';

import Image from 'next/image';
import { Container } from '@/components/container';
import { TextEffectPerLine } from '@/components/text-effect-per-line';
import { AspectRatio } from '@/components/ui/aspect-ratio';

export function Collections() {
  return (
    <section className="min-h-[500px] bg-orange-100">
      <Container className="space-y-4 py-8 2xl:space-y-8">
        <div className="min-h-[200px] text-center text-8xl uppercase tracking-tight">
          <TextEffectPerLine
            text={`Explora nuestras
          Colecciones`}
          />
        </div>
        <div className="flex items-center justify-center p-10">
          <div className="grid grid-cols-2 gap-6">
            <div className="row-span-2">
              <AspectRatio ratio={1 / 1}>
                <Image
                  alt="Aretes"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  src="/aretes2.jpg"
                />
              </AspectRatio>
            </div>
            <div>
              <AspectRatio ratio={1 / 1}>
                <Image
                  alt="Cadena"
                  className="aspect-square h-full object-cover object-center"
                  fill
                  src="/cadena1.jpg"
                />
              </AspectRatio>
            </div>
            <div>
              <AspectRatio ratio={1 / 1}>
                <Image
                  alt="Aretes"
                  className="aspect-square h-full object-cover object-center"
                  fill
                  src="/aretes3.jpg"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
