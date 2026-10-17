// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bryanka","repository":"europe","path":"ukraine/luhansk/bryanka","depth":3,"parent":"ukraine/luhansk","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
