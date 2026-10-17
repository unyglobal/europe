// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"west-greece","repository":"europe","path":"greece/west-greece","depth":2,"parent":"greece","children":["agrinio","aigio","amaliada","patra","pyrgos"]});
export const childModules = Object.freeze({"agrinio":"./agrinio/agrinio.js","aigio":"./aigio/aigio.js","amaliada":"./amaliada/amaliada.js","patra":"./patra/patra.js","pyrgos":"./pyrgos/pyrgos.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
