// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kaltenkirchen","repository":"europe","path":"germany/schleswig-holstein/kaltenkirchen","depth":3,"parent":"germany/schleswig-holstein","children":["kretelmoor"]});
export const childModules = Object.freeze({"kretelmoor":"./kretelmoor/kretelmoor.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
