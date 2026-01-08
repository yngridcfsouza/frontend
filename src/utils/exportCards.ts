import { exportFile } from "./exportFile";

export function exportCardsToCSV(cards: string[]) {
  if (!cards.length) return;

  const header = "index,uid";
  const rows = cards.map((uid, index) => (
    `${index + 1},${uid}`
  ));

  const csvContent = [header, ...rows].join("\n");

  const filename = `cartoes-rfid-${new Date()
    .toISOString()
    .slice(0, 10)
  }.csv`;

  exportFile(csvContent, filename, "text/csv;charset=utf-8");
}
