'use client'

import { stats } from '@/constants/data';
import { useInViewOnce } from '@/hooks/use-in-view-once';
import { cn } from '@/lib/utils';

export function TrustBar(){
    const {isInView, ref} = useInViewOnce()

    return (
        <section className='relative py-16 overflow-hidden'>
            <div className="absolute inset-0 bg-linear-to-b from-home via-[#0B1F3A]/50 to-home" />
            <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-5" />

            <div className='relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div ref={ref} className='grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'>
                    {stats.map((stat,index) => (
                        <div key={stat.label} className={cn('relative group transition-all duration-700 ease-out', isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')} style={{ transitionDelay: `${index * 100}ms` }}>
                            <div className='glass-card rounded-2xl p-6 text-center transition-all duration-300 hover:border-[#27B6FF]/30'>
                                <div className='mx-auto mb-4 size-14 rounded-xl flex items-center justify-center' style={{ backgroundColor: `${stat.color}15` }}>
                                    <stat.icon className="size-7" style={{ color: stat.color }} />
                                </div>
                                <div className="text-3xl lg:text-4xl font-bold mb-2" style={{ color: stat.color }}>
                                    {stat.value}
                                </div>
                                <div className="text-sm text-white/60 font-medium">
                                    {stat.label}
                                </div>
                                <div
                                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                    style={{
                                        boxShadow: `0 0 40px ${stat.color}20, inset 0 0 40px ${stat.color}05`,
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}