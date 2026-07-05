import { useState } from "react";
import PageMeta from "../components/common/PageMeta";

type ContactInfo = {
  id: string;
  whatsapp_number: string;
  phone_label: string;
  email: string;
  address: string;
  map_embed_url: string;
  google_maps_url: string;
  is_active: boolean;
};

const sampleContactInfo: ContactInfo = {
  id: "contact-info-main",
  whatsapp_number: "0987169199",
  phone_label: "Numero oficial: 098 716 9199",
  email: "luckybienestaranimal@gmail.com",
  address: "Quito, Ecuador, sector Pintag, barrio Valencia",
  map_embed_url: "",
  google_maps_url: "https://maps.app.goo.gl/wJucXJPmwHuAS4a6?g_st=aw",
  is_active: true,
};

function MailIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Contacts() {
  const [successMessage, setSuccessMessage] = useState("");

  return (
    <div className="relative min-h-[calc(100vh-108px)] overflow-hidden pb-4">
      <PageMeta title="Modulo de contactos | Fundacion Lucky" description="Gestion de canales institucionales de contacto" />

      <div className="pointer-events-none absolute -left-12 top-4 h-56 w-56 rounded-full bg-[#EAF2FF]/80 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-10 h-64 w-64 rounded-full bg-[#FFF4DF]/80 blur-3xl" />

      <section className="relative">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF2FF] text-[#3B5EA7] shadow-sm shadow-[#3B5EA7]/20">
              <MailIcon />
            </span>
            <div>
              <h1 className="text-xl font-black text-[#19323A] sm:text-2xl">Modulo de contactos</h1>
              <div className="mt-1.5 h-1 w-14 rounded-full bg-gradient-to-r from-[#3B5EA7] to-[#EB6A00]" />
            </div>
          </div>
        </div>

        <div className="relative mb-5 overflow-hidden rounded-[18px] border border-[#F1D9BD] bg-white p-4 shadow-[0_10px_28px_rgba(59,94,167,0.12)] sm:p-5">
          <div className="relative flex flex-wrap items-start justify-between gap-4">
            <div>
              <h2 className="text-lg font-black text-[#19323A]">Canales oficiales de contacto</h2>
              <p className="mt-1 text-xs font-semibold text-[#5F6B70]">
                Configura los datos institucionales visibles en la pagina: WhatsApp, correo, direccion y mapa.
              </p>
            </div>
          </div>

          <div className="relative mt-4 flex items-center gap-3 rounded-xl border border-[#C9DCF8] bg-[#EAF2FF] px-3 py-2.5 text-xs font-semibold text-[#3B5EA7]">
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#8FB0EC] bg-white text-[#3B5EA7]">i</span>
            Esta pantalla esta alineada con la tabla contact_info de la base de datos.
          </div>
        </div>

        <div className="grid gap-5 xl:grid-cols-[0.95fr_1.2fr]">
          <article className="rounded-[18px] border border-[#F1D9BD] bg-white p-4 shadow-[0_10px_28px_rgba(59,94,167,0.12)] sm:p-5">
            <h3 className="mb-4 text-sm font-black text-[#19323A]">Datos de contacto</h3>

            <form
              className="space-y-3"
              onSubmit={(event) => {
                event.preventDefault();
                setSuccessMessage("Datos de contacto guardados visualmente. No se envio al backend.");
              }}
            >
              <label className="block">
                <span className="mb-1.5 block text-xs font-black text-[#19323A]">WhatsApp</span>
                <input
                  type="tel"
                  defaultValue={sampleContactInfo.whatsapp_number}
                  placeholder="Ej. 0987169199"
                  className="h-10 w-full rounded-xl border border-[#F1D9BD] bg-white px-3 text-xs font-semibold text-[#19323A] outline-none"
                />
              </label>

              <label className="block">
                <span className="mb-1.5 block text-xs font-black text-[#19323A]">Etiqueta del telefono</span>
                <input
                  type="text"
                  defaultValue={sampleContactInfo.phone_label}
                  placeholder="Ej. Numero oficial: 098 716 9199"
                  className="h-10 w-full rounded-xl border border-[#F1D9BD] bg-white px-3 text-xs font-semibold text-[#19323A] outline-none"
                />
              </label>

              <label className="block">
                <span className="mb-1.5 block text-xs font-black text-[#19323A]">Correo electronico</span>
                <input
                  type="email"
                  defaultValue={sampleContactInfo.email}
                  placeholder="correo@fundacionlucky.org"
                  className="h-10 w-full rounded-xl border border-[#F1D9BD] bg-white px-3 text-xs font-semibold text-[#19323A] outline-none"
                />
              </label>

              <label className="block">
                <span className="mb-1.5 block text-xs font-black text-[#19323A]">Direccion</span>
                <textarea
                  rows={3}
                  defaultValue={sampleContactInfo.address}
                  placeholder="Direccion de la fundacion"
                  className="w-full resize-none rounded-xl border border-[#F1D9BD] bg-white px-3 py-2.5 text-xs font-semibold text-[#19323A] outline-none"
                />
              </label>

              <label className="block">
                <span className="mb-1.5 block text-xs font-black text-[#19323A]">URL de Google Maps</span>
                <input
                  type="url"
                  defaultValue={sampleContactInfo.google_maps_url}
                  placeholder="https://maps.app.goo.gl/..."
                  className="h-10 w-full rounded-xl border border-[#F1D9BD] bg-white px-3 text-xs font-semibold text-[#19323A] outline-none"
                />
              </label>

              <label className="block">
                <span className="mb-1.5 block text-xs font-black text-[#19323A]">URL del mapa embebido</span>
                <input
                  type="url"
                  defaultValue={sampleContactInfo.map_embed_url}
                  placeholder="URL embed de Google Maps si existe"
                  className="h-10 w-full rounded-xl border border-[#F1D9BD] bg-white px-3 text-xs font-semibold text-[#19323A] outline-none"
                />
              </label>

              <label className="flex items-center gap-2 rounded-xl border border-[#F1D9BD] bg-[#FFF7EA] px-3 py-2.5 text-xs font-black text-[#19323A]">
                <input type="checkbox" defaultChecked={sampleContactInfo.is_active} className="h-4 w-4" />
                Contacto activo
              </label>

              <button
                type="submit"
                className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-[#3B5EA7] px-4 text-xs font-bold text-white shadow-sm shadow-[#3B5EA7]/30"
              >
                Guardar datos
              </button>

              {successMessage && (
                <p className="rounded-lg border border-[#CBEBD5] bg-[#E9F7ED] px-3 py-2 text-xs font-semibold text-[#2E8B57]">
                  {successMessage}
                </p>
              )}
            </form>
          </article>

          <article className="rounded-[18px] border border-[#F1D9BD] bg-white p-4 shadow-[0_10px_28px_rgba(59,94,167,0.12)] sm:p-5">
            <h3 className="mb-4 text-sm font-black text-[#19323A]">Resumen de contacto</h3>

            <div className="space-y-3">
              <div className="rounded-xl border border-[#C9DCF8] bg-[#EAF2FF] p-3">
                <p className="text-[11px] font-black uppercase tracking-wide text-[#3B5EA7]">WhatsApp</p>
                <p className="mt-1 text-sm font-semibold text-[#19323A]">{sampleContactInfo.whatsapp_number}</p>
                <p className="text-sm font-semibold text-[#19323A]">{sampleContactInfo.phone_label}</p>
              </div>

              <div className="rounded-xl border border-[#F5DDB4] bg-[#FFF4DF] p-3">
                <p className="text-[11px] font-black uppercase tracking-wide text-[#C67A00]">Correo electronico</p>
                <p className="mt-1 text-sm font-semibold text-[#19323A]">{sampleContactInfo.email}</p>
              </div>

              <div className="rounded-xl border border-[#CBEBD5] bg-[#E9F7ED] p-3">
                <p className="text-[11px] font-black uppercase tracking-wide text-[#2E8B57]">Direccion</p>
                <p className="mt-1 text-sm font-semibold text-[#19323A]">{sampleContactInfo.address}</p>
              </div>

              <div className="rounded-xl border border-[#C9DCF8] bg-[#EAF2FF] p-3">
                <p className="text-[11px] font-black uppercase tracking-wide text-[#3B5EA7]">Mapa</p>
                <p className="mt-1 break-all text-sm font-semibold text-[#19323A]">{sampleContactInfo.google_maps_url}</p>
                <p className="mt-1 text-xs font-semibold text-[#5F6B70]">
                  {sampleContactInfo.map_embed_url ? sampleContactInfo.map_embed_url : "Mapa embebido no configurado"}
                </p>
              </div>

              <div
                className={`rounded-xl border p-3 ${
                  sampleContactInfo.is_active
                    ? "border-[#CBEBD5] bg-[#E9F7ED]"
                    : "border-[#F5DDB4] bg-[#FFF4DF]"
                }`}
              >
                <p
                  className={`text-[11px] font-black uppercase tracking-wide ${
                    sampleContactInfo.is_active ? "text-[#2E8B57]" : "text-[#C67A00]"
                  }`}
                >
                  Estado
                </p>
                <p className="mt-1 text-sm font-semibold text-[#19323A]">
                  {sampleContactInfo.is_active ? "Activo" : "Inactivo"}
                </p>
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-[#C9DCF8] bg-[#EAF2FF] px-3 py-2.5 text-xs font-semibold text-[#3B5EA7]">
              Las redes sociales, PayPal y cuentas bancarias no estan en la tabla contact_info actual.
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}