"use client";

import { useEffect, useRef, useState } from "react";
import windowWrapper from "@/Hight-order-components/windowWrapper";
import {
  TERMINAL_COMMANDS,
  COMMAND_NOT_FOUND,
} from "@/constants/Terminal.constants";
import useWindowStore from "@/store/window";

interface TerminalProps {
  isMaximized?: boolean;
}

const Terminal = ({ isMaximized }: TerminalProps) => {
  const { windows } = useWindowStore();
  const [history, setHistory] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    containerRef.current?.scrollTo(0, containerRef.current.scrollHeight);
  }, [history, input]);

  useEffect(() => {
    if (windows.terminal.kill || history.length === 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setHistory([TERMINAL_COMMANDS.clear.run() as string]);
      setInput("");
    }
  }, [history.length, windows.terminal.kill]);

  const runCommand = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const [cmd, ...args] = trimmed.split(" ");
    const command = TERMINAL_COMMANDS[cmd];

    if (!command) {
      setHistory((prev) => [
        ...prev,
        `@Jaadu-mac ~ % ${trimmed}`,
        COMMAND_NOT_FOUND(),
      ]);
      setInput("");
      return;
    }

    if (cmd === "clear") {
      setHistory([command.run() as string]);
      setInput("");
      return;
    }

    const result = command.run(args);
    setHistory((prev) => {
      const next = [...prev, `@Jaadu-mac % ${trimmed}`];
      if (Array.isArray(result)) {
        next.push(...result);
      } else {
        next.push(result);
      }
      return next;
    });

    setInput("");
  };

  return (
    <div
      className={`flex flex-col ${
        isMaximized ? "" : "rounded-b-lg"
      } h-full w-full bg-gray-900 text-[#e5e7eb] font-mono text-[13px]`}
      onClick={() => containerRef.current?.focus()}
    >
      <div
        ref={containerRef}
        tabIndex={0}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onClick={() => containerRef.current?.focus()}
        className="flex-1 min-h-0 overflow-y-auto px-3 py-2 outline-none"
        onKeyDown={(e) => {
          if (e.key === "Enter") runCommand();
          else if (e.key === "Backspace") setInput((prev) => prev.slice(0, -1));
          else if (e.key.length === 1) setInput((prev) => prev + e.key);
        }}
      >
        {history.map((line, i) => (
          <p key={i} className={i === 0 ? "text-[#9ca3af]" : ""}>
            {line}
          </p>
        ))}

        <p>
          <span className="text-[#e5e7eb] font-mono">
            <span className="text-green-400 dark:text-green-500">
              @Jaadu-mac
            </span>{" "}
            ~ %
          </span>
          <span className="ml-3">{input}</span>
          <span
            className={`inline-block relative w-1.75 h-3.5 -top-1.25 align-bottom ${
              isFocused
                ? "bg-[#e5e7eb] animate-[blink_1s_steps(1)_infinite]"
                : "border border-[#e5e7eb] bg-transparent "
            }`}
          />{" "}
        </p>
      </div>
    </div>
  );
};

export default windowWrapper(Terminal, "terminal", "Terminal");
