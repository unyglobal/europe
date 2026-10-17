// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"belem","repository":"europe","path":"portugal/lisbon/belem","depth":3,"parent":"portugal/lisbon","children":["santa-maria-de-belem"]});
export const childModules = Object.freeze({"santa-maria-de-belem":"./santa-maria-de-belem/santa-maria-de-belem.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
