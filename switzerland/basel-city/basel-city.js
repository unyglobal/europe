// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"basel-city","repository":"europe","path":"switzerland/basel-city","depth":2,"parent":"switzerland","children":["basel","riehen"]});
export const childModules = Object.freeze({"basel":"./basel/basel.js","riehen":"./riehen/riehen.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
