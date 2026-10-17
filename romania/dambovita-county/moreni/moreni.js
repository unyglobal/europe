// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"moreni","repository":"europe","path":"romania/dambovita-county/moreni","depth":3,"parent":"romania/dambovita-county","children":["schela-mare"]});
export const childModules = Object.freeze({"schela-mare":"./schela-mare/schela-mare.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
