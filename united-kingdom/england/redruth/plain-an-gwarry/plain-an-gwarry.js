// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"plain-an-gwarry","repository":"europe","path":"united-kingdom/england/redruth/plain-an-gwarry","depth":4,"parent":"united-kingdom/england/redruth","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
