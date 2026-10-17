// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"doetinchem","repository":"europe","path":"netherlands/gelderland/doetinchem","depth":3,"parent":"netherlands/gelderland","children":["de-hoop"]});
export const childModules = Object.freeze({"de-hoop":"./de-hoop/de-hoop.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
