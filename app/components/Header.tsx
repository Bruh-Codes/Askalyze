"use client";
import {
  Cpu,
  Globe,
  Eye,
  Shield,
  Rocket,
  Box,
  Search,
  Palette,
  BookOpen,
  FileText,
  Newspaper,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const handleHover = (menuLabel: string | null) => {
    setOpenMenu(menuLabel);
  };

  const [isHover, setIsHover] = useState<number | null>(null);

  const NAV_ITEMS = [
    {
      id: 1,
      label: "Products",
      subMenus: [
        {
          title: "DX Platform",
          items: [
            {
              label: "Previews",
              description: "Helping teams ship 6× faster",
              icon: Cpu,
            },
            {
              label: "AI",
              description: "Powering breakthroughs",
              icon: Search,
            },
          ],
        },
        {
          title: "Managed Infrastructure",
          items: [
            {
              label: "Rendering",
              description: "Fast, scalable, and reliable",
              icon: Globe,
            },
            {
              label: "Observability",
              description: "Trace every step",
              icon: Eye,
            },
            {
              label: "Security",
              description: "Scale without compromising",
              icon: Shield,
            },
          ],
        },
        {
          title: "Open Source",
          items: [
            {
              label: "Next.js",
              description: "The native Next.js platform",
              icon: Rocket,
            },
            {
              label: "Turborepo",
              description: "Speed with Enterprise scale",
              icon: Box,
            },
            {
              label: "AI SDK",
              description: "The AI Toolkit for TypeScript",
              icon: Palette,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      label: "Solutions",
      subMenus: [
        {
          title: "Use Cases",
          items: [
            {
              label: "AI Apps",
              description: "Deploy at the speed of AI",
              icon: Cpu,
            },
            {
              label: "Composable Commerce",
              description: "Power storefronts that convert",
              icon: Box,
            },
            {
              label: "Marketing Sites",
              description: "Launch campaigns fast",
              icon: Rocket,
            },
            {
              label: "Multi-tenant Platforms",
              description: "Scale apps with one codebase",
              icon: Globe,
            },
            {
              label: "Web Apps",
              description: "Ship features, not infrastructure",
              icon: Search,
            },
          ],
        },
        {
          title: "Users",
          items: [
            {
              label: "Platform Engineers",
              description: "Automate away repetition",
              icon: Cpu,
            },
            {
              label: "Design Engineers",
              description: "Deploy for every idea",
              icon: Palette,
            },
          ],
        },
      ],
    },
    {
      id: 3,
      label: "Resources",
      subMenus: [
        {
          title: "Tools",
          items: [
            {
              label: "Resource Center",
              description: "Today's best practices",
              icon: BookOpen,
            },
            {
              label: "Marketplace",
              description: "Extend and automate workflows",
              icon: Search,
            },
            {
              label: "Templates",
              description: "Jumpstart app development",
              icon: FileText,
            },
            {
              label: "Guides",
              description: "Find help quickly",
              icon: BookOpen,
            },
            {
              label: "Partner Finder",
              description: "Get help from solution partners",
              icon: Search,
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "Customers",
              description: "Trusted by the best teams",
              icon: Newspaper,
            },
            {
              label: "Blog",
              description: "The latest posts and changes",
              icon: FileText,
            },
            {
              label: "Changelog",
              description: "See what shipped",
              icon: BookOpen,
            },
            {
              label: "Press",
              description: "Read the latest news",
              icon: Newspaper,
            },
          ],
        },
      ],
    },
    {
      id: 4,
      label: "Enterprise",
      link: "#",
    },

    {
      id: 6,
      label: "Pricing",
      link: "#",
    },
  ];

  return (
    <header className="fixed left-0 w-fit right-0 flex mx-auto  top-5 z-50 gap-5">
      <div className=" flex  bg-zinc-950 rounded-full flex-col">
        <div className="relative w-full flex items-start md:items-center justify-center p-4">
          <div className="relative gap-5 flex flex-col items-center justify-center">
            <ul className="relative flex items-center space-x-0">
              {NAV_ITEMS.map((navItem) => (
                <li
                  key={navItem.label}
                  className="relative"
                  onMouseEnter={() => handleHover(navItem.label)}
                  onMouseLeave={() => handleHover(null)}
                >
                  <button
                    className={cn(
                      "text-sm py-1.5 px-4 flex cursor-pointer group transition-colors duration-300 items-center justify-center gap-1 text-white hover:text-gray-100 relative"
                    )}
                  >
                    <span>{navItem.label}</span>
                    {navItem.subMenus && (
                      <ChevronDown
                        className={`h-4 w-4 group-hover:rotate-180 duration-300 transition-transform
                  ${openMenu === navItem.label ? "rotate-180" : ""}`}
                      />
                    )}
                  </button>

                  <AnimatePresence>
                    {openMenu === navItem.label && navItem.subMenus && (
                      <div className="w-auto absolute left-0 top-full pt-2">
                        <motion.div
                          className="bg-zinc-950 p-4 w-max"
                          style={{ borderRadius: 16 }}
                          layoutId="menu"
                        >
                          <div className="w-fit shrink-0 flex space-x-9 overflow-hidden">
                            {navItem.subMenus.map((sub) => (
                              <motion.div
                                layout
                                className="w-full"
                                key={sub.title}
                              >
                                <h3 className="mb-4 text-sm font-medium capitalize text-white">
                                  {sub.title}
                                </h3>
                                <ul className="space-y-6">
                                  {sub.items.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                      <li key={item.label}>
                                        <a
                                          href="#"
                                          className="flex items-start space-x-3 group"
                                        >
                                          <div className="text-white rounded-md flex items-center justify-center size-9 shrink-0 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                                            <Icon className="h-5 w-5 flex-none" />
                                          </div>
                                          <div className="leading-5 w-max">
                                            <p className="text-sm font-medium text-white shrink-0">
                                              {item.label}
                                            </p>
                                            <p className="text-xs text-white shrink-0 group-hover:text-gray-100 transition-colors duration-300">
                                              {item.description}
                                            </p>
                                          </div>
                                        </a>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      </div>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <ul className="relative rounded-full justify-end p-4 flex items-center space-x-0">
        <li
          className="relative"
          onMouseEnter={() => handleHover("Get started")}
          onMouseLeave={() => handleHover(null)}
        >
          <button
            className={cn(
              "text-sm py-1.5 px-4 flex cursor-pointer text-white  group transition-colors duration-300 items-center justify-center gap-1 relative"
            )}
          >
            <span>Sign in</span>
          </button>
        </li>
        <li className="relative">
          <button
            className={cn(
              "text-sm py-2 px-4 flex cursor-pointer text-black  group transition-colors duration-300 items-center justify-center gap-1 relative bg-white rounded-xl hover:text-black hover:bg-white/80 active:bg-white/80"
            )}
          >
            <span>Get started</span>
          </button>
        </li>
      </ul>
    </header>
  );
}
