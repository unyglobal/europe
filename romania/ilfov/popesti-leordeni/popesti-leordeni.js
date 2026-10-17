// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"popesti-leordeni","repository":"europe","path":"romania/ilfov/popesti-leordeni","depth":3,"parent":"romania/ilfov","children":["popesti-noi","popesti-pavlicheni"]});
export const childModules = Object.freeze({"popesti-noi":"./popesti-noi/popesti-noi.js","popesti-pavlicheni":"./popesti-pavlicheni/popesti-pavlicheni.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
