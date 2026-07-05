import { useMemo, useState } from "react";
import PageMeta from "../components/common/PageMeta";

type FaqCategory = "Adopcion" | "Voluntariado" | "Donaciones" | "General";

type FaqItem = {
  question: string;
  answer: string;
  category: FaqCategory;
  isActive: boolean;
};

const sampleFaqs: FaqItem[] = [
  {
    question: "Cual es el proceso de adopcion?",
    answer: "Completa el formulario, agenda entrevista y valida requisitos basicos de tenencia responsable.",
    category: "Adopcion",
    isActive: true,
  },
  {
    question: "Como puedo participar como voluntario?",
    answer: "Registra tu disponibilidad en el modulo de voluntariado y el equipo te asignara actividades.",
    category: "Voluntariado",
    isActive: true,
  },
  {
    question: "Aceptan donaciones en especie?",
    answer: "Si, recibimos alimento, medicinas y accesorios segun campañas vigentes.",
    category: "Donaciones",
    isActive: false,
  },
];

export default function Faqs() {
  const [categoryFilter, setCategoryFilter] = useState<"Todas" | FaqCategory>("Todas");
  const [activeFilter, setActiveFilter] = useState<"Todos" | "Activas" | "Inactivas">("Todos");

  const filteredFaqs = useMemo(() => {
    return sampleFaqs.filter((item) => {
      const categoryOk = categoryFilter === "Todas" || item.category === categoryFilter;
      const statusOk =
        activeFilter === "Todos" ||
        (activeFilter === "Activas" && item.isActive) ||
        (activeFilter === "Inactivas" && !item.isActive);

      return categoryOk && statusOk;
    });
  }, [activeFilter, categoryFilter]);

  return (
    <div className="relative min-h-[calc(100vh-108px)] overflow-hidden pb-4">
      <PageMeta title="FAQ | Fundacion Lucky" description="Gestion de preguntas frecuentes para landing publica" />

      <div className="pointer-events-none absolute -right-12 top-4 h-56 w-56 rounded-full bg-[#EAF2FF]/80 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-10 h-56 w-56 rounded-full bg-[#FFF4DF]/80 blur-3xl" />

      <section className="relative">
        <div className="mb-4 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF2FF] text-[#3B5EA7] shadow-sm shadow-[#3B5EA7]/20">
            ?
          </span>
          <div>
            <h1 className="text-xl font-black text-[#19323A] sm:text-2xl">Modulo FAQ</h1>
            <div className="mt-1.5 h-1 w-12 rounded-full bg-gradient-to-r from-[#3B5EA7] to-[#EB6A00]" />
          </div>
        </div>

        <div className="mb-5 rounded-[18px] border border-[#F1D9BD] bg-white p-4 shadow-[0_10px_28px_rgba(59,94,167,0.12)] sm:p-5">
          <h2 className="text-lg font-black text-[#19323A]">Preguntas frecuentes publicas</h2>
          <p className="mt-1 text-xs font-semibold text-[#5F6B70]">
            Gestiona preguntas y respuestas que se mostraran en la landing para resolver dudas comunes.
          </p>
        </div>

        <div className="grid gap-5 xl:grid-cols-[0.95fr_1.2fr]">
          <article className="rounded-[18px] border border-[#F1D9BD] bg-white p-4 shadow-[0_10px_28px_rgba(59,94,167,0.12)] sm:p-5">
            <h3 className="mb-4 text-sm font-black text-[#19323A]">Nueva pregunta</h3>

            <form className="space-y-3">
              <label className="block">
                <span className="mb-1.5 block text-xs font-black text-[#19323A]">Pregunta</span>
                <input
                  type="text"
                  placeholder="Ej. Como puedo apoyar a la fundacion?"
                  className="h-10 w-full rounded-xl border border-[#F1D9BD] bg-white px-3 text-xs font-semibold text-[#19323A] outline-none"
                />
              </label>

              <label className="block">
                <span className="mb-1.5 block text-xs font-black text-[#19323A]">Respuesta</span>
                <textarea
                  rows={4}
                  placeholder="Escribe la respuesta oficial..."
                  className="w-full resize-none rounded-xl border border-[#F1D9BD] bg-white px-3 py-2.5 text-xs font-semibold text-[#8A969B] outline-none"
                />
              </label>

              <div className="grid gap-3 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-xs font-black text-[#19323A]">Categoria</span>
                  <select className="h-10 w-full rounded-xl border border-[#F1D9BD] bg-white px-3 text-xs font-semibold text-[#19323A] outline-none">
                    <option>General</option>
                    <option>Adopcion</option>
                    <option>Voluntariado</option>
                    <option>Donaciones</option>
                  </select>
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-xs font-black text-[#19323A]">Estado</span>
                  <select className="h-10 w-full rounded-xl border border-[#F1D9BD] bg-white px-3 text-xs font-semibold text-[#19323A] outline-none">
                    <option>Activa</option>
                    <option>Inactiva</option>
                  </select>
                </label>
              </div>

              <button
                type="button"
                className="inline-flex h-10 items-center justify-center rounded-xl bg-[#3B5EA7] px-4 text-xs font-bold text-white shadow-sm shadow-[#3B5EA7]/30"
              >
                Guardar FAQ
              </button>
            </form>
          </article>

          <article className="rounded-[18px] border border-[#F1D9BD] bg-white p-4 shadow-[0_10px_28px_rgba(59,94,167,0.12)] sm:p-5">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-sm font-black text-[#19323A]">Listado FAQ</h3>
              <div className="flex gap-2">
                <select
                  value={categoryFilter}
                  onChange={(event) => setCategoryFilter(event.target.value as "Todas" | FaqCategory)}
                  className="h-9 rounded-lg border border-[#F1D9BD] bg-[#FFF7EA] px-3 text-[11px] font-semibold text-[#5F6B70] outline-none"
                >
                  <option value="Todas">Todas</option>
                  <option value="General">General</option>
                  <option value="Adopcion">Adopcion</option>
                  <option value="Voluntariado">Voluntariado</option>
                  <option value="Donaciones">Donaciones</option>
                </select>

                <select
                  value={activeFilter}
                  onChange={(event) => setActiveFilter(event.target.value as "Todos" | "Activas" | "Inactivas")}
                  className="h-9 rounded-lg border border-[#F1D9BD] bg-[#FFF7EA] px-3 text-[11px] font-semibold text-[#5F6B70] outline-none"
                >
                  <option value="Todos">Todos</option>
                  <option value="Activas">Activas</option>
                  <option value="Inactivas">Inactivas</option>
                </select>
              </div>
            </div>

            <div className="space-y-3">
              {filteredFaqs.map((faq) => (
                <div key={faq.question} className="rounded-xl border border-[#F1D9BD] bg-[#FFFDF9] p-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-xs font-black text-[#19323A]">{faq.question}</p>
                    <span
                      className={`inline-flex rounded-lg px-2.5 py-1 text-[11px] font-black ${
                        faq.isActive ? "bg-[#E9F7ED] text-[#2E8B57]" : "bg-[#FDECEB] text-[#E86F61]"
                      }`}
                    >
                      {faq.isActive ? "Activa" : "Inactiva"}
                    </span>
                  </div>
                  <p className="mt-1 text-xs font-semibold text-[#5F6B70]">{faq.answer}</p>
                  <p className="mt-2 text-[11px] font-bold text-[#3B5EA7]">Categoria: {faq.category}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
