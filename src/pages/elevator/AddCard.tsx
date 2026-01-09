import { Card } from "@/components/ui/card";
import { useAddCard } from "@/hooks/useAddCard";
import { CreditCard, XCircle } from "lucide-react";
import { CardReader } from "./components/CardReader";

export default function AddCard() {
  const { error, handleRead, loading, uid } = useAddCard();

  return (
    <div className="max-w-7xl space-y-8">
      {/* HEADER */}
      <div className=" flex flex-col items-center justify-center mt-8 md:w-[600px] lg:w-[800px] w-fit text-center">
        <h1 className="text-3xl text-quintec font-bold tracking-tight">
          Novo Cartão RFID
        </h1>
        <p className="text-muted-foreground mt-2 max-w-xl">
          Passe o cartão no leitor USB para cadastrar o acesso no sistema.
        </p>
      </div>

      {/* CARD PRINCIPAL */}
      <Card className="p-10 flex flex-col items-center gap-8">
        <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
          <CreditCard className="w-8 h-8 text-primary" />
        </div>

        <div className="text-center text-quintec">
          <h2 className="text-lg font-semibold">
            {loading
              ? "Processando cartão..."
              : uid
              ? "Cartão cadastrado com sucesso"
              : "Aguardando leitura do cartão"}
          </h2>

          <p className="text-sm text-muted-foreground mt-1">
            {uid
              ? `UID: ${uid}`
              : "Aproxime o cartão do leitor USB"}
          </p>
        </div>

        <CardReader
          disabled={loading}
          onRead={handleRead}
        />
      </Card>

      {/* ERRO */}
      {error && (
        <Card className="p-6 bg-destructive/5 border-destructive/30">
          <div className="flex items-center gap-3 text-destructive">
            <XCircle className="h-5 w-5" />
            <p>{error}</p>
          </div>
        </Card>
      )}
    </div>
  );
}
