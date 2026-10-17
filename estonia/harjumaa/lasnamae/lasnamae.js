// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lasnamae","repository":"europe","path":"estonia/harjumaa/lasnamae","depth":3,"parent":"estonia/harjumaa","children":["tondiraba"]});
export const childModules = Object.freeze({"tondiraba":"./tondiraba/tondiraba.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
