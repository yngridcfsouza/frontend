import { accessControlService } from "@/services/accessControl.service";
import { useState } from "react";

export function useAddCard() {
  const [loading, setLoading] = useState(false);
  const [uid, setUid] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function execute() {
    setLoading(true);
    setUid(null);
    setError(null);

    try {
      const result = await accessControlService.addCard();
      setUid(result.uid);
    } catch (err: any) {
      setError(err?.message || "Failed to add card");
    } finally {
      setLoading(false);
    }
  }

  function reset() {
    setUid(null);
    setError(null);
  }

  return {
    execute,
    loading,
    uid,
    error,
    reset,
  };
}
