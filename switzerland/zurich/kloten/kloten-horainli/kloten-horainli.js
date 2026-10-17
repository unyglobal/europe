// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kloten-horainli","repository":"europe","path":"switzerland/zurich/kloten/kloten-horainli","depth":4,"parent":"switzerland/zurich/kloten","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
