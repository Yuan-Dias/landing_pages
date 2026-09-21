import { createFileRoute } from "@tanstack/react-router";
import { SigacLanding } from "@/components/sigac/SigacLanding";

export const Route = createFileRoute("/")({
  component: SigacLanding,
});
