import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Tiller — 나를 알아가는 작은 기록",
  description: "작은 씨앗을 심고, 이야기를 나누고, 기록 사이에서 지금의 나를 발견하세요. Tiller 모바일 웹 디자인 프로토타입.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="ko"><body>{children}</body></html>; }
