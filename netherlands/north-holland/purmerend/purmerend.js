// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"purmerend","repository":"europe","path":"netherlands/north-holland/purmerend","depth":3,"parent":"netherlands/north-holland","children":["de-gors","wheermolen"]});
export const childModules = Object.freeze({"de-gors":"./de-gors/de-gors.js","wheermolen":"./wheermolen/wheermolen.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
