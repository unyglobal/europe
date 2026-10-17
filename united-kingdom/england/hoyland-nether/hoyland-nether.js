// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hoyland-nether","repository":"europe","path":"united-kingdom/england/hoyland-nether","depth":3,"parent":"united-kingdom/england","children":["hoyland-common","milton"]});
export const childModules = Object.freeze({"hoyland-common":"./hoyland-common/hoyland-common.js","milton":"./milton/milton.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
