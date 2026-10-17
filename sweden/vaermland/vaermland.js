// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"vaermland","repository":"europe","path":"sweden/vaermland","depth":2,"parent":"sweden","children":["karlstad","kristinehamn"]});
export const childModules = Object.freeze({"karlstad":"./karlstad/karlstad.js","kristinehamn":"./kristinehamn/kristinehamn.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
