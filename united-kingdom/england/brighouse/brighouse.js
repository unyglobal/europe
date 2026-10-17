// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"brighouse","repository":"europe","path":"united-kingdom/england/brighouse","depth":3,"parent":"united-kingdom/england","children":["brookfoot","slead-syke"]});
export const childModules = Object.freeze({"brookfoot":"./brookfoot/brookfoot.js","slead-syke":"./slead-syke/slead-syke.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
