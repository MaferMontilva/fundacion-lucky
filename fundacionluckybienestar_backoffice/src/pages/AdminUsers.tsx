import { useMemo, useState } from "react";
import PageMeta from "../components/common/PageMeta";

type UserStatus = "Activo" | "Suspendido" | "Pendiente";

type AdminUser = {
  name: string;
  email: string;
  role: string;
  status: UserStatus;
  tone: string;
};

const sampleUsers: AdminUser[] = [
  {
    name: "Andrea Gutierrez",
    email: "andrea@lucky.org",
    role: "Administrador",
    status: "Activo",
    tone: "bg-[#E9F7ED] text-[#2E8B57] ring-[#CBEBD5]",
  },
  {
    name: "Carlos Rojas",
    email: "carlos@lucky.org",
    role: "Operador",
    status: "Pendiente",
    tone: "bg-[#FFF4DF] text-[#C67A00] ring-[#F5DDB4]",
  },
  {
    name: "Mariana Flores",
    email: "mariana@lucky.org",
    role: "Consulta",
    status: "Suspendido",
    tone: "bg-[#FDECEB] text-[#E86F61] ring-[#F8C9C4]",
  },
];

function UsersIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M17 20v-1.5a4.5 4.5 0 0 0-4.5-4.5h-1A4.5 4.5 0 0 0 7 18.5V20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="12" cy="7.5" r="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M19 20v-1a3.5 3.5 0 0 0-2.6-3.38" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M5 20v-1a3.5 3.5 0 0 1 2.6-3.38" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function AdminUsers() {
  const [statusFilter, setStatusFilter] = useState<"Todos" | UserStatus>("Todos");
  const filteredUsers = useMemo(
    () => sampleUsers.filter((user) => statusFilter === "Todos" || user.status === statusFilter),
    [statusFilter],
  );

  return (
    <div className="relative min-h-[calc(100vh-108px)] overflow-hidden pb-4">
      <PageMeta title="Usuarios admin | Fundacion Lucky" description="Gestion de usuarios y accesos administrativos" />

      <div className="pointer-events-none absolute -right-12 top-6 h-56 w-56 rounded-full bg-[#EAF2FF]/80 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-10 h-56 w-56 rounded-full bg-[#FFF4DF]/80 blur-3xl" />

      <section className="relative">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF2FF] text-[#3B5EA7] shadow-sm shadow-[#3B5EA7]/20">
              <UsersIcon />
            </span>
            <div>
              <h1 className="text-xl font-black text-[#19323A] sm:text-2xl">Usuarios</h1>
              <div className="mt-1.5 h-1 w-14 rounded-full bg-gradient-to-r from-[#3B5EA7] to-[#EB6A00]" />
            </div>
          </div>
        </div>

        <div className="mb-5 rounded-[18px] border border-[#F1D9BD] bg-white p-4 shadow-[0_10px_28px_rgba(59,94,167,0.12)] sm:p-5">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <span className="inline-flex rounded-full bg-[#EAF2FF] px-3 py-1 text-xs font-black text-[#3B5EA7]">ADMIN</span>
              <h2 className="mt-3 text-lg font-black text-[#19323A]">Control de acceso y equipos</h2>
              <p className="mt-1 text-xs font-semibold text-[#5F6B70]">
                Gestiona cuentas internas para operar publicaciones, adopciones, donaciones y soporte.
              </p>
            </div>
            <div className="rounded-xl border border-[#F1D9BD] bg-[#FFF7EA] px-4 py-3 shadow-sm">
              <p className="text-[11px] font-black uppercase tracking-wide text-[#C95200]">Matriz</p>
              <p className="mt-1 text-sm font-black text-[#19323A]">Publicaciones, adopciones, donaciones, contactos y ubicacion</p>
            </div>
          </div>
        </div>

        <div className="grid gap-5 xl:grid-cols-[0.9fr_1.25fr]">
          <article className="rounded-[18px] border border-[#F1D9BD] bg-white p-4 shadow-[0_10px_28px_rgba(59,94,167,0.12)] sm:p-5">
            <h3 className="mb-4 text-sm font-black text-[#19323A]">Crear usuario</h3>

            <form className="space-y-3">
              <label className="block">
                <span className="mb-1.5 block text-xs font-black text-[#19323A]">Nombre completo</span>
                <input type="text" placeholder="Ej. Andrea Gutierrez" className="h-10 w-full rounded-xl border border-[#F1D9BD] bg-white px-3 text-xs font-semibold text-[#19323A] outline-none" />
              </label>

              <label className="block">
                <span className="mb-1.5 block text-xs font-black text-[#19323A]">Correo</span>
                <input type="email" placeholder="andrea@lucky.org" className="h-10 w-full rounded-xl border border-[#F1D9BD] bg-white px-3 text-xs font-semibold text-[#19323A] outline-none" />
              </label>

              <div className="grid gap-3 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-xs font-black text-[#19323A]">Rol</span>
                  <select className="h-10 w-full rounded-xl border border-[#F1D9BD] bg-white px-3 text-xs font-semibold text-[#19323A] outline-none">
                    <option>Administrador</option>
                    <option>Operador</option>
                    <option>Consulta</option>
                  </select>
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-xs font-black text-[#19323A]">Estado</span>
                  <select className="h-10 w-full rounded-xl border border-[#F1D9BD] bg-white px-3 text-xs font-semibold text-[#19323A] outline-none">
                    <option>Activo</option>
                    <option>Pendiente</option>
                    <option>Suspendido</option>
                  </select>
                </label>
              </div>

              <button type="button" className="inline-flex h-10 items-center justify-center rounded-xl bg-[#3B5EA7] px-4 text-xs font-bold text-white shadow-sm shadow-[#3B5EA7]/30">
                Guardar usuario
              </button>
            </form>
          </article>

          <article className="rounded-[18px] border border-[#F1D9BD] bg-white p-4 shadow-[0_10px_28px_rgba(59,94,167,0.12)] sm:p-5">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-sm font-black text-[#19323A]">Usuarios registrados</h3>
              <select
                value={statusFilter}
                onChange={(event) => setStatusFilter(event.target.value as "Todos" | UserStatus)}
                className="h-9 rounded-lg border border-[#F1D9BD] bg-[#FFF7EA] px-3 text-[11px] font-semibold text-[#5F6B70] outline-none"
              >
                <option value="Todos">Todos</option>
                <option value="Activo">Activo</option>
                <option value="Pendiente">Pendiente</option>
                <option value="Suspendido">Suspendido</option>
              </select>
            </div>

            <div className="overflow-hidden rounded-xl border border-[#F1D9BD] bg-white">
              <div className="hidden grid-cols-[1fr_1.1fr_.9fr_.8fr] bg-[#FFF7EA] px-3 py-3 text-xs font-black text-[#19323A] sm:grid">
                <span>Usuario</span>
                <span>Email</span>
                <span>Rol</span>
                <span>Estado</span>
              </div>

              {filteredUsers.map((user) => (
                <div key={user.email} className="grid gap-3 border-t border-[#F7E5CF] px-3 py-3 sm:grid-cols-[1fr_1.1fr_.9fr_.8fr] sm:items-center">
                  <p className="text-xs font-black text-[#19323A]">{user.name}</p>
                  <p className="text-xs font-semibold text-[#5F6B70]">{user.email}</p>
                  <p className="text-xs font-semibold text-[#5F6B70]">{user.role}</p>
                  <span className={`inline-flex w-max rounded-lg px-2.5 py-1 text-[11px] font-black ring-1 ${user.tone}`}>{user.status}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-[#C9DCF8] bg-[#EAF2FF] p-3">
                <p className="text-[11px] font-bold text-[#3B5EA7]">Activos</p>
                <p className="mt-1 text-lg font-black text-[#19323A]">12</p>
              </div>
              <div className="rounded-xl border border-[#F5DDB4] bg-[#FFF4DF] p-3">
                <p className="text-[11px] font-bold text-[#C67A00]">Pendientes</p>
                <p className="mt-1 text-lg font-black text-[#19323A]">3</p>
              </div>
              <div className="rounded-xl border border-[#F8C9C4] bg-[#FDECEB] p-3">
                <p className="text-[11px] font-bold text-[#E86F61]">Suspendidos</p>
                <p className="mt-1 text-lg font-black text-[#19323A]">1</p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
