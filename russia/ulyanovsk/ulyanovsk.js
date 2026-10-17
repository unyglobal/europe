// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ulyanovsk","repository":"europe","path":"russia/ulyanovsk","depth":2,"parent":"russia","children":["barysh","dimitrovgrad","inza","novoul-yanovsk"]});
export const childModules = Object.freeze({"barysh":"./barysh/barysh.js","dimitrovgrad":"./dimitrovgrad/dimitrovgrad.js","inza":"./inza/inza.js","novoul-yanovsk":"./novoul-yanovsk/novoul-yanovsk.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
