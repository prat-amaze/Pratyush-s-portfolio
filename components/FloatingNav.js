import {
  IconRocket,
  IconCode,
  IconUsers,
  IconUser,
  IconTimeline,
  IconBolt,
} from "@tabler/icons-react";
import { FloatingDock } from "@/components/ui/floating-dock";

export function FloatingNav() {
  const links = [
    {
      title: "About",
      icon: <IconRocket className="h-full w-full text-neutral-300" />,
      href: "#hero",
    },
    {
      title: "Experience",
      icon: <IconTimeline className="h-full w-full text-neutral-300" />,
      href: "#experience",
    },
    {
      title: "Skills",
      icon: <IconBolt className="h-full w-full text-neutral-300" />,
      href: "#skills",
    },
    {
      title: "Projects",
      icon: <IconCode className="h-full w-full text-neutral-300" />,
      href: "#projects",
    },
    {
      title: "Collaborate",
      icon: <IconUsers className="h-full w-full text-neutral-300" />,
      href: "#collaborate",
    },
    {
      title: "What am I up to",
      icon: <IconUser className="h-full w-full text-neutral-300" />,
      href: "#upto",
    },
  ];

  return <FloatingDock items={links} className="translate-y-0" />;
}
