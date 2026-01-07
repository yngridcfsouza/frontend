import { Link } from "react-router-dom";


export function Header() {
  return (
    <header className="h-14 border-b px-6 flex items-center justify-between bg-background w-full rounded-2xl">
      <span className="font-medium">
        <img src="./logo-horizontal.jpg" className="h-10" />
      </span>

      <nav className="font-bold text-sm text-quintec flex gap-4 mr-4 md:gap-8 md:mr-8">
        <Link to="/">Nossos Produtos</Link>
        <Link to="/">Contate-nos</Link>
        <Link to="/login">Entrar</Link>
      </nav>
    </header>
  );
}
