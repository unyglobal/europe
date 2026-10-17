// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kingston-upon-hull","repository":"europe","path":"united-kingdom/england/kingston-upon-hull","depth":3,"parent":"united-kingdom/england","children":["garrison-side"]});
export const childModules = Object.freeze({"garrison-side":"./garrison-side/garrison-side.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
