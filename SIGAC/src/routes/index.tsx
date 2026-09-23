import { createFileRoute } from "@tanstack/react-router";
import { Sigac } from "@/components/sigac";

export const Route = createFileRoute("/")({
  component: Sigac,
});
