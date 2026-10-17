// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"yany-kapu","repository":"europe","path":"ukraine/crimea/yany-kapu","depth":3,"parent":"ukraine/crimea","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
