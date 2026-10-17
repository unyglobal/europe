// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pozega-slavonia","repository":"europe","path":"croatia/pozega-slavonia","depth":2,"parent":"croatia","children":["pozega"]});
export const childModules = Object.freeze({"pozega":"./pozega/pozega.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
