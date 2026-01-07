import { accessControlService } from "@/services/accessControl.service";
import { useState } from "react";

export function useDeleteCard() {
  const [loading, setLoading] = useState(false);
  const [uid, setUid] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleRead(cardUid: string) {
    setLoading(true);
    setUid(null);
    setError(null);

    try {
      await accessControlService.removeCard();
      setUid(cardUid);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Erro ao remover cartão");
    } finally {
      setLoading(false);
    }
  }

  return {
    handleRead,
    loading,
    uid,
    error,
  };
}
