// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kronoberg","repository":"europe","path":"sweden/kronoberg","depth":2,"parent":"sweden","children":["ljungby","vaxjo"]});
export const childModules = Object.freeze({"ljungby":"./ljungby/ljungby.js","vaxjo":"./vaxjo/vaxjo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
