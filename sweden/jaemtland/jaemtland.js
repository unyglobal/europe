// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jaemtland","repository":"europe","path":"sweden/jaemtland","depth":2,"parent":"sweden","children":["ostersund"]});
export const childModules = Object.freeze({"ostersund":"./ostersund/ostersund.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
