import { MainHeader } from '@/header/components/main-header';
import { CategoryNavigation } from '@/navigation/components/category-navigation';

export default function Home() {
  return (
    <div className="mx-auto min-h-screen font-[var(--font-playfair-display)] xl:max-w-6xl 2xl:max-w-7xl">
      <MainHeader />
      <main>
        <CategoryNavigation />
        <h1>Hello World</h1>
      </main>
    </div>
  );
}
