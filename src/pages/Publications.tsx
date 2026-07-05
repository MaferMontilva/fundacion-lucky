import { useRef, useState } from "react";
import PageMeta from "../components/common/PageMeta";

const publicationTypes = [
  { value: "evento", label: "Evento", icon: "calendar", className: "bg-[#EFEAFE] text-[#6F58C9] ring-[#D9CEF8]" },
  { value: "campaña", label: "Campaña", icon: "megaphone", className: "bg-[#E9F7ED] text-[#2E8B57] ring-[#CBEBD5]" },
  { value: "noticia", label: "Noticia", icon: "news", className: "bg-[#EAF2FF] text-[#4A78D3] ring-[#CFE0FF]" },
  { value: "convocatoria", label: "Convocatoria", icon: "ticket", className: "bg-[#FFF1DC] text-[#C67A00] ring-[#F5DDB4]" },
  { value: "contenido", label: "Contenido", icon: "spark", className: "bg-[#FDECF4] text-[#C04E7A] ring-[#F6CFE0]" },
] as const;

const publicationStatuses = [
  { value: "borrador", label: "Borrador" },
  { value: "publicado", label: "Publicado" },
  { value: "archivado", label: "Archivado" },
] as const;

type PublicationType = (typeof publicationTypes)[number]["value"];
type PublicationStatus = (typeof publicationStatuses)[number]["value"];

type Publication = {
  category_id: string | null;
  cover_media_id: string | null;
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  content: string;
  type: PublicationType;
  status: PublicationStatus;
  featured_section: string;
  event_date: string;
  date_label: string;
  cta_label: string;
  is_featured: boolean;
  is_active: boolean;
  order_index: number;
};

const samplePublications: Publication[] = [
  {
    category_id: null,
    cover_media_id: null,
    title: "Jornada de adopción",
    slug: "jornada-de-adopcion",
    subtitle: "Evento para encontrar hogares responsables",
    description: "Actividad institucional para promover la adopción de animales rescatados.",
    content: "Contenido informativo de la jornada de adopción.",
    type: "evento",
    status: "borrador",
    featured_section: "publicaciones",
    event_date: "",
    date_label: "Por definir",
    cta_label: "Ver más",
    is_featured: true,
    is_active: true,
    order_index: 1,
  },
  {
    category_id: null,
    cover_media_id: null,
    title: "Campaña de alimento",
    slug: "campana-de-alimento",
    subtitle: "Apoyo para animales rescatados",
    description: "Campaña para recolectar alimento y recursos para la fundación.",
    content: "Contenido de la campaña de alimento.",
    type: "campaña",
    status: "borrador",
    featured_section: "campañas",
    event_date: "",
    date_label: "Por definir",
    cta_label: "Apoyar",
    is_featured: false,
    is_active: true,
    order_index: 2,
  },
  {
    category_id: null,
    cover_media_id: null,
    title: "Historia Lucky",
    slug: "historia-lucky",
    subtitle: "Conoce nuestra labor",
    description: "Publicación institucional sobre la historia y misión de Fundación Lucky.",
    content: "Contenido de la historia institucional de Fundación Lucky.",
    type: "noticia",
    status: "borrador",
    featured_section: "noticias",
    event_date: "",
    date_label: "Por definir",
    cta_label: "Leer más",
    is_featured: false,
    is_active: true,
    order_index: 3,
  },
];

function PawIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8.58 12.72c1.38-.2 2.06.79 2.7 1.49.31.34.55.51.72.51s.41-.17.72-.51c.64-.7 1.32-1.69 2.7-1.49 1.47.21 2.59 1.63 2.59 3.22 0 1.88-1.28 3.14-3.13 3.14-.78 0-1.52-.22-2.13-.5-.53-.24-.97-.44-1.25-.44s-.72.2-1.25.44c-.61.28-1.35.5-2.13.5-1.85 0-3.13-1.26-3.13-3.14 0-1.59 1.12-3.01 2.59-3.22Z"
        fill="currentColor"
      />
      <path
        d="M6.83 5.21c1.03-.13 2.01.87 2.19 2.23.18 1.36-.51 2.57-1.54 2.7-1.03.13-2.01-.87-2.19-2.23-.18-1.36.51-2.57 1.54-2.7Zm10.34 0c1.03.13 1.72 1.34 1.54 2.7-.18 1.36-1.16 2.36-2.19 2.23-1.03-.13-1.72-1.34-1.54-2.7.18-1.36 1.16-2.36 2.19-2.23ZM11.99 4c1.05 0 1.9 1.12 1.9 2.5S13.04 9 11.99 9s-1.9-1.12-1.9-2.5S10.94 4 11.99 4ZM4.16 9.19c.91-.35 2.03.35 2.5 1.56.47 1.21.12 2.47-.79 2.82-.91.35-2.03-.35-2.5-1.56-.47-1.21-.12-2.47.79-2.82Zm15.68 0c.91.35 1.26 1.61.79 2.82-.47 1.21-1.59 1.91-2.5 1.56-.91-.35-1.26-1.61-.79-2.82.47-1.21 1.59-1.91 2.5-1.56Z"
        fill="currentColor"
      />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="4" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 3V7M16 3V7M3 10H21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M8 15h.01M12 15h.01M16 15h.01" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function EditIcon() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 20h4L18.5 9.5a2.12 2.12 0 0 0-3-3L5 17v3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="m14.5 7.5 2 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 7h14M9 7V5h6v2M8 10v8M12 10v8M16 10v8M6 7l1 13h10l1-13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function Publications() {
  const dateInputRef = useRef<HTMLInputElement>(null);
  const [selectedType, setSelectedType] = useState<PublicationType>("campaña");
  const [selectedStatus, setSelectedStatus] = useState<PublicationStatus>("borrador");
  const [selectedDate, setSelectedDate] = useState("");
  const [formMessage, setFormMessage] = useState("Vista visual lista para conectar al backend.");

  const handlePrototypeAction = (action: string) => {
    setFormMessage(`${action} preparado localmente. Se conectará al backend después.`);
  };

  const openDatePicker = () => {
    if (!dateInputRef.current) return;
    if (typeof dateInputRef.current.showPicker === "function") {
      dateInputRef.current.showPicker();
      return;
    }
    dateInputRef.current.focus();
  };

  const getTypeConfig = (type: PublicationType) => {
    return publicationTypes.find((item) => item.value === type) ?? publicationTypes[4];
  };

  const getStatusLabel = (status: PublicationStatus) => {
    return publicationStatuses.find((item) => item.value === status)?.label ?? status;
  };

  return (
    <div className="relative min-h-[calc(100vh-108px)] overflow-hidden pb-4">
      <PageMeta
        title="Modulo de publicaciones | Fundacion Lucky"
        description="Vista visual del modulo de publicaciones para Fundacion Lucky"
      />

      <style>
        {`
          @keyframes luckyFadeUp {
            from { opacity: 0; transform: translateY(12px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes luckyFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-7px); }
          }
          @keyframes luckyPulse {
            0%, 100% { transform: scale(1); opacity: .72; }
            50% { transform: scale(1.08); opacity: 1; }
          }

          .date-input-fix::-webkit-calendar-picker-indicator {
            display: block !important;
            opacity: 0;
            position: absolute;
            right: 0;
            top: 0;
            width: 44px;
            height: 100%;
            cursor: pointer;
            -webkit-appearance: auto !important;
          }
        `}
      </style>

      <div className="pointer-events-none absolute -right-12 top-4 h-56 w-56 rounded-full bg-[#FFE2C2]/80 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-10 h-64 w-64 rounded-full bg-[#EAF4F5]/80 blur-3xl" />

      <section className="relative">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3" style={{ animation: "luckyFadeUp .35s ease-out both" }}>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFE2C2] text-[#EB6A00] shadow-sm shadow-[#EB6A00]/20">
              <PawIcon className="h-6 w-6" />
            </span>
            <div>
              <h1 className="text-xl font-black text-[#19323A] sm:text-2xl">Modulo de publicaciones</h1>
              <div className="mt-1.5 h-1 w-14 rounded-full bg-gradient-to-r from-[#EB6A00] to-[#C95200]" />
            </div>
          </div>
        </div>

        <div
          className="relative mb-5 overflow-hidden rounded-[18px] border border-[#F1D9BD] bg-[#FFFFFF] p-4 shadow-[0_10px_28px_rgba(201,82,0,0.10)] backdrop-blur sm:p-5"
          style={{ animation: "luckyFadeUp .45s ease-out both" }}
        >
          <div className="pointer-events-none absolute right-2 top-0 hidden text-[#FFF7EA] xl:block">
            <PawIcon className="h-28 w-28" />
          </div>

          <div className="relative flex flex-wrap items-start justify-between gap-4">
            <div>
              <h2 className="text-lg font-black text-[#19323A]">Modulo de publicaciones</h2>
              <p className="mt-1 text-xs font-semibold text-[#5F6B70]">Estructura base para gestionar contenido institucional.</p>
            </div>
          </div>

          <div className="relative mt-4 flex items-center gap-3 rounded-xl border border-[#C7EFD0] bg-[#ECFAEF] px-3 py-2.5 text-xs font-semibold text-[#2F7F3D]">
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#6FCF7D] bg-white text-[#2F7F3D]">
              {"\u2713"}
            </span>
            Eventos, campañas, noticias, convocatorias y contenido visible.
          </div>
        </div>

        <div className="grid gap-5 xl:grid-cols-[0.9fr_1.25fr]">
          <article
            className="relative rounded-[18px] border border-[#F1D9BD] bg-white/95 p-4 shadow-[0_10px_28px_rgba(201,82,0,0.10)] backdrop-blur sm:p-5"
            style={{ animation: "luckyFadeUp .55s ease-out both" }}
          >
            <div className="mb-4 flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div>
                  <h3 className="text-sm font-black text-[#19323A]">Publicación</h3>
                </div>
              </div>
              <span className="text-[#5E6245]" style={{ animation: "luckyPulse 2.5s ease-in-out infinite" }}>
                <PawIcon className="h-5 w-5" />
              </span>
            </div>

            <form className="space-y-3">
              <label className="block">
                <span className="mb-1.5 block text-xs font-black text-[#19323A]">Título</span>
                <div className="relative">
                  <input
                    type="text"
                    defaultValue="Campaña de esterilización"
                    className="h-10 w-full rounded-xl border border-[#F1D9BD] bg-white px-3 pr-10 text-xs font-semibold text-[#19323A] outline-none shadow-inner shadow-[#F7E5CF]"
                  />
                  <PawIcon className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8A969B]" />
                </div>
              </label>

              <label className="block">
                <span className="mb-1.5 block text-xs font-black text-[#19323A]">Slug</span>
                <input
                  type="text"
                  defaultValue="campana-de-esterilizacion"
                  className="h-10 w-full rounded-xl border border-[#F1D9BD] bg-white px-3 text-xs font-semibold text-[#19323A] outline-none shadow-inner shadow-[#F7E5CF]"
                />
              </label>

              <label className="block">
                <span className="mb-1.5 block text-xs font-black text-[#19323A]">Subtítulo</span>
                <input
                  type="text"
                  defaultValue="Ayúdanos a cuidar a más animales rescatados"
                  className="h-10 w-full rounded-xl border border-[#F1D9BD] bg-white px-3 text-xs font-semibold text-[#19323A] outline-none shadow-inner shadow-[#F7E5CF]"
                />
              </label>

              <div className="grid gap-3 sm:grid-cols-[1.35fr_.9fr]">
                <label className="block">
                  <span className="mb-1.5 block text-xs font-black text-[#19323A]">Tipo</span>
                  <select
                    value={selectedType}
                    onChange={(event) => setSelectedType(event.target.value as PublicationType)}
                    className="h-10 w-full rounded-xl border border-[#F1D9BD] bg-white px-3 text-xs font-semibold text-[#19323A] outline-none shadow-inner shadow-[#F7E5CF]"
                  >
                    {publicationTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-xs font-black text-[#19323A]">Estado</span>
                  <select
                    value={selectedStatus}
                    onChange={(event) => setSelectedStatus(event.target.value as PublicationStatus)}
                    className="h-10 w-full rounded-xl border border-[#F1D9BD] bg-white px-3 text-xs font-semibold text-[#19323A] outline-none shadow-inner shadow-[#F7E5CF]"
                  >
                    {publicationStatuses.map((status) => (
                      <option key={status.value} value={status.value}>
                        {status.label}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="grid gap-3 sm:grid-cols-[1.35fr_.9fr]">
                <label className="block">
                  <span className="mb-1.5 block text-xs font-black text-[#19323A]">Fecha del evento</span>
                  <div className="relative">
                    <input
                      ref={dateInputRef}
                      type="date"
                      value={selectedDate}
                      onChange={(event) => setSelectedDate(event.target.value)}
                      className="date-input-fix h-10 w-full rounded-xl border border-[#F1D9BD] bg-white px-3 pr-10 text-xs font-semibold text-[#19323A] outline-none shadow-inner shadow-[#F7E5CF]"
                    />
                    <button
                      type="button"
                      onClick={openDatePicker}
                      className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1 text-[#5F6B70] transition hover:bg-[#FFF7EA]"
                      aria-label="Abrir calendario"
                    >
                      <CalendarIcon />
                    </button>
                  </div>
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-xs font-black text-[#19323A]">Etiqueta de fecha</span>
                  <input
                    type="text"
                    defaultValue="Por definir"
                    className="h-10 w-full rounded-xl border border-[#F1D9BD] bg-white px-3 text-xs font-semibold text-[#19323A] outline-none shadow-inner shadow-[#F7E5CF]"
                  />
                </label>
              </div>

              <div className="grid gap-3 sm:grid-cols-[1.35fr_.9fr]">
                <label className="block">
                  <span className="mb-1.5 block text-xs font-black text-[#19323A]">Sección destacada</span>
                  <input
                    type="text"
                    defaultValue="campañas"
                    className="h-10 w-full rounded-xl border border-[#F1D9BD] bg-white px-3 text-xs font-semibold text-[#19323A] outline-none shadow-inner shadow-[#F7E5CF]"
                  />
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-xs font-black text-[#19323A]">Orden</span>
                  <input
                    type="number"
                    defaultValue={1}
                    className="h-10 w-full rounded-xl border border-[#F1D9BD] bg-white px-3 text-xs font-semibold text-[#19323A] outline-none shadow-inner shadow-[#F7E5CF]"
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-1.5 block text-xs font-black text-[#19323A]">Texto del botón</span>
                <input
                  type="text"
                  defaultValue="Ver más"
                  className="h-10 w-full rounded-xl border border-[#F1D9BD] bg-white px-3 text-xs font-semibold text-[#19323A] outline-none shadow-inner shadow-[#F7E5CF]"
                />
              </label>

              <label className="block">
                <span className="mb-1.5 block text-xs font-black text-[#19323A]">Descripción</span>
                <div className="relative">
                  <textarea
                    rows={3}
                    defaultValue="Detalle corto de la publicación para mostrar en tarjetas o listados."
                    className="w-full resize-none rounded-xl border border-[#F1D9BD] bg-white px-3 py-2.5 text-xs font-semibold text-[#8A969B] outline-none shadow-inner shadow-[#F7E5CF]"
                  />
                  <PawIcon className="absolute bottom-3 right-3 h-5 w-5 text-[#8A969B]" />
                </div>
              </label>

              <label className="block">
                <span className="mb-1.5 block text-xs font-black text-[#19323A]">Contenido</span>
                <textarea
                  rows={4}
                  defaultValue="Contenido completo de la publicación."
                  className="w-full resize-none rounded-xl border border-[#F1D9BD] bg-white px-3 py-2.5 text-xs font-semibold text-[#8A969B] outline-none shadow-inner shadow-[#F7E5CF]"
                />
              </label>

              <div className="grid gap-3 sm:grid-cols-2">
                <label className="flex items-center gap-2 rounded-xl border border-[#F1D9BD] bg-white px-3 py-2 text-xs font-black text-[#19323A] shadow-inner shadow-[#F7E5CF]">
                  <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-[#F1D9BD]" />
                  Activa
                </label>

                <label className="flex items-center gap-2 rounded-xl border border-[#F1D9BD] bg-white px-3 py-2 text-xs font-black text-[#19323A] shadow-inner shadow-[#F7E5CF]">
                  <input type="checkbox" className="h-4 w-4 rounded border-[#F1D9BD]" />
                  Destacada
                </label>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => handlePrototypeAction("Borrador")}
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-[#F1D9BD] bg-[#FFE2C2] px-4 text-xs font-bold text-[#19323A] shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F1D9BD]"
                >
                  <PawIcon className="h-4 w-4" />
                  Guardar borrador
                </button>
                <button
                  type="button"
                  onClick={() => handlePrototypeAction("Vista previa")}
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-[#F1D9BD] bg-[#FFF7EA] px-4 text-xs font-bold text-[#19323A] shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F1D9BD]"
                >
                  Vista previa
                </button>
              </div>

              <p className="flex items-center gap-2 text-[11px] font-semibold text-[#8A969B]">
                <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#F1D9BD]">i</span>
                {formMessage}
              </p>
            </form>
          </article>

          <article
            className="relative overflow-hidden rounded-[18px] border border-[#F1D9BD] bg-white/95 p-4 shadow-[0_10px_28px_rgba(201,82,0,0.10)] backdrop-blur sm:p-5"
            style={{ animation: "luckyFadeUp .65s ease-out both" }}
          >
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <h1 className="text-sm font-black text-[#19323A]">Publicaciones existentes</h1>
              <button
                type="button"
                onClick={() => handlePrototypeAction("Nueva publicación")}
                className="inline-flex h-9 items-center justify-center gap-2 rounded-lg bg-[#FFF7EA] px-4 text-xs font-bold text-[#19323A] ring-1 ring-[#F1D9BD] shadow-sm transition hover:bg-[#FFE2C2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F1D9BD]"
              >
                <span className="text-sm leading-none text-[#EB6A00]">+</span>
                Nueva publicación
              </button>
            </div>

            <div className="mb-5 grid gap-3 md:grid-cols-[1.35fr_.95fr_.95fr]">
              <label className="relative block">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#8A969B]">
                  <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path
                      d="M3.5 8.75a5.25 5.25 0 1 1 9.38 3.24l3.06 3.07a.75.75 0 0 1-1.06 1.06l-3.07-3.06A5.25 5.25 0 0 1 3.5 8.75Z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="Buscar publicaciones..."
                  className="h-9 w-full rounded-lg border border-[#F1D9BD] bg-white pl-9 pr-3 text-[11px] font-semibold text-[#5F6B70] outline-none placeholder:text-[#8A969B]"
                />
              </label>

              <select className="h-9 rounded-lg border border-[#F1D9BD] bg-white px-3 text-[11px] font-semibold text-[#5F6B70] outline-none">
                <option>Todos los tipos</option>
                {publicationTypes.map((type) => (
                  <option key={type.value}>{type.label}</option>
                ))}
              </select>

              <select className="h-9 rounded-lg border border-[#F1D9BD] bg-white px-3 text-[11px] font-semibold text-[#5F6B70] outline-none">
                <option>Todos los estados</option>
                {publicationStatuses.map((status) => (
                  <option key={status.value}>{status.label}</option>
                ))}
              </select>
            </div>

            <div className="overflow-hidden rounded-xl border border-[#F1D9BD] bg-white">
              <div className="hidden grid-cols-[1.8fr_.85fr_.9fr_.9fr_96px] bg-[#FFF7EA] px-3 py-3 text-xs font-black text-[#19323A] sm:grid">
                <span>Título</span>
                <span>Tipo</span>
                <span>Fecha</span>
                <span>Estado</span>
                <span className="text-right">Acciones</span>
              </div>

              {samplePublications.map((item) => {
                const typeConfig = getTypeConfig(item.type);

                return (
                  <div
                    key={item.slug}
                    className="grid gap-3 border-t border-[#F7E5CF] px-3 py-3 sm:grid-cols-[1.8fr_.85fr_.9fr_.9fr_96px] sm:items-center"
                  >
                    <div className="flex items-center">
                      <p className="text-xs font-black text-[#19323A]">{item.title}</p>
                    </div>
                    <span className={`inline-flex w-max rounded-lg px-2.5 py-1 text-[11px] font-black ring-1 ${typeConfig.className}`}>
                      {typeConfig.label}
                    </span>
                    <span className="text-xs font-semibold text-[#5F6B70]">{item.date_label || item.event_date || "Por definir"}</span>
                    <span className="inline-flex w-max items-center gap-2 rounded-lg bg-[#FFF4DF] px-2.5 py-1 text-[11px] font-black text-[#C95200] ring-1 ring-[#F2B84B]/40">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#F2B84B]" />
                      {getStatusLabel(item.status)}
                    </span>
                    <div className="flex justify-start gap-2 sm:justify-end">
                      <button
                        type="button"
                        onClick={() => handlePrototypeAction(`Editar ${item.title}`)}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#EAF4F5] text-[#19323A] ring-1 ring-[#BFD8DB]"
                      >
                        <EditIcon />
                      </button>
                      <button
                        type="button"
                        onClick={() => handlePrototypeAction(`Eliminar ${item.title}`)}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#FDECEB] text-[#E86F61] ring-1 ring-[#F8C9C4]"
                      >
                        <TrashIcon />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-[#F7E5CF] pt-4">
              <p className="text-[11px] font-semibold text-[#5F6B70]">Mostrando 1 a 3 de 3 publicaciones</p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[#F1D9BD] bg-white text-[#8A969B]"
                >
                  ‹
                </button>
                <button
                  type="button"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#EB6A00] text-xs font-black text-white shadow-sm shadow-[#EB6A00]/30"
                >
                  1
                </button>
                <button
                  type="button"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[#F1D9BD] bg-white text-[#8A969B]"
                >
                  ›
                </button>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}