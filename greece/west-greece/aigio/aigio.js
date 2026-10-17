// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"aigio","repository":"europe","path":"greece/west-greece/aigio","depth":3,"parent":"greece/west-greece","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
