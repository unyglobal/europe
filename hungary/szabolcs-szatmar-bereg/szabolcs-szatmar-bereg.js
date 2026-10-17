// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"szabolcs-szatmar-bereg","repository":"europe","path":"hungary/szabolcs-szatmar-bereg","depth":2,"parent":"hungary","children":["kisvarda","mateszalka","nyiregyhaza"]});
export const childModules = Object.freeze({"kisvarda":"./kisvarda/kisvarda.js","mateszalka":"./mateszalka/mateszalka.js","nyiregyhaza":"./nyiregyhaza/nyiregyhaza.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
