// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"olt","repository":"europe","path":"romania/olt","depth":2,"parent":"romania","children":["bals","caracal","corabia","slatina"]});
export const childModules = Object.freeze({"bals":"./bals/bals.js","caracal":"./caracal/caracal.js","corabia":"./corabia/corabia.js","slatina":"./slatina/slatina.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
