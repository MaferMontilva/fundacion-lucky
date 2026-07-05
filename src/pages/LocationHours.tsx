import { useMemo, useState } from "react";
import PageMeta from "../components/common/PageMeta";

type BranchStatus = "Abierto" | "Cerrado" | "Atencion limitada";

type Branch = {
  name: string;
  district: string;
  schedule: string;
  status: BranchStatus;
  tone: string;
};

const sampleBranches: Branch[] = [
  {
    name: "Sede Principal Lucky",
    district: "Miraflores",
    schedule: "Lun-Vie 09:00-18:00 / Sab 09:00-13:00",
    status: "Abierto",
    tone: "bg-[#E9F7ED] text-[#2E8B57] ring-[#CBEBD5]",
  },
  {
    name: "Punto de Adopciones Norte",
    district: "Los Olivos",
    schedule: "Mar-Dom 10:00-17:00",
    status: "Atencion limitada",
    tone: "bg-[#FFF4DF] text-[#C67A00] ring-[#F5DDB4]",
  },
  {
    name: "Centro Veterinario Aliado",
    district: "Surco",
    schedule: "Lun-Sab 08:30-16:30",
    status: "Cerrado",
    tone: "bg-[#FDECEB] text-[#E86F61] ring-[#F8C9C4]",
  },
];

const weeklySchedule = [
  { day: "Lunes", hours: "09:00 - 18:00", status: "Abierto" },
  { day: "Martes", hours: "09:00 - 18:00", status: "Abierto" },
  { day: "Miercoles", hours: "09:00 - 18:00", status: "Abierto" },
  { day: "Jueves", hours: "09:00 - 18:00", status: "Abierto" },
  { day: "Viernes", hours: "09:00 - 18:00", status: "Abierto" },
  { day: "Sabado", hours: "09:00 - 13:00", status: "Atencion limitada" },
  { day: "Domingo", hours: "Cerrado", status: "Cerrado" },
];

function PinIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 21s7-6.12 7-11a7 7 0 1 0-14 0c0 4.88 7 11 7 11Z" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="10" r="2.8" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export default function LocationHours() {
  const [statusFilter, setStatusFilter] = useState<"Todos" | BranchStatus>("Todos");
  const [scheduleMessage, setScheduleMessage] = useState("");
  const [mapEmbedUrl, setMapEmbedUrl] = useState("https://maps.google.com/maps?q=Miraflores%20Lima&t=&z=14&ie=UTF8&iwloc=&output=embed");

  const filteredBranches = useMemo(
    () => sampleBranches.filter((item) => statusFilter === "Todos" || item.status === statusFilter),
    [statusFilter],
  );

  return (
    <div className="relative min-h-[calc(100vh-108px)] overflow-hidden pb-4">
      <PageMeta title="Ubicacion y horarios | Fundacion Lucky" description="Gestion visual de sedes, atencion y horarios de Fundacion Lucky" />

      <div className="pointer-events-none absolute -right-12 top-2 h-56 w-56 rounded-full bg-[#EAF2FF]/80 blur-3xl" />
      <div className="pointer-events-none absolute -left-12 bottom-0 h-56 w-56 rounded-full bg-[#FFF4DF]/80 blur-3xl" />

      <section className="relative">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF2FF] text-[#3B5EA7] shadow-sm shadow-[#3B5EA7]/20">
              <PinIcon />
            </span>
            <div>
              <h1 className="text-xl font-black text-[#19323A] sm:text-2xl">Ubicacion y horarios</h1>
              <div className="mt-1.5 h-1 w-16 rounded-full bg-gradient-to-r from-[#3B5EA7] to-[#EB6A00]" />
            </div>
          </div>
        </div>

        <div className="mb-5 overflow-hidden rounded-[18px] border border-[#F1D9BD] bg-white p-4 shadow-[0_10px_28px_rgba(59,94,167,0.12)] sm:p-5">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h2 className="text-lg font-black text-[#19323A]">Gestion de puntos de atencion</h2>
              <p className="mt-1 text-xs font-semibold text-[#5F6B70]">
                Administra horarios, cobertura de atencion y ubicaciones visibles para la comunidad.
              </p>
            </div>
          </div>

          <div className="mt-4 rounded-xl border border-[#C9DCF8] bg-[#EAF2FF] px-3 py-2.5 text-xs font-semibold text-[#3B5EA7]">
            Actualiza ubicaciones y turnos para reducir tiempos de respuesta en adopciones y consultas.
          </div>
        </div>

        <div className="grid gap-5 xl:grid-cols-[0.95fr_1.2fr]">
          <article className="rounded-[18px] border border-[#F1D9BD] bg-white p-4 shadow-[0_10px_28px_rgba(59,94,167,0.12)] sm:p-5">
            <h3 className="mb-4 text-sm font-black text-[#19323A]">Registrar sede o punto de atencion</h3>

            <form
              className="space-y-3"
              onSubmit={(event) => {
                event.preventDefault();
                setScheduleMessage("Horario guardado en modo visual. No se sincronizo con backend.");
              }}
            >
              <label className="block">
                <span className="mb-1.5 block text-xs font-black text-[#19323A]">Nombre de sede</span>
                <input
                  type="text"
                  placeholder="Ej. Sede Principal Lucky"
                  className="h-10 w-full rounded-xl border border-[#F1D9BD] bg-white px-3 text-xs font-semibold text-[#19323A] outline-none"
                />
              </label>

              <label className="block">
                <span className="mb-1.5 block text-xs font-black text-[#19323A]">Distrito</span>
                <input
                  type="text"
                  placeholder="Ej. Miraflores"
                  className="h-10 w-full rounded-xl border border-[#F1D9BD] bg-white px-3 text-xs font-semibold text-[#19323A] outline-none"
                />
              </label>

              <div className="grid gap-3 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-xs font-black text-[#19323A]">Hora inicio</span>
                  <input
                    type="time"
                    defaultValue="09:00"
                    className="h-10 w-full rounded-xl border border-[#F1D9BD] bg-white px-3 text-xs font-semibold text-[#19323A] outline-none"
                  />
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-xs font-black text-[#19323A]">Hora fin</span>
                  <input
                    type="time"
                    defaultValue="18:00"
                    className="h-10 w-full rounded-xl border border-[#F1D9BD] bg-white px-3 text-xs font-semibold text-[#19323A] outline-none"
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-1.5 block text-xs font-black text-[#19323A]">Estado</span>
                <select className="h-10 w-full rounded-xl border border-[#F1D9BD] bg-white px-3 text-xs font-semibold text-[#19323A] outline-none">
                  <option>Abierto</option>
                  <option>Atencion limitada</option>
                  <option>Cerrado</option>
                </select>
              </label>

              <button
                type="submit"
                className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-[#3B5EA7] px-4 text-xs font-bold text-white shadow-sm shadow-[#3B5EA7]/30"
              >
                Guardar horario
              </button>

              {scheduleMessage && (
                <p className="rounded-lg border border-[#CBEBD5] bg-[#E9F7ED] px-3 py-2 text-xs font-semibold text-[#2E8B57]">
                  {scheduleMessage}
                </p>
              )}
            </form>
          </article>

          <article className="rounded-[18px] border border-[#F1D9BD] bg-white p-4 shadow-[0_10px_28px_rgba(59,94,167,0.12)] sm:p-5">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-sm font-black text-[#19323A]">Sedes registradas</h3>
              <select
                value={statusFilter}
                onChange={(event) => setStatusFilter(event.target.value as "Todos" | BranchStatus)}
                className="h-9 rounded-lg border border-[#F1D9BD] bg-[#FFF7EA] px-3 text-[11px] font-semibold text-[#5F6B70] outline-none"
              >
                <option value="Todos">Todos</option>
                <option value="Abierto">Abierto</option>
                <option value="Atencion limitada">Atencion limitada</option>
                <option value="Cerrado">Cerrado</option>
              </select>
            </div>

            <div className="overflow-hidden rounded-xl border border-[#F1D9BD] bg-white">
              <div className="hidden grid-cols-[1.1fr_.7fr_1.2fr_.9fr] bg-[#FFF7EA] px-3 py-3 text-xs font-black text-[#19323A] sm:grid">
                <span>Sede</span>
                <span>Distrito</span>
                <span>Horario</span>
                <span>Estado</span>
              </div>

              {filteredBranches.map((item) => (
                <div key={item.name} className="grid gap-3 border-t border-[#F7E5CF] px-3 py-3 sm:grid-cols-[1.1fr_.7fr_1.2fr_.9fr] sm:items-center">
                  <p className="text-xs font-black text-[#19323A]">{item.name}</p>
                  <p className="text-xs font-semibold text-[#5F6B70]">{item.district}</p>
                  <p className="text-xs font-semibold text-[#5F6B70]">{item.schedule}</p>
                  <span className={`inline-flex w-max rounded-lg px-2.5 py-1 text-[11px] font-black ring-1 ${item.tone}`}>{item.status}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-xl border border-[#F1D9BD] bg-[#FFF7EA] p-3">
              <p className="text-[11px] font-black uppercase tracking-wide text-[#C95200]">Ubicacion en mapa</p>

              <label className="mt-2 block">
                <span className="mb-1.5 block text-[11px] font-black text-[#19323A]">URL embed de Google Maps</span>
                <input
                  type="url"
                  value={mapEmbedUrl}
                  onChange={(event) => setMapEmbedUrl(event.target.value)}
                  className="h-9 w-full rounded-lg border border-[#F1D9BD] bg-white px-2.5 text-xs font-semibold text-[#19323A] outline-none"
                />
              </label>

              <div className="mt-2 overflow-hidden rounded-lg border border-[#C9DCF8] bg-[#EAF2FF]">
                <div className="h-[220px] w-full">
                  <iframe
                    title="Mapa de ubicacion Fundacion Lucky"
                    src={mapEmbedUrl}
                    className="h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-[#F1D9BD] bg-white p-3">
              <p className="text-[11px] font-black uppercase tracking-wide text-[#C95200]">Horario por dia</p>
              <div className="mt-2 space-y-2">
                {weeklySchedule.map((item) => (
                  <div key={item.day} className="grid grid-cols-[.8fr_1fr_.9fr] items-center gap-2 rounded-lg border border-[#F1D9BD] px-2.5 py-2 text-xs">
                    <p className="font-black text-[#19323A]">{item.day}</p>
                    <p className="font-semibold text-[#5F6B70]">{item.hours}</p>
                    <span
                      className={`inline-flex w-max rounded-lg px-2 py-1 text-[11px] font-black ${
                        item.status === "Abierto"
                          ? "bg-[#E9F7ED] text-[#2E8B57]"
                          : item.status === "Atencion limitada"
                            ? "bg-[#FFF4DF] text-[#C67A00]"
                            : "bg-[#FDECEB] text-[#E86F61]"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
