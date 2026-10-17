// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"opstina-niksic","repository":"europe","path":"montenegro/opstina-niksic","depth":2,"parent":"montenegro","children":["niksic"]});
export const childModules = Object.freeze({"niksic":"./niksic/niksic.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
