// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"county-of-osijek-baranja","repository":"europe","path":"croatia/county-of-osijek-baranja","depth":2,"parent":"croatia","children":["akovo","osijek"]});
export const childModules = Object.freeze({"akovo":"./akovo/akovo.js","osijek":"./osijek/osijek.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
