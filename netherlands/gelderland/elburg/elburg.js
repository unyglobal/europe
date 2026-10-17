// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"elburg","repository":"europe","path":"netherlands/gelderland/elburg","depth":3,"parent":"netherlands/gelderland","children":["de-vrijheid","oosthoek"]});
export const childModules = Object.freeze({"de-vrijheid":"./de-vrijheid/de-vrijheid.js","oosthoek":"./oosthoek/oosthoek.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
