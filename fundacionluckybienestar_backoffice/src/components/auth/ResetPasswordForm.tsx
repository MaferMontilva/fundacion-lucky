import { useState } from "react";
import { Link } from "react-router";

function MailIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="m4.5 7 7.5 6 7.5-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowLeftIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m15 18-6-6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function KeyIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="8" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M11 12h10M17 12v3M20 12v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function ResetPasswordForm() {
  const [email, setEmail] = useState("");
  const [statusMessage, setStatusMessage] = useState("Ingresa tu correo para enviarte un codigo de recuperacion.");

  const handleSendCode = () => {
    if (!email.trim()) {
      setStatusMessage("Debes escribir un correo valido para continuar.");
      return;
    }

    setStatusMessage("Listo. Te enviamos un codigo de recuperacion a tu correo.");
  };

  return (
    <div className="w-full max-w-[460px] px-6 py-10 lg:px-8 lg:py-12">
      <Link
        to="/signin"
        className="mb-7 inline-flex items-center gap-2 rounded-xl border border-[#F1D9BD] bg-[#FFF7EA] px-4 py-2 text-sm font-semibold text-[#5F6B70] hover:bg-[#FFEFD9]"
      >
        <ArrowLeftIcon />
        Volver al inicio de sesion
      </Link>

      <div className="mb-8">
        <h1 className="text-5xl font-black text-[#2A141B]">Recuperar acceso</h1>
        <p className="mt-3 text-lg font-medium text-[#5F6B70]">
          Escribe tu correo y te enviaremos un codigo para restablecer tu contrasena.
        </p>
      </div>

      <div className="rounded-3xl border border-[#F1D9BD] bg-white p-6 shadow-sm">
        <label className="mb-2 block text-[15px] font-bold text-[#2A141B]">Correo electronico</label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8A969B]">
            <MailIcon />
          </span>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="ejemplo@fundacionlucky.org"
            className="h-14 w-full rounded-2xl border border-[#F1D9BD] bg-white pl-13 pr-4 text-[15px] font-semibold text-[#19323A] outline-none placeholder:text-[#A6AFB3] focus:border-[#EB6A00]/50 focus:ring-4 focus:ring-[#FFE2C2]/50"
          />
        </div>

        <button
          type="button"
          onClick={handleSendCode}
          className="mt-5 inline-flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#FF8A1A] to-[#FF6A00] text-xl font-black text-white shadow-lg shadow-[#FF8A1A]/30 hover:from-[#FF7814] hover:to-[#F25E00]"
        >
          <KeyIcon />
          Enviar codigo
        </button>

        <p className="mt-4 rounded-xl border border-[#F1D9BD] bg-[#FFF7EA] px-4 py-3 text-sm font-semibold text-[#5F6B70]">
          {statusMessage}
        </p>
      </div>
    </div>
  );
}
