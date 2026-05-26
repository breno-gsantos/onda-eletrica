import { AlertTriangle, Award, BadgeCheck, Camera, CheckCircle, CheckCircle2, ClipboardCheck, Clock, DoorOpen, FileText, LayoutGrid, MessageSquare, Search, Settings, Shield, ShieldCheck, Shirt, Sparkles, Sun, Users, Video, Wind, Zap } from "lucide-react"

export const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Sobre", href: "#sobre" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
]

export const floatingCards = [
  { icon: Clock, label: "Atendimento 24h", delay: 0 },
  { icon: Video, label: "Body Cam", delay: 0.2 },
  { icon: Shield, label: "Garantia Total", delay: 0.4 },
  { icon: Award, label: "Técnicos Certificados", delay: 0.6 },
  { icon: Users, label: "Equipe Uniformizada", delay: 0.8 },
]

export const stats = [
  {
    icon: CheckCircle2,
    value: "+500",
    label: "Atendimentos Realizados",
    color: "#27B6FF",
  },
  {
    icon: Users,
    value: "98%",
    label: "Satisfação dos Clientes",
    color: "#FF7A00",
  },
  {
    icon: Clock,
    value: "24h",
    label: "Resposta Garantida",
    color: "#27B6FF",
  },
  {
    icon: Shield,
    value: "100%",
    label: "Serviços Monitorados",
    color: "#FF7A00",
  },
]

export const differentials = [
  {
    icon: Video,
    title: "Body Cam",
    description:
      "Transparência total. Todos os serviços são gravados com body cam para você acompanhar cada detalhe do trabalho realizado.",
    highlight: true,
    color: "#FF7A00",
  },
  {
    icon: Shield,
    title: "Garantia Total",
    description:
      "Oferecemos garantia em todos os serviços executados. Sua tranquilidade é nossa prioridade.",
    color: "#27B6FF",
  },
  {
    icon: Clock,
    title: "Orçamento em 24h",
    description:
      "Resposta rápida garantida. Receba seu orçamento detalhado em até 24 horas após a solicitação.",
    color: "#27B6FF",
  },
  {
    icon: FileText,
    title: "Relatório Completo",
    description:
      "Documentação profissional com fotos antes e depois, materiais utilizados e certificado de conclusão.",
    color: "#27B6FF",
  },
  {
    icon: Users,
    title: "Equipe Uniformizada",
    description:
      "Técnicos identificados e uniformizados. Profissionalismo e segurança em cada atendimento.",
    color: "#27B6FF",
  },
  {
    icon: Award,
    title: "Técnicos Certificados",
    description:
      "Equipe qualificada com certificações NR-10, NR-35 e treinamentos específicos para cada tipo de serviço.",
    color: "#27B6FF",
  },
]

export const services = [
  {
    icon: Zap,
    title: "Instalação Elétrica",
    description:
      "Instalações residenciais e comerciais com segurança e qualidade certificada.",
    color: "#27B6FF",
  },
  {
    icon: AlertTriangle,
    title: "Emergência 24h",
    description:
      "Atendimento emergencial disponível 24 horas por dia, 7 dias por semana.",
    color: "#FF7A00",
  },
  {
    icon: Camera,
    title: "Câmeras e CFTV",
    description:
      "Sistemas de monitoramento completos para residências e empresas.",
    color: "#27B6FF",
  },
  {
    icon: DoorOpen,
    title: "Portões Automáticos",
    description:
      "Instalação e manutenção de portões eletrônicos e automatizados.",
    color: "#27B6FF",
  },
  {
    icon: Settings,
    title: "Automação Residencial",
    description:
      "Transforme sua casa em um ambiente inteligente e conectado.",
    color: "#27B6FF",
  },
  {
    icon: Wind,
    title: "Ar Condicionado",
    description:
      "Instalação, manutenção e higienização de sistemas de climatização.",
    color: "#27B6FF",
  },
  {
    icon: Sun,
    title: "Energia Solar",
    description:
      "Projetos fotovoltaicos para economia e sustentabilidade energética.",
    color: "#FFC21A",
  },
  {
    icon: LayoutGrid,
    title: "Quadros Elétricos",
    description:
      "Montagem, adequação e manutenção de quadros de distribuição.",
    color: "#27B6FF",
  },
  {
    icon: ShieldCheck,
    title: "Segurança Eletrônica",
    description:
      "Alarmes, sensores e sistemas integrados de proteção.",
    color: "#27B6FF",
  },
]

