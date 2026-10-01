import { ChangeEvent, FormEvent, useState } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";
import { WHATSAPP_NUMBER } from "../../config/content";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    organization: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message =
      `Olá! Gostaria de solicitar uma demonstração do FrotasON.\n\n` +
      `*Nome:* ${form.name}\n` +
      `*E-mail:* ${form.email}\n` +
      `*Cidade/Órgão:* ${form.organization}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank", "noopener,noreferrer");

    setSent(true);
  };

  if (sent) {
    return (
      <div className="form-success" role="status">
        <CheckCircle2 size={28} />
        <strong>Solicitação encaminhada!</strong>
        <p>
          Abrimos o WhatsApp com sua mensagem preenchida. Se a janela não abriu,
          verifique o bloqueador de pop-ups.
        </p>
      </div >
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        <span>Nome</span>
        <input
          required
          name="name"
          autoComplete="name"
          placeholder="Seu nome"
          value={form.name}
          onChange={handleChange}
        />
      </label>

      <label>
        <span>E-mail institucional</span>
        <input
          required
          name="email"
          type="email"
          autoComplete="email"
          placeholder="nome@orgao.gov.br"
          value={form.email}
          onChange={handleChange}
        />
      </label>

      <label>
        <span>Organização</span>
        <input
          required
          name="organization"
          autoComplete="organization"
          placeholder="Prefeitura, secretaria ou autarquia"
          value={form.organization}
          onChange={handleChange}
        />
      </label>

      <button type="submit" className="button button-light">
        Enviar pelo WhatsApp <ArrowRight size={16} />
      </button>

      <small>
        Ao enviar, você será redirecionado ao WhatsApp com a mensagem preenchida.
      </small>
    </form>
  );
}
