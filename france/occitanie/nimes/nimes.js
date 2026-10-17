// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nimes","repository":"europe","path":"france/occitanie/nimes","depth":3,"parent":"france/occitanie","children":["faubourg"]});
export const childModules = Object.freeze({"faubourg":"./faubourg/faubourg.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
