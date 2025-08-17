import { Collections } from '@/collections/components/collections';
import { Container } from '@/components/container';
import { MainHeader } from '@/header/components/main-header';
import { BasicHero } from '@/hero/components/basic-hero';
import { CategoryNavigation } from '@/navigation/components/category-navigation';

export default function Home() {
  return (
    <div className="mx-auto min-h-screen space-y-2 font-[var(--font-playfair-display)] 2xl:space-y-4">
      <Container>
        <MainHeader />
      </Container>
      <CategoryNavigation />
      <Container>
        <BasicHero />
      </Container>
      <Collections />
    </div>
  );
}
