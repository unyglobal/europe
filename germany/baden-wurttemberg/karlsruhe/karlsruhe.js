// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"karlsruhe","repository":"europe","path":"germany/baden-wurttemberg/karlsruhe","depth":3,"parent":"germany/baden-wurttemberg","children":["innenstadt"]});
export const childModules = Object.freeze({"innenstadt":"./innenstadt/innenstadt.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
