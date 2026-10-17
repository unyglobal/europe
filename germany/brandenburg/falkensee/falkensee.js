// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"falkensee","repository":"europe","path":"germany/brandenburg/falkensee","depth":3,"parent":"germany/brandenburg","children":["falkenhagen-west","neuseegefeld","seegefeld"]});
export const childModules = Object.freeze({"falkenhagen-west":"./falkenhagen-west/falkenhagen-west.js","neuseegefeld":"./neuseegefeld/neuseegefeld.js","seegefeld":"./seegefeld/seegefeld.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
