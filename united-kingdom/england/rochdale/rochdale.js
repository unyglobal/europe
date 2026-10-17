// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"rochdale","repository":"europe","path":"united-kingdom/england/rochdale","depth":3,"parent":"united-kingdom/england","children":["mitchell-hey","town-head"]});
export const childModules = Object.freeze({"mitchell-hey":"./mitchell-hey/mitchell-hey.js","town-head":"./town-head/town-head.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