export const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Solicitação",
    description:
      "Entre em contato pelo WhatsApp ou formulário. Descreva sua necessidade e receba atendimento imediato.",
    color: "#27B6FF",
  },
  {
    number: "02",
    icon: Search,
    title: "Diagnóstico",
    description:
      "Nossa equipe avalia seu caso e envia um orçamento detalhado em até 24 horas, sem compromisso.",
    color: "#27B6FF",
  },
  {
    number: "03",
    icon: Video,
    title: "Atendimento Monitorado",
    description:
      "Técnico uniformizado com body cam realiza o serviço. Você acompanha tudo com total transparência.",
    color: "#FF7A00",
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Entrega Validada",
    description:
      "Receba o relatório completo com fotos, vídeo do serviço e certificado de conclusão.",
    color: "#27B6FF",
  },
]

export const standards = [
  {
    icon: Shirt,
    title: "Uniforme Completo",
    description: "Técnicos sempre uniformizados com vestimenta padrão da empresa.",
  },
  {
    icon: BadgeCheck,
    title: "Identificação Visível",
    description: "Crachá com foto, nome e registro profissional em destaque.",
  },
  {
    icon: Video,
    title: "Body Cam Ativo",
    description: "Gravação completa do serviço do início ao fim.",
  },
  {
    icon: ClipboardCheck,
    title: "Checklist de Qualidade",
    description: "Verificação ponto a ponto de todos os procedimentos.",
  },
  {
    icon: CheckCircle,
    title: "Validação Final",
    description: "Teste e conferência junto ao cliente antes da conclusão.",
  },
  {
    icon: Sparkles,
    title: "Organização Pós-Serviço",
    description: "Limpeza completa do local após finalizar o trabalho.",
  },
]

export const testimonials = [
  {
    name: "Carlos Silva",
    location: "Jardim América",
    service: "Instalação Elétrica Residencial",
    rating: 5,
    text: "Impressionante! A transparência com a body cam me deixou muito mais seguro. Vi exatamente o que foi feito na instalação do meu quadro elétrico. Recomendo demais!",
    avatar: "CS",
  },
  {
    name: "Maria Fernanda",
    location: "Centro",
    service: "Emergência 24h",
    rating: 5,
    text: "Chamei às 2h da madrugada por um curto-circuito e em menos de 40 minutos o técnico estava aqui. Profissionalismo impecável, mesmo de madrugada.",
    avatar: "MF",
  },
  {
    name: "Roberto Mendes",
    location: "Vila Industrial",
    service: "Sistema de Câmeras",
    rating: 5,
    text: "Instalaram 8 câmeras na minha empresa com perfeição. O melhor foi receber o vídeo completo do serviço depois. Nunca vi isso em nenhuma outra empresa.",
    avatar: "RM",
  },
  {
    name: "Ana Paula Costa",
    location: "Residencial dos Lagos",
    service: "Energia Solar",
    rating: 5,
    text: "Projeto solar completo com acompanhamento do início ao fim. A equipe é super técnica e explicou cada detalhe. Já estou economizando na conta de luz!",
    avatar: "AC",
  },
  {
    name: "Fernando Oliveira",
    location: "Parque das Nações",
    service: "Automação Residencial",
    rating: 5,
    text: "Transformaram minha casa! Agora controlo tudo pelo celular. O atendimento foi nota 10 e o uniforme da equipe passou muita credibilidade.",
    avatar: "FO",
  },
  {
    name: "Juliana Santos",
    location: "Alto da Boa Vista",
    service: "Manutenção Preventiva",
    rating: 5,
    text: "Fizeram a manutenção completa da parte elétrica da minha casa. Encontraram problemas que eu nem sabia que existiam. Super profissionais!",
    avatar: "JS",
  },
]