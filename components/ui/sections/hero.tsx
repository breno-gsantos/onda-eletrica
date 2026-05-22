'use client'

import {motion} from 'framer-motion'
import { Button } from '../button'
import Link from 'next/link'
import { Play, Zap } from 'lucide-react'
import { floatingCards } from '@/constants/data'

export function Hero(){
    return (
        <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-10">
            <div className="absolute inset-0 bg-home" />
            <div className="absolute inset-0 grid-pattern opacity-50" />
            <div className="absolute inset-0 radial-glow-blue" />
            <div className="absolute inset-0 radial-glow-orange" />

            <div className='absolute top-1/4 left-1/4 size-125 bg-[#27B6FF]/10 rounded-full blur-[120px] animate-[glow_8s_ease-in-out_infinite]'
            />

            <div className='relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20'>
                <div className='grid lg:grid-cols-2 gap-12 items-center'>
                    <motion.div initial={{opacity: 100, x: -50}} animate={{opacity: 1, x: 0}} transition={{duration: 0.8}} className='text-center lg:text-left'>
                        <motion.div initial={{opacity: 100, y:20}} animate={{opacity: 1, y: 0}} transition={{delay: 0.2}} className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#27B6FF]/10 border border-[#27B6FF]/20 mb-6'>
                            <span className='relative flex size-2'>
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#27B6FF] opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#27B6FF]" />
                            </span>
                            <span className="text-sm text-[#27B6FF] font-medium">
                                O novo padrão em serviços elétricos
                            </span>
                        </motion.div>

                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
                                <span className='text-white'>Atendimento Elétrico 24h com </span>
                                <span className='gradient-text-orange glow-text-orange'>transparência total</span>
                        </motion.h1>

                        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-lg text-white/60 mb-8 max-w-xl mx-auto lg:mx-0 text-pretty">
                            Serviços elétricos premium com <strong className="text-[#27B6FF]">body cam</strong> em todos os atendimentos. 
                            Orçamento em 24h, equipe uniformizada e técnicos certificados para 
                            residências e empresas.
                        </motion.p>

                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button asChild size="lg" className="bg-linear-to-r from-[#FF7A00] to-[#FFC21A] hover:from-[#FF8A20] hover:to-[#FFD03A] text-white font-semibold px-8 py-6 text-lg glow-orange">
                                <Link href="#contato">
                                    <Zap className="mr-2 size-5" />
                                    Solicitar Atendimento
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="border-[#27B6FF]/30 text-[#27B6FF] hover:bg-[#27B6FF]/10 hover:text-[#27B6FF] px-8 py-6 text-lg">
                                <Link href="#como-funciona">
                                    <Play className="mr-2 size-5" />
                                    Ver Como Funciona
                                </Link>
                            </Button>
                        </motion.div>
                    </motion.div>

                    <motion.div initial={{opacity: 0, x: 50}} animate={{opacity: 1, x:0}} transition={{duration: 0.8}} className='relative hidden lg:block'>
                        <div className='relative h-125'>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-linear-to-br from-[#27B6FF]/30 to-[#FF7A00]/30 rounded-full blur-[60px]" />

                            {floatingCards.map((card, index) => {
                                const positions = [
                                    { top: "5%", left: "10%" },
                                    { top: "15%", right: "5%" },
                                    { top: "45%", left: "0%" },
                                    { bottom: "20%", right: "10%" },
                                    { bottom: "5%", left: "20%" },
                                ]

                                const pos = positions[index]
                                return (
                                    <motion.div key={card.label} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 + card.delay }} style={pos} className="absolute">
                                        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4 + index, repeat: Infinity }} className="glass-card rounded-xl p-4 flex items-center gap-3">
                                            <div className="p-2 rounded-lg bg-linear-to-br from-[#27B6FF]/20 to-[#FF7A00]/20">
                                                <card.icon className="h-5 w-5 text-[#27B6FF]" />
                                            </div>
                                            <span className="text-sm font-medium text-white whitespace-nowrap">
                                                {card.label}
                                            </span>
                                        </motion.div>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
                <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1">
                    <motion.div animate={{ y: [0, 16, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-1.5 h-3 bg-linear-to-b from-[#27B6FF] to-[#FF7A00] rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    )
}