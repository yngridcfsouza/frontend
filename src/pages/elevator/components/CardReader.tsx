import { useEffect, useRef, useState } from "react";
import { Keyboard, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type CardReaderProps = {
  disabled?: boolean;
  onRead: (uid: string) => void;
};

export function CardReader({ disabled, onRead }: CardReaderProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");

  // Mantém foco constante
  useEffect(() => {
    if (!disabled) {
      inputRef.current?.focus();
    }
  }, [disabled]);

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && value.trim()) {
      onRead(value.trim());
      setValue("");
    }
  }

  return (
    <div className="relative w-full max-w-sm">
      <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 opacity-20 blur" />

      <div
        className={cn(
          "relative flex items-center gap-3 rounded-xl border bg-white px-4 py-3 shadow-sm",
          disabled && "opacity-60"
        )}
      >
        <Keyboard className="h-5 w-5 text-muted-foreground" />

        <input
          ref={inputRef}
          value={value}
          disabled={disabled}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Aguardando leitura..."
          className="flex-1 bg-transparent outline-none font-mono text-center text-sm text-foreground placeholder:text-muted-foreground"
        />

        {disabled && (
          <Loader2 className="h-4 w-4 animate-spin text-primary" />
        )}
      </div>
    </div>
  );
}
