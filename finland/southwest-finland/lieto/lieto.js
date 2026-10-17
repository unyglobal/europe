// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lieto","repository":"europe","path":"finland/southwest-finland/lieto","depth":3,"parent":"finland/southwest-finland","children":["jokila","kisakallio","metsaniemi"]});
export const childModules = Object.freeze({"jokila":"./jokila/jokila.js","kisakallio":"./kisakallio/kisakallio.js","metsaniemi":"./metsaniemi/metsaniemi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
