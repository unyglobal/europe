// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"friesland","repository":"europe","path":"netherlands/friesland","depth":2,"parent":"netherlands","children":["drachten","harlingen","heerenveen","leeuwarden","sneek"]});
export const childModules = Object.freeze({"drachten":"./drachten/drachten.js","harlingen":"./harlingen/harlingen.js","heerenveen":"./heerenveen/heerenveen.js","leeuwarden":"./leeuwarden/leeuwarden.js","sneek":"./sneek/sneek.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
