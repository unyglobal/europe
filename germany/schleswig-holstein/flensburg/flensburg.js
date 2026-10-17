// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"flensburg","repository":"europe","path":"germany/schleswig-holstein/flensburg","depth":3,"parent":"germany/schleswig-holstein","children":["altstadt"]});
export const childModules = Object.freeze({"altstadt":"./altstadt/altstadt.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
