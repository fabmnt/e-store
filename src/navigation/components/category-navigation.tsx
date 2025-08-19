export function CategoryNavigation() {
  return (
    <div className="py-2">
      <nav className="motion-translate-y-in-50 flex min-h-[1.5rem] items-center justify-center gap-12 font-medium tracking-wider">
        <a
          className="group relative text-[clamp(0.8rem,2vw,1.2rem)] transition-all duration-300 ease-in-out hover:text-[clamp(1.2rem,2.5vw,1.5rem)]"
          href="/categorias/relojes"
        >
          Aretes
          <span className="-bottom-2 absolute left-0 inline-block h-[1px] w-full scale-0 bg-black opacity-0 transition-all duration-500 group-hover:scale-125 group-hover:opacity-100" />
        </a>
        <a
          className="group relative text-[clamp(0.8rem,2vw,1.2rem)] transition-all duration-300 ease-in-out hover:text-[clamp(1.2rem,2.5vw,1.5rem)]"
          href="/categorias/cadenas"
        >
          Cadenas
          <span className="-bottom-2 absolute left-0 inline-block h-[1px] w-full scale-0 bg-black opacity-0 transition-all duration-500 group-hover:scale-125 group-hover:opacity-100" />
        </a>
        <a
          className="group relative text-[clamp(0.8rem,2vw,1.2rem)] transition-all duration-300 ease-in-out hover:text-[clamp(1.2rem,2.5vw,1.5rem)]"
          href="/categorias/anillos"
        >
          Anillos
          <span className="-bottom-2 absolute left-0 inline-block h-[1px] w-full scale-0 bg-black opacity-0 transition-all duration-500 group-hover:scale-125 group-hover:opacity-100" />
        </a>
        <a
          className="group relative text-[clamp(0.8rem,2vw,1.2rem)] transition-all duration-300 ease-in-out hover:text-[clamp(1.2rem,2.5vw,1.5rem)]"
          href="/categorias/relojes"
        >
          Relojes
          <span className="-bottom-2 absolute left-0 inline-block h-[1px] w-full scale-0 bg-black opacity-0 transition-all duration-500 group-hover:scale-125 group-hover:opacity-100" />
        </a>
      </nav>
    </div>
  );
}
