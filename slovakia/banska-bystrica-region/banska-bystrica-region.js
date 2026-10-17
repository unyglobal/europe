// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"banska-bystrica-region","repository":"europe","path":"slovakia/banska-bystrica-region","depth":2,"parent":"slovakia","children":["banska-bystrica","brezno","lucenec","rimavska-sobota","ziar-nad-hronom","zvolen"]});
export const childModules = Object.freeze({"banska-bystrica":"./banska-bystrica/banska-bystrica.js","brezno":"./brezno/brezno.js","lucenec":"./lucenec/lucenec.js","rimavska-sobota":"./rimavska-sobota/rimavska-sobota.js","ziar-nad-hronom":"./ziar-nad-hronom/ziar-nad-hronom.js","zvolen":"./zvolen/zvolen.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
