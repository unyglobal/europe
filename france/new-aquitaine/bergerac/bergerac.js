// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bergerac","repository":"europe","path":"france/new-aquitaine/bergerac","depth":3,"parent":"france/new-aquitaine","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
