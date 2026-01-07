import { accessControlService } from "@/services/accessControl.service";
import { useEffect, useState } from "react";

export function useAllCards() {
  const [loading, setLoading] = useState(false);
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

  return {
    fetchCards,
    loading,
    cards,
    error,
  };
}
