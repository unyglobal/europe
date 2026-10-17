// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"eggenstein-leopoldshafen","repository":"europe","path":"germany/baden-wurttemberg/eggenstein-leopoldshafen","depth":3,"parent":"germany/baden-wurttemberg","children":["leopoldshafen"]});
export const childModules = Object.freeze({"leopoldshafen":"./leopoldshafen/leopoldshafen.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
