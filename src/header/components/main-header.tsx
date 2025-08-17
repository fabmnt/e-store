export function MainHeader() {
  return (
    <header className="grid w-full grid-cols-3 border-b py-4">
      <div>Búsqueda (or phone)</div>
      <div className="flex-1">
        <h1 className="text-center font-medium text-2xl tracking-wider">
          PERRICIENTA
        </h1>
      </div>
      <nav className="flex items-center justify-end gap-4">
        <a href="/favoritos">Favoritos</a>
        <a href="/carrito">Carrito(0)</a>
      </nav>
    </header>
  );
}
