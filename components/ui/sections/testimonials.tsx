'use client'

import { testimonials } from "@/constants/data"
import { useInViewOnce } from "@/hooks/use-in-view-once"
import { cn } from "@/lib/utils"
import { Quote, Star } from "lucide-react"

export function Testimonials(){
    const { ref: headerRef, isInView: headerInView } = useInViewOnce()
    const { ref: gridRef, isInView: gridInView } = useInViewOnce()

    return (
        <section className="relative py-24 overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-b from-home via-[#0B1F3A]/20 to-home" />
            <div className="absolute inset-0 grid-pattern opacity-20" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div ref={headerRef} className={cn("text-center mb-16 transition-[opacity,transform] duration-700 ease-out", headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10')}>
                    <span className="inline-block px-4 py-2 rounded-full bg-[#FF7A00]/10 border border-[#FF7A00]/20 text-sm text-[#FF7A00] font-medium mb-6">
                        O que nossos clientes dizem
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                        Depoimentos{" "}
                        <span className="gradient-text">Reais</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        A satisfação dos nossos clientes é o nosso maior orgulho.
                        Confira alguns depoimentos de quem já experimentou o Padrão Onda.
                    </p>
                </div>

                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div key={testimonial.name} className={cn('group transition-[opacity,transform] duration-700 ease-out', gridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10')} style={{transitionDelay: `${index * 100}ms`}}>
                            <div className="glass-card rounded-2xl p-6 h-full hover:border-[#27B6FF]/30 transition-all duration-300">
                                <Quote className="size-8 text-[#27B6FF]/30 mb-4" />

                                <p className="text-white/70 leading-relaxed mb-6 text-sm">
                                    &ldquo;{testimonial.text}&rdquo;
                                </p>

                                <div className="flex gap-1 mb-4">
                                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                                        <Star key={i} className="size-4 fill-[#FFC21A] text-[#FFC21A]" />
                                    ))}
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#27B6FF] to-[#FF7A00] flex items-center justify-center text-white text-sm font-bold">
                                        {testimonial.avatar}
                                    </div>
                                    <div>
                                        <div className="font-semibold text-white text-sm">
                                            {testimonial.name}
                                        </div>
                                        <div className="text-xs text-white/50">
                                            {testimonial.location} • {testimonial.service}
                                        </div>
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