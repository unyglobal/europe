// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"singerei","repository":"europe","path":"moldova/singerei","depth":2,"parent":"moldova","children":["bilicenii-vechi"]});
export const childModules = Object.freeze({"bilicenii-vechi":"./bilicenii-vechi/bilicenii-vechi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
