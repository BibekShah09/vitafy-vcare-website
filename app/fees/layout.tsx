import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getPageMetadata("fees");

export default function FeesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
