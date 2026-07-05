import dogCatImage from "../images/dogcat.png";

export default function SidebarWidget() {
  return (
    <div className="mx-auto mb-2 mt-7 w-full max-w-60 overflow-hidden rounded-[28px] bg-gradient-to-br from-orange-200 via-amber-100 to-pink-100 px-5 py-6 text-left shadow-xl shadow-black/20">
      <div className="mx-auto mb-4 flex h-36 w-36 items-center justify-center overflow-hidden rounded-full bg-white/45">
        <img
          src={dogCatImage}
          alt="Mascotas Fundacion Lucky"
          className="h-32 w-32 object-contain object-center mix-blend-multiply"
        />
      </div>
      <h3 className="mb-3 text-2xl font-black text-[#3b0202]">
        Cada vida cuenta <span className="text-pink-500">♥</span>
      </h3>
      <p className="text-base font-bold leading-7 text-[#3b0202]/70">
        Gracias por ayudar a cambiar destinos.
      </p>
    </div>
  );
}
