// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"extremadura","repository":"europe","path":"spain/extremadura","depth":2,"parent":"spain","children":["almendralejo","badajoz","caceres","don-benito","merida","montijo","navalmoral-de-la-mata","plasencia","villanueva-de-la-serena","zafra"]});
export const childModules = Object.freeze({"almendralejo":"./almendralejo/almendralejo.js","badajoz":"./badajoz/badajoz.js","caceres":"./caceres/caceres.js","don-benito":"./don-benito/don-benito.js","merida":"./merida/merida.js","montijo":"./montijo/montijo.js","navalmoral-de-la-mata":"./navalmoral-de-la-mata/navalmoral-de-la-mata.js","plasencia":"./plasencia/plasencia.js","villanueva-de-la-serena":"./villanueva-de-la-serena/villanueva-de-la-serena.js","zafra":"./zafra/zafra.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
