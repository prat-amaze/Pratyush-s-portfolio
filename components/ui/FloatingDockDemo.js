import {
  IconRocket,
  IconCode,
  IconUsers,
  IconUser,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandLeetcode,
} from "@tabler/icons-react";
import { FloatingDock } from "@/components/ui/floating-dock";

export function FloatingDockDemo() {
  const links = [
    {
      title: "About",
      icon: <IconRocket className="h-full w-full text-neutral-300" />,
      href: "#hero",
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
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full text-neutral-300" />,
      href: "https://github.com/prat-amaze/",
    },
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin className="h-full w-full text-neutral-300" />,
      href: "https://www.linkedin.com/in/pratyush-khengle-b53837169/",
    },
    {
      title: "Leetcode",
      icon: <IconBrandLeetcode className="h-full w-full text-neutral-300" />,
      href: "https://leetcode.com/u/pratyushkhengle/",
    },
  ];

  return (
    <FloatingDock items={links} className="translate-y-0" />
  );
}
