// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"becontree","repository":"europe","path":"united-kingdom/england/becontree","depth":3,"parent":"united-kingdom/england","children":["parsloes"]});
export const childModules = Object.freeze({"parsloes":"./parsloes/parsloes.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
