// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"prestwich","repository":"europe","path":"united-kingdom/england/prestwich","depth":3,"parent":"united-kingdom/england","children":["prestwich-bank"]});
export const childModules = Object.freeze({"prestwich-bank":"./prestwich-bank/prestwich-bank.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
