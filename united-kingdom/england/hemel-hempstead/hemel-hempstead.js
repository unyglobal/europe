// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hemel-hempstead","repository":"europe","path":"united-kingdom/england/hemel-hempstead","depth":3,"parent":"united-kingdom/england","children":["adeyfield"]});
export const childModules = Object.freeze({"adeyfield":"./adeyfield/adeyfield.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
