// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"genoa","repository":"europe","path":"italy/liguria/genoa","depth":3,"parent":"italy/liguria","children":["carignano","foce"]});
export const childModules = Object.freeze({"carignano":"./carignano/carignano.js","foce":"./foce/foce.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
