// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ilfov","repository":"europe","path":"romania/ilfov","depth":2,"parent":"romania","children":["buftea","pantelimon","popesti-leordeni","voluntari"]});
export const childModules = Object.freeze({"buftea":"./buftea/buftea.js","pantelimon":"./pantelimon/pantelimon.js","popesti-leordeni":"./popesti-leordeni/popesti-leordeni.js","voluntari":"./voluntari/voluntari.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
