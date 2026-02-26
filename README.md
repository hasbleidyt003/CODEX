# 🚀 PQR SYSTEM — GUÍA DE INSTALACIÓN

## PASO 1: Configurar Supabase
1. Ve a: https://yeiupcumvdvdswfhcoty.supabase.co
2. Dashboard > SQL Editor > New Query
3. Pega TODO el contenido de `setup_supabase.sql`
4. Clic en RUN ▶
5. Verifica que aparezcan 3 tablas: agentes, correos, historial

---

## PASO 2: Configurar correo PQR en admin.html
Abre `admin.html` con un editor de texto (Notepad, VSCode)
Busca esta línea (~línea 250):
```
const mailboxEmail = 'pqr@tuempresa.com';
```
**Cámbiala por el correo real que recibe las PQR**, por ejemplo:
```
const mailboxEmail = 'pqr@tuempresa.com.co';
```

---

## PASO 3: Permisos en Azure
En Azure Portal, tu App debe tener estos permisos de Graph API:
- `Mail.Read` (Application) ✅
- `Mail.ReadBasic.All` (Application) ✅
- `User.Read.All` (Application) — opcional

Si no los tienes:
1. Azure Portal > App Registrations > tu app
2. API Permissions > Add Permission > Microsoft Graph > Application
3. Agregar Mail.Read y Mail.ReadBasic.All
4. ⚠️ IMPORTANTE: Clic en "Grant admin consent"

---

## PASO 4: Distribuir archivos
- `admin.html` → Solo para el administrador
- `agente.html` → Para las 8 personas del equipo

Puedes abrirlos directamente haciendo doble clic, 
o subirlos a Netlify/GitHub Pages para acceso por URL.

---

## FLUJO NORMAL DE USO

### Admin:
1. Abrir admin.html
2. Crear agentes (menú + Nuevo Agente)
3. Clic en "Sincronizar" para traer correos nuevos
4. El sistema los asigna automáticamente por tráfico
5. Se puede reasignar manualmente desde el detalle

### Agente:
1. Abrir agente.html
2. Ingresar correo corporativo + PIN de 4 dígitos
3. Ver correos asignados en "Mis Correos Activos"
4. Abrir, leer cuerpo completo, agregar notas
5. Marcar como Gestionado o Solucionado

---

## AUTO-SINCRONIZACIÓN
- Ambos archivos se auto-actualizan cada 5 minutos
- También hay botón manual "Sincronizar / Actualizar"

---

## ARCHIVOS
```
admin.html         → Panel administrador
agente.html        → Vista de agentes  
setup_supabase.sql → SQL para crear tablas
README.md          → Esta guía
```
