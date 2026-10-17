// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"corby","repository":"europe","path":"united-kingdom/england/corby","depth":3,"parent":"united-kingdom/england","children":["corby-old-village"]});
export const childModules = Object.freeze({"corby-old-village":"./corby-old-village/corby-old-village.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
