export function Footer() {
  return (
    <footer className="mt-auto bg-background w-full rounded-lg">
      <div className="mx-auto max-w-5xl px-6 py-4">
        <div className="flex flex-col gap-3 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">

          {/* ESQUERDA */}
          <div className="flex items-center gap-2">
            <span className="font-medium text-foreground">
              Quintec
            </span>
            <span>•</span>
            <span>Serviços e Soluções Tecnológicas</span>
          </div>

          {/* DIREITA */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="hover:text-foreground transition-colors"
            >
              Suporte
            </a>
            <a
              href="#"
              className="hover:text-foreground transition-colors"
            >
              Documentação
            </a>
            <a
              href="#"
              className="hover:text-foreground transition-colors"
            >
              Política
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between mt-2">
          <span>
            @2025 Todos os direitos reservados
          </span>
          <span className="text-xs text-muted-foreground">
            v2.0.0
          </span>
        </div>
      </div>
    </footer>
  );
}
