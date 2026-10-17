// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"likhobory","repository":"europe","path":"russia/moscow/likhobory","depth":3,"parent":"russia/moscow","children":["likhobory-verkhniye"]});
export const childModules = Object.freeze({"likhobory-verkhniye":"./likhobory-verkhniye/likhobory-verkhniye.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
