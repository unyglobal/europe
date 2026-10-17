// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"teleorman-county","repository":"europe","path":"romania/teleorman-county","depth":2,"parent":"romania","children":["alexandria","rosiorii-de-vede","turnu-magurele","zimnicea"]});
export const childModules = Object.freeze({"alexandria":"./alexandria/alexandria.js","rosiorii-de-vede":"./rosiorii-de-vede/rosiorii-de-vede.js","turnu-magurele":"./turnu-magurele/turnu-magurele.js","zimnicea":"./zimnicea/zimnicea.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
