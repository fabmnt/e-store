'use client';

import { Container } from '@/components/container';
import { TextEffectPerLine } from '@/components/text-effect-per-line';

export function Collections() {
  return (
    <section className="min-h-[500px] bg-orange-100">
      <Container className="py-8">
        {/*         <h2 className="text-center text-8xl uppercase tracking-tight">
          Explora nuestras
          <br />
          <span className="relative">
            <motion.div
              initial={{
                translateX: 400,
              }}
              viewport={{ once: true }}
              whileInView={{
                translateX: 0,
              }}
            >
              colecciones
            </motion.div>
          </span>
        </h2> */}
        <div className="text-center text-8xl uppercase tracking-tight">
          <TextEffectPerLine
            text={`Explora nuestras
          Colecciones`}
          />
        </div>
      </Container>
    </section>
  );
}
