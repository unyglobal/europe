// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kempston","repository":"europe","path":"united-kingdom/england/kempston","depth":3,"parent":"united-kingdom/england","children":["pilgrims-rest"]});
export const childModules = Object.freeze({"pilgrims-rest":"./pilgrims-rest/pilgrims-rest.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
