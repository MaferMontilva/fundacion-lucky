import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { useSidebar } from "../context/SidebarContext";
import { ThemeToggleButton } from "../components/common/ThemeToggleButton";
import NotificationDropdown from "../components/header/NotificationDropdown";
import UserDropdown from "../components/header/UserDropdown";

const AppHeader: React.FC = () => {
  const [isApplicationMenuOpen, setApplicationMenuOpen] = useState(false);
  const { isMobileOpen, toggleSidebar, toggleMobileSidebar } = useSidebar();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleToggle = () => {
    if (window.innerWidth >= 1024) {
      toggleSidebar();
    } else {
      toggleMobileSidebar();
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-99999 flex w-full border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900 lg:border-b">
      <div className="flex grow flex-col items-center justify-between lg:flex-row lg:px-6">
        <div className="flex w-full items-center justify-between gap-2 border-b border-gray-200 px-3 py-2.5 dark:border-gray-800 sm:gap-4 lg:justify-normal lg:border-b-0 lg:px-0 lg:py-3">
          <button
            className="z-99999 flex h-10 w-10 items-center justify-center rounded-lg text-gray-500 dark:text-gray-400 lg:h-10 lg:w-10 lg:border lg:border-gray-200 lg:dark:border-gray-800"
            onClick={handleToggle}
            aria-label="Toggle Sidebar"
          >
            {isMobileOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.22 7.28a.75.75 0 0 1 1.06-1.06L12 10.94l4.72-4.72a.75.75 0 1 1 1.06 1.06L13.06 12l4.72 4.72a.75.75 0 1 1-1.06 1.06L12 13.06l-4.72 4.72a.75.75 0 1 1-1.06-1.06L10.94 12 6.22 7.28Z"
                  fill="currentColor"
                />
              </svg>
            ) : (
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                <path d="M1 1h16M1 7h10M1 13h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            )}
          </button>

          <Link to="/" className="flex items-center gap-2 lg:hidden">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-600 text-white">🐾</span>
            <span className="text-lg font-bold text-slate-950 dark:text-white">Lucky</span>
          </Link>

          <button
            onClick={() => setApplicationMenuOpen((open) => !open)}
            className="z-99999 flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 lg:hidden"
            aria-label="Abrir menu superior"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"
                fill="currentColor"
              />
            </svg>
          </button>

          <div className="hidden lg:block">
            <form>
              <div className="relative">
                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2">
                  <svg className="fill-gray-500 dark:fill-gray-400" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.04 9.37a6.33 6.33 0 1 1 11.32 3.9l3.88 3.88a.75.75 0 1 1-1.06 1.06l-3.88-3.88A6.33 6.33 0 0 1 3.04 9.37Zm6.34-4.83a4.83 4.83 0 1 0 0 9.66 4.83 4.83 0 0 0 0-9.66Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Buscar algo..."
                  className="h-10 w-full rounded-full border-0 bg-slate-100 py-2 pl-11 pr-5 text-sm text-gray-800 shadow-sm placeholder:text-gray-500 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 xl:w-[390px]"
                />
              </div>
            </form>
          </div>
        </div>

        <div
          className={`${
            isApplicationMenuOpen ? "flex" : "hidden"
          } w-full items-center justify-between gap-4 px-5 py-4 shadow-theme-md lg:flex lg:justify-end lg:px-0 lg:shadow-none`}
        >
          <div className="flex items-center gap-2 2xsm:gap-3">
            <ThemeToggleButton />
            <NotificationDropdown />
          </div>
          <UserDropdown />
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
