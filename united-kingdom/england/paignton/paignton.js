// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"paignton","repository":"europe","path":"united-kingdom/england/paignton","depth":3,"parent":"united-kingdom/england","children":["st-michaels"]});
export const childModules = Object.freeze({"st-michaels":"./st-michaels/st-michaels.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
