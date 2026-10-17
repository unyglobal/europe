// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"borgo-dei-pescatori","repository":"europe","path":"italy/lazio/casal-palocco/borgo-dei-pescatori","depth":4,"parent":"italy/lazio/casal-palocco","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
