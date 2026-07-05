import { useState } from "react";
import PageMeta from "../components/common/PageMeta";

type PetStatus = "Disponible" | "En evaluacion" | "Reservada" | "Adoptada";

type PetItem = {
  id: string;
  name: string;
  species: "Perro" | "Gato";
  sex: "Macho" | "Hembra";
  size: "Pequeno" | "Mediano" | "Grande";
  age_label: string;
  status: PetStatus;
  is_sterilized: boolean;
  description: string;
  is_featured: boolean;
  is_active: boolean;
  order_index: number;
  tone: string;
};

type AnimalCharacteristic = {
  id: string;
  animal_id: string;
  label: string;
  order_index: number;
  is_active: boolean;
};

type MediaAsset = {
  id: string;
  public_uri: string;
  alt_text: string;
  media_type: "image";
};

type AnimalImage = {
  id: string;
  animal_id: string;
  media_id: string;
  is_primary: boolean;
  order_index: number;
};
const samplePets: PetItem[] = [
  {
    id: "animal-luna",
    name: "Luna",
    species: "Gato",
    sex: "Hembra",
    size: "Pequeno",
    age_label: "2 anios",
    status: "Disponible",
    is_sterilized: true,
    description: "Gatita tranquila, carinosa y lista para adopcion responsable.",
    is_featured: true,
    is_active: true,
    order_index: 1,
    tone: "bg-[#E9F7ED] text-[#2E8B57] ring-[#CBEBD5]",
  },
  {
    id: "animal-max",
    name: "Max",
    species: "Perro",
    sex: "Macho",
    size: "Mediano",
    age_label: "3 anios",
    status: "En evaluacion",
    is_sterilized: false,
    description: "Perrito sociable en proceso de evaluacion para adopcion.",
    is_featured: false,
    is_active: true,
    order_index: 2,
    tone: "bg-[#FFF4DF] text-[#C67A00] ring-[#F5DDB4]",
  },
  {
    id: "animal-nina",
    name: "Nina",
    species: "Perro",
    sex: "Hembra",
    size: "Pequeno",
    age_label: "1 anio",
    status: "Adoptada",
    is_sterilized: true,
    description: "Mascota adoptada exitosamente por una familia responsable.",
    is_featured: false,
    is_active: true,
    order_index: 3,
    tone: "bg-[#EAF2FF] text-[#4A78D3] ring-[#CFE0FF]",
  },
];

const sampleAnimalCharacteristics: AnimalCharacteristic[] = [
  {
    id: "characteristic-luna-1",
    animal_id: "animal-luna",
    label: "Carinosa",
    order_index: 1,
    is_active: true,
  },
  {
    id: "characteristic-luna-2",
    animal_id: "animal-luna",
    label: "Tranquila",
    order_index: 2,
    is_active: true,
  },
  {
    id: "characteristic-max-1",
    animal_id: "animal-max",
    label: "Sociable",
    order_index: 1,
    is_active: true,
  },
  {
    id: "characteristic-nina-1",
    animal_id: "animal-nina",
    label: "Buena con ninos",
    order_index: 1,
    is_active: true,
  },
];

const sampleMediaAssets: MediaAsset[] = [
  {
    id: "media-luna-1",
    public_uri: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=600&q=80",
    alt_text: "Foto principal de Luna",
    media_type: "image",
  },
  {
    id: "media-max-1",
    public_uri: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=600&q=80",
    alt_text: "Foto principal de Max",
    media_type: "image",
  },
  {
    id: "media-nina-1",
    public_uri: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=600&q=80",
    alt_text: "Foto principal de Nina",
    media_type: "image",
  },
];

