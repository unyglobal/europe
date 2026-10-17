// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bedworth","repository":"europe","path":"united-kingdom/england/bedworth","depth":3,"parent":"united-kingdom/england","children":["black-bank","coalpit-field","mount-pleasant"]});
export const childModules = Object.freeze({"black-bank":"./black-bank/black-bank.js","coalpit-field":"./coalpit-field/coalpit-field.js","mount-pleasant":"./mount-pleasant/mount-pleasant.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
