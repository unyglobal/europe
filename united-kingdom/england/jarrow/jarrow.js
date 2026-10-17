// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jarrow","repository":"europe","path":"united-kingdom/england/jarrow","depth":3,"parent":"united-kingdom/england","children":["east-jarrow"]});
export const childModules = Object.freeze({"east-jarrow":"./east-jarrow/east-jarrow.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