const sampleAnimalImages: AnimalImage[] = [
  {
    id: "animal-image-luna-1",
    animal_id: "animal-luna",
    media_id: "media-luna-1",
    is_primary: true,
    order_index: 1,
  },
  {
    id: "animal-image-max-1",
    animal_id: "animal-max",
    media_id: "media-max-1",
    is_primary: true,
    order_index: 1,
  },
  {
    id: "animal-image-nina-1",
    animal_id: "animal-nina",
    media_id: "media-nina-1",
    is_primary: true,
    order_index: 1,
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
        d="M6.83 5.21c1.03-.13 2.01.87 2.19 2.23.18 1.36-.51 2.57-1.54 2.7-1.03.13-2.01-.87-2.19-2.23-.18-1.36.51-2.57 1.54-2.7Zm10.34 0c1.03.13 1.72 1.34 1.54 2.7-.18 1.36-1.16 2.36-2.19 2.23-1.03-.13-1.72-1.34-1.54-2.7.18-1.36 1.16-2.36 2.19-2.23ZM11.99 4c1.05 0 1.9 1.12 1.9 2.5S13.04 9 11.99 9s-1.9-1.12-1.9-2.5S10.94 4 11.99 4Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Adoptions() {
  const [statusFilter, setStatusFilter] = useState<"Todos" | PetStatus>("Todos");
  const [characteristicAnimalFilter, setCharacteristicAnimalFilter] = useState<"Todos" | string>("Todos");
  const [imageAnimalFilter, setImageAnimalFilter] = useState<"Todos" | string>("Todos");
  const filteredPets = samplePets.filter((pet) => statusFilter === "Todos" || pet.status === statusFilter);

  const filteredAnimalCharacteristics = sampleAnimalCharacteristics.filter(
    (characteristic) =>
      characteristicAnimalFilter === "Todos" || characteristic.animal_id === characteristicAnimalFilter
  );
  const filteredAnimalImages = sampleAnimalImages.filter(
  (animalImage) => imageAnimalFilter === "Todos" || animalImage.animal_id === imageAnimalFilter
);

  const getPetNameById = (animalId: string) => {
    return samplePets.find((pet) => pet.id === animalId)?.name ?? "Mascota no encontrada";
  };
  const getMediaAssetById = (mediaId: string) => {
  return sampleMediaAssets.find((media) => media.id === mediaId);
};

  return (
    <div className="relative min-h-[calc(100vh-108px)] overflow-hidden pb-4">
      <PageMeta title="Modulo de adopciones | Fundacion Lucky" description="Gestion de mascotas y solicitudes de adopcion" />

      <div className="pointer-events-none absolute -right-12 top-4 h-56 w-56 rounded-full bg-[#EAF2FF]/80 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-10 h-64 w-64 rounded-full bg-[#E9F7ED]/80 blur-3xl" />

      <section className="relative">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF2FF] text-[#4A78D3] shadow-sm shadow-[#4A78D3]/20">
              <PawIcon className="h-6 w-6" />
            </span>
            <div>
              <h1 className="text-xl font-black text-[#19323A] sm:text-2xl">Modulo de adopciones</h1>
              <div className="mt-1.5 h-1 w-14 rounded-full bg-gradient-to-r from-[#4A78D3] to-[#2E8B57]" />
            </div>
          </div>
        </div>

        <div className="relative mb-5 overflow-hidden rounded-[18px] border border-[#F1D9BD] bg-white p-4 shadow-[0_10px_28px_rgba(74,120,211,0.12)] sm:p-5">
          <div className="relative flex flex-wrap items-start justify-between gap-4">
            <div>
              <h2 className="text-lg font-black text-[#19323A]">Modulo de adopcion</h2>
              <p className="mt-1 text-xs font-semibold text-[#5F6B70]">
                Gestiona mascotas, caracteristicas, requisitos, solicitudes y seguimiento del proceso de adopcion.
              </p>
            </div>
          </div>

          <div className="relative mt-4 flex items-center gap-3 rounded-xl border border-[#C7EFD0] bg-[#ECFAEF] px-3 py-2.5 text-xs font-semibold text-[#2F7F3D]">
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#6FCF7D] bg-white text-[#2F7F3D]">✓</span>
            Control de disponibilidad, caracteristicas y trazabilidad de adopcion.
          </div>
        </div>

        <div className="grid gap-5 xl:grid-cols-[0.95fr_1.2fr]">
          <article className="rounded-[18px] border border-[#F1D9BD] bg-white p-4 shadow-[0_10px_28px_rgba(201,82,0,0.10)] sm:p-5">
            <h3 className="mb-4 text-sm font-black text-[#19323A]">Mascota</h3>

            <form className="space-y-3">
              <label className="block">
                <span className="mb-1.5 block text-xs font-black text-[#19323A]">Nombre</span>
                <input
                  type="text"
                  defaultValue="Luna"
                  className="h-10 w-full rounded-xl border border-[#F1D9BD] bg-white px-3 text-xs font-semibold text-[#19323A] outline-none"
                />
              </label>

              <div className="grid gap-3 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-xs font-black text-[#19323A]">Especie</span>
                  <select className="h-10 w-full rounded-xl border border-[#F1D9BD] bg-white px-3 text-xs font-semibold text-[#19323A] outline-none">
                    <option>Gato</option>
                    <option>Perro</option>
                  </select>
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-xs font-black text-[#19323A]">Sexo</span>
                  <select className="h-10 w-full rounded-xl border border-[#F1D9BD] bg-white px-3 text-xs font-semibold text-[#19323A] outline-none">
                    <option>Hembra</option>
                    <option>Macho</option>
                  </select>
                </label>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-xs font-black text-[#19323A]">Tamanio</span>
                  <select className="h-10 w-full rounded-xl border border-[#F1D9BD] bg-white px-3 text-xs font-semibold text-[#19323A] outline-none">
                    <option>Pequeno</option>
                    <option>Mediano</option>
                    <option>Grande</option>
                  </select>
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-xs font-black text-[#19323A]">Edad aproximada</span>
                  <input
                    type="text"
                    defaultValue="2 anios"
                    className="h-10 w-full rounded-xl border border-[#F1D9BD] bg-white px-3 text-xs font-semibold text-[#19323A] outline-none"
                  />
                </label>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-xs font-black text-[#19323A]">Estado</span>
                  <select className="h-10 w-full rounded-xl border border-[#F1D9BD] bg-white px-3 text-xs font-semibold text-[#19323A] outline-none">
                    <option>Disponible</option>
                    <option>En evaluacion</option>
                    <option>Reservada</option>
                    <option>Adoptada</option>
                  </select>
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-xs font-black text-[#19323A]">Orden</span>
                  <input
                    type="number"
                    defaultValue={1}
                    className="h-10 w-full rounded-xl border border-[#F1D9BD] bg-white px-3 text-xs font-semibold text-[#19323A] outline-none"
                  />
                </label>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <label className="flex items-center gap-2 rounded-xl border border-[#F1D9BD] bg-[#FFF7EA] px-3 py-2.5 text-xs font-black text-[#19323A]">
                  <input type="checkbox" defaultChecked className="h-4 w-4" />
                  Esterilizado
                </label>

                <label className="flex items-center gap-2 rounded-xl border border-[#F1D9BD] bg-[#FFF7EA] px-3 py-2.5 text-xs font-black text-[#19323A]">
                  <input type="checkbox" defaultChecked className="h-4 w-4" />
                  Destacado
                </label>

                <label className="flex items-center gap-2 rounded-xl border border-[#F1D9BD] bg-[#FFF7EA] px-3 py-2.5 text-xs font-black text-[#19323A]">
                  <input type="checkbox" defaultChecked className="h-4 w-4" />
                  Activo
                </label>
              </div>

              <label className="block">
                <span className="mb-1.5 block text-xs font-black text-[#19323A]">Descripcion</span>
                <textarea
                  rows={4}
                  defaultValue="Gatita tranquila, carinosa y lista para adopcion responsable."
                  placeholder="Detalle de la mascota y requisitos..."
                  className="w-full resize-none rounded-xl border border-[#F1D9BD] bg-white px-3 py-2.5 text-xs font-semibold text-[#8A969B] outline-none"
                />
              </label>

              <button
                type="button"
                className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-[#EB6A00] px-4 text-xs font-bold text-white shadow-sm shadow-[#EB6A00]/30"
              >
                Guardar ficha
              </button>
            </form>
          </article>

          <article className="rounded-[18px] border border-[#F1D9BD] bg-white p-4 shadow-[0_10px_28px_rgba(201,82,0,0.10)] sm:p-5">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-sm font-black text-[#19323A]">Mascotas Registradas</h3>
              <select
                value={statusFilter}
                onChange={(event) => setStatusFilter(event.target.value as "Todos" | PetStatus)}
                className="h-9 rounded-lg border border-[#F1D9BD] bg-[#FFF7EA] px-3 text-[11px] font-semibold text-[#5F6B70] outline-none"
              >
                <option value="Todos">Todos</option>
                <option value="Disponible">Disponible</option>
                <option value="En evaluacion">En evaluacion</option>
                <option value="Reservada">Reservada</option>
                <option value="Adoptada">Adoptada</option>
              </select>
            </div>

            <div className="overflow-hidden rounded-xl border border-[#F1D9BD] bg-white">
              <div className="hidden grid-cols-[1.1fr_.7fr_.7fr_.7fr_.8fr_.9fr] bg-[#FFF7EA] px-3 py-3 text-xs font-black text-[#19323A] sm:grid">
                <span>Mascota</span>
                <span>Especie</span>
                <span>Sexo</span>
                <span>Tamanio</span>
                <span>Edad</span>
                <span>Estado</span>
              </div>

              {filteredPets.map((pet) => (
                <div
                  key={pet.id}
                  className="grid gap-3 border-t border-[#F7E5CF] px-3 py-3 sm:grid-cols-[1.1fr_.7fr_.7fr_.7fr_.8fr_.9fr] sm:items-center"
                >
                  <div>
                    <p className="text-xs font-black text-[#19323A]">{pet.name}</p>
                    <p className="mt-1 text-[11px] font-semibold text-[#8A969B]">
                      {pet.is_sterilized ? "Esterilizado" : "No esterilizado"} · {pet.is_active ? "Activo" : "Inactivo"}
                    </p>
                  </div>
                  <p className="text-xs font-semibold text-[#5F6B70]">{pet.species}</p>
                  <p className="text-xs font-semibold text-[#5F6B70]">{pet.sex}</p>
                  <p className="text-xs font-semibold text-[#5F6B70]">{pet.size}</p>
                  <p className="text-xs font-semibold text-[#5F6B70]">{pet.age_label}</p>
                  <span className={`inline-flex w-max rounded-lg px-2.5 py-1 text-[11px] font-black ring-1 ${pet.tone}`}>{pet.status}</span>
                </div>
              ))}

              {filteredPets.length === 0 && (
                <div className="px-3 py-6 text-center text-xs font-semibold text-[#8A969B]">No hay mascotas en este estado.</div>
              )}
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-[#CBEBD5] bg-[#E9F7ED] p-3">
                <p className="text-[11px] font-bold text-[#2E8B57]">Disponibles</p>
                <p className="mt-1 text-lg font-black text-[#19323A]">
                  {samplePets.filter((pet) => pet.status === "Disponible").length}
                </p>
              </div>
              <div className="rounded-xl border border-[#F5DDB4] bg-[#FFF4DF] p-3">
                <p className="text-[11px] font-bold text-[#C67A00]">En evaluacion</p>
                <p className="mt-1 text-lg font-black text-[#19323A]">
                  {samplePets.filter((pet) => pet.status === "En evaluacion").length}
                </p>
              </div>
              <div className="rounded-xl border border-[#CFE0FF] bg-[#EAF2FF] p-3">
                <p className="text-[11px] font-bold text-[#4A78D3]">Adoptadas</p>
                <p className="mt-1 text-lg font-black text-[#19323A]">
                  {samplePets.filter((pet) => pet.status === "Adoptada").length}
                </p>
              </div>
            </div>
          </article>
        </div>

        <div className="mt-5 grid gap-5 xl:grid-cols-[0.95fr_1.2fr]">
          <article className="rounded-[18px] border border-[#F1D9BD] bg-white p-4 shadow-[0_10px_28px_rgba(201,82,0,0.10)] sm:p-5">
            <h3 className="mb-4 text-sm font-black text-[#19323A]">Caracteristica de mascota</h3>

            <form className="space-y-3">
              <label className="block">
                <span className="mb-1.5 block text-xs font-black text-[#19323A]">Mascota</span>
                <select className="h-10 w-full rounded-xl border border-[#F1D9BD] bg-white px-3 text-xs font-semibold text-[#19323A] outline-none">
                  {samplePets.map((pet) => (
                    <option key={pet.id} value={pet.id}>
                      {pet.name}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="mb-1.5 block text-xs font-black text-[#19323A]">Caracteristica</span>
                <input
                  type="text"
                  defaultValue="Carinosa"
                  placeholder="Ejemplo: Carinosa, juguetona, tranquila..."
                  className="h-10 w-full rounded-xl border border-[#F1D9BD] bg-white px-3 text-xs font-semibold text-[#19323A] outline-none"
                />
              </label>

              <div className="grid gap-3 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-xs font-black text-[#19323A]">Orden</span>
                  <input
                    type="number"
                    defaultValue={1}
                    className="h-10 w-full rounded-xl border border-[#F1D9BD] bg-white px-3 text-xs font-semibold text-[#19323A] outline-none"
                  />
                </label>

                <label className="flex items-center gap-2 self-end rounded-xl border border-[#F1D9BD] bg-[#FFF7EA] px-3 py-2.5 text-xs font-black text-[#19323A]">
                  <input type="checkbox" defaultChecked className="h-4 w-4" />
                  Activo
                </label>
              </div>

              <button
                type="button"
                className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-[#EB6A00] px-4 text-xs font-bold text-white shadow-sm shadow-[#EB6A00]/30"
              >
                Guardar caracteristica
              </button>
            </form>
          </article>

          <article className="rounded-[18px] border border-[#F1D9BD] bg-white p-4 shadow-[0_10px_28px_rgba(201,82,0,0.10)] sm:p-5">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-sm font-black text-[#19323A]">Caracteristicas Registradas</h3>
              <select
                value={characteristicAnimalFilter}
                onChange={(event) => setCharacteristicAnimalFilter(event.target.value)}
                className="h-9 rounded-lg border border-[#F1D9BD] bg-[#FFF7EA] px-3 text-[11px] font-semibold text-[#5F6B70] outline-none"
              >
                <option value="Todos">Todas</option>
                {samplePets.map((pet) => (
                  <option key={pet.id} value={pet.id}>
                    {pet.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="overflow-hidden rounded-xl border border-[#F1D9BD] bg-white">
              <div className="hidden grid-cols-[1fr_1fr_.6fr_.7fr] bg-[#FFF7EA] px-3 py-3 text-xs font-black text-[#19323A] sm:grid">
                <span>Mascota</span>
                <span>Caracteristica</span>
                <span>Orden</span>
                <span>Estado</span>
              </div>

              {filteredAnimalCharacteristics.map((characteristic) => (
                <div
                  key={characteristic.id}
                  className="grid gap-3 border-t border-[#F7E5CF] px-3 py-3 sm:grid-cols-[1fr_1fr_.6fr_.7fr] sm:items-center"
                >
                  <p className="text-xs font-black text-[#19323A]">{getPetNameById(characteristic.animal_id)}</p>
                  <p className="text-xs font-semibold text-[#5F6B70]">{characteristic.label}</p>
                  <p className="text-xs font-semibold text-[#5F6B70]">{characteristic.order_index}</p>
                  <span
                    className={`inline-flex w-max rounded-lg px-2.5 py-1 text-[11px] font-black ring-1 ${
                      characteristic.is_active
                        ? "bg-[#E9F7ED] text-[#2E8B57] ring-[#CBEBD5]"
                        : "bg-[#FFF4DF] text-[#C67A00] ring-[#F5DDB4]"
                    }`}
                  >
                    {characteristic.is_active ? "Activo" : "Inactivo"}
                  </span>
                </div>
              ))}

              {filteredAnimalCharacteristics.length === 0 && (
                <div className="px-3 py-6 text-center text-xs font-semibold text-[#8A969B]">
                  No hay caracteristicas registradas para esta mascota.
                </div>
              )}
            </div>

            <div className="mt-4 rounded-xl border border-[#CBEBD5] bg-[#E9F7ED] p-3">
              <p className="text-[11px] font-bold text-[#2E8B57]">Total caracteristicas activas</p>
              <p className="mt-1 text-lg font-black text-[#19323A]">
                {sampleAnimalCharacteristics.filter((characteristic) => characteristic.is_active).length}
              </p>
            </div>
          </article>
        </div>
                <div className="mt-5 grid gap-5 xl:grid-cols-[0.95fr_1.2fr]">
          <article className="rounded-[18px] border border-[#F1D9BD] bg-white p-4 shadow-[0_10px_28px_rgba(201,82,0,0.10)] sm:p-5">
            <h3 className="mb-4 text-sm font-black text-[#19323A]">Imagen de mascota</h3>

            <form className="space-y-3">
              <label className="block">
                <span className="mb-1.5 block text-xs font-black text-[#19323A]">Mascota</span>
                <select className="h-10 w-full rounded-xl border border-[#F1D9BD] bg-white px-3 text-xs font-semibold text-[#19323A] outline-none">
                  {samplePets.map((pet) => (
                    <option key={pet.id} value={pet.id}>
                      {pet.name}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="mb-1.5 block text-xs font-black text-[#19323A]">Archivo multimedia</span>
                <select className="h-10 w-full rounded-xl border border-[#F1D9BD] bg-white px-3 text-xs font-semibold text-[#19323A] outline-none">
                  {sampleMediaAssets.map((media) => (
                    <option key={media.id} value={media.id}>
                      {media.alt_text}
                    </option>
                  ))}
                </select>
              </label>

              <div className="grid gap-3 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-xs font-black text-[#19323A]">Orden</span>
                  <input
                    type="number"
                    defaultValue={1}
                    className="h-10 w-full rounded-xl border border-[#F1D9BD] bg-white px-3 text-xs font-semibold text-[#19323A] outline-none"
                  />
                </label>

                <label className="flex items-center gap-2 self-end rounded-xl border border-[#F1D9BD] bg-[#FFF7EA] px-3 py-2.5 text-xs font-black text-[#19323A]">
                  <input type="checkbox" defaultChecked className="h-4 w-4" />
                  Imagen principal
                </label>
              </div>

              <button
                type="button"
                className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-[#EB6A00] px-4 text-xs font-bold text-white shadow-sm shadow-[#EB6A00]/30"
              >
                Guardar imagen
              </button>
            </form>
          </article>

          <article className="rounded-[18px] border border-[#F1D9BD] bg-white p-4 shadow-[0_10px_28px_rgba(201,82,0,0.10)] sm:p-5">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-sm font-black text-[#19323A]">Imagenes Registradas</h3>
              <select
                value={imageAnimalFilter}
                onChange={(event) => setImageAnimalFilter(event.target.value)}
                className="h-9 rounded-lg border border-[#F1D9BD] bg-[#FFF7EA] px-3 text-[11px] font-semibold text-[#5F6B70] outline-none"
              >
                <option value="Todos">Todas</option>
                {samplePets.map((pet) => (
                  <option key={pet.id} value={pet.id}>
                    {pet.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="overflow-hidden rounded-xl border border-[#F1D9BD] bg-white">
              <div className="hidden grid-cols-[1fr_1.1fr_.7fr_.6fr] bg-[#FFF7EA] px-3 py-3 text-xs font-black text-[#19323A] sm:grid">
                <span>Mascota</span>
                <span>Imagen</span>
                <span>Principal</span>
                <span>Orden</span>
              </div>

              {filteredAnimalImages.map((animalImage) => {
                const media = getMediaAssetById(animalImage.media_id);

                return (
                  <div
                    key={animalImage.id}
                    className="grid gap-3 border-t border-[#F7E5CF] px-3 py-3 sm:grid-cols-[1fr_1.1fr_.7fr_.6fr] sm:items-center"
                  >
                    <p className="text-xs font-black text-[#19323A]">{getPetNameById(animalImage.animal_id)}</p>

                    <div className="flex items-center gap-3">
                      {media?.public_uri && (
                        <img
                          src={media.public_uri}
                          alt={media.alt_text}
                          className="h-10 w-10 rounded-xl object-cover ring-1 ring-[#F1D9BD]"
                        />
                      )}

                      <div>
                        <p className="text-xs font-semibold text-[#5F6B70]">{media?.alt_text ?? "Imagen no encontrada"}</p>
                        <p className="mt-1 text-[11px] font-semibold text-[#8A969B]">{animalImage.media_id}</p>
                      </div>
                    </div>

                    <span
                      className={`inline-flex w-max rounded-lg px-2.5 py-1 text-[11px] font-black ring-1 ${
                        animalImage.is_primary
                          ? "bg-[#E9F7ED] text-[#2E8B57] ring-[#CBEBD5]"
                          : "bg-[#FFF4DF] text-[#C67A00] ring-[#F5DDB4]"
                      }`}
                    >
                      {animalImage.is_primary ? "Si" : "No"}
                    </span>

                    <p className="text-xs font-semibold text-[#5F6B70]">{animalImage.order_index}</p>
                  </div>
                );
              })}

              {filteredAnimalImages.length === 0 && (
                <div className="px-3 py-6 text-center text-xs font-semibold text-[#8A969B]">
                  No hay imagenes registradas para esta mascota.
                </div>
              )}
            </div>

            <div className="mt-4 rounded-xl border border-[#CBEBD5] bg-[#E9F7ED] p-3">
              <p className="text-[11px] font-bold text-[#2E8B57]">Total imagenes principales</p>
              <p className="mt-1 text-lg font-black text-[#19323A]">
                {sampleAnimalImages.filter((animalImage) => animalImage.is_primary).length}
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}