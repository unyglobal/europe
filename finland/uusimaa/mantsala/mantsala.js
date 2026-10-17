// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mantsala","repository":"europe","path":"finland/uusimaa/mantsala","depth":3,"parent":"finland/uusimaa","children":["arvonpelto","haapa-junttila","liettonoja","mallamaki","meijerinpelto"]});
export const childModules = Object.freeze({"arvonpelto":"./arvonpelto/arvonpelto.js","haapa-junttila":"./haapa-junttila/haapa-junttila.js","liettonoja":"./liettonoja/liettonoja.js","mallamaki":"./mallamaki/mallamaki.js","meijerinpelto":"./meijerinpelto/meijerinpelto.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
