// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"neamt-county","repository":"europe","path":"romania/neamt-county","depth":2,"parent":"romania","children":["piatra-neamt","roman","targu-neamt"]});
export const childModules = Object.freeze({"piatra-neamt":"./piatra-neamt/piatra-neamt.js","roman":"./roman/roman.js","targu-neamt":"./targu-neamt/targu-neamt.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
