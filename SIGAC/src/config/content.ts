import { type LucideIcon, BarChart3, FileX, Timer, AlertCircle, Printer, MapPin, Activity, FileText, ClipboardList, Database } from "lucide-react";

export const WHATSAPP_NUMBER = "5573999321323";
export const CONTACT_EMAIL = "suporte@14tech.com.br";

export const navItems: [string, string][] = [
  ["Desafios", "#desafios"],
  ["Sobre", "#sobre"],
  ["Vantagens", "#vantagens"],
  ["Recursos", "#recursos"],
  ["Contato", "#contato"],
];

export const challenges: [LucideIcon, string, string][] = [
  [FileX, "Acesso difícil à informação", "Dificuldade de acesso às informações dos requerimentos."],
  [BarChart3, "Ausência de indicadores", "Falta de indicadores ambientais na fiscalização e no licenciamento."],
  [Timer, "Acompanhamento comprometido", "Complicações no acompanhamento dos processos e de suas pendências."],
  [AlertCircle, "Renovações esquecidas", "Falta de proatividade na renovação das licenças."],
  [Printer, "Uso excessivo de papel", "Processos físicos tornam o trâmite lento e sujeito a falhas."],
];

export const advantages = [
  "Centralização dos processos",
  "Acesso rápido à informação",
  "Controle de indicadores",
  "Celeridade nos trâmites das licenças",
  "Monitoramento das condicionantes",
  "Panorama das arrecadações",
  "Registro de fiscalizações e vistorias offline",
  "Integração com GeoBahia, MapBiomas e SIRGAS 2000",
  "Notificações rápidas no WhatsApp",
  "Funcionamento em conjunto do consórcio",
];

export const onlineFeatures: [LucideIcon, string, string][] = [
  [BarChart3, "Dashboards em tempo real", "Indicadores atualizados conforme o processo avança."],
  [MapPin, "Mapa dos processos", "Localização geográfica dos requerimentos e vistorias."],
  [Activity, "Movimento registrado", "Histórico completo para facilitar a gestão."],
  [FileText, "Emissão de documentos", "Licenças, notificações e ofícios gerados pelo sistema."],
  [ClipboardList, "Controle de processos", "Triagem, pendências e andamento em um só painel."],
  [Database, "Dados centralizados", "Uma base única para todas as secretarias e consórcios."],
];
