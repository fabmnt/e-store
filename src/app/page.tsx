import { Container } from '@/components/container';
import { MainHeader } from '@/header/components/main-header';
import { BasicHero } from '@/hero/components/basic-hero';

export default function Home() {
  return (
    <div className="mx-auto min-h-screen font-[var(--font-playfair-display)]">
      <Container>
        <MainHeader />
      </Container>
      <main>
        {/* <CategoryNavigation /> */}
        <BasicHero />
      </main>
    </div>
  );
}
