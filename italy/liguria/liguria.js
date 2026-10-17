// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"liguria","repository":"europe","path":"italy/liguria","depth":2,"parent":"italy","children":["albenga","chiavari","genoa","imperia","la-spezia","rapallo","sanremo","sarzana","savona","sestri-levante","ventimiglia"]});
export const childModules = Object.freeze({"albenga":"./albenga/albenga.js","chiavari":"./chiavari/chiavari.js","genoa":"./genoa/genoa.js","imperia":"./imperia/imperia.js","la-spezia":"./la-spezia/la-spezia.js","rapallo":"./rapallo/rapallo.js","sanremo":"./sanremo/sanremo.js","sarzana":"./sarzana/sarzana.js","savona":"./savona/savona.js","sestri-levante":"./sestri-levante/sestri-levante.js","ventimiglia":"./ventimiglia/ventimiglia.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
