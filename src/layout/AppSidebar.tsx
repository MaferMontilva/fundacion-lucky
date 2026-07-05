import { Link, useLocation } from "react-router";
import type { ReactNode } from "react";
import {
  GridIcon,
  GroupIcon,
  HorizontaLDots,
  ListIcon,
  LockIcon,
  TimeIcon,
  UserCircleIcon,
  UserIcon,
} from "../icons";
import { useSidebar } from "../context/SidebarContext";

type NavItem = {
  name: string;
  icon: ReactNode;
  path: string;
};

const navItems: NavItem[] = [
  { icon: <GridIcon />, name: "Inicio", path: "/" },
  { icon: <ListIcon />, name: "Publicaciones", path: "/publicaciones" },
  { icon: <UserCircleIcon />, name: "Adopciones", path: "/adopciones" },
  { icon: <UserIcon />, name: "Voluntariado", path: "/donaciones" },
  { icon: <UserIcon />, name: "Contactos", path: "/contactos" },
  { icon: <TimeIcon />, name: "Ubicacion y horarios", path: "/ubicacion-horarios" },
  { icon: <ListIcon />, name: "FAQ", path: "/faqs" },
];

const adminItems: NavItem[] = [
  { icon: <GroupIcon />, name: "Usuarios", path: "/admin/usuarios" },
  { icon: <LockIcon />, name: "Roles y permisos", path: "/admin/roles-permisos" },
];

function PawLogo() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8.58 12.72c1.38-.2 2.06.79 2.7 1.49.31.34.55.51.72.51s.41-.17.72-.51c.64-.7 1.32-1.69 2.7-1.49 1.47.21 2.59 1.63 2.59 3.22 0 1.88-1.28 3.14-3.13 3.14-.78 0-1.52-.22-2.13-.5-.53-.24-.97-.44-1.25-.44s-.72.2-1.25.44c-.61.28-1.35.5-2.13.5-1.85 0-3.13-1.26-3.13-3.14 0-1.59 1.12-3.01 2.59-3.22ZM6.83 5.21c1.03-.13 2.01.87 2.19 2.23.18 1.36-.51 2.57-1.54 2.7-1.03.13-2.01-.87-2.19-2.23-.18-1.36.51-2.57 1.54-2.7Zm10.34 0c1.03.13 1.72 1.34 1.54 2.7-.18 1.36-1.16 2.36-2.19 2.23-1.03-.13-1.72-1.34-1.54-2.7.18-1.36 1.16-2.36 2.19-2.23ZM11.99 4c1.05 0 1.9 1.12 1.9 2.5S13.04 9 11.99 9s-1.9-1.12-1.9-2.5S10.94 4 11.99 4ZM4.16 9.19c.91-.35 2.03.35 2.5 1.56.47 1.21.12 2.47-.79 2.82-.91.35-2.03-.35-2.5-1.56-.47-1.21-.12-2.47.79-2.82Zm15.68 0c.91.35 1.26 1.61.79 2.82-.47 1.21-1.59 1.91-2.5 1.56-.91-.35-1.26-1.61-.79-2.82.47-1.21 1.59-1.91 2.5-1.56Z"
        fill="currentColor"
      />
    </svg>
  );
}

const AppSidebar: React.FC = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const location = useLocation();
  const showText = isExpanded || isHovered || isMobileOpen;
  const isActive = (path: string) => location.pathname === path;

  const renderMenuItems = (items: NavItem[]) => (
    <ul className="flex flex-col gap-2">
      {items.map((nav) => (
        <li key={nav.name}>
          <Link
            to={nav.path}
            className={`group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-black transition-all duration-200 ${
              isActive(nav.path)
                ? "bg-[#FFE2C2] text-[#19323A] ring-1 ring-[#F1D9BD] shadow-md shadow-[#EB6A00]/15"
                : "text-[#19323A] hover:bg-[#FFF7EA] hover:text-[#19323A]"
            } ${!showText ? "lg:justify-center" : "lg:justify-start"}`}
          >
            <span
              className={`menu-item-icon-size ${
                isActive(nav.path) ? "text-[#C95200]" : "text-[#5F6B70] group-hover:text-[#19323A]"
              }`}
            >
              {nav.icon}
            </span>
            {showText && <span>{nav.name}</span>}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <aside
      className={`fixed left-0 top-0 z-50 mt-16 flex h-[calc(100vh-4rem)] flex-col border-r border-[#F1D9BD] bg-[#F7E5CF] px-3 text-[#19323A] transition-all duration-300 ease-in-out lg:mt-0 lg:h-screen ${
        isExpanded || isMobileOpen ? "w-[220px]" : isHovered ? "w-[220px]" : "w-[68px]"
      } ${isMobileOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`flex py-6 ${!showText ? "lg:justify-center" : "justify-start"}`}>
        <Link to="/" className="flex items-center gap-3 px-1 py-1">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#8E4BAF] to-[#EB6A00] text-white shadow-xl shadow-[#8E4BAF]/30">
            <PawLogo />
          </div>
          {showText && (
            <div className="leading-tight">
              <p className="text-sm font-black text-[#5F6B70]">Fundacion</p>
              <p className="text-2xl font-black text-[#19323A]">
                Lucky <span className="text-[#8E4BAF]">{"\u2661"}</span>
              </p>
            </div>
          )}
        </Link>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto pb-4 duration-300 ease-linear custom-scrollbar">
        <nav className="mb-4">
          <div className="flex flex-col gap-6">
            <div>
              <h2
                className={`mb-3 flex text-xs font-black uppercase leading-5 tracking-wide text-[#8A969B] ${
                  !showText ? "lg:justify-center" : "justify-start"
                }`}
              >
                {showText ? "GESTION" : <HorizontaLDots className="size-5" />}
              </h2>
              {renderMenuItems(navItems)}
            </div>

            <div>
              <h2
                className={`mb-3 flex text-xs font-black uppercase leading-5 tracking-wide text-[#8A969B] ${
                  !showText ? "lg:justify-center" : "justify-start"
                }`}
              >
                {showText ? "ADMIN" : <HorizontaLDots className="size-5" />}
              </h2>
              {renderMenuItems(adminItems)}
            </div>
          </div>
        </nav>
      </div>

    </aside>
  );
};

export default AppSidebar;
