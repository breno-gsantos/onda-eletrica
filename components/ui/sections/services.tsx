'use client'

import { services } from "@/constants/data";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { cn } from "@/lib/utils";

export function Services(){
    const { ref: headerRef, isInView: headerInView } = useInViewOnce()
    const { ref: gridRef, isInView: gridInView } = useInViewOnce()

    return (
        <section id='servicos' className='relative py-24 overflow-hidden'>
            <div className="absolute inset-0 bg-linear-to-b from-home via-[#0B1F3A]/30 to-home" />
            <div className="absolute inset-0 grid-pattern opacity-20" />

            <div className='relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div ref={headerRef} className={`text-center mb-16 transition-all duration-700 ${headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                    <span className='inline-block px-4 py-2 rounded-full bg-[#FF7A00]/10 border border-[#FF7A00]/20 text-sm text-[#FF7A00] font-medium mb-6'>
                        Soluções Completas para Você
                    </span>
                    <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6'>
                        Nossos {" "}
                        <span className='gradient-text'>Serviços</span>
                    </h2>
                    <p className='text-lg text-muted-foreground max-w-2xl mx-auto text-pretty'>
                        Da instalação elétrica básica até projetos complexos de automação e
                        energia solar. Atendemos todas as suas necessidades.
                    </p>
                </div>

                <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div key={service.title} className={cn('group relative transition-all duration-700 ease-out', gridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')} style={{transitionDelay: `${index * 80}ms`}}>
                            <div className="glass-card rounded-2xl p-6 h-full transition-all duration-500 hover:border-[#27B6FF]/30 hover:-translate-y-1">
                                <div className="mb-5 size-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: `${service.color}15` }}>
                                    <service.icon className="size-6 transition-all duration-300" style={{color: service.color}} />
                                </div>

                                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-[#27B6FF] transition-colors duration-300">
                                    {service.title}
                                </h3>

                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {service.description}
                                </p>

                                <div className="absolute bottom-0 left-0 h-1 w-0 bg-linear-to-r from-[#27B6FF] to-[#FF7A00] rounded-b-2xl transition-all duration-500 group-hover:w-full" />
                                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: `0 0 40px ${service.color}10`}} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}