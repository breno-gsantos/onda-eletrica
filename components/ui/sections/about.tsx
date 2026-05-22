'use client'

import { useInViewOnce } from "@/hooks/use-in-view-once"
import { cn } from "@/lib/utils"
import { Eye, Target, Zap } from "lucide-react"

export function About(){
    const { ref: headerRef, isInView: headerInView } = useInViewOnce()
    const { ref: gridRef, isInView: gridInView } = useInViewOnce()

    return (
        <section id="sobre" className="relative py-24 overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-b from-home via-[#0B1F3A]/20 to-home" />
            <div className="absolute inset-0 grid-pattern opacity-20" />
            <div className="absolute top-1/2 right-0 size-125 -translate-y-1/2 bg-[#FF7A00]/5 rounded-full blur-[150px]" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div ref={gridRef} className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className={cn('transition-all duration-700 ease-out', gridInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10')}>
                        <span className="inline-block px-4 py-2 rounded-full bg-[#FF7A00]/10 border border-[#FF7A00]/20 text-sm text-[#FF7A00] font-medium mb-6">
                            Sobre a Onda Elétrica
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                            O novo padrão em{" "}
                            <span className="gradient-text-orange">serviços elétricos</span>
                        </h2>
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                            A Onda Elétrica nasceu com uma missão clara: revolucionar o mercado
                            de serviços elétricos através de tecnologia, transparência e excelência
                            operacional.
                        </p>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            Somos a primeira empresa do setor a implementar o uso de{" "}
                            <strong className="text-[#FF7A00]">body cams</strong> em todos os
                            atendimentos, garantindo que nossos clientes possam acompanhar cada
                            detalhe do serviço realizado.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="glass-card rounded-xl p-5">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="size-10 rounded-lg bg-[#27B6FF]/15 flex items-center justify-center">
                                        <Target className="size-5 text-[#27B6FF]" />
                                    </div>
                                    <h3 className="font-bold text-foreground">Missão</h3>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Entregar serviços elétricos com excelência, segurança e
                                    transparência total para nossos clientes.
                                </p>
                            </div>

                            <div className="glass-card rounded-xl p-5">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="size-10 rounded-lg bg-[#FF7A00]/15 flex items-center justify-center">
                                        <Eye className="h-5 w-5 text-[#FF7A00]" />
                                    </div>
                                    <h3 className="font-bold text-foreground">Visão</h3>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Ser referência nacional em serviços elétricos premium,
                                    reconhecida pela inovação e qualidade.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={cn('relative transition-all duration-700 ease-out', gridInView ? 'opacity-100 translate-x-10' : 'opacity-0 translate-x-0')}>
                        <div className="relative aspect-square max-w-lg mx-auto">
                            <div className="absolute inset-0 bg-linear-to-br from-[#27B6FF]/20 via-transparent to-[#FF7A00]/20 rounded-3xl blur-xl" />

                            <div className="relative glass-card rounded-3xl p-8 h-full flex flex-col justify-center items-center">
                                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#27B6FF]/10 rounded-full blur-3xl" />
                                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#FF7A00]/10 rounded-full blur-3xl" />
                                </div>
                
                                <div className="relative z-10 mb-6">
                                    <div className="w-24 h-24 rounded-2xl bg-linear-to-br from-[#27B6FF]/20 to-[#FF7A00]/20 flex items-center justify-center">
                                        <Zap className="size-12 text-[#FF7A00]" />
                                    </div>
                                </div>
                
                                <h3 className="relative z-10 text-2xl font-bold text-foreground mb-2 text-center">
                                    Energia que Conecta
                                </h3>
                                <p className="relative z-10 text-muted-foreground text-center max-w-xs">
                                    Soluções que transformam a maneira como você
                                    se relaciona com a energia elétrica.
                                </p>

                                <div className="relative z-10 mt-8 grid grid-cols-3 gap-6 w-full">
                                    {[
                                        { value: "5+", label: "Anos" },
                                        { value: "500+", label: "Clientes" },
                                        { value: "24h", label: "Suporte" },
                                    ].map((stat) => (
                                        <div key={stat.label} className="text-center">
                                            <div className="text-2xl font-bold text-[#27B6FF]">
                                                {stat.value}
                                            </div>
                                            <div className="text-xs text-white/50">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}