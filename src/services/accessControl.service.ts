import { api } from "./api";

type StatusResponse = {
  connected: boolean;
  port?: string;
  last_tag?: string;
};

export const accessControlService = {
  async connect() {
    const { data } = await api.post("/connect");
    return data;
  },

  async getStatus() {
    const { data } = await api.get<StatusResponse>("/status");
    return data;
  },

  async clearTag() {
    const { data } = await api.post("/clear-tag");
    return data;
  },

  async waitForTag(timeoutMs = 5000, intervalMs = 250) {
    const start = Date.now();

    while (Date.now() - start < timeoutMs) {
      const status = await this.getStatus();
      if (status.last_tag) {
        return status.last_tag;
      }
      await new Promise(r => setTimeout(r, intervalMs));
    }

    throw new Error("Nenhuma TAG detectada");
  },

  async addCard() {
    await this.connect();
    await this.clearTag();
    const uid = await this.waitForTag();
    await api.post(`/add/${encodeURIComponent(uid)}`);
    return { uid };
  },

  async removeCard() {
    await this.connect();
    await this.clearTag();
    const uid = await this.waitForTag();
    await api.post(`/remove/${encodeURIComponent(uid)}`);
    return { uid };
  },

  async listCards() {
    const { data } = await api.get<{ cards: string[] }>("/cards");
    return data.cards;
  },
};
