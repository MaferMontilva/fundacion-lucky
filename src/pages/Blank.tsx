import PageMeta from "../components/common/PageMeta";

export default function Blank() {
  const samplePublications = [
    {
      title: "Jornada de adopcion",
      type: "Evento",
      typeTone: "bg-violet-100 text-violet-700",
      status: "Borrador",
      icon: "calendar",
    },
    {
      title: "Campana de alimento",
      type: "Campana",
      typeTone: "bg-emerald-100 text-emerald-700",
      status: "Borrador",
      icon: "megaphone",
    },
  ] as const;

  return (
    <div className="relative overflow-hidden pb-8">
      <PageMeta
        title="Modulo de publicaciones | Fundacion Lucky"
        description="Vista visual del modulo de publicaciones para Fundacion Lucky"
      />

      <style>
        {`
          @keyframes pubFadeIn {
            from { opacity: 0; transform: translateY(16px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes pubFloat {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }
          @keyframes pubPulse {
            0%, 100% { transform: scale(1); opacity: .8; }
            50% { transform: scale(1.08); opacity: 1; }
          }
          @keyframes pubWiggle {
            0%, 100% { transform: rotate(0deg); }
            50% { transform: rotate(-4deg); }
          }
        `}
      </style>

      <div className="pointer-events-none absolute -right-24 -top-10 h-64 w-64 rounded-full bg-gradient-to-br from-rose-200 to-violet-200 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-16 right-8 h-72 w-72 rounded-full bg-gradient-to-br from-amber-200 via-orange-100 to-rose-100 blur-2xl" />
      <div className="pointer-events-none absolute left-6 top-[290px] hidden h-28 w-28 rounded-full border-2 border-dashed border-orange-300/70 lg:block" />
      <span
        className="pointer-events-none absolute left-20 top-[445px] hidden text-3xl text-rose-400 lg:block"
        style={{ animation: "pubPulse 2.8s ease-in-out infinite" }}
      >
        ♥
      </span>

      <section className="relative">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3" style={{ animation: "pubFadeIn .45s ease-out" }}>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-100 text-rose-500 shadow-sm shadow-rose-200/70">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M8.58 12.72c1.38-.2 2.06.79 2.7 1.49.31.34.55.51.72.51s.41-.17.72-.51c.64-.7 1.32-1.69 2.7-1.49 1.47.21 2.59 1.63 2.59 3.22 0 1.88-1.28 3.14-3.13 3.14-.78 0-1.52-.22-2.13-.5-.53-.24-.97-.44-1.25-.44s-.72.2-1.25.44c-.61.28-1.35.5-2.13.5-1.85 0-3.13-1.26-3.13-3.14 0-1.59 1.12-3.01 2.59-3.22Z"
                  fill="currentColor"
                />
                <path
                  d="M6.83 5.21c1.03-.13 2.01.87 2.19 2.23.18 1.36-.51 2.57-1.54 2.7-1.03.13-2.01-.87-2.19-2.23-.18-1.36.51-2.57 1.54-2.7Zm10.34 0c1.03.13 1.72 1.34 1.54 2.7-.18 1.36-1.16 2.36-2.19 2.23-1.03-.13-1.72-1.34-1.54-2.7.18-1.36 1.16-2.36 2.19-2.23ZM11.99 4c1.05 0 1.9 1.12 1.9 2.5S13.04 9 11.99 9s-1.9-1.12-1.9-2.5S10.94 4 11.99 4Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <div>
              <h1 className="text-2xl font-black text-[#3b1f2e] sm:text-[42px]">Modulo de publicaciones</h1>
              <div className="mt-1 h-[4px] w-14 rounded-full bg-gradient-to-r from-violet-400 to-rose-400" />
            </div>
          </div>

          <p className="text-sm font-medium text-gray-500">
            Inicio <span className="mx-2 text-gray-300">&gt;</span> Modulo de publicaciones
          </p>
        </div>

        <div
          className="mb-6 rounded-3xl border border-[#f4dbe2] bg-white/95 p-5 shadow-[0_14px_34px_rgba(152,67,101,0.12)] sm:p-7"
          style={{ animation: "pubFadeIn .65s ease-out" }}
        >
          <div className="flex flex-wrap justify-between gap-4">
            <div>
              <p className="mb-3 inline-flex rounded-full bg-violet-100 px-3 py-1 text-xs font-bold tracking-wide text-violet-700">
                M06
              </p>
              <h2 className="text-2xl font-black text-[#3b1f2e]">Modulo de publicaciones</h2>
              <p className="mt-1 text-sm text-gray-500">Eventos, campanas, rifas, cronogramas, noticias y actividades.</p>
            </div>
          </div>

          <div className="mt-5 flex items-center gap-3 rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-emerald-500 text-emerald-600">✓</span>
            <span>Crear contenido administrable para comunicar actividades de la fundacion.</span>
          </div>

          <span
            className="pointer-events-none absolute right-6 top-10 hidden text-[85px] text-[#f8eff4] xl:block"
            style={{ animation: "pubFloat 5s ease-in-out infinite" }}
          >
            🐾
          </span>
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          <article
            className="rounded-3xl border border-[#f4dbe2] bg-white/95 p-5 shadow-[0_14px_34px_rgba(152,67,101,0.12)] sm:p-6"
            style={{ animation: "pubFadeIn .85s ease-out" }}
          >
            <div className="mb-5 flex items-start justify-between gap-3">
              <div>
                <h3 className="text-2xl font-black text-[#3b1f2e]">Publicacion</h3>
                <p className="text-sm text-gray-500">Estructura base para crear noticias, eventos o campanas.</p>
              </div>
              <span className="text-2xl text-rose-300" style={{ animation: "pubPulse 2s ease-in-out infinite" }}>
                &#9825;
              </span>
            </div>

            <form className="space-y-4">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-[#4d2834]">Titulo</span>
                <input
                  type="text"
                  value="Esterilizacion"
                  readOnly
                  className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-700 outline-none"
                />
              </label>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-[#4d2834]">Tipo</span>
                  <select
                    disabled
                    className="h-12 w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-700 outline-none"
                  >
                    <option>Campana</option>
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-[#4d2834]">Fecha</span>
                  <input
                    type="text"
                    placeholder="dd/mm/aaaa"
                    readOnly
                    className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-400 outline-none"
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-[#4d2834]">Descripcion</span>
                <textarea
                  rows={5}
                  placeholder="Detalle de la publicacion..."
                  readOnly
                  className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-400 outline-none"
                />
              </label>

              <div className="flex flex-wrap gap-3 pt-1">
                <button
                  type="button"
                  disabled
                  className="inline-flex h-11 items-center justify-center rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 px-5 text-sm font-bold text-white shadow-md shadow-violet-300/70"
                >
                  🐾 Guardar borrador
                </button>
                <button
                  type="button"
                  disabled
                  className="inline-flex h-11 items-center justify-center rounded-xl border border-violet-200 bg-violet-50 px-5 text-sm font-bold text-violet-700 shadow-sm"
                >
                  👁 Vista previa
                </button>
              </div>

              <p className="text-xs text-gray-400">Prototipo sin conexion a backend. Los botones estan desactivados.</p>
            </form>
          </article>

          <article
            className="rounded-3xl border border-[#f4dbe2] bg-white/95 p-5 shadow-[0_14px_34px_rgba(152,67,101,0.12)] sm:p-6"
            style={{ animation: "pubFadeIn 1.05s ease-out" }}
          >
            <div className="mb-5 flex items-start justify-between gap-3">
              <div>
                <h3 className="text-2xl font-black text-[#3b1f2e]">Publicaciones de ejemplo</h3>
                <p className="text-sm text-gray-500">Datos de ejemplo para visualizar como quedara la administracion.</p>
              </div>
              <span className="text-2xl text-violet-300" style={{ animation: "pubWiggle 2.5s ease-in-out infinite" }}>
                &#10047;
              </span>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[#f1d9e1]">
              <div className="hidden grid-cols-[2fr_1fr_1fr_1fr_110px] bg-[#fff4f6] px-4 py-3 text-sm font-bold text-[#6b3d4b] sm:grid">
                <span>Titulo</span>
                <span>Tipo</span>
                <span>Fecha</span>
                <span>Estado</span>
                <span className="text-right">Acciones</span>
              </div>

              {samplePublications.map((item) => (
                <div
                  key={item.title}
                  className="grid gap-3 border-t border-[#f8e9ee] px-4 py-4 sm:grid-cols-[2fr_1fr_1fr_1fr_110px] sm:items-center"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-100 text-amber-600 shadow-sm shadow-amber-200">
                      {item.icon === "calendar" ? (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <rect x="3" y="5" width="18" height="16" rx="4" stroke="currentColor" strokeWidth="1.8" />
                          <path d="M8 3V7M16 3V7M3 10H21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                        </svg>
                      ) : (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path d="M4 11V4L14 10V20L4 14V11Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                          <path d="M14 10L20 7V17L14 20" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                    <p className="text-sm font-semibold text-[#4d2834]">{item.title}</p>
                  </div>

                  <span className={`inline-flex w-max rounded-full px-3 py-1 text-xs font-bold ${item.typeTone}`}>
                    {item.type}
                  </span>
                  <span className="text-sm text-gray-500">Por definir</span>
                  <span className="inline-flex w-max rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700">
                    {item.status}
                  </span>

                  <div className="flex justify-start gap-2 sm:justify-end">
                    <button
                      type="button"
                      disabled
                      className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-violet-100 bg-violet-50 text-violet-600"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path
                          d="M4 20H8L18.5 9.5C19.3284 8.67157 19.3284 7.32843 18.5 6.5C17.6716 5.67157 16.3284 5.67157 15.5 6.5L5 17V20Z"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        />
                      </svg>
                    </button>

                    <button
                      type="button"
                      disabled
                      className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-rose-100 bg-rose-50 text-rose-600"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M5 7H19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                        <path d="M9 7V5H15V7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                        <path d="M8 10V18M12 10V18M16 10V18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                        <path d="M6 7L7 20H17L18 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-gradient-to-r from-rose-50 via-violet-50 to-amber-50 p-4 text-center">
              <p className="text-sm font-semibold text-[#6b3d4b]">Panel visual listo. La conexion de datos se agregara en la siguiente fase.</p>
            </div>

            <div className="relative mt-6 overflow-hidden rounded-3xl border border-[#f4dbe2] bg-gradient-to-br from-[#fff5f8] via-[#fff9f2] to-[#f6fbff] px-4 py-4">
              <span
                className="pointer-events-none absolute left-3 top-2 text-2xl text-violet-300"
                style={{ animation: "pubPulse 2.6s ease-in-out infinite" }}
              >
                💜
              </span>
              <span className="pointer-events-none absolute right-4 top-4 text-3xl text-amber-300">🐾</span>
              <div className="mx-auto flex max-w-[380px] items-end justify-center gap-4">
                <div style={{ animation: "pubFloat 4.5s ease-in-out infinite" }}>
                  <span className="text-[88px] leading-none">🐶</span>
                </div>
                <div style={{ animation: "pubFloat 4s ease-in-out infinite .4s" }}>
                  <span className="text-[86px] leading-none">🐱</span>
                </div>
              </div>
            </div>
          </article>
        </div>

        <span className="pointer-events-none absolute -right-2 bottom-3 hidden text-3xl text-amber-300 xl:block">🐾</span>
      </section>
    </div>
  );
}
