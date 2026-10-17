// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"farnworth","repository":"europe","path":"united-kingdom/england/farnworth","depth":3,"parent":"united-kingdom/england","children":["dixon-green","moses-gate"]});
export const childModules = Object.freeze({"dixon-green":"./dixon-green/dixon-green.js","moses-gate":"./moses-gate/moses-gate.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
