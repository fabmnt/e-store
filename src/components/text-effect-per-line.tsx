import { useIntersectionObserver } from '@uidotdev/usehooks';
import { useEffect, useState } from 'react';
import { TextEffect } from '@/components/ui/text-effect';

export function TextEffectPerLine({ text }: { text: string }) {
  const [ref, entry] = useIntersectionObserver({
    threshold: 0.5,
    root: null,
    rootMargin: '0px',
  });

  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    if (entry?.isIntersecting && !hasTriggered) {
      setHasTriggered(true);
    }
  }, [entry?.isIntersecting, hasTriggered]);

  return (
    <div ref={ref}>
      <TextEffect
        as="h2"
        per="line"
        segmentWrapperClassName="overflow-hidden block"
        speedReveal={1}
        speedSegment={0.7}
        trigger={hasTriggered}
        variants={{
          container: {
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          },
          item: {
            hidden: {
              opacity: 0,
              y: 40,
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.4,
              },
            },
          },
        }}
      >
        {text}
      </TextEffect>
    </div>
  );
}
