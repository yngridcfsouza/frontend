export function Footer() {
  return (
    <footer className="mt-auto bg-background w-full rounded-lg text-center">
      <div className="mx-auto max-w-5xl px-6 py-4">
        <div className="flex flex-col gap-3 text-xs text-muted-foreground flex-row items-center justify-center">
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="hover:text-foreground transition-colors"
            >
              Suporte
            </a>
            <span>•</span>
            <a
              href="#"
              className="hover:text-foreground transition-colors"
            >
              Documentação
            </a>
            <span>•</span>
            <a
              href="#"
              className="hover:text-foreground transition-colors"
            >
              Política
            </a>
          </div>
        </div>

        <div className="flex gap-3 text-xs text-muted-foreground flex-row items-center justify-center mt-2">
          <span>
            Quintec - Serviços e Soluções Tecnológicas
          </span>
          <span> • </span>
          <span>
            © 2025 Todos os direitos reservados
          </span>
          <span> • </span>
          <span>
            v2.0.0
          </span>
        </div>
      </div>
    </footer>
  );
}
