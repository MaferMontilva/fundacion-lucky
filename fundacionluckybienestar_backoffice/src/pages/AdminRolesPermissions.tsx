import { useMemo, useState } from "react";
import PageMeta from "../components/common/PageMeta";

type ActionKey = "view" | "create" | "edit" | "delete" | "publish" | "approve";

type Role = {
  key: string;
  name: string;
  description: string;
  isInternal: boolean;
  isActive: boolean;
};

type PermissionMatrix = Record<string, Record<string, Record<ActionKey, boolean>>>;

type SavedState = {
  roles: Role[];
  matrix: PermissionMatrix;
};

const modules = ["Publicaciones", "Adopciones", "Donaciones", "Contactos", "Ubicacion y horarios"];

const actions: { key: ActionKey; label: string; short: string }[] = [
  { key: "view", label: "Visualizar", short: "V" },
  { key: "create", label: "Crear", short: "C" },
  { key: "edit", label: "Editar", short: "E" },
  { key: "delete", label: "Eliminar", short: "X" },
  { key: "publish", label: "Publicar", short: "P" },
  { key: "approve", label: "Activar / Desactivar", short: "A" },
];

const initialRoles: Role[] = [
  {
    key: "admin",
    name: "Admin",
    description: "Control total del sistema.",
    isInternal: true,
    isActive: true,
  },
  {
    key: "operador",
    name: "Operador",
    description: "Gestion operativa diaria de modulos.",
    isInternal: true,
    isActive: true,
  },
  {
    key: "consulta",
    name: "Consulta",
    description: "Acceso de solo lectura.",
    isInternal: true,
    isActive: true,
  },
];

const cloneState = <T,>(data: T): T => JSON.parse(JSON.stringify(data));

function getDefaultActionValue(roleKey: string, action: ActionKey) {
  if (roleKey === "admin") {
    return true;
  }
  if (roleKey === "operador") {
    return action === "view" || action === "create" || action === "edit" || action === "publish";
  }
  if (roleKey === "consulta") {
    return action === "view";
  }
  return action === "view";
}

function buildInitialMatrix(roles: Role[]) {
  const matrix: PermissionMatrix = {};

  roles.forEach((role) => {
    matrix[role.key] = {};

    modules.forEach((moduleName) => {
      matrix[role.key][moduleName] = {
        view: getDefaultActionValue(role.key, "view"),
        create: getDefaultActionValue(role.key, "create"),
        edit: getDefaultActionValue(role.key, "edit"),
        delete: getDefaultActionValue(role.key, "delete"),
        publish: getDefaultActionValue(role.key, "publish"),
        approve: getDefaultActionValue(role.key, "approve"),
      };
    });
  });

  return matrix;
}

function ShieldIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3 5.5 5.5v5.4c0 4.45 2.92 8.55 6.5 9.6 3.58-1.05 6.5-5.15 6.5-9.6v-5.4L12 3Z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M9.5 12.1 11 13.6l3.5-3.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function AdminRolesPermissions() {
  const [roles, setRoles] = useState<Role[]>(initialRoles);
  const [matrix, setMatrix] = useState<PermissionMatrix>(() => buildInitialMatrix(initialRoles));
  const [savedState, setSavedState] = useState<SavedState>(() => ({
    roles: cloneState(initialRoles),
    matrix: cloneState(buildInitialMatrix(initialRoles)),
  }));
  const [formName, setFormName] = useState("");
  const [formDescription, setFormDescription] = useState("");
  const [editingRoleKey, setEditingRoleKey] = useState<string | null>(null);
  const [matrixRoleKey, setMatrixRoleKey] = useState("admin");
  const [moduleQuery, setModuleQuery] = useState("");
  const [showOnlyActive, setShowOnlyActive] = useState(false);
  const [feedback, setFeedback] = useState("");

  const currentSnapshot = JSON.stringify({ roles, matrix });
  const savedSnapshot = JSON.stringify(savedState);
  const hasUnsavedChanges = currentSnapshot !== savedSnapshot;

  const availableMatrixRole = useMemo(() => {
    if (roles.some((role) => role.key === matrixRoleKey)) {
      return matrixRoleKey;
    }
    return roles[0]?.key ?? "";
  }, [matrixRoleKey, roles]);

  const filteredModules = useMemo(() => {
    const query = moduleQuery.trim().toLowerCase();
    const rolePermissions = matrix[availableMatrixRole] ?? {};

    return modules.filter((moduleName) => {
      if (query && !moduleName.toLowerCase().includes(query)) {
        return false;
      }
      if (!showOnlyActive) {
        return true;
      }

      const actionMap = rolePermissions[moduleName];
      if (!actionMap) {
        return false;
      }

      return actions.some((action) => actionMap[action.key]);
    });
  }, [availableMatrixRole, matrix, moduleQuery, showOnlyActive]);

  const togglePermission = (roleKey: string, moduleName: string, actionKey: ActionKey) => {
    const currentValue = matrix[roleKey]?.[moduleName]?.[actionKey] ?? false;

    const nextMatrix: PermissionMatrix = {
      ...matrix,
      [roleKey]: {
        ...matrix[roleKey],
        [moduleName]: {
          ...matrix[roleKey][moduleName],
          [actionKey]: !currentValue,
        },
      },
    };

    if (roleKey === "admin") {
      const adminHasAnyPermission = modules.some((moduleItem) => {
        const permissionSet = nextMatrix.admin?.[moduleItem];
        return actions.some((action) => permissionSet?.[action.key]);
      });

      if (!adminHasAnyPermission) {
        setFeedback("No puedes dejar al rol Admin sin permisos.");
        return;
      }
    }

    setMatrix(nextMatrix);
  };

  const resetForm = () => {
    setFormName("");
    setFormDescription("");
    setEditingRoleKey(null);
  };

  const createOrUpdateRole = () => {
    const trimmedName = formName.trim();
    const trimmedDescription = formDescription.trim();

    if (!trimmedName) {
      setFeedback("Ingresa un nombre para el rol.");
      return;
    }

    if (editingRoleKey) {
      setRoles((prev) =>
        prev.map((role) =>
          role.key === editingRoleKey
            ? {
                ...role,
                name: trimmedName,
                description: trimmedDescription || role.description,
              }
            : role,
        ),
      );
      setFeedback("Rol actualizado correctamente.");
      resetForm();
      return;
    }

    const baseKey = trimmedName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "rol";
    let nextKey = baseKey;
    let counter = 2;

    while (roles.some((role) => role.key === nextKey)) {
      nextKey = `${baseKey}-${counter}`;
      counter += 1;
    }

    const newRole: Role = {
      key: nextKey,
      name: trimmedName,
      description: trimmedDescription || "Rol personalizado",
      isInternal: false,
      isActive: true,
    };

    const newRoleMatrix = modules.reduce((accumulator, moduleName) => {
      accumulator[moduleName] = {
        view: true,
        create: false,
        edit: false,
        delete: false,
        publish: false,
        approve: false,
      };
      return accumulator;
    }, {} as Record<string, Record<ActionKey, boolean>>);

    setRoles((prev) => [...prev, newRole]);
    setMatrix((prev) => ({ ...prev, [newRole.key]: newRoleMatrix }));
    setMatrixRoleKey(newRole.key);
    setFeedback("Rol creado correctamente.");
    resetForm();
  };

  const editRole = (role: Role) => {
    setEditingRoleKey(role.key);
    setFormName(role.name);
    setFormDescription(role.description);
    setFeedback(`Editando rol: ${role.name}.`);
  };

  const duplicateRole = (role: Role) => {
    const baseName = `${role.name} copia`;
    let duplicateName = baseName;
    let counter = 2;

    while (roles.some((item) => item.name.toLowerCase() === duplicateName.toLowerCase())) {
      duplicateName = `${baseName} ${counter}`;
      counter += 1;
    }

    setFormName(duplicateName);
    setFormDescription(role.description);
    setEditingRoleKey(null);
    setFeedback("Se cargo una copia en el formulario. Guarda para crear el nuevo rol.");
  };

  const toggleRoleStatus = (roleKey: string) => {
    if (roleKey === "admin") {
      setFeedback("No puedes desactivar el rol Admin principal.");
      return;
    }

    setRoles((prev) =>
      prev.map((role) =>
        role.key === roleKey
          ? {
              ...role,
              isActive: !role.isActive,
            }
          : role,
      ),
    );

    setFeedback("Estado del rol actualizado.");
  };

  const deleteRole = (roleKey: string) => {
    if (roleKey === "admin") {
      setFeedback("No puedes eliminar el rol Admin principal.");
      return;
    }

    setRoles((prev) => prev.filter((role) => role.key !== roleKey));
    setMatrix((prev) => {
      const next = { ...prev };
      delete next[roleKey];
      return next;
    });

    if (matrixRoleKey === roleKey) {
      setMatrixRoleKey("admin");
    }
    if (editingRoleKey === roleKey) {
      resetForm();
    }

    setFeedback("Rol eliminado correctamente.");
  };

  const saveChanges = () => {
    const nextSaved = {
      roles: cloneState(roles),
      matrix: cloneState(matrix),
    };
    setSavedState(nextSaved);
    setFeedback("Cambios guardados localmente (modo sin backend).");
  };

  const discardChanges = () => {
    setRoles(cloneState(savedState.roles));
    setMatrix(cloneState(savedState.matrix));
    resetForm();
    setFeedback("Cambios descartados. Se restauro la ultima version guardada.");
  };

  return (
    <div className="relative min-h-[calc(100vh-108px)] overflow-hidden pb-4">
      <PageMeta title="Roles y permisos | Fundacion Lucky" description="Matriz de permisos para administracion interna" />

      <div className="pointer-events-none absolute -right-12 top-6 h-56 w-56 rounded-full bg-[#EAF2FF]/80 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-10 h-56 w-56 rounded-full bg-[#FFF4DF]/80 blur-3xl" />

      <section className="relative">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF4DF] text-[#C67A00] shadow-sm shadow-[#C67A00]/20">
              <ShieldIcon />
            </span>
            <div>
              <h1 className="text-xl font-black text-[#19323A] sm:text-2xl">Roles y permisos</h1>
              <div className="mt-1.5 h-1 w-16 rounded-full bg-gradient-to-r from-[#C67A00] to-[#3B5EA7]" />
            </div>
          </div>
        </div>

        <div className="mb-5 rounded-[18px] border border-[#F1D9BD] bg-white p-4 shadow-[0_10px_28px_rgba(59,94,167,0.12)] sm:p-5">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <span className="inline-flex rounded-full bg-[#FFF4DF] px-3 py-1 text-xs font-black text-[#C67A00]">ADMIN</span>
              <h2 className="mt-3 text-lg font-black text-[#19323A]">Control por rol de la fundacion</h2>
              <p className="mt-1 text-xs font-semibold text-[#5F6B70]">
                Define lo que cada tipo de usuario puede ver o ejecutar dentro del sistema.
              </p>
            </div>
            <div className="rounded-xl border border-[#F1D9BD] bg-[#FFF7EA] px-4 py-3 shadow-sm">
              <p className="text-[11px] font-black uppercase tracking-wide text-[#C95200]">Roles base</p>
              <p className="mt-1 text-sm font-black text-[#19323A]">Admin, Operador, Consulta</p>
            </div>
          </div>
        </div>

        {hasUnsavedChanges && (
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[#F5DDB4] bg-[#FFF4DF] px-4 py-3">
            <p className="text-xs font-bold text-[#C67A00]">Tienes cambios sin guardar.</p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={saveChanges}
                className="inline-flex h-9 items-center justify-center rounded-lg bg-[#EB6A00] px-3 text-xs font-bold text-white"
              >
                Guardar cambios
              </button>
              <button
                type="button"
                onClick={discardChanges}
                className="inline-flex h-9 items-center justify-center rounded-lg border border-[#F1D9BD] bg-white px-3 text-xs font-bold text-[#19323A]"
              >
                Descartar
              </button>
            </div>
          </div>
        )}

        {!!feedback && (
          <div className="mb-5 rounded-xl border border-[#C9DCF8] bg-[#EAF2FF] px-4 py-2.5 text-xs font-semibold text-[#3B5EA7]">{feedback}</div>
        )}

        <div className="grid gap-5 xl:grid-cols-[0.85fr_1.25fr]">
          <article className="rounded-[18px] border border-[#F1D9BD] bg-white p-4 shadow-[0_10px_28px_rgba(59,94,167,0.12)] sm:p-5">
            <h3 className="mb-4 text-sm font-black text-[#19323A]">{editingRoleKey ? "Editar rol" : "Crear rol"}</h3>

            <form
              className="space-y-3"
              onSubmit={(event) => {
                event.preventDefault();
                createOrUpdateRole();
              }}
            >
              <label className="block">
                <span className="mb-1.5 block text-xs font-black text-[#19323A]">Nombre del rol</span>
                <input
                  type="text"
                  value={formName}
                  onChange={(event) => setFormName(event.target.value)}
                  placeholder="Ej. Operador"
                  className="h-10 w-full rounded-xl border border-[#F1D9BD] bg-white px-3 text-xs font-semibold text-[#19323A] outline-none"
                />
              </label>

              <label className="block">
                <span className="mb-1.5 block text-xs font-black text-[#19323A]">Descripcion</span>
                <textarea
                  rows={4}
                  value={formDescription}
                  onChange={(event) => setFormDescription(event.target.value)}
                  placeholder="Describe el alcance del rol..."
                  className="w-full resize-none rounded-xl border border-[#F1D9BD] bg-white px-3 py-2.5 text-xs font-semibold text-[#8A969B] outline-none"
                />
              </label>

              <div className="flex flex-wrap gap-2">
                <button type="submit" className="inline-flex h-10 items-center justify-center rounded-xl bg-[#EB6A00] px-4 text-xs font-bold text-white shadow-sm shadow-[#EB6A00]/30">
                  {editingRoleKey ? "Actualizar rol" : "Guardar rol"}
                </button>
                {editingRoleKey && (
                  <button
                    type="button"
                    onClick={resetForm}
                    className="inline-flex h-10 items-center justify-center rounded-xl border border-[#F1D9BD] bg-white px-4 text-xs font-bold text-[#19323A]"
                  >
                    Cancelar edicion
                  </button>
                )}
              </div>
            </form>

            <div className="mt-5 border-t border-[#F7E5CF] pt-4">
              <h4 className="mb-3 text-xs font-black uppercase tracking-wide text-[#8A969B]">Roles existentes</h4>
              <div className="space-y-2">
                {roles.map((role) => (
                  <div key={role.key} className="rounded-xl border border-[#F1D9BD] bg-[#FFFDF9] px-3 py-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <p className="text-sm font-black text-[#19323A]">{role.name}</p>
                        <p className="text-xs font-semibold text-[#5F6B70]">{role.description}</p>
                      </div>
                      <span
                        className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-black ${
                          role.isActive ? "bg-[#E9F7ED] text-[#2E8B57]" : "bg-[#FDECEB] text-[#E86F61]"
                        }`}
                      >
                        {role.isActive ? "Activo" : "Inactivo"}
                      </span>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-2">
                      <button type="button" onClick={() => editRole(role)} className="rounded-lg border border-[#F1D9BD] bg-white px-2.5 py-1 text-[11px] font-bold text-[#19323A]">
                        Editar
                      </button>
                      <button type="button" onClick={() => duplicateRole(role)} className="rounded-lg border border-[#F1D9BD] bg-white px-2.5 py-1 text-[11px] font-bold text-[#19323A]">
                        Duplicar
                      </button>
                      <button type="button" onClick={() => toggleRoleStatus(role.key)} className="rounded-lg border border-[#F1D9BD] bg-white px-2.5 py-1 text-[11px] font-bold text-[#19323A]">
                        {role.isActive ? "Desactivar" : "Activar"}
                      </button>
                      {role.key !== "admin" && (
                        <button type="button" onClick={() => deleteRole(role.key)} className="rounded-lg border border-[#F8C9C4] bg-white px-2.5 py-1 text-[11px] font-bold text-[#E86F61]">
                          Eliminar
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <article className="rounded-[18px] border border-[#F1D9BD] bg-white p-4 shadow-[0_10px_28px_rgba(59,94,167,0.12)] sm:p-5">
            <h3 className="mb-4 text-sm font-black text-[#19323A]">Matriz de permisos</h3>

            <div className="mb-4 grid gap-3 sm:grid-cols-3">
              <label className="block">
                <span className="mb-1 block text-[11px] font-black uppercase tracking-wide text-[#8A969B]">Rol en edicion</span>
                <select
                  value={availableMatrixRole}
                  onChange={(event) => setMatrixRoleKey(event.target.value)}
                  className="h-10 w-full rounded-xl border border-[#F1D9BD] bg-white px-3 text-xs font-semibold text-[#19323A] outline-none"
                >
                  {roles.map((role) => (
                    <option key={role.key} value={role.key}>
                      {role.name}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="mb-1 block text-[11px] font-black uppercase tracking-wide text-[#8A969B]">Buscar modulo</span>
                <input
                  type="text"
                  value={moduleQuery}
                  onChange={(event) => setModuleQuery(event.target.value)}
                  placeholder="Ej. Donaciones"
                  className="h-10 w-full rounded-xl border border-[#F1D9BD] bg-white px-3 text-xs font-semibold text-[#19323A] outline-none"
                />
              </label>

              <label className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-[#19323A]">
                <input
                  type="checkbox"
                  checked={showOnlyActive}
                  onChange={(event) => setShowOnlyActive(event.target.checked)}
                  className="h-4 w-4 rounded border-[#F1D9BD]"
                />
                Mostrar solo permisos activos
              </label>
            </div>

            <div className="overflow-hidden rounded-xl border border-[#F1D9BD] bg-white">
              <div className="grid grid-cols-[1fr_repeat(6,minmax(44px,1fr))] gap-2 bg-[#FFF7EA] px-3 py-3 text-xs font-black text-[#19323A]">
                <span>Modulo</span>
                {actions.map((action) => (
                  <span key={action.key} className="text-center" title={action.label}>
                    {action.short}
                  </span>
                ))}
              </div>

              {filteredModules.map((moduleName) => {
                const permissionSet = matrix[availableMatrixRole]?.[moduleName];

                return (
                  <div key={moduleName} className="grid grid-cols-[1fr_repeat(6,minmax(44px,1fr))] gap-2 border-t border-[#F7E5CF] px-3 py-3 text-xs text-[#5F6B70]">
                    <p className="font-black text-[#19323A]">{moduleName}</p>
                    {actions.map((action) => (
                      <label key={`${moduleName}-${action.key}`} className="flex items-center justify-center">
                        <input
                          type="checkbox"
                          checked={!!permissionSet?.[action.key]}
                          onChange={() => togglePermission(availableMatrixRole, moduleName, action.key)}
                          className="h-4 w-4 rounded border-[#F1D9BD]"
                        />
                      </label>
                    ))}
                  </div>
                );
              })}

              {filteredModules.length === 0 && (
                <p className="px-3 py-4 text-xs font-semibold text-[#8A969B]">No hay modulos para los filtros seleccionados.</p>
              )}
            </div>

            <div className="mt-4 rounded-xl border border-[#F1D9BD] bg-[#FFF7EA] p-4">
              <p className="mb-2 text-[11px] font-black uppercase tracking-wide text-[#C95200]">Leyenda</p>
              <div className="space-y-1 font-mono text-sm font-semibold text-[#19323A]">
                <p>V = Visualizar</p>
                <p>C = Crear</p>
                <p>E = Editar</p>
                <p>X = Eliminar</p>
                <p>P = Publicar</p>
                <p>A = Activar / Desactivar</p>
              </div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-[#EAF2FF] bg-[#EAF2FF] p-3">
                <p className="text-[11px] font-bold text-[#3B5EA7]">Admin</p>
                <p className="mt-1 text-lg font-black text-[#19323A]">Control total</p>
              </div>
              <div className="rounded-xl border border-[#FFF4DF] bg-[#FFF4DF] p-3">
                <p className="text-[11px] font-bold text-[#C67A00]">Operador</p>
                <p className="mt-1 text-lg font-black text-[#19323A]">Operativo</p>
              </div>
              <div className="rounded-xl border border-[#E9F7ED] bg-[#E9F7ED] p-3">
                <p className="text-[11px] font-bold text-[#2E8B57]">Consulta</p>
                <p className="mt-1 text-lg font-black text-[#19323A]">Solo lectura</p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
