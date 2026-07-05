import PageMeta from "../../components/common/PageMeta";
import type { ReactNode } from "react";
import dogCatImage from "../../images/dogcat.png";

type MediaAsset = {
  bucket: string;
  path: string;
  public_uri: string;
  alt_text: string;
  media_type: string;
};

type AnimalPreview = {
  name: string;
  species: string;
  sex: string;
  age_label: string;
  status: string;
  public_uri: string;
  alt_text: string;
  order_index: number;
};

type PublicationPreview = {
  title: string;
  description: string;
  type: string;
  status: string;
  featured_section: string;
  event_date: string;
  date_label: string;
  cta_label: string;
  order_index: number;
};

type ProfilePreview = {
  full_name: string;
  phone: string;
  status: string;
  user_type: string;
};

const mainMediaAsset: MediaAsset = {
  bucket: "landing",
  path: "inicio/dogcat.png",
  public_uri: dogCatImage,
  alt_text: "Perro y gato de Fundacion Lucky",
  media_type: "image",
};

const donationMediaAsset: MediaAsset = {
  bucket: "landing",
  path: "inicio/donacion-mascota.png",
  public_uri:
    "https://png.pngtree.com/png-vector/20240328/ourmid/pngtree-cartoon-cute-dog-and-cat-take-vaccinated-rabies-png-image_12237325.png",
  alt_text: "Mascota con corazon",
  media_type: "image",
};

const adoptions: AnimalPreview[] = [
  {
    name: "Dayni",
    species: "Perro",
    sex: "Macho",
    age_label: "2 anos",
    status: "Adoptado",
    public_uri: "/images/user/user-28.jpg",
    alt_text: "Dayni",
    order_index: 1,
  },
  {
    name: "Mario",
    species: "Gato",
    sex: "Macho",
    age_label: "1 ano",
    status: "Adoptada",
    public_uri: "/images/user/user-34.jpg",
    alt_text: "Mario",
    order_index: 2,
  },
  {
    name: "Paul",
    species: "Perro",
    sex: "Macho",
    age_label: "3 anos",
    status: "En proceso",
    public_uri: "/images/user/user-32.jpg",
    alt_text: "Paul",
    order_index: 3,
  },
];

const events: PublicationPreview[] = [
  {
    title: "Feria de Adopcion",
    description: "10:00 AM - 4:00 PM",
    type: "evento",
    status: "publicado",
    featured_section: "Parque La Carolina",
    event_date: "2026-05-24",
    date_label: "MAY",
    cta_label: "Ver evento",
    order_index: 1,
  },
  {
    title: "Campana de Vacunacion",
    description: "9:00 AM - 1:00 PM",
    type: "campaña",
    status: "publicado",
    featured_section: "Sede Fundacion Lucky",
    event_date: "2026-05-31",
    date_label: "MAY",
    cta_label: "Ver campaña",
    order_index: 2,
  },
  {
    title: "Taller de Tenencia Responsable",
    description: "2:00 PM - 5:00 PM",
    type: "convocatoria",
    status: "publicado",
    featured_section: "Auditorio Fundacion Lucky",
    event_date: "2026-06-07",
    date_label: "JUN",
    cta_label: "Ver taller",
    order_index: 3,
  },
];

const donations: ProfilePreview[] = [
  {
    full_name: "Maria Fernanda",
    phone: "No registrado",
    status: "Aporte registrado",
    user_type: "Donante",
  },
  {
    full_name: "Geovanna Velasco",
    phone: "No registrado",
    status: "Aporte registrado",
    user_type: "Donante",
  },
  {
    full_name: "Carlos",
    phone: "No registrado",
    status: "Aporte registrado",
    user_type: "Donante",
  },
];

const months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
const bars = [12, 27, 17, 23, 12, 17, 24, 9, 19, 30, 23, 10];

