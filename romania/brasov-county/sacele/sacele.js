// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sacele","repository":"europe","path":"romania/brasov-county/sacele","depth":3,"parent":"romania/brasov-county","children":["electroprecizia","santu-vechi","sub-obrej-tei"]});
export const childModules = Object.freeze({"electroprecizia":"./electroprecizia/electroprecizia.js","santu-vechi":"./santu-vechi/santu-vechi.js","sub-obrej-tei":"./sub-obrej-tei/sub-obrej-tei.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
