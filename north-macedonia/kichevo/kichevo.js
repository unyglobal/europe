// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kichevo","repository":"europe","path":"north-macedonia/kichevo","depth":2,"parent":"north-macedonia","children":["kicevo"]});
export const childModules = Object.freeze({"kicevo":"./kicevo/kicevo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
