// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kaunas","repository":"europe","path":"lithuania/kaunas","depth":2,"parent":"lithuania","children":["aleksotas","dainava-kaunas","eiguliai","jonava","kedainiai","silainiai"]});
export const childModules = Object.freeze({"aleksotas":"./aleksotas/aleksotas.js","dainava-kaunas":"./dainava-kaunas/dainava-kaunas.js","eiguliai":"./eiguliai/eiguliai.js","jonava":"./jonava/jonava.js","kedainiai":"./kedainiai/kedainiai.js","silainiai":"./silainiai/silainiai.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
