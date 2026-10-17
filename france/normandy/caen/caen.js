// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"caen","repository":"europe","path":"france/normandy/caen","depth":3,"parent":"france/normandy","children":["hastings","saint-jean"]});
export const childModules = Object.freeze({"hastings":"./hastings/hastings.js","saint-jean":"./saint-jean/saint-jean.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
