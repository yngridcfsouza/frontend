import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useAddCard } from "@/hooks/useAddCard";
import { Loader2, CheckCircle2, XCircle, CreditCard } from "lucide-react";

export default function AddCard() {
  const { execute, loading, uid, error, reset } = useAddCard();

  return (
    <div className="max-w-2xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Adicionar cartão</h1>
        <p className="text-muted-foreground">
          Aproxime o cartão do leitor para cadastrá-lo no sistema.
        </p>
      </div>

      <Card className="p-8 flex flex-col items-center gap-6">
        <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
          <CreditCard className="w-8 h-8 text-primary" />
        </div>

        <Button
          size="lg"
          onClick={execute}
          disabled={loading}
          className="w-full max-w-xs"
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Aguardando leitura...
            </>
          ) : (
            "Iniciar leitura do cartão"
          )}
        </Button>
      </Card>

      {uid && (
        <Card className="p-6 border-emerald-500/30 bg-emerald-50">
          <div className="flex items-center gap-3 text-emerald-700">
            <CheckCircle2 className="h-5 w-5" />
            <div>
              <p className="font-medium">Cartão cadastrado com sucesso</p>
              <p className="font-mono text-sm mt-1">UID: {uid}</p>
            </div>
          </div>

          <Button
            variant="outline"
            className="mt-4"
            onClick={reset}
          >
            Cadastrar outro cartão
          </Button>
        </Card>
      )}

      {error && (
        <Card className="p-6 border-destructive/30 bg-destructive/5">
          <div className="flex items-center gap-3 text-destructive">
            <XCircle className="h-5 w-5" />
            <p>{error}</p>
          </div>

          <Button
            variant="outline"
            className="mt-4"
            onClick={reset}
          >
            Tentar novamente
          </Button>
        </Card>
      )}
    </div>
  );
}
