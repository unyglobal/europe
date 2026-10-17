// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"plzen-region","repository":"europe","path":"czechia/plzen-region","depth":2,"parent":"czechia","children":["klatovy","pilsen"]});
export const childModules = Object.freeze({"klatovy":"./klatovy/klatovy.js","pilsen":"./pilsen/pilsen.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
