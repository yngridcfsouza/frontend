import { Card } from "@/components/ui/card";
import {
  Server,
  Usb,
  Palette,
  Shield,
  Info
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Settings() {
  return (
    <div className="max-w-6xl space-y-10">

      {/* Header */}
      <div className="mt-8">
        <h1 className="text-3xl font-bold tracking-tight text-quintec">
          Configurações
        </h1>
        <p className="text-muted-foreground mt-2 max-w-3xl">
          Gerencie preferências do sistema, integrações e informações técnicas.
        </p>
      </div>

      {/* Sistema */}
      <Card className="p-6 space-y-4">
        <div className="flex items-center gap-2">
          <Server className="w-5 h-5 text-primary" />
          <h3 className="font-semibold">Informações do Sistema</h3>
        </div>

        <div className="text-sm text-muted-foreground space-y-1">
          <p>Produto: Sistema de Controle de Acesso</p>
          <p>Versão: v1.0.0</p>
          <p>Ambiente: Produção</p>
        </div>
      </Card>

      {/* API */}
      <Card className="p-6 space-y-4">
        <div className="flex items-center gap-2">
          <Server className="w-5 h-5 text-primary" />
          <h3 className="font-semibold">Conexão com API</h3>
        </div>

        <p className="text-sm text-muted-foreground">
          Endereço atual da API utilizada pelo sistema.
        </p>

        <div className="flex items-center gap-4">
          <code className="px-3 py-2 bg-muted rounded text-sm">
            {import.meta.env.VITE_API_URL}
          </code>

          <Button variant="outline" disabled>
            Testar conexão
          </Button>
        </div>
      </Card>

      {/* Leitor */}
      <Card className="p-6 space-y-4">
        <div className="flex items-center gap-2">
          <Usb className="w-5 h-5 text-primary" />
          <h3 className="font-semibold">Leitor RFID</h3>
        </div>

        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• Interface: USB HID</li>
          <li>• Leitura automática como teclado</li>
          <li>• Compatível com MIFARE / NFC</li>
        </ul>
      </Card>

      {/* Interface */}
      <Card className="p-6 space-y-4">
        <div className="flex items-center gap-2">
          <Palette className="w-5 h-5 text-primary" />
          <h3 className="font-semibold">Interface</h3>
        </div>

        <p className="text-sm text-muted-foreground">
          Preferências visuais e comportamento da aplicação.
        </p>

        <div className="flex gap-4">
          <Button variant="outline" disabled>
            Tema claro
          </Button>
          <Button variant="outline" disabled>
            Tema escuro
          </Button>
        </div>
      </Card>

      {/* Segurança */}
      <Card className="p-6 space-y-4">
        <div className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-primary" />
          <h3 className="font-semibold">Segurança</h3>
        </div>

        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• Sessão protegida por autenticação</li>
          <li>• Acesso restrito a operadores autorizados</li>
          <li>• Logs mantidos no backend</li>
        </ul>
      </Card>

      {/* Sobre */}
      <Card className="p-6 space-y-4">
        <div className="flex items-center gap-2">
          <Info className="w-5 h-5 text-primary" />
          <h3 className="font-semibold">Sobre & Suporte</h3>
        </div>

        <p className="text-sm text-muted-foreground">
          Sistema desenvolvido para aplicações de controle de acesso,
          com foco em segurança, confiabilidade e integração industrial.
        </p>

        <p className="text-sm text-muted-foreground">
          Suporte técnico: suporte@empresa.com
        </p>
      </Card>

    </div>
  );
}
