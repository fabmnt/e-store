import { Collections } from '@/collections/components/collections';
import { Container } from '@/components/container';
import { MainHeader } from '@/header/components/main-header';
import { BasicHero } from '@/hero/components/basic-hero';
import { CategoryNavigation } from '@/navigation/components/category-navigation';

export default function Home() {
  return (
    <div className="mx-auto min-h-screen font-[var(--font-playfair-display)]">
      <Container className="sticky top-0 z-50 bg-white">
        <MainHeader />
      </Container>
      <CategoryNavigation />
      <div className="2xl:px-12">
        <BasicHero />
      </div>
      <Collections />
    </div>
  );
}
