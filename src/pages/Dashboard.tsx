import { Card } from "@/components/ui/card";
import { ShieldCheck, AlertTriangle, Info, Check } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="max-w-7xl space-y-10">

      {/* Header */}
      <div className="mt-8">
        <h1 className="text-3xl font-bold tracking-tight text-quintec">
          Painel de Controle
        </h1>
        <p className="text-muted-foreground mt-2 max-w-2xl">
          Gerencie acessos, seus produtos e dispositivos de forma centralizada e segura.
        </p>
      </div>

      {/* Módulos / Produtos */}
      <div>
        <div className="flex flex-row gap-2 items-center mb-4">
          <Check className="h-6 text-emerald-600 border border-emerald-700 p-1 rounded-full" />
          <span className="flex text-xs text-emerald-600 font-medium">
            Produtos disponíveis
          </span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6 space-y-3">
            <ShieldCheck className="w-6 h-6 text-primary" />
            <h3 className="font-semibold">Controle de Acesso</h3>
            <p className="text-sm text-muted-foreground">
              Gerenciamento de cartões RFID e permissões de acesso.
            </p>
            <span className="text-xs text-emerald-600 font-medium">
              Status: ativo
            </span>
          </Card>
        </div>

        {/* <Card className="p-6 space-y-3">
          <CreditCard className="w-6 h-6 text-primary" />
          <h3 className="font-semibold">Cartões RFID</h3>
          <p className="text-sm text-muted-foreground">
            Cadastro, listagem, exportação e remoção de cartões.
          </p>
          <span className="text-xs text-emerald-600 font-medium">
            Status: operacional
          </span>
        </Card> */}
      </div>

      {/* Alertas */}
      <Card className="p-6 space-y-4">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-muted-foreground" />
          <h3 className="font-semibold">Avisos do Sistema</h3>
        </div>

        <ul className="text-sm text-muted-foreground space-y-2">
          <li>• Sem avisos de alta prioridade.</li>
        </ul>
      </Card>

      {/* Informações do Sistema */}
      <Card className="p-6 space-y-4">
        <div className="flex items-center gap-2">
          <Info className="w-5 h-5 text-muted-foreground" />
          <h3 className="font-semibold">Informações do Sistema</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-muted-foreground">Versão:</span>
            <p className="font-medium">v1.0.0</p>
          </div>
          <div>
            <span className="text-muted-foreground">Ambiente:</span>
            <p className="font-medium">Produção</p>
          </div>
          <div>
            <span className="text-muted-foreground">Status da API:</span>
            <p className="font-medium text-emerald-600">Conectado</p>
          </div>
          <div>
            <span className="text-muted-foreground">Última atualização:</span>
            <p className="font-medium">Automática</p>
          </div>
        </div>
      </Card>

    </div>
  );
}
