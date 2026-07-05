import { useState } from "react";
import PageMeta from "../components/common/PageMeta";

type DonationStatus = "Pendiente" | "Asignado" | "En evaluacion";

type DonationItem = {
  volunteer: string;
  area: "Logistica" | "Difusion" | "Eventos" | "Rescate";
  availability: string;
  status: DonationStatus;
  tone: string;
};

const sampleDonations: DonationItem[] = [
  {
    volunteer: "Maria Lopez",
    area: "Eventos",
    availability: "Sabado 9am-1pm",
    status: "Asignado",
    tone: "bg-[#E9F7ED] text-[#2E8B57] ring-[#CBEBD5]",
  },
  {
    volunteer: "Carlos Rojas",
    area: "Difusion",
    availability: "Noches entre semana",
    status: "Pendiente",
    tone: "bg-[#FFF4DF] text-[#C67A00] ring-[#F5DDB4]",
  },
  {
    volunteer: "Ana Torres",
    area: "Logistica",
    availability: "Domingo completo",
    status: "En evaluacion",
    tone: "bg-[#FDECEB] text-[#E86F61] ring-[#F8C9C4]",
  },
];

function CoinIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <ellipse cx="12" cy="6.5" rx="7" ry="3.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M5 6.5v8c0 1.93 3.13 3.5 7 3.5s7-1.57 7-3.5v-8" stroke="currentColor" strokeWidth="1.8" />
      <path d="M5 10.5c0 1.93 3.13 3.5 7 3.5s7-1.57 7-3.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export default function Donations() {
  const [statusFilter, setStatusFilter] = useState<"Todos" | DonationStatus>("Todos");

  const filtered = sampleDonations.filter((item) => statusFilter === "Todos" || item.status === statusFilter);

  return (
    <div className="relative min-h-[calc(100vh-108px)] overflow-hidden pb-4">
      <PageMeta title="Modulo de voluntariado | Fundacion Lucky" description="Gestion de voluntariado y participacion comunitaria" />

      <div className="pointer-events-none absolute -right-12 top-4 h-56 w-56 rounded-full bg-[#FFF4DF]/80 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-10 h-64 w-64 rounded-full bg-[#EAF2FF]/80 blur-3xl" />

      <section className="relative">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF4DF] text-[#C67A00] shadow-sm shadow-[#C67A00]/20">
              <CoinIcon />
            </span>
            <div>
              <h1 className="text-xl font-black text-[#19323A] sm:text-2xl">Modulo de voluntariado</h1>
              <div className="mt-1.5 h-1 w-14 rounded-full bg-gradient-to-r from-[#EB6A00] to-[#C67A00]" />
            </div>
          </div>
        </div>

        <div className="relative mb-5 overflow-hidden rounded-[18px] border border-[#F1D9BD] bg-white p-4 shadow-[0_10px_28px_rgba(201,82,0,0.10)] sm:p-5">
          <div className="relative flex flex-wrap items-start justify-between gap-4">
            <div>
              <h2 className="text-lg font-black text-[#19323A]">Modulo de voluntariado</h2>
              <p className="mt-1 text-xs font-semibold text-[#5F6B70]">
                Gestiona participacion de voluntarios, turnos y seguimiento de actividades comunitarias.
              </p>
            </div>
          </div>

          <div className="relative mt-4 flex items-center gap-3 rounded-xl border border-[#CBEBD5] bg-[#E9F7ED] px-3 py-2.5 text-xs font-semibold text-[#2E8B57]">
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#6FCF7D] bg-white text-[#2E8B57]">✓</span>
            Registro y trazabilidad de voluntarios para fortalecer la operacion institucional.
          </div>
        </div>

        <div className="grid gap-5 xl:grid-cols-[0.95fr_1.2fr]">
          <article className="rounded-[18px] border border-[#F1D9BD] bg-white p-4 shadow-[0_10px_28px_rgba(201,82,0,0.10)] sm:p-5">
            <h3 className="mb-4 text-sm font-black text-[#19323A]">Registrar voluntario</h3>

            <form className="space-y-3">
              <label className="block">
                <span className="mb-1.5 block text-xs font-black text-[#19323A]">Voluntario</span>
                <input type="text" defaultValue="Nuevo voluntario" className="h-10 w-full rounded-xl border border-[#F1D9BD] bg-white px-3 text-xs font-semibold text-[#19323A] outline-none" />
              </label>

              <label className="block">
                <span className="mb-1.5 block text-xs font-black text-[#19323A]">Telefono</span>
                <input type="tel" defaultValue="+51 999 888 777" className="h-10 w-full rounded-xl border border-[#F1D9BD] bg-white px-3 text-xs font-semibold text-[#19323A] outline-none" />
              </label>

              <div className="grid gap-3 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-xs font-black text-[#19323A]">Tipo de apoyo</span>
                  <select className="h-10 w-full rounded-xl border border-[#F1D9BD] bg-white px-3 text-xs font-semibold text-[#19323A] outline-none">
                    <option>Logistica</option>
                    <option>Difusion</option>
                    <option>Atencion en eventos</option>
                    <option>Rescate y apoyo</option>
                  </select>
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-xs font-black text-[#19323A]">Disponibilidad</span>
                  <select className="h-10 w-full rounded-xl border border-[#F1D9BD] bg-white px-3 text-xs font-semibold text-[#19323A] outline-none">
                    <option>Fines de semana</option>
                    <option>Noches entre semana</option>
                    <option>Mananas de lunes a viernes</option>
                    <option>Disponibilidad flexible</option>
                  </select>
                </label>
              </div>

              <label className="block">
                <span className="mb-1.5 block text-xs font-black text-[#19323A]">Detalle</span>
                <textarea rows={4} placeholder="Detalle de participacion del voluntario..." className="w-full resize-none rounded-xl border border-[#F1D9BD] bg-white px-3 py-2.5 text-xs font-semibold text-[#8A969B] outline-none" />
              </label>

              <button type="button" className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-[#EB6A00] px-4 text-xs font-bold text-white shadow-sm shadow-[#EB6A00]/30">
                Guardar voluntario
              </button>
            </form>
          </article>

          <article className="rounded-[18px] border border-[#F1D9BD] bg-white p-4 shadow-[0_10px_28px_rgba(201,82,0,0.10)] sm:p-5">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-sm font-black text-[#19323A]">Historial de voluntariado</h3>
              <select
                value={statusFilter}
                onChange={(event) => setStatusFilter(event.target.value as "Todos" | DonationStatus)}
                className="h-9 rounded-lg border border-[#F1D9BD] bg-[#FFF7EA] px-3 text-[11px] font-semibold text-[#5F6B70] outline-none"
              >
                <option value="Todos">Todos</option>
                <option value="Asignado">Asignado</option>
                <option value="Pendiente">Pendiente</option>
                <option value="En evaluacion">En evaluacion</option>
              </select>
            </div>

            <div className="overflow-hidden rounded-xl border border-[#F1D9BD] bg-white">
              <div className="hidden grid-cols-[1.2fr_.9fr_.9fr_.9fr] bg-[#FFF7EA] px-3 py-3 text-xs font-black text-[#19323A] sm:grid">
                <span>Voluntario</span>
                <span>Area</span>
                <span>Disponibilidad</span>
                <span>Estado</span>
              </div>

              {filtered.map((item) => (
                <div key={item.volunteer} className="grid gap-3 border-t border-[#F7E5CF] px-3 py-3 sm:grid-cols-[1.2fr_.9fr_.9fr_.9fr] sm:items-center">
                  <p className="text-xs font-black text-[#19323A]">{item.volunteer}</p>
                  <p className="text-xs font-semibold text-[#5F6B70]">{item.area}</p>
                  <p className="text-xs font-semibold text-[#5F6B70]">{item.availability}</p>
                  <span className={`inline-flex w-max rounded-lg px-2.5 py-1 text-[11px] font-black ring-1 ${item.tone}`}>{item.status}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-[#CBEBD5] bg-[#E9F7ED] p-3">
                <p className="text-[11px] font-bold text-[#2E8B57]">Asignados</p>
                <p className="mt-1 text-lg font-black text-[#19323A]">28</p>
              </div>
              <div className="rounded-xl border border-[#F5DDB4] bg-[#FFF4DF] p-3">
                <p className="text-[11px] font-bold text-[#C67A00]">Pendientes</p>
                <p className="mt-1 text-lg font-black text-[#19323A]">7</p>
              </div>
              <div className="rounded-xl border border-[#F8C9C4] bg-[#FDECEB] p-3">
                <p className="text-[11px] font-bold text-[#E86F61]">En evaluacion</p>
                <p className="mt-1 text-lg font-black text-[#19323A]">2</p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
