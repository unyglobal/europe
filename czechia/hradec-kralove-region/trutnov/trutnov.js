// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"trutnov","repository":"europe","path":"czechia/hradec-kralove-region/trutnov","depth":3,"parent":"czechia/hradec-kralove-region","children":["chriblice"]});
export const childModules = Object.freeze({"chriblice":"./chriblice/chriblice.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
