import type { LucideIcon } from "lucide-react";
import { 
  Network, FileText, Boxes, Timer, Workflow, 
  ClipboardList, Landmark, FileCheck2, BarChart3, 
  ReceiptText, ShieldCheck, CheckCircle2, ScrollText
} from "lucide-react";

export const WHATSAPP_NUMBER = "5573999321323";
export const CONTACT_EMAIL = "contato@suapre.com.br";

export const challenges = [
  [Network, "Baixa integração entre setores", "Secretarias, compras, licitação e financeiro precisam trabalhar com a mesma informação."],
  [FileText, "Informações dispersas", "Documentos e dados espalhados dificultam uma visão confiável do processo."],
  [Boxes, "Controles paralelos", "Planilhas e registros manuais aumentam o risco de divergências."],
  [Timer, "Prazos difíceis de acompanhar", "Vigências, etapas e entregas exigem acompanhamento contínuo."],
  [Workflow, "Retrabalho entre etapas", "A repetição de lançamentos torna o fluxo mais lento e sujeito a falhas."],
] as const;

export const features = [
  [ClipboardList, "Produção e gestão de DFP, ETP e IRP"],
  [Landmark, "Integração e publicação no PNCP"],
  [FileCheck2, "Organização dos processos licitatórios e contratações"],
  [Boxes, "Controle de entrada, saída e estoque de materiais"],
  [ScrollText, "Elaboração e acompanhamento do Plano de Contratações Anual"],
  [BarChart3, "Acompanhamento da execução financeira"],
  [ReceiptText, "Gestão de atas de registro de preços e contratos"],
  [ShieldCheck, "Relatórios, usuários e rastreabilidade das operações"],
] as const;

export const advantages = [
  [Network, "Gestão integrada", "Todo o ciclo das contratações em um único sistema."],
  [Workflow, "Menos retrabalho", "Reduz duplicidade de informações e controles paralelos."],
  [BarChart3, "Mais controle", "Facilita o acompanhamento de prazos, saldos e vigências."],
  [ShieldCheck, "Transparência e rastreabilidade", "Mantém o histórico completo das operações."],
  [CheckCircle2, "Decisões mais seguras", "Disponibiliza informações confiáveis para a gestão."],
] as const;

export const navItems = [
  ["Desafios", "#desafios"],
  ["Sobre", "#sobre"],
  ["Funcionalidades", "#funcionalidades"],
  ["Integração", "#integracao"],
  ["Fluxo", "#fluxo-linear"],
  ["Contato", "#contato"],
] as const;

export const modules = [
  ["01", "Planejamento"],
  ["02", "Licitação"],
  ["03", "PNCP"],
  ["04", "Atas"],
  ["05", "Contratos"],
  ["06", "Financeiro"],
  ["07", "Almoxarifado"],
] as const;

export const flowSteps: [string, string][] = [
  ["PCA", "Necessidades das secretarias e Plano de Contratações Anual."],
  ["Fase preparatória", "DFP, ETP e IRP para formalizar e preparar a contratação."],
  ["Licitação", "Organização dos documentos e condução do processo."],
  ["PNCP", "Integração e publicação das informações no portal nacional."],
  ["Atas e contratos", "Gestão de vigências, saldos e movimentações contratuais."],
  ["Financeiro", "Acompanhamento dos valores e da execução por contrato."],
  ["Almoxarifado", "Recebimento, estoque, distribuição e histórico dos materiais."],
];

