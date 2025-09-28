"use client";

import { ReactNode } from "react";
import UseLenis from "./Lenis";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  UseLenis();
  return <>{children}</>;
}
