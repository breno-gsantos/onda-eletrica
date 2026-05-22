'use client'

import { steps } from "@/constants/data"
import { useInViewOnce } from "@/hooks/use-in-view-once"
import { cn } from "@/lib/utils"

export function HowItWorks(){
    const { ref: headerRef, isInView: headerInView } = useInViewOnce()
    const { ref: gridRef, isInView: gridInView } = useInViewOnce()

    return (
        <section id="como-funciona" className="relative py-24 overflow-hidden">
            <div className="absolute inset-0 bg-home" />
            <div className="absolute inset-0 grid-pattern opacity-20" />
            <div className="absolute top-1/2 left-0 size-150 -translate-y-1/2 bg-[#27B6FF]/5 rounded-full blur-[150px]" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div ref={headerRef} className={cn("text-center mb-16 transition-all duration-700", headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}>
                    <span className="inline-block px-4 py-2 rounded-full bg-[#27B6FF]/10 border border-[#27B6FF]/20 text-sm text-[#27B6FF] font-medium mb-6">
                        Processo simples e transparente
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        Como{" "}
                        <span className="gradient-text-orange">Funciona</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Do primeiro contato até a entrega final, acompanhe cada etapa
                        do seu atendimento com total clareza.
                    </p>
                </div>

                <div className="relative">
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-linear-to-r from-[#27B6FF]/20 via-[#FF7A00]/20 to-[#27B6FF]/20 -translate-y-1/2" />

                    <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
                        {steps.map((step, index) => (
                            <div key={step.number} className={cn("relative transition-all duration-700 ease-out", gridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')} style={{transitionDelay: `${index * 80}ms`}}>
                                <div className="glass-card rounded-2xl p-6 lg:p-8 text-center relative">
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 size-8 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{ backgroundColor: step.color }}>
                                        {step.number}
                                    </div>
                                    <div className="mx-auto mb-5 mt-2 size-16 rounded-2xl flex items-center justify-center" style={{ backgroundColor: `${step.color}15` }}>
                                        <step.icon className="size-8" style={{ color: step.color }} />
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-muted-foregroundleading-relaxed">
                                        {step.description}
                                    </p>
                                </div>

                                {index < steps.length - 1 && (
                                    <div className="lg:hidden flex justify-center py-4">
                                        <div className="w-0.5 h-8 bg-linear-to-b from-[#27B6FF]/40 to-[#FF7A00]/40" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}