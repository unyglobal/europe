// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"crewe","repository":"europe","path":"united-kingdom/england/crewe","depth":3,"parent":"united-kingdom/england","children":["the-valley"]});
export const childModules = Object.freeze({"the-valley":"./the-valley/the-valley.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
