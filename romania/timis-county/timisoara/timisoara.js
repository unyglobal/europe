// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"timisoara","repository":"europe","path":"romania/timis-county/timisoara","depth":3,"parent":"romania/timis-county","children":["besenic","bogda","colonia-banschi","colonia-kende","crisana","hanu-rosu"]});
export const childModules = Object.freeze({"besenic":"./besenic/besenic.js","bogda":"./bogda/bogda.js","colonia-banschi":"./colonia-banschi/colonia-banschi.js","colonia-kende":"./colonia-kende/colonia-kende.js","crisana":"./crisana/crisana.js","hanu-rosu":"./hanu-rosu/hanu-rosu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
