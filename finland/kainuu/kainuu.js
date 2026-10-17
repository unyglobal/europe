// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kainuu","repository":"europe","path":"finland/kainuu","depth":2,"parent":"finland","children":["kajaani"]});
export const childModules = Object.freeze({"kajaani":"./kajaani/kajaani.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
