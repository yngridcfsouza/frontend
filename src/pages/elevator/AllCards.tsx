import { Card } from "@/components/ui/card";
import { Download, List, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAllCards } from "@/hooks/useAllCards";
import { ClipLoader } from "react-spinners";
import { useAuth } from "@/contexts/AuthContext";

export default function AllCards() {
  const { cards, loading, error, fetchCards, exportCards } = useAllCards();

  return (
    <div className="max-w-4xl space-y-8">
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center justify-center mt-8">
          <h1 className="text-3xl font-bold tracking-tight text-quintec">
            Cartões Cadastrados
          </h1>
          <p className="text-muted-foreground mt-2">
            Lista de cartões atualmente registrados no sistema.
          </p>
        </div>
      </div>

      <Card className="p-6 min-w-[500px] min-h-[200px] flex flex-col gap-12 items-center justify-center">
        <div className="flex flex-col justify-center gap-4 items-center mt-4">
          <div className="w-20 h-20 rounded-2xl bg-quintec/30 flex items-center justify-center">
            <List className="w-8 h-8" />
          </div>
          <span className="text-sm font-medium">
            Total: {cards.length}
          </span>
        </div>

        {loading && (
          <ClipLoader
            color={"quintec"}
            loading={loading}
            size={24}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        )}

        {error && (
        <div className="w-fit h-fit px-6 py-2 rounded-lg bg-destructive/10 flex items-center justify-center">
          <p className="text-destructive text-sm">
            {"Erro ao carregar lista, verifique a conexão ou tente novamente mais tarde"}
          </p>
        </div>
        )}

        {!loading && !error && (
          <div className="overflow-auto max-h-[400px]">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-muted-foreground">
                  <th className="py-2 text-left">#</th>
                  <th className="py-2 text-left">UID</th>
                </tr>
              </thead>
              <tbody>
                {cards.map((uid, index) => (
                  <tr key={uid} className="border-b last:border-0">
                    <td className="py-2 text-muted-foreground">
                      {index + 1}
                    </td>
                    <td className="py-2 font-mono">
                      {uid}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>
      <div className="flex justify-between text-quintec">
        <Button
          variant="outline"
          onClick={fetchCards}
          className="h-10"
        >
          <RefreshCcw className="w-4 h-4 mr-2" />
          Atualizar
        </Button>
        <Button
          variant="outline"
          onClick={exportCards}
          className="h-10"
        >
          <Download className="w-4 h-4 mr-2" />
          Exportar lista de cartões
        </Button>
      </div>
    </div>
  );
}
