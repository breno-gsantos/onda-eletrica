'use client'

import { navItems } from "@/constants/data"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "../button"
import { Menu, Zap } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "../sheet"

export function Header(){
    const [isScrolled, setIsScrolled] = useState<boolean>(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)

    useEffect(() => {
        function handleScroll(){
            setIsScrolled(window.scrollY > 20)
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header 
            className={cn(
                    'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                    'animate-[headerIn_0.6s_ease-out_forwards]',
                    isScrolled ? 'bg-home/80 backdrop-blur-xl border-b border-white/5'
                    : 'bg-transparent'
            )}>
                <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                    <div className="flex h-20 items-center justify-between">
                        <Link href='/' className="flex items-center gap-3">
                            <Image src='/images/onda-eletrica-logo.png' alt="Logo" width={80} height={80} />
                            <div className="hidden sm:block">
                                <span className="text-base font-bold text-white">ONDA</span>
                                <span className="text-base font-bold text-[#FF7A00]"> ELÉTRICA</span>
                            </div>
                        </Link>

                        <nav className="hidden lg:flex items-center gap-8">
                            {navItems.map(({href, label}) => (
                                <Link key={label} href={href} className="text-sm font-medium text-white/70 hover:text-white transition-colors relative group">
                                    {label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-[#27B6FF] to-[#FF7A00] group-hover:w-full transition-all duration-300" />
                                </Link>
                            ))}
                        </nav>

                        <div className="hidden lg:block">
                            <Button asChild className="bg-linear-to-r from-[#FF7A00] to-[#FFC21A] hover:from-[#FF8A20] hover:to-[#FFD03A] text-foreground font-semibold px-6 glow-orange">
                                <Link href='#'>
                                    <Zap className="mr-2 size-4" />
                                    Solicitar Atendimento
                                </Link>
                            </Button>
                        </div>

                        <div className="lg:hidden mt-5">
                            <Sheet>
                            <SheetTrigger asChild>
                                <Button variant='ghost'>
                                    <Menu className="size-7" />
                                </Button>
                            </SheetTrigger>
                            <SheetHeader>
                                <SheetTitle className="sr-only">Título da Navegação</SheetTitle>
                                <SheetDescription className="sr-only">Descrição da Navegação</SheetDescription>
                            </SheetHeader>
                            <SheetContent className="bg-home/95 border-white/5 p-0">
                                <div className="flex flex-col h-full backdrop-blur-xl">
                                    <nav className="flex flex-col h-full px-4 py-6 gap-4">
                                        {navItems.map(({href, label}) => (
                                            <Link key={label} href={href} className="text-base font-medium text-white/80 hover:text-white transition-colors py-2">
                                                {label}
                                            </Link>
                                        ))}
                                        
                                            <Button asChild className="mt-auto bg-linear-to-r from-[#FF7A00] to-[#FFC21A] hover:from-[#FF8A20] hover:to-[#FFD03A] text-white font-semibold glow-orange">
                                            <Link href='#contato'>
                                                <Zap className="mr-2 size-4" />
                                                Solicitar Atendimento
                                            </Link>
                                        </Button>
                                    </nav>
                                </div>
                            </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                </div>
        </header>
    )
}