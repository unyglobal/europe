// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"miercurea-ciuc","repository":"europe","path":"romania/harghita-county/miercurea-ciuc","depth":3,"parent":"romania/harghita-county","children":["cormos","ligatu","subpadure","tiba"]});
export const childModules = Object.freeze({"cormos":"./cormos/cormos.js","ligatu":"./ligatu/ligatu.js","subpadure":"./subpadure/subpadure.js","tiba":"./tiba/tiba.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
