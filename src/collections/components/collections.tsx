'use client';

import Image from 'next/image';
import { Container } from '@/components/container';
import { TextEffectPerLine } from '@/components/text-effect-per-line';

export function Collections() {
  return (
    <section className="min-h-[500px] bg-orange-100">
      <Container className="space-y-4 py-8 2xl:space-y-8">
        <div className="text-center text-8xl uppercase tracking-tight">
          <TextEffectPerLine
            text={`Explora nuestras
          Colecciones`}
          />
        </div>
        <div className="flex items-center justify-center p-10">
          <div className="grid grid-cols-2 gap-6">
            <Image
              alt="Aretes"
              className="row-span-2 h-full object-cover object-center"
              height={600}
              src="/aretes2.jpg"
              width={600}
            />
            <Image
              alt="Cadena"
              className="max-w-[300px] object-cover object-center"
              height={300}
              src="/cadena1.jpg"
              width={300}
            />
            <Image alt="Aretes" height={300} src="/aretes3.jpg" width={300} />
          </div>
        </div>
      </Container>
    </section>
  );
}
