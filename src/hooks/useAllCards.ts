import { accessControlService } from "@/services/accessControl.service";
import { exportCardsToCSV } from "@/utils/exportCards";
import { useEffect, useState } from "react";
import { toast } from "./use-toast";

export function useAllCards() {
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  async function fetchCards() {
    setLoading(true);
    setError(null);

    try {
      const result = await accessControlService.listCards();
      setCards(result || []);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Erro ao carregar lista de cartões");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCards();
  }, []);

  function exportCards() {
    try {
      if (!cards || cards.length === 0) {
        toast({
          title: "Nada para exportar",
          variant: "destructive",
        });
        return;
      }

      exportCardsToCSV(cards);

      toast({
        title: "Exportação concluída",
      });
    } catch {
      toast({
        title: "Erro ao exportar",
        variant: "destructive",
      });
    }
  }

  return {
    fetchCards,
    loading,
    cards,
    error,
    exportCards,
  };
}
