import { Card } from "@/components/ui/card";
import {
  ShieldCheck,
  CreditCard,
  Usb,
  AlertTriangle,
  LifeBuoy
} from "lucide-react";

export default function AccessControl() {

  return (
    <div className="max-w-7xl space-y-10">

      {/* Header */}
      <div className="mt-8">
        <h1 className="text-3xl font-bold tracking-tight text-quintec">
          Controle de Acesso
        </h1>
        <p className="text-muted-foreground mt-2 max-w-3xl">
          Sistema de gerenciamento de acesso baseado em cartões RFID,
          integrado a leitores USB e controladores físicos.
        </p>
      </div>

      {/* Visão geral */}
      <Card className="p-6 space-y-4">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-primary" />
          <h3 className="font-semibold">Visão Geral</h3>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">
          O módulo de Controle de Acesso permite o cadastro, remoção e
          gerenciamento de cartões RFID utilizados para liberação de
          elevadores, portas e áreas restritas. A comunicação é realizada
          através de um leitor RFID USB conectado ao sistema.
        </p>
      </Card>

      {/* Funcionamento */}
      <Card className="p-6 space-y-4">
        <div className="flex items-center gap-2">
          <Usb className="w-5 h-5 text-primary" />
          <h3 className="font-semibold">Funcionamento</h3>
        </div>

        <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
          <li>Conecte o leitor RFID USB ao computador</li>
          <li>Selecione a operação desejada (Adicionar, Listar ou Remover)</li>
          <li>Aproxime o cartão do leitor</li>
          <li>O sistema identificará automaticamente o UID</li>
          <li>A resposta será exibida em tempo real</li>
        </ul>
      </Card>

      {/* Módulos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 space-y-3">
          <CreditCard className="w-6 h-6 text-primary" />
          <h3 className="font-semibold">Adicionar Cartão</h3>
          <p className="text-sm text-muted-foreground">
            Cadastra novos cartões RFID no sistema de acesso.
          </p>
        </Card>

        <Card className="p-6 space-y-3">
          <CreditCard className="w-6 h-6 text-primary" />
          <h3 className="font-semibold">Cartões Cadastrados</h3>
          <p className="text-sm text-muted-foreground">
            Visualiza e exporta a lista completa de cartões ativos.
          </p>
        </Card>

        <Card className="p-6 space-y-3">
          <CreditCard className="w-6 h-6 text-primary" />
          <h3 className="font-semibold">Remover Cartão</h3>
          <p className="text-sm text-muted-foreground">
            Remove cartões RFID existentes do sistema.
          </p>
        </Card>
      </div>

      {/* Boas práticas */}
      <Card className="p-6 space-y-4">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-muted-foreground" />
          <h3 className="font-semibold">Boas Práticas</h3>
        </div>

        <ul className="text-sm text-muted-foreground space-y-2">
          <li>• Utilize apenas cartões e leitores homologados</li>
          <li>• Evite múltiplos cartões próximos durante a leitura</li>
          <li>• Faça backup periódico da lista de cartões</li>
          <li>• Restrinja o acesso ao sistema apenas a operadores autorizados</li>
        </ul>
      </Card>

      {/* Garantia e suporte */}
      <Card className="p-6 space-y-4">
        <div className="flex items-center gap-2">
          <LifeBuoy className="w-5 h-5 text-primary" />
          <h3 className="font-semibold">Garantia e Suporte</h3>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">
          Este sistema possui suporte técnico especializado e pode ser
          integrado a diferentes controladores de acesso. Em caso de dúvidas,
          falhas ou necessidade de expansão, entre em contato com o suporte
          técnico autorizado no e-mail <a className="text-blue-800">suporte@quintec.com.br</a>.
        </p>
      </Card>

    </div>
  );
}
