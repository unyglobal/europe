// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"stuttgart","repository":"europe","path":"germany/baden-wurttemberg/stuttgart","depth":3,"parent":"germany/baden-wurttemberg","children":["hauptbahnhof","neue-vorstadt","universitat"]});
export const childModules = Object.freeze({"hauptbahnhof":"./hauptbahnhof/hauptbahnhof.js","neue-vorstadt":"./neue-vorstadt/neue-vorstadt.js","universitat":"./universitat/universitat.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
