
# Ejercicio 1 - Gestión de Citas para Taller Mecánico

 Es una aplicación móvil desarrollada con React Native y Expo que permite a los talleres mecánicos gestionar citas de clientes, llevar control de servicios y mantener un registro de clientes y vehículos.

---

## Características principales

- Crear, editar y eliminar citas.
- Visualización de historial de citas.
- Interfaz intuitiva y responsiva para dispositivos móviles.

---

## Requisitos

Antes de ejecutar la aplicación, asegúrate de tener instaladas las siguientes herramientas

- [Expo CLI](httpsdocs.expo.devget-startedinstallation)
- Un emulador de AndroidiOS o un dispositivo físico con la app Expo Go

---

## Instalación

Sigue estos pasos para ejecutar la aplicación localmente

1. Clonar el repositorio

```bash
git clone httpsgithub.comtu-usuarioTallerApp.git
cd TallerApp
````

2. Instalar dependencias

Con npm

```bash
npm install
```

O con Yarn

```bash
yarn install
```

 ⚠️ Asegúrate de que tu computadora y tu dispositivo móvil estén en la misma red Wi-Fi para poder conectarse al backend local.

3. Iniciar el servidor Metro

```bash
npm start
```

Esto abrirá la interfaz de Expo en tu navegador. Puedes escanear el código QR con la app Expo Go para ejecutar la app en tu dispositivo.

4. Iniciar la aplicación en AndroidiOS

 Para Android

```bash
npx react-native run-android
```

 Para iOS

```bash
npx react-native run-ios
```

 Nota Para iOS es necesario macOS con Xcode instalado.

---

## Dependencias principales

 react-native Framework principal para desarrollo móvil.
 expo Entorno de desarrollo rápido y herramientas de build.
 react-navigation Navegación entre pantallas.

(Otras dependencias pueden encontrarse en el `package.json`.)

---

## Uso

1. Abre la app en tu dispositivo mediante Expo Go.
2. Registra clientes y vehículos.
3. Crea nuevas citas indicando fecha, hora, cliente y tipo de servicio.
4. Visualiza las citas pendientes o el historial completo.
5. Edita o elimina citas según sea necesario.

---

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---
