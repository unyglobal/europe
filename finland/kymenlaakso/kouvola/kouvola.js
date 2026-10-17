// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kouvola","repository":"europe","path":"finland/kymenlaakso/kouvola","depth":3,"parent":"finland/kymenlaakso","children":["central-kouvola","putkinotko","sakaristonmaki","sarkola"]});
export const childModules = Object.freeze({"central-kouvola":"./central-kouvola/central-kouvola.js","putkinotko":"./putkinotko/putkinotko.js","sakaristonmaki":"./sakaristonmaki/sakaristonmaki.js","sarkola":"./sarkola/sarkola.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
