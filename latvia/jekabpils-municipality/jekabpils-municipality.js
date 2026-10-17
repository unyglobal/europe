// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jekabpils-municipality","repository":"europe","path":"latvia/jekabpils-municipality","depth":2,"parent":"latvia","children":["jekabpils"]});
export const childModules = Object.freeze({"jekabpils":"./jekabpils/jekabpils.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
