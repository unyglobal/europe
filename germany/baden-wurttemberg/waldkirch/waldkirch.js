// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"waldkirch","repository":"europe","path":"germany/baden-wurttemberg/waldkirch","depth":3,"parent":"germany/baden-wurttemberg","children":["kollnau"]});
export const childModules = Object.freeze({"kollnau":"./kollnau/kollnau.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
