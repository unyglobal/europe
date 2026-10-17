// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kryukiv","repository":"europe","path":"ukraine/poltava/kryukiv","depth":3,"parent":"ukraine/poltava","children":["typakovska-levada"]});
export const childModules = Object.freeze({"typakovska-levada":"./typakovska-levada/typakovska-levada.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
