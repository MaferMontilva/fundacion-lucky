import { useState } from "react";
import { Link } from "react-router";
import { EyeCloseIcon, EyeIcon } from "../../icons";

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

function MailIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="m4.5 7 7.5 6 7.5-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="11" width="16" height="10" rx="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 11V8a4 4 0 1 1 8 0v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3 5 6v6c0 4.4 3 7.9 7 9 4-1.1 7-4.6 7-9V6l-7-3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M5.5 19.5a6.5 6.5 0 0 1 13 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function LoginIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M15 4h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M10 17l5-5-5-5M15 12H3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="w-full max-w-[460px] px-6 py-10 lg:px-8 lg:py-12">
      <div className="mb-8 flex items-center gap-4">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#E93B7B] to-[#C7226E] text-white shadow-lg shadow-[#E93B7B]/30">
          <PawIcon className="h-9 w-9" />
        </span>
        <div className="leading-none">
          <p className="mb-1 text-[15px] font-bold text-[#2A141B]">Fundacion</p>
          <p className="text-[58px] font-black text-[#2A141B] leading-[0.95]">
            Lucky <span className="text-[#E93B7B]">♡</span>
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h1 className="text-5xl font-black text-[#2A141B]">Iniciar sesion</h1>
        <p className="mt-3 text-lg font-medium text-[#5F6B70]">
          Accede al backoffice de <span className="font-bold text-[#8E4BAF]">Fundacion Lucky</span>
          <br />
          con tus credenciales personales.
        </p>
      </div>

      <form className="space-y-5">
        <div>
          <label className="mb-2 block text-[15px] font-bold text-[#2A141B]">Correo electronico</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8A969B]">
              <MailIcon />
            </span>
            <input
              type="email"
              placeholder="ejemplo@fundacionlucky.org"
              className="h-14 w-full rounded-2xl border border-[#F1D9BD] bg-white pl-13 pr-4 text-[15px] font-semibold text-[#19323A] outline-none placeholder:text-[#A6AFB3] focus:border-[#EB6A00]/50 focus:ring-4 focus:ring-[#FFE2C2]/50"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-[15px] font-bold text-[#2A141B]">Contrasena</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8A969B]">
              <LockIcon />
            </span>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Ingresa tu contrasena"
              className="h-14 w-full rounded-2xl border border-[#F1D9BD] bg-white pl-13 pr-12 text-[15px] font-semibold text-[#19323A] outline-none placeholder:text-[#A6AFB3] focus:border-[#EB6A00]/50 focus:ring-4 focus:ring-[#FFE2C2]/50"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-2 text-[#8A969B] hover:bg-[#FFF7EA]"
              aria-label="Mostrar u ocultar contrasena"
            >
              {showPassword ? <EyeIcon className="size-5 fill-[#8A969B]" /> : <EyeCloseIcon className="size-5 fill-[#8A969B]" />}
            </button>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <label className="inline-flex items-center gap-3 text-[15px] font-semibold text-[#2A141B]">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={(event) => setIsChecked(event.target.checked)}
              className="h-5 w-5 rounded border-[#F1D9BD] accent-[#EB6A00]"
            />
            Recordarme
          </label>

          <Link to="/reset-password" className="text-[15px] font-bold text-[#8E4BAF] hover:text-[#7B3C9A]">
            Olvidaste tu contrasena?
          </Link>
        </div>

        <button
          type="button"
          onClick={() => {}}
          className="mt-2 inline-flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#FF8A1A] to-[#FF6A00] text-xl font-black text-white shadow-lg shadow-[#FF8A1A]/30 hover:from-[#FF7814] hover:to-[#F25E00]"
        >
          <LoginIcon />
          Ingresar
        </button>
      </form>

      <div className="my-7 flex items-center gap-4">
        <span className="h-px flex-1 bg-[#F1D9BD]" />
        <p className="text-sm font-bold uppercase tracking-wide text-[#8A969B]">Acceso segun rol</p>
        <span className="h-px flex-1 bg-[#F1D9BD]" />
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <article className="rounded-2xl border border-[#E3D7FB] bg-[#F7F3FF] p-4">
          <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#E9E0FF] text-[#6F58C9]">
            <ShieldIcon />
          </div>
          <h3 className="text-[15px] font-black text-[#2A141B]">Administrador</h3>
          <p className="mt-1 text-[13px] font-medium text-[#5F6B70]">Acceso completo a funciones del sistema.</p>
        </article>

        <article className="rounded-2xl border border-[#D2EFCF] bg-[#EDFBEA] p-4">
          <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#DDF5D8] text-[#2E8B57]">
            <UserIcon />
          </div>
          <h3 className="text-[15px] font-black text-[#2A141B]">Operador</h3>
          <p className="mt-1 text-[13px] font-medium text-[#5F6B70]">Gestion y seguimiento de actividades diarias.</p>
        </article>
      </div>
    </div>
  );
}
