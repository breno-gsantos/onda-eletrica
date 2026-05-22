'use client'

import { differentials } from '@/constants/data'
import { useInViewOnce } from '@/hooks/use-in-view-once'
import { cn } from '@/lib/utils'

export function Differentials(){
    const { ref: headerRef, isInView: headerInView } = useInViewOnce()
    const { ref: gridRef, isInView: gridInView } = useInViewOnce()

    return (
        <section id='diferenciais' className='relative py-24 overflow-hidden'>
            <div className="absolute inset-0 bg-home" />
            <div className="absolute inset-0 grid-pattern opacity-30" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-100 bg-[#27B6FF]/5 rounded-full blur-[120px]" />

            <div className='relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div ref={headerRef} className={cn('text-center mb-16 transition-all duration-700 ease-out', headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}>
                    <span className='inline-block px-4 py-2 rounded-full bg-[#27B6FF]/10 border border-[#27B6FF]/20 text-sm text-[#27B6FF] font-medium mb-6'>
                        Por que escolher a Onda Elétrica?
                    </span>
                    <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6'>
                        Nossos {" "}
                        <span className='gradient-text-orange'>Diferenciais</span>
                    </h2>
                    <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
                        Combinamos tecnologia, transparência e excelência técnica para
                        entregar o melhor serviço elétrico do mercado.
                    </p>
                </div>

                <div ref={gridRef} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {differentials.map((item, index) => (
                        <div key={item.title} className={cn('relative group transition-all duration-700 ease-out', gridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8', item.highlight ? 'md:col-span-2 lg:col-span-1 lg:row-span-1' : '')}>
                            <div className={cn("h-full rounded-2xl p-6 lg:p-8 transition-all duration-500 relative overflow-hidden", item.highlight ? "glass-card-orange border-[#FF7A00]/30" : "glass-card")} style={{ boxShadow: `0 0 60px ${item.color}15, inset 0 0 60px ${item.color}05`}}>
                                <div className="mb-6 w-14 h-14 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110" style={{ backgroundColor: `${item.color}15` }}>
                                    <item.icon className="h-7 w-7" style={{ color: item.color }} />
                                </div>

                                {item.highlight && (
                                    <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#FF7A00]/20 text-xs text-[#FF7A00] font-semibold">
                                        Exclusivo
                                    </span>
                                )}
                                <h3 className="text-xl font-bold mb-3" style={{ color: item.highlight ? item.color : "white" }}>
                                    {item.title}
                                </h3>
                                <p className="text-white/60 leading-relaxed">
                                    {item.description}
                                </p>
                                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{boxShadow: `0 0 60px ${item.color}15, inset 0 0 60px ${item.color}05` }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}