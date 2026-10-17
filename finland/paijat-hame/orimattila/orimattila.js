// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"orimattila","repository":"europe","path":"finland/paijat-hame/orimattila","depth":3,"parent":"finland/paijat-hame","children":["jokela","myllyla"]});
export const childModules = Object.freeze({"jokela":"./jokela/jokela.js","myllyla":"./myllyla/myllyla.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
