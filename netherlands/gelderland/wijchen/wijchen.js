// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"wijchen","repository":"europe","path":"netherlands/gelderland/wijchen","depth":3,"parent":"netherlands/gelderland","children":["valendries"]});
export const childModules = Object.freeze({"valendries":"./valendries/valendries.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
