// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"north-aegean","repository":"europe","path":"greece/north-aegean","depth":2,"parent":"greece","children":["chios","mytilene"]});
export const childModules = Object.freeze({"chios":"./chios/chios.js","mytilene":"./mytilene/mytilene.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
