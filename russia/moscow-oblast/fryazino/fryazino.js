// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"fryazino","repository":"europe","path":"russia/moscow-oblast/fryazino","depth":3,"parent":"russia/moscow-oblast","children":["leninskaya-sloboda"]});
export const childModules = Object.freeze({"leninskaya-sloboda":"./leninskaya-sloboda/leninskaya-sloboda.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
