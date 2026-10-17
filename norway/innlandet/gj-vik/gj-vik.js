// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gj-vik","repository":"europe","path":"norway/innlandet/gj-vik","depth":3,"parent":"norway/innlandet","children":["kallerud"]});
export const childModules = Object.freeze({"kallerud":"./kallerud/kallerud.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
