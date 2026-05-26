'use client'

import { standards } from "@/constants/data";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { cn } from "@/lib/utils";

export function Standard(){
    const { ref: headerRef, isInView: headerInView } = useInViewOnce()
    const { ref: gridRef, isInView: gridInView } = useInViewOnce()

    return (
        <section className="relative py-24 overflow-hidden">
            <div className="absolute inset-0 bg-home" />
            <div className="absolute inset-0 grid-pattern opacity-20" />
            <div className="absolute inset-0 bg-linear-to-r from-[#27B6FF]/5 via-transparent to-[#FF7A00]/5" />
            <div className="absolute top-0 left-1/4 size-400 bg-[#27B6FF]/10 rounded-full blur-[150px]" />
            <div className="absolute bottom-0 right-1/4 size-300 bg-[#FF7A00]/10 rounded-full blur-[120px]" />

            <div ref={headerRef} className={cn('text-center mb-16 transition-all duration-700 ease-out', headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}>
                <span className="inline-block px-4 py-2 rounded-full bg-linear-to-r from-[#27B6FF]/20 to-[#FF7A00]/20 border border-[#27B6FF]/30 text-sm font-medium mb-6">
                    <span className="gradient-text">Protocolo Operacional Premium</span>
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                    O Padrão {" "}
                    <span className="gradient-text-orange">Onda</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                    Cada atendimento segue um rigoroso protocolo de qualidade.
                    É assim que garantimos excelência em todos os serviços.
                </p>
            </div>

            <div ref={gridRef} className="relative">
                <div className={cn('hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-64 transition-[opacity,transform] duration-700 ease-out', gridInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90')}>
                    <div className="relative size-full">
                        <div className="absolute inset-0 border-2 border-dashed border-[#27B6FF]/20 rounded-full animate-orbit" />
                        <div className="absolute inset-4 border-2 border-dashed border-[#FF7A00]/20 rounded-full animate-orbit-reverse" />

                        <div className="absolute inset-8 glass-card rounded-full flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-3xl font-bold gradient-text-orange">100%</div>
                                <div className="text-xs text-white/60">Qualidade</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {standards.map((item, index) => (
                        <div key={item.title} className={cn("transition-[opacity,transform] duration-700 ease-out", gridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10', (index === 2 || index === 3) && "lg:col-start-1")} style={{transitionDelay: `${index * 100}ms`}}>
                            <div className="glass-card rounded-2xl p-6 h-full group hover:border-[#27B6FF]/30 transition-all duration-300">
                                <div className="flex items-start gap-4">
                                    <div className="shrink-0 w-8 h-8 rounded-lg bg-linear-to-br from-[#27B6FF]/20 to-[#FF7A00]/20 flex items-center justify-center text-sm font-bold text-white">
                                        {String(index + 1).padStart(2, "0")}
                                    </div>

                                    <div>
                                        <div className="mb-3 size-10 rounded-lg bg-[#27B6FF]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <item.icon className="size-5 text-[#27B6FF]" />
                                        </div>

                                        <h3 className="text-lg font-bold text-white mb-2">
                                            {item.title}
                                        </h3>

                                        <p className="text-sm text-white/60 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}