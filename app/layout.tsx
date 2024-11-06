import type { Metadata } from "next"
import { Bellefair } from "next/font/google"
import "./globals.css"

const bellefair = Bellefair({
  weight: "400",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Víno Šílová",
  description:
    "Víno Šílová - vinařství, restaurace, ubytování, hotel Radost, vinotéka Mikulov",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="cs">
      <body className={bellefair.className}>{children}</body>
    </html>
  )
}
