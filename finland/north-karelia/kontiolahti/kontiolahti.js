// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kontiolahti","repository":"europe","path":"finland/north-karelia/kontiolahti","depth":3,"parent":"finland/north-karelia","children":["alapiha","kontupelto","vaskela","ylapiha"]});
export const childModules = Object.freeze({"alapiha":"./alapiha/alapiha.js","kontupelto":"./kontupelto/kontupelto.js","vaskela":"./vaskela/vaskela.js","ylapiha":"./ylapiha/ylapiha.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
