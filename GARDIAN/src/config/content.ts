import { 
  CloudRain, 
  Map, 
  Zap, 
  Layers3, 
  History, 
  AlertTriangle, 
  UsersRound, 
  MapPin, 
  Bot, 
  Satellite, 
  Gauge, 
  BarChart3, 
  ShieldCheck,
  UserRound,
  BriefcaseBusiness,
  CheckCircle2
} from "lucide-react";

export const challenges = [
  [
    CloudRain,
    "Dados meteorológicos e geológicos dispersos",
    "Informações críticas espalhadas dificultam uma leitura precisa do cenário.",
  ],
  [
    Map,
    "Dificuldade para visualizar as zonas de risco",
    "Sem uma visão geográfica clara, áreas prioritárias podem passar despercebidas.",
  ],
  [
    Zap,
    "Demora na triagem das ocorrências",
    "Processos manuais atrasam o encaminhamento e a resposta das equipes.",
  ],
  [
    Layers3,
    "Ausência de visão integrada do território",
    "Dados isolados impedem que gestores compreendam o município por inteiro.",
  ],
  [
    History,
    "Acompanhamento limitado de eventos e ações",
    "A falta de histórico compromete a continuidade das ações de mitigação.",
  ],
  [
    AlertTriangle,
    "Atuação predominantemente reativa",
    "Sem monitoramento contínuo, a resposta acontece somente após o agravamento.",
  ],
] as const;

export const features = [
  [
    UsersRound,
    "Perfis de acesso para cidadãos e técnicos",
    "Níveis distintos de permissão para cada tipo de usuário.",
  ],
  [
    MapPin,
    "Mapa interativo das zonas de risco",
    "Visualização georreferenciada de todo o território municipal.",
  ],
  [
    Bot,
    "Registro e triagem com apoio de IA",
    "A IA faz a triagem preliminar e prioriza o encaminhamento.",
  ],
  [
    History,
    "Histórico de desastres e mitigação",
    "Registro rastreável de eventos e respostas ao longo do tempo.",
  ],
  [
    CloudRain,
    "Dados meteorológicos em tempo real",
    "Integração com fontes climáticas para monitoramento contínuo.",
  ],
  [
    Satellite,
    "Indicadores do AdaptaBrasil",
    "Base nacional oficial para análise de suscetibilidade geológica.",
  ],
  [
    Gauge,
    "Monitoramento por status",
    "Classificação das zonas como críticas, em atenção ou estáveis.",
  ],
] as const;

export const advantages = [
  [
    BarChart3,
    "Decisões baseadas em dados",
    "Integra IA, dados geográficos e meteorológicos e análise humana.",
  ],
  [
    Zap,
    "Respostas mais rápidas",
    "A triagem preliminar agiliza o encaminhamento das ocorrências.",
  ],
  [
    Map,
    "Visão territorial integrada",
    "Mapas interativos facilitam o acompanhamento das zonas de risco.",
  ],
  [
    History,
    "Histórico rastreável",
    "Ocorrências, alertas e ações de mitigação permanecem registrados.",
  ],
  [
    ShieldCheck,
    "Atuação preventiva",
    "O monitoramento contínuo permite planejar ações antes do agravamento.",
  ],
] as const;

export const flow = [
  {
    icon: UserRound,
    title: "Registro",
    text: "Cidadão informa ocorrência e localização.",
  },
  {
    icon: MapPin,
    title: "Localização",
    text: "Sistema georreferencia o ponto no mapa.",
  },
  {
    icon: Bot,
    title: "Análise com IA",
    text: "IA faz triagem e classifica a criticidade.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Validação técnica",
    text: "Técnico avalia, valida ou rejeita a ocorrência.",
  },
  {
    icon: CheckCircle2,
    title: "Decisão",
    text: "Ação de mitigação é registrada e acompanhada.",
  },
];

export const footerLinks: ReadonlyArray<readonly [string, string]> = [
  ["Desafios", "desafios"],
  ["Sobre", "sobre"],
  ["Funcionalidades", "funcionalidades"],
  ["Perfis", "perfis"],
  ["Vantagens", "vantagens"],
];