function getInitials(fullName: string) {
  return fullName
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

function getPublicationIcon(type: string) {
  if (type === "evento") return "🐶";
  if (type === "campaña") return "💉";
  if (type === "convocatoria") return "🤝";
  return "▣";
}

function getEventDay(eventDate: string) {
  const day = eventDate.split("-")[2];
  return day || "--";
}

function PawIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M8.58 12.72c1.38-.2 2.06.79 2.7 1.49.31.34.55.51.72.51s.41-.17.72-.51c.64-.7 1.32-1.69 2.7-1.49 1.47.21 2.59 1.63 2.59 3.22 0 1.88-1.28 3.14-3.13 3.14-.78 0-1.52-.22-2.13-.5-.53-.24-.97-.44-1.25-.44s-.72.2-1.25.44c-.61.28-1.35.5-2.13.5-1.85 0-3.13-1.26-3.13-3.14 0-1.59 1.12-3.01 2.59-3.22ZM6.83 5.21c1.03-.13 2.01.87 2.19 2.23.18 1.36-.51 2.57-1.54 2.7-1.03.13-2.01-.87-2.19-2.23-.18-1.36.51-2.57 1.54-2.7Zm10.34 0c1.03.13 1.72 1.34 1.54 2.7-.18 1.36-1.16 2.36-2.19 2.23-1.03-.13-1.72-1.34-1.54-2.7.18-1.36 1.16-2.36 2.19-2.23ZM11.99 4c1.05 0 1.9 1.12 1.9 2.5S13.04 9 11.99 9s-1.9-1.12-1.9-2.5S10.94 4 11.99 4ZM4.16 9.19c.91-.35 2.03.35 2.5 1.56.47 1.21.12 2.47-.79 2.82-.91.35-2.03-.35-2.5-1.56-.47-1.21-.12-2.47.79-2.82Zm15.68 0c.91.35 1.26 1.61.79 2.82-.47 1.21-1.59 1.91-2.5 1.56-.91-.35-1.26-1.61-.79-2.82.47-1.21 1.59-1.91 2.5-1.56Z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconBadge({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  return (
    <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-xl text-white ${className}`}>
      {children}
    </span>
  );
}

function StatCard({
  icon,
  title,
  value,
  trend,
  note,
  className,
  chartLine,
  chartFill,
  panelClass = "bg-white",
}: {
  icon: ReactNode;
  title: string;
  value: string;
  trend: string;
  note: string;
  className: string;
  chartLine: string;
  chartFill: string;
  panelClass?: string;
}) {
  return (
    <article className={`lucky-pop-card rounded-[24px] border-0 p-5 shadow-[0_10px_0_rgba(15,23,42,0.06),0_18px_35px_rgba(15,23,42,0.10)] ${panelClass}`}>
      <div className="flex items-start gap-4">
        <IconBadge className={className}>{icon}</IconBadge>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-slate-900">{title}</p>
          <p className="mt-1 text-2xl font-bold text-slate-950">{value}</p>
        </div>
      </div>
      <div className="mt-5 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-emerald-500">↑ {trend}</p>
          <p className="text-xs text-slate-500">{note}</p>
        </div>
        <svg viewBox="0 0 120 34" className="lucky-wiggle h-9 w-28">
          <path
            d="M2 28 C14 10 21 25 31 15 C42 3 49 30 61 15 C72 -2 82 35 94 12 C102 0 108 24 118 8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            className={chartLine}
          />
          <path
            d="M2 34 C14 16 21 31 31 21 C42 9 49 36 61 21 C72 4 82 41 94 18 C102 6 108 30 118 14 L118 34 Z"
            className={chartFill}
          />
        </svg>
      </div>
    </article>
  );
}

function SectionHeader({
  icon,
  title,
  color,
}: {
  icon: ReactNode;
  title: string;
  color: string;
}) {
  return (
    <div className="mb-5 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className={`flex h-10 w-10 items-center justify-center rounded-2xl text-lg ${color}`}>
          {icon}
        </span>
        <h2 className="text-lg font-bold text-slate-950">{title}</h2>
      </div>
      <button className="text-sm font-semibold text-violet-600">Ver todas</button>
    </div>
  );
}
export default function Home() {
  return (
    <>
      <PageMeta
        title="Dashboard Administrativo | Fundacion Lucky"
        description="Panel administrativo de Fundacion Lucky para gestion de adopciones, donaciones y voluntariado."
      />

      <div className="min-h-[calc(100vh-120px)] overflow-hidden rounded-[32px] bg-white p-5 text-slate-900 shadow-[0_24px_70px_rgba(67,20,7,0.18)] md:p-7">
        <section className="relative overflow-hidden pb-2 lg:min-h-36">
          <div className="absolute right-0 top-0 hidden h-50 w-[360px] overflow-hidden rounded-bl-[40px] bg-white lg:block">
            <img
              src={mainMediaAsset.public_uri}
              alt={mainMediaAsset.alt_text}
              className="lucky-float ml-auto h-full w-full object-contain object-bottom"
            />
          </div>
          <div className="relative z-10 pt-4">
            <h1 className="text-2xl font-black uppercase text-orange-500 sm:text-4xl">
              Bienvenido, Administrador! <span className="text-2xl">👋</span>
            </h1>
            <p className="mt-2 text-base text-indigo-950/70">
              Aqui tienes un resumen de la actividad de <span className="font-semibold text-violet-600">Fundacion Lucky.</span>
            </p>
          </div>
        </section>

        <section className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          <StatCard icon={<PawIcon />} title="Mascotas en adopcion" value="28" trend="12%" note="vs la semana pasada" className="bg-violet-600" chartLine="text-violet-600" chartFill="fill-violet-200" panelClass="bg-gradient-to-br from-violet-200 via-violet-100 to-fuchsia-100" />
          <StatCard icon="♥" title="Adopciones exitosas" value="15" trend="20%" note="vs el mes pasado" className="bg-green-500" chartLine="text-green-600" chartFill="fill-green-200" panelClass="bg-gradient-to-br from-green-200 via-emerald-100 to-lime-100" />
          <StatCard icon="🎁" title="Donaciones recibidas" value="$2,450" trend="18%" note="vs el mes pasado" className="bg-orange-500" chartLine="text-orange-600" chartFill="fill-orange-200" panelClass="bg-gradient-to-br from-orange-200 via-amber-100 to-yellow-100" />
          <StatCard icon="👥" title="Voluntarios activos" value="36" trend="8%" note="vs el mes pasado" className="bg-pink-500" chartLine="text-pink-600" chartFill="fill-pink-200" panelClass="bg-gradient-to-br from-pink-200 via-rose-100 to-fuchsia-100" />
        </section>

        <section className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-[1.25fr_0.9fr]">
          <article className="lucky-pop-card rounded-[24px] border-0 bg-gradient-to-br from-violet-100 via-indigo-50 to-violet-200 p-5 shadow-[0_12px_35px_rgba(15,23,42,0.10)]">
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-violet-100 text-lg text-violet-600">▣</span>
              <h2 className="text-lg font-bold text-slate-950">Adopciones por mes</h2>
            </div>
            <div className="grid grid-cols-[32px_1fr] gap-3">
              <div className="flex h-44 flex-col justify-between text-xs font-medium text-slate-500">
                <span>30</span>
                <span>25</span>
                <span>20</span>
                <span>15</span>
                <span>10</span>
                <span>5</span>
              </div>
              <div className="relative h-44 border-b border-slate-200">
                <div className="absolute inset-0 flex flex-col justify-between">
                  {[0, 1, 2, 3, 4].map((line) => (
                    <span key={line} className="h-px w-full bg-slate-100" />
                  ))}
                </div>
                <div className="relative z-10 grid h-full grid-cols-12 items-end gap-3 px-2">
                  {bars.map((value, index) => (
                    <div key={months[index]} className="flex justify-center">
                      <span
                        className="lucky-bar w-5 rounded-t bg-gradient-to-t from-violet-600 to-violet-400 shadow-sm shadow-violet-300"
                        style={{ height: `${Math.max(12, (value / 30) * 144)}px` }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="ml-11 mt-3 grid grid-cols-12 gap-3 px-2 text-center text-xs font-medium text-slate-600">
              {months.map((month) => (
                <span key={month}>{month}</span>
              ))}
            </div>
          </article>

          <article className="lucky-pop-card relative overflow-hidden rounded-[24px] border-0 bg-gradient-to-br from-pink-200 via-rose-100 to-pink-100 p-6 shadow-[0_12px_35px_rgba(15,23,42,0.10)]">
            <div className="relative z-10 grid grid-cols-[1fr_180px] gap-4 max-sm:grid-cols-1">
              <div>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-pink-100 text-lg text-pink-500">◎</span>
                  <h2 className="text-lg font-bold text-slate-950">Meta de donaciones mensual</h2>
                </div>
                <p className="mt-7 text-5xl font-bold text-pink-500">70%</p>
                <p className="mt-2 text-base font-medium text-indigo-950/70">$2,450 de $3,500</p>
                <div className="mt-5 h-3 overflow-hidden rounded-full bg-pink-100">
                  <div className="h-full w-[70%] rounded-full bg-pink-500" />
                </div>
                <div className="mt-6 flex items-start gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-100 text-pink-500">♥</span>
                  <div>
                    <p className="font-bold text-slate-950">Vamos muy bien!</p>
                    <p className="text-sm text-indigo-950/70">Tu apoyo hace la diferencia.</p>
                  </div>
                </div>
              </div>
              <div className="relative z-10 flex h-52 w-43 items-end justify-center self-end max-sm:mx-auto">
                <img
                  src={donationMediaAsset.public_uri}
                  alt={donationMediaAsset.alt_text}
                  className="lucky-float relative z-10 h-44 w-43 object-contain object-bottom mix-blend-multiply"
                />
              </div>
            </div>
          </article>
        </section>

        <section className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-3">
          <article className="lucky-pop-card rounded-[24px] border-0 bg-gradient-to-br from-orange-200 via-amber-100 to-orange-100 p-5 shadow-[0_12px_35px_rgba(15,23,42,0.10)]">
            <SectionHeader icon={<PawIcon className="h-5 w-5" />} title="Adopciones recientes" color="bg-violet-100 text-violet-600" />
            <div className="divide-y divide-slate-100">
              {adoptions.map((pet) => (
                <div key={pet.name} className="flex items-center gap-3 py-3">
                  <img src={pet.public_uri} alt={pet.alt_text} className="h-12 w-12 rounded-xl object-cover" />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <p className="font-bold text-slate-950">{pet.name}</p>
                      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${pet.status === "Adoptada" ? "bg-violet-100 text-violet-600" : "bg-orange-100 text-orange-600"}`}>
                        {pet.status}
                      </span>
                    </div>
                    <p className="text-sm text-indigo-950/70">
                      {pet.species} · {pet.sex} · {pet.age_label}
                    </p>
                  </div>
                  <span className="text-sm text-indigo-950/60">Orden {pet.order_index}</span>
                  <span className={`h-5 w-5 rounded-full border-2 ${pet.status === "Adoptada" ? "border-green-400 bg-green-100" : "border-orange-400"}`} />
                </div>
              ))}
            </div>
          </article>

          <article className="lucky-pop-card rounded-[24px] border-0 bg-gradient-to-br from-lime-200 via-green-100 to-emerald-100 p-5 shadow-[0_12px_35px_rgba(15,23,42,0.10)]">
            <SectionHeader icon="▣" title="Proximos eventos" color="bg-blue-100 text-blue-600" />
            <div className="divide-y divide-slate-100">
              {events.map((event) => (
                <div key={`${event.event_date}-${event.title}`} className="grid grid-cols-[52px_1fr_44px] items-center gap-3 py-3">
                  <div className="rounded-xl bg-slate-50 py-2 text-center">
                    <p className="text-2xl font-bold text-slate-950">{getEventDay(event.event_date)}</p>
                    <p className="text-xs font-bold text-slate-700">{event.date_label}</p>
                  </div>
                  <div>
                    <p className="font-bold text-slate-950">{event.title}</p>
                    <p className="text-sm text-indigo-950/60">{event.featured_section}</p>
                    <p className="text-sm text-indigo-950/70">{event.description}</p>
                  </div>
                  <span className="text-3xl">{getPublicationIcon(event.type)}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="lucky-pop-card rounded-[24px] border-0 bg-gradient-to-br from-violet-200 via-indigo-100 to-purple-100 p-5 shadow-[0_12px_35px_rgba(15,23,42,0.10)]">
            <SectionHeader icon="♥" title="Donaciones recientes" color="bg-green-100 text-green-600" />
            <div className="divide-y divide-slate-100">
              {donations.map((donation, index) => (
                <div key={donation.full_name} className="grid grid-cols-[46px_1fr_auto_28px] items-center gap-3 py-4">
                  <span className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold ${index === 0 ? "bg-pink-100 text-pink-500" : index === 1 ? "bg-green-100 text-green-600" : "bg-violet-100 text-violet-600"}`}>
                    {getInitials(donation.full_name)}
                  </span>
                  <div>
                    <p className="font-bold text-slate-950">{donation.full_name}</p>
                    <p className="text-sm font-medium text-indigo-950/70">{donation.status}</p>
                  </div>
                  <span className="text-sm text-indigo-950/60">{donation.user_type}</span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-100 text-green-500">♥</span>
                </div>
              ))}
            </div>
          </article>
        </section>
      </div>
    </>
  );
}