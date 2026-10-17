// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tirana","repository":"europe","path":"albania/tirana","depth":2,"parent":"albania","children":["kavaje"]});
export const childModules = Object.freeze({"kavaje":"./kavaje/kavaje.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
