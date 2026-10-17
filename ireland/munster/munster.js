// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"munster","repository":"europe","path":"ireland/munster","depth":2,"parent":"ireland","children":["ballincollig","carrigaline","cluain-meala","cork","douglas","ennis","limerick","tralee","waterford"]});
export const childModules = Object.freeze({"ballincollig":"./ballincollig/ballincollig.js","carrigaline":"./carrigaline/carrigaline.js","cluain-meala":"./cluain-meala/cluain-meala.js","cork":"./cork/cork.js","douglas":"./douglas/douglas.js","ennis":"./ennis/ennis.js","limerick":"./limerick/limerick.js","tralee":"./tralee/tralee.js","waterford":"./waterford/waterford.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
