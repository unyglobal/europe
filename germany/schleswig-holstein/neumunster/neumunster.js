// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"neumunster","repository":"europe","path":"germany/schleswig-holstein/neumunster","depth":3,"parent":"germany/schleswig-holstein","children":["stadtmitte"]});
export const childModules = Object.freeze({"stadtmitte":"./stadtmitte/stadtmitte.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
