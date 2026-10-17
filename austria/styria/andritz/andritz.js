// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"andritz","repository":"europe","path":"austria/styria/andritz","depth":3,"parent":"austria/styria","children":["neustift","ober-andritz"]});
export const childModules = Object.freeze({"neustift":"./neustift/neustift.js","ober-andritz":"./ober-andritz/ober-andritz.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
