// src/config/assets.ts
/**
 * Configuração central de assets do Gardian.
 *
 * Ponto único para trocar a logo e os mockups provisórios pelos arquivos
 * reais, sem precisar editar cada seção da Landing Page.
 */

export const LOGO_ALT = "Gardian";

/**
 * Logo oficial do sistema.
 *
 * - `null`  → usa o placeholder interno (ícone ShieldCheck + wordmark).
 * - Quando o arquivo real estiver disponível, basta informar o caminho:
 *     export const BRAND_LOGO_SRC = "/images/logo-gardian.svg";
 *
 * Recomendado: SVG com altura mínima de 36px e área de respiro.
 */
export const BRAND_LOGO_SRC = "/images/logo-gardian.svg";

/**
 * Slots de mockup usados na Landing Page.
 *
 * Ao adicionar uma nova seção com imagem, inclua a chave aqui — assim o
 * TypeScript garante que nenhum slot fica sem definição.
 */
export type MockupSlot = "dashboard" | "riskMap";

/**
 * Mockups / imagens do sistema.
 *
 * Enquanto o valor for `null`, o componente renderiza o placeholder
 * ilustrativo. Ao definir um caminho, a imagem passa a ser exibida
 * automaticamente.
 *
 * Ex.: dashboard: "/images/mockup-dashboard.png"
 */
export const MOCKUPS: Record<MockupSlot, string | null> = {
  /** Mockup principal exibido no Hero (Central de Monitoramento). */
  dashboard: null,
  /** Mockup do mapa de zonas de risco (seção "Mapa das zonas de risco"). */
  riskMap: null,
};

/** Imagem usada em og:image / twitter:image. */
export const OG_IMAGE = "/images/og-gardian.png";
