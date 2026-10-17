// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"raionul-edinet","repository":"europe","path":"moldova/raionul-edinet","depth":2,"parent":"moldova","children":["edinet"]});
export const childModules = Object.freeze({"edinet":"./edinet/edinet.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
