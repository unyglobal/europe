// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bekes-county","repository":"europe","path":"hungary/bekes-county","depth":2,"parent":"hungary","children":["bekes","bekescsaba","gyomaendrod","gyula","oroshaza","szarvas"]});
export const childModules = Object.freeze({"bekes":"./bekes/bekes.js","bekescsaba":"./bekescsaba/bekescsaba.js","gyomaendrod":"./gyomaendrod/gyomaendrod.js","gyula":"./gyula/gyula.js","oroshaza":"./oroshaza/oroshaza.js","szarvas":"./szarvas/szarvas.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
