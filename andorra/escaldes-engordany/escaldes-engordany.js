// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"escaldes-engordany","repository":"europe","path":"andorra/escaldes-engordany","depth":2,"parent":"andorra","children":["les-escaldes"]});
export const childModules = Object.freeze({"les-escaldes":"./les-escaldes/les-escaldes.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
