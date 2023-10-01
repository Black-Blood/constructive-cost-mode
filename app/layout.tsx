import "./globals.css"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: "Конструктивна модель вартості",
    description: "Конструктивна модель вартості для оцінки трудомісткості розробки програмних продуктів",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="uk">
            <body className={inter.className}>
                <h1>Конструктивна модель вартості</h1>
                <main>
                    {children}
                </main>
            </body>
        </html>
    )
}
