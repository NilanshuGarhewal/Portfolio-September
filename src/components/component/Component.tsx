"use client";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Transition from "@/components/transition/Transition";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <Transition key={pathname}>{children}</Transition>
    </AnimatePresence>
  );
}
