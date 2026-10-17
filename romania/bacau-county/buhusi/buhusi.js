// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"buhusi","repository":"europe","path":"romania/bacau-county/buhusi","depth":3,"parent":"romania/bacau-county","children":["budesti","budestii-buhusi","para-runcu","schitu-runcu"]});
export const childModules = Object.freeze({"budesti":"./budesti/budesti.js","budestii-buhusi":"./budestii-buhusi/budestii-buhusi.js","para-runcu":"./para-runcu/para-runcu.js","schitu-runcu":"./schitu-runcu/schitu-runcu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
