// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"venice","repository":"europe","path":"italy/veneto/venice","depth":3,"parent":"italy/veneto","children":["cannaregio","dorsoduro","rialto","san-marco","sestiere-di-san-polo"]});
export const childModules = Object.freeze({"cannaregio":"./cannaregio/cannaregio.js","dorsoduro":"./dorsoduro/dorsoduro.js","rialto":"./rialto/rialto.js","san-marco":"./san-marco/san-marco.js","sestiere-di-san-polo":"./sestiere-di-san-polo/sestiere-di-san-polo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
