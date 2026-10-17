// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kolin","repository":"europe","path":"czechia/central-bohemia/kolin","depth":3,"parent":"czechia/central-bohemia","children":["zalabi"]});
export const childModules = Object.freeze({"zalabi":"./zalabi/zalabi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
