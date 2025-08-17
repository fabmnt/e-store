export function CategoryNavigation() {
  return (
    <div className="py-2">
      <nav className="motion-translate-y-in-50 flex items-center justify-center gap-12 font-medium tracking-wider">
        <a
          className="group relative transition-transform duration-300 hover:scale-125"
          href="/categorias/relojes"
        >
          Relojes
          <span className="-bottom-2 absolute left-0 inline-block h-[1px] w-full scale-0 bg-black opacity-0 transition-all duration-500 group-hover:scale-125 group-hover:opacity-100" />
        </a>
        <a
          className="group relative transition-transform duration-300 hover:scale-125"
          href="/categorias/joyas"
        >
          Joyería
          <span className="-bottom-2 absolute left-0 inline-block h-[1px] w-full scale-0 bg-black opacity-0 transition-all duration-500 group-hover:scale-125 group-hover:opacity-100" />
        </a>
        <a
          className="group relative transition-transform duration-300 hover:scale-125"
          href="/categorias/accesorios"
        >
          Accesorios
          <span className="-bottom-2 absolute left-0 inline-block h-[1px] w-full scale-0 bg-black opacity-0 transition-all duration-500 group-hover:scale-125 group-hover:opacity-100" />
        </a>
        <a
          className="group relative transition-transform duration-300 hover:scale-125"
          href="/categorias/perfumes"
        >
          Perfumes
          <span className="-bottom-2 absolute left-0 inline-block h-[1px] w-full scale-0 bg-black opacity-0 transition-all duration-500 group-hover:scale-125 group-hover:opacity-100" />
        </a>
      </nav>
    </div>
  );
}
