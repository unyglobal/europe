// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"larnaka","repository":"europe","path":"cyprus/larnaka","depth":2,"parent":"cyprus","children":["aradippou","larnaca"]});
export const childModules = Object.freeze({"aradippou":"./aradippou/aradippou.js","larnaca":"./larnaca/larnaca.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
