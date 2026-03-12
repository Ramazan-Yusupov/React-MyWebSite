import {
  Zap,
  Shield,
  Layout,
  Database,
  ShoppingCart,
  TrendingUp,
  Code2,
} from "lucide-react";

export type FeatureIconKey =
  | "performance"
  | "security"
  | "ui"
  | "api"
  | "cart"
  | "optimization"
  | "code";

export const featureIcons: Record<
  FeatureIconKey,
  React.ComponentType<{ className?: string }>
> = {
  performance: Zap,
  security: Shield,
  ui: Layout,
  api: Database,
  cart: ShoppingCart,
  optimization: TrendingUp,
  code: Code2,
};

export const getFeatureIcon = (key: FeatureIconKey) => featureIcons[key];
