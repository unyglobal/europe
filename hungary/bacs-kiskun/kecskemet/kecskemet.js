// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kecskemet","repository":"europe","path":"hungary/bacs-kiskun/kecskemet","depth":3,"parent":"hungary/bacs-kiskun","children":["alsocsalanos","alsoszekto","felsoszekto","mehestelep"]});
export const childModules = Object.freeze({"alsocsalanos":"./alsocsalanos/alsocsalanos.js","alsoszekto":"./alsoszekto/alsoszekto.js","felsoszekto":"./felsoszekto/felsoszekto.js","mehestelep":"./mehestelep/mehestelep.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
