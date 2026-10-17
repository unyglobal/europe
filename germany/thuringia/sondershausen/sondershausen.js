// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sondershausen","repository":"europe","path":"germany/thuringia/sondershausen","depth":3,"parent":"germany/thuringia","children":["schersental"]});
export const childModules = Object.freeze({"schersental":"./schersental/schersental.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
