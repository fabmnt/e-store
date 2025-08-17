export function CategoryNavigation() {
  return (
    <div className="flex items-center justify-center py-2">
      <nav className="flex items-center gap-12 font-medium tracking-wider">
        <a href="/categorias/relojes">Relojes</a>
        <a href="/categorias/joyas">Joyería</a>
        <a href="/categorias/accesorios">Accesorios</a>
      </nav>
    </div>
  );
}
