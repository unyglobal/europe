// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"peloponnese","repository":"europe","path":"greece/peloponnese","depth":2,"parent":"greece","children":["argos","kalamata","korinthos","sparta","tripoli"]});
export const childModules = Object.freeze({"argos":"./argos/argos.js","kalamata":"./kalamata/kalamata.js","korinthos":"./korinthos/korinthos.js","sparta":"./sparta/sparta.js","tripoli":"./tripoli/tripoli.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
