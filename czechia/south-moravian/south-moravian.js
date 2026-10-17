// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"south-moravian","repository":"europe","path":"czechia/south-moravian","depth":2,"parent":"czechia","children":["blansko","breclav","brno","brno-stred","bystrc","hodonin","kralovo-pole","lisen","vyskov","zabovresky","zidenice","znojmo"]});
export const childModules = Object.freeze({"blansko":"./blansko/blansko.js","breclav":"./breclav/breclav.js","brno":"./brno/brno.js","brno-stred":"./brno-stred/brno-stred.js","bystrc":"./bystrc/bystrc.js","hodonin":"./hodonin/hodonin.js","kralovo-pole":"./kralovo-pole/kralovo-pole.js","lisen":"./lisen/lisen.js","vyskov":"./vyskov/vyskov.js","zabovresky":"./zabovresky/zabovresky.js","zidenice":"./zidenice/zidenice.js","znojmo":"./znojmo/znojmo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
