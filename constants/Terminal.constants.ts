// Command interface
interface TerminalCommand {
  description?: string;
  run: (args?: string[]) => string | string[];
}

// Tech / skill stack
const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Sass", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "NestJS", "Hono"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker"],
  },
];

// stuff for terminal message
const LAST_LOGIN_PREFIX = "Last login:";
const TTY = "ttys000";

// Get the date for the message
const formatDateWithoutYear = (date: Date) =>
  date.toDateString().split(" ").slice(0, 3).join(" ");

// Get the time for the message
const formatTime = (date: Date) => date.toLocaleTimeString();

// Get the last login message
const getLastLoginMessage = () => {
  const now = new Date();
  return `${LAST_LOGIN_PREFIX} ${formatDateWithoutYear(now)} ${formatTime(
    now
  )} on ${TTY}`;
};

// When command isnt available
export const COMMAND_NOT_FOUND = () =>
  `zsh: command not found: bold of you to assume that exists (try help)`;

// All the commands
const TERMINAL_COMMANDS: Record<string, TerminalCommand> = {
  help: {
    description: "List available commands",
    run: () =>
      Object.entries(TERMINAL_COMMANDS).map(
        ([name, cmd]) => `${name.padEnd(10)} - ${cmd.description || ""}`
      ),
  },

  clear: {
    description: "Clear your past mistake",
    run: () => getLastLoginMessage(),
  },

  whoami: {
    description: "Show the current user",
    run: () => "HOW AM I SUPPOSED TO KNOW T-T",
  },

  date: {
    description: "Use when you lost your watch",
    run: () => {
      const now = new Date();
      return `${now.toDateString()} ${now.toLocaleTimeString()}`;
    },
  },

  ls: {
    description: "List files in current directory",
    run: () => "Why you want to see my files? 🤨",
  },

  uptime: {
    description: "Show system uptime",
    run: () => "Uptime: Since day 1",
  },

  ascii: {
    description: "ASCII art for your angry girlfriend",
    run: () => {
      const arts = [
        "(^_^)",
        "(>_<)",
        "(•_•) ( •_•)>⌐■-■ (⌐■_■)",
        "(╯°□°）╯︵ ┻━┻",
        "(ノಠ益ಠ)ノ彡┻━┻",
      ];
      return arts[Math.floor(Math.random() * arts.length)];
    },
  },

  slap: {
    description: "Useful for annoying co-workers",
    run: (args) => {
      if (!args?.length) return "Usage: slap <target>";
      const targets = args.join(" ");
      return `You just slapped ${targets} with a big trout! 🐟`;
    },
  },

  fortune: {
    description: "Get a random developer fortune",
    run: () => {
      const fortunes = [
        "Remember: sudo may solve problems, or create them anew.",
        "The best code is code you never have to write.",
        "Commit early, commit often, commit wisely.",
        "If it compiles, question if it should.",
        "There’s no place like 127.0.0.1.",
        "Motivation is an illusion; start coding anyway.",
        "Debug not what you see, but what you imagine.",
        "rm -rf / is a path to enlightenment… or chaos.",
        "Tests are the guardian of sanity.",
        "The bug you seek is often within yourself.",
        "Commit messages are the echoes of your soul.",
        "Write code as if your future self will read it.",
        "Coffee is strong, but your loops must be finite.",
        "Merge conflicts are the universe teaching patience.",
        "The terminal observes all, judges none.",
        "Errors are teachers in disguise.",
        "Infinite loops are the wormholes of code.",
        "Stack traces speak truth; listen carefully.",
      ];
      return fortunes[Math.floor(Math.random() * fortunes.length)];
    },
  },

  skills: {
    description: "Display my technical skillset",
    run: () =>
      techStack.flatMap(({ category, items }) => [
        `▸ ${category}`,
        ...items.map((item, index) => {
          const isLast = index === items.length - 1;
          return `\u00A0\u00A0${isLast ? "└─" : "├─"} ${item}`;
        }),
      ]),
  },
};

export { techStack, TERMINAL_COMMANDS };
