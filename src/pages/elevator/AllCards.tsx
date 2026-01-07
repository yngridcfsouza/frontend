import { Card } from "@/components/ui/card";
import { Import, List, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAllCards } from "@/hooks/useAllCards";

export default function AllCards() {
  const { cards, loading, error, fetchCards } = useAllCards();

  return (
    <div className="max-w-4xl space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-center justify-center mt-8">
          <h1 className="text-3xl font-bold tracking-tight text-quintec">
            Cartões Cadastrados
          </h1>
          <p className="text-muted-foreground mt-2">
            Lista de cartões atualmente registrados no sistema.
          </p>
        </div>
      </div>

      <Card className="p-6 min-w-[500px]">
        <div className="flex items-center gap-3 mb-4">
          <List className="w-5 h-5 text-muted-foreground" />
          <span className="text-sm font-medium">
            Total: {cards.length}
          </span>
        </div>

        {loading && <p className="text-muted-foreground">Carregando...</p>}
        {error && <p className="text-destructive">{error}</p>}

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
        <Button variant="outline" onClick={fetchCards} className="h-10">
          <RefreshCcw className="w-4 h-4 mr-2" />
          Atualizar
        </Button>
        <Button variant="outline" onClick={fetchCards} className="h-10">
          <Import className="w-4 h-4 mr-2" />
          Exportar lista de cartões
        </Button>
      </div>
    </div>
  );
}
