import React from "react";
import ThemeTogglerTwo from "../../components/common/ThemeTogglerTwo";

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

function HeartIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#FFF9F6] via-white to-[#FFF8EE] p-4 sm:p-8">
      <div className="pointer-events-none absolute -left-16 top-1/3 h-52 w-52 rounded-full bg-[#FFEED8] blur-2xl" />
      <div className="pointer-events-none absolute -right-20 -top-16 h-64 w-64 rounded-full bg-[#FDEAF3] blur-2xl" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-2rem)] w-full max-w-[1320px] items-center justify-center">
        <div className="grid w-full overflow-hidden rounded-[32px] border border-[#F2E5DA] bg-white shadow-[0_24px_48px_rgba(176,117,90,0.15)] lg:grid-cols-2">
          <div className="flex items-center justify-center border-r border-[#F2E5DA] bg-white/95">{children}</div>

          <aside className="relative hidden min-h-[720px] bg-gradient-to-br from-[#FFF8FA] via-[#FFFDFB] to-[#FFF7F4] p-10 lg:block">
            <div className="pointer-events-none absolute inset-0 opacity-50">
              <div className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-[#FCE6EE]" />
              <div className="absolute -right-16 bottom-10 h-72 w-72 rounded-full bg-[#FBE9EE]" />
              <div className="absolute left-12 top-16 text-[#F8DDE7]">
                <PawIcon className="h-9 w-9" />
              </div>
              <div className="absolute right-16 top-10 text-[#F8DDE7]">
                <PawIcon className="h-12 w-12" />
              </div>
            </div>

            <div className="relative z-10 flex h-full flex-col justify-center">
              <div className="mx-auto max-w-[520px]">
                <img
                  src="/images/lucky/pets-publications.png"
                  alt="Mascotas Lucky"
                  className="mx-auto w-full max-w-[520px] object-contain"
                />

                <div className="mt-8 rounded-3xl border border-[#F3DCE6] bg-[#FFF5F8] p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <span className="mt-0.5 rounded-full bg-[#FBD8E6] p-2 text-[#E93B7B]">
                      <HeartIcon />
                    </span>
                    <div>
                      <h3 className="text-[28px] font-black leading-tight text-[#2A141B]">Gracias por ser parte del cambio.</h3>
                      <p className="mt-2 text-[18px] font-medium leading-relaxed text-[#5F6B70]">
                        Juntos mejoramos la vida de cientos
                        <br />
                        de animales cada dia.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <div className="fixed z-50 hidden bottom-6 right-6 sm:block">
          <ThemeTogglerTwo />
        </div>
      </div>
    </div>
  );
}
