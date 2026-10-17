// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"piecki-migowo","repository":"europe","path":"poland/pomerania/piecki-migowo","depth":3,"parent":"poland/pomerania","children":["piecki"]});
export const childModules = Object.freeze({"piecki":"./piecki/piecki.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
