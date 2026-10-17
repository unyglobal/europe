// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"west-macedonia","repository":"europe","path":"greece/west-macedonia","depth":2,"parent":"greece","children":["florina","kozani","ptolemaida"]});
export const childModules = Object.freeze({"florina":"./florina/florina.js","kozani":"./kozani/kozani.js","ptolemaida":"./ptolemaida/ptolemaida.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
