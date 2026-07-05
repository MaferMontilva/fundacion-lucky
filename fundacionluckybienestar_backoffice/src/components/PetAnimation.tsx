export default function PetAnimation() {
  return (
    <div className="relative rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950/80">
      <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-100 text-cyan-700 shadow-md shadow-cyan-200/60 animate-bounce">
        🐾
      </div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
            Fundación Lucky
          </h3>
          <p className="mt-1 max-w-xl text-sm text-slate-500 dark:text-slate-400">
            Un panel para seguir adopciones, donaciones y voluntariado con estilo
            Lucky.
          </p>
        </div>
        <span className="inline-flex items-center rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-700 dark:bg-cyan-900/20 dark:text-cyan-300">
          Backoffice
        </span>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-[1.2fr_1fr]">
        <div className="rounded-3xl bg-slate-950 p-5 text-white shadow-lg">
          <h4 className="text-lg font-semibold">Mascotas en adopción</h4>
          <p className="mt-2 text-sm text-slate-300">
            Controla el estado de cada mascota, las solicitudes de adopción y el
            impacto de las donaciones desde una vista clara.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-3xl bg-slate-800/90 p-4">
              <p className="text-sm text-slate-400">Adopciones</p>
              <p className="mt-2 text-2xl font-semibold text-white">15</p>
            </div>
            <div className="rounded-3xl bg-slate-800/90 p-4">
              <p className="text-sm text-slate-400">Donaciones</p>
              <p className="mt-2 text-2xl font-semibold text-white">$2,450</p>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl bg-slate-50 p-4 dark:bg-slate-900">
          <div className="rounded-3xl bg-gradient-to-br from-cyan-50 via-white to-pink-50 p-4 shadow-inner">
            <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-slate-700">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700">🐶</span>
              Mascota animada
            </div>
            <div className="relative mx-auto h-[300px] w-full max-w-[420px] overflow-hidden rounded-3xl bg-slate-100 p-3 shadow-inner dark:bg-slate-900">
              <div className="absolute left-4 top-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-rose-100 text-rose-600 animate-ping">
                ❤️
              </div>
              <svg viewBox="0 0 320 240" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="130" r="50" fill="#FDE68A" />
                <circle cx="220" cy="110" r="40" fill="#FECACA" />
                <path d="M110 180c-20 0-30-16-30-34s10-34 30-34 30 16 30 34-10 34-30 34Z" fill="#FCD34D" />
                <path d="M216 150c-14 0-22-12-22-26s8-26 22-26 22 12 22 26-8 26-22 26Z" fill="#FBCFE8" />
                <circle cx="82" cy="118" r="8" fill="#0F172A" />
                <circle cx="118" cy="118" r="8" fill="#0F172A" />
                <path d="M84 142c8 6 18 6 26 0" stroke="#0F172A" strokeWidth="4" strokeLinecap="round" />
                <circle cx="202" cy="100" r="7" fill="#0F172A" />
                <circle cx="236" cy="100" r="7" fill="#0F172A" />
                <path d="M202 124c6 4 14 4 20 0" stroke="#0F172A" strokeWidth="4" strokeLinecap="round" />
                <path d="M128 72c0-10 8-18 18-18s18 8 18 18v10" stroke="#0F172A" strokeWidth="5" strokeLinecap="round" />
                <path d="M218 68c12 0 20 10 20 22v8" stroke="#0F172A" strokeWidth="5" strokeLinecap="round" />
                <path d="M100 160c10 10 24 10 34 0" stroke="#0F172A" strokeWidth="4" strokeLinecap="round" />
                <path d="M204 145c10 8 20 8 28 0" stroke="#0F172A" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
