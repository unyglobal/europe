// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"arcos-de-valdevez","repository":"europe","path":"portugal/viana-do-castelo/arcos-de-valdevez","depth":3,"parent":"portugal/viana-do-castelo","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
