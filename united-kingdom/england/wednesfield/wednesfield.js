// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"wednesfield","repository":"europe","path":"united-kingdom/england/wednesfield","depth":3,"parent":"united-kingdom/england","children":["march-end","neachells","new-cross","nordley-hill"]});
export const childModules = Object.freeze({"march-end":"./march-end/march-end.js","neachells":"./neachells/neachells.js","new-cross":"./new-cross/new-cross.js","nordley-hill":"./nordley-hill/nordley-hill.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
