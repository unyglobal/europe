// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"k-ge","repository":"europe","path":"denmark/zealand/k-ge","depth":3,"parent":"denmark/zealand","children":["s-nder-k-ge"]});
export const childModules = Object.freeze({"s-nder-k-ge":"./s-nder-k-ge/s-nder-k-ge.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
