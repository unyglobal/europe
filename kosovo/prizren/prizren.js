// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"prizren","repository":"europe","path":"kosovo/prizren","depth":2,"parent":"kosovo","children":["dragash","llazice","suva-reka"]});
export const childModules = Object.freeze({"dragash":"./dragash/dragash.js","llazice":"./llazice/llazice.js","suva-reka":"./suva-reka/suva-reka.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
