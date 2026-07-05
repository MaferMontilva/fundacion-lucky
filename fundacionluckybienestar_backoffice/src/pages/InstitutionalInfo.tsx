import { useMemo, useState } from "react";
import PageMeta from "../components/common/PageMeta";

type PublicationState = "Borrador" | "Publicado";

type InstitutionalContent = {
  mission: string;
  vision: string;
  history: string;
  objectives: string;
};

const initialContent: InstitutionalContent = {
  mission:
    "Brindar apoyo integral para rescatar, rehabilitar y promover adopciones responsables de animales en situacion de abandono.",
  vision:
    "Ser una fundacion referente por su impacto social, transparencia y cultura de bienestar animal en la comunidad.",
  history:
    "Fundacion Lucky nace como iniciativa ciudadana y hoy articula voluntariado, alianzas y campanas para mejorar la vida de perros y gatos.",
  objectives:
    "Promover adopcion responsable, educar a la comunidad y fortalecer redes de apoyo para casos de emergencia animal.",
};

function BookIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 5.5A2.5 2.5 0 0 1 7.5 3H20v16H7.5A2.5 2.5 0 0 0 5 21V5.5Z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M5 6h11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M8.5 8.5h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M8.5 11h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export default function InstitutionalInfo() {
  const [form, setForm] = useState<InstitutionalContent>(initialContent);
  const [savedContent, setSavedContent] = useState<InstitutionalContent>(initialContent);
  const [publicationState, setPublicationState] = useState<PublicationState>("Borrador");
  const [message, setMessage] = useState("");

  const stateTone = useMemo(
    () =>
      publicationState === "Publicado"
        ? "bg-[#E9F7ED] text-[#2E8B57] ring-[#CBEBD5]"
        : "bg-[#FFF4DF] text-[#C67A00] ring-[#F5DDB4]",
    [publicationState],
  );

  const updateField = (field: keyof InstitutionalContent, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const saveDraft = () => {
    setSavedContent(form);
    setPublicationState("Borrador");
    setMessage("Cambios guardados en borrador. Aun no visibles en la web publica.");
  };

  const publishContent = () => {
    setSavedContent(form);
    setPublicationState("Publicado");
    setMessage("Contenido publicado visualmente. Integrar backend para publicacion real.");
  };

  return (
    <div className="relative min-h-[calc(100vh-108px)] overflow-hidden pb-4">
      <PageMeta
        title="Informacion institucional | Fundacion Lucky"
        description="Gestion de mision, vision, historia y textos institucionales"
      />

      <div className="pointer-events-none absolute -right-16 top-4 h-64 w-64 rounded-full bg-[#EAF2FF]/80 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-8 h-56 w-56 rounded-full bg-[#FFF4DF]/80 blur-3xl" />

      <section className="relative">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF2FF] text-[#3B5EA7] shadow-sm shadow-[#3B5EA7]/20">
              <BookIcon />
            </span>
            <div>
              <h1 className="text-xl font-black text-[#19323A] sm:text-2xl">Informacion institucional</h1>
              <div className="mt-1.5 h-1 w-20 rounded-full bg-gradient-to-r from-[#3B5EA7] to-[#EB6A00]" />
            </div>
          </div>
          <span className={`inline-flex rounded-lg px-3 py-1 text-xs font-black ring-1 ${stateTone}`}>{publicationState}</span>
        </div>

        <div className="mb-5 rounded-[18px] border border-[#F1D9BD] bg-white p-4 shadow-[0_10px_28px_rgba(59,94,167,0.12)] sm:p-5">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h2 className="text-lg font-black text-[#19323A]">Editor de contenidos oficiales</h2>
              <p className="mt-1 text-xs font-semibold text-[#5F6B70]">
                Administra mision, vision, historia, objetivos y textos que se mostraran en la landing publica.
              </p>
            </div>
            <div className="rounded-xl border border-[#F1D9BD] bg-[#FFF7EA] px-4 py-3 shadow-sm">
              <p className="text-[11px] font-black uppercase tracking-wide text-[#C95200]">Flujo</p>
              <p className="mt-1 text-sm font-black text-[#19323A]">Editar - Borrador - Publicar</p>
            </div>
          </div>
        </div>

        <div className="grid gap-5 xl:grid-cols-[0.95fr_1.2fr]">
          <article className="rounded-[18px] border border-[#F1D9BD] bg-white p-4 shadow-[0_10px_28px_rgba(59,94,167,0.12)] sm:p-5">
            <h3 className="mb-4 text-sm font-black text-[#19323A]">Formulario institucional</h3>

            <div className="space-y-3">
              <label className="block">
                <span className="mb-1.5 block text-xs font-black text-[#19323A]">Mision</span>
                <textarea
                  rows={3}
                  value={form.mission}
                  onChange={(event) => updateField("mission", event.target.value)}
                  className="w-full resize-none rounded-xl border border-[#F1D9BD] bg-white px-3 py-2.5 text-xs font-semibold text-[#19323A] outline-none"
                />
              </label>

              <label className="block">
                <span className="mb-1.5 block text-xs font-black text-[#19323A]">Vision</span>
                <textarea
                  rows={3}
                  value={form.vision}
                  onChange={(event) => updateField("vision", event.target.value)}
                  className="w-full resize-none rounded-xl border border-[#F1D9BD] bg-white px-3 py-2.5 text-xs font-semibold text-[#19323A] outline-none"
                />
              </label>

              <label className="block">
                <span className="mb-1.5 block text-xs font-black text-[#19323A]">Historia</span>
                <textarea
                  rows={4}
                  value={form.history}
                  onChange={(event) => updateField("history", event.target.value)}
                  className="w-full resize-none rounded-xl border border-[#F1D9BD] bg-white px-3 py-2.5 text-xs font-semibold text-[#19323A] outline-none"
                />
              </label>

              <label className="block">
                <span className="mb-1.5 block text-xs font-black text-[#19323A]">Objetivos</span>
                <textarea
                  rows={4}
                  value={form.objectives}
                  onChange={(event) => updateField("objectives", event.target.value)}
                  className="w-full resize-none rounded-xl border border-[#F1D9BD] bg-white px-3 py-2.5 text-xs font-semibold text-[#19323A] outline-none"
                />
              </label>


              <div className="flex flex-wrap gap-2 pt-1">
                <button
                  type="button"
                  onClick={saveDraft}
                  className="inline-flex h-10 items-center justify-center rounded-xl bg-[#3B5EA7] px-4 text-xs font-bold text-white shadow-sm shadow-[#3B5EA7]/30"
                >
                  Guardar borrador
                </button>
                <button
                  type="button"
                  onClick={publishContent}
                  className="inline-flex h-10 items-center justify-center rounded-xl bg-[#EB6A00] px-4 text-xs font-bold text-white shadow-sm shadow-[#EB6A00]/30"
                >
                  Publicar
                </button>
              </div>

              {message && (
                <p className="rounded-lg border border-[#CBEBD5] bg-[#E9F7ED] px-3 py-2 text-xs font-semibold text-[#2E8B57]">
                  {message}
                </p>
              )}
            </div>
          </article>

          <article className="rounded-[18px] border border-[#F1D9BD] bg-white p-4 shadow-[0_10px_28px_rgba(59,94,167,0.12)] sm:p-5">
            <h3 className="mb-4 text-sm font-black text-[#19323A]">Vista previa landing publica</h3>

            <div className="space-y-3 rounded-xl border border-[#F1D9BD] bg-[#FFFDF9] p-4">
              <section className="rounded-lg border border-[#EAF2FF] bg-[#EAF2FF]/45 p-3">
                <p className="text-[11px] font-black uppercase tracking-wide text-[#3B5EA7]">Mision</p>
                <p className="mt-1 text-xs font-semibold text-[#19323A]">{savedContent.mission}</p>
              </section>

              <section className="rounded-lg border border-[#EAF2FF] bg-[#EAF2FF]/45 p-3">
                <p className="text-[11px] font-black uppercase tracking-wide text-[#3B5EA7]">Vision</p>
                <p className="mt-1 text-xs font-semibold text-[#19323A]">{savedContent.vision}</p>
              </section>

              <section className="rounded-lg border border-[#FFF4DF] bg-[#FFF4DF]/45 p-3">
                <p className="text-[11px] font-black uppercase tracking-wide text-[#C67A00]">Historia</p>
                <p className="mt-1 text-xs font-semibold text-[#19323A]">{savedContent.history}</p>
              </section>

              <section className="rounded-lg border border-[#FFF4DF] bg-[#FFF4DF]/45 p-3">
                <p className="text-[11px] font-black uppercase tracking-wide text-[#C67A00]">Objetivos</p>
                <p className="mt-1 text-xs font-semibold text-[#19323A]">{savedContent.objectives}</p>
              </section>

            </div>
          </article>
        </div>
      </section>
    </div>
  );
}