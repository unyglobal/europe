// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hradec-kralove-region","repository":"europe","path":"czechia/hradec-kralove-region","depth":2,"parent":"czechia","children":["dvur-kralove-nad-labem","hradec-kralove","jicin","nachod","trutnov"]});
export const childModules = Object.freeze({"dvur-kralove-nad-labem":"./dvur-kralove-nad-labem/dvur-kralove-nad-labem.js","hradec-kralove":"./hradec-kralove/hradec-kralove.js","jicin":"./jicin/jicin.js","nachod":"./nachod/nachod.js","trutnov":"./trutnov/trutnov.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
