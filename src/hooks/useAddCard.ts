import { accessControlService } from "@/services/accessControl.service";
import { useState } from "react";

export function useAddCard() {
  const [loading, setLoading] = useState(false);
  const [uid, setUid] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  function reset() {
    setUid(null);
    setError(null);
  }

  async function handleRead(cardUid: string) {
    setLoading(true);
    reset();

    try {
      await accessControlService.addCard();
      setUid(cardUid);
    } catch (err: any) {
      setError(err?.message || "Failed to add card");
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
