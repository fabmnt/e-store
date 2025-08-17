export function MainHeader() {
  return (
    <header className="grid w-full grid-cols-3 border-b py-4">
      <div>Búsqueda (o teléfono)</div>
      <div className="flex-1">
        <h1 className="text-center font-bold text-2xl">PANDORA</h1>
      </div>
      <nav className="flex items-center justify-end gap-4">
        <a href="/favoritos">Favoritos</a>
        <a href="/carrito">Carrito(0)</a>
      </nav>
    </header>
  );
}
