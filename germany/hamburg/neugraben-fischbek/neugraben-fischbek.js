// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"neugraben-fischbek","repository":"europe","path":"germany/hamburg/neugraben-fischbek","depth":3,"parent":"germany/hamburg","children":["fischbek"]});
export const childModules = Object.freeze({"fischbek":"./fischbek/fischbek.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
