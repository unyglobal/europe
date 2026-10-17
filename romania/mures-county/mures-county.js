// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mures-county","repository":"europe","path":"romania/mures-county","depth":2,"parent":"romania","children":["ludus","reghin-sat","sighisoara","targu-mures","tarnaveni"]});
export const childModules = Object.freeze({"ludus":"./ludus/ludus.js","reghin-sat":"./reghin-sat/reghin-sat.js","sighisoara":"./sighisoara/sighisoara.js","targu-mures":"./targu-mures/targu-mures.js","tarnaveni":"./tarnaveni/tarnaveni.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
