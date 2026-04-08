const startWords = ["başlat", "baslat", "start", "begin"];
const hintWords = ["ipucu", "ipucu ver", "hint", "yardım"];
const restartWords = ["yeniden dene", "yeniden başlat", "restart", "retry"];

export function detectIntent(input: string) {
  const normalized = input.trim().toLocaleLowerCase("tr-TR");

  if (startWords.some((word) => normalized.includes(word))) {
    return "start";
  }

  if (hintWords.some((word) => normalized.includes(word))) {
    return "hint";
  }

  if (restartWords.some((word) => normalized.includes(word))) {
    return "restart";
  }

  return "unknown";
}
