// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kaposvar","repository":"europe","path":"hungary/somogy-county/kaposvar","depth":3,"parent":"hungary/somogy-county","children":["ivanfaret","kisgatidulo","kortonyeibukk","lonkacser","lonkahegy","palvargadulo"]});
export const childModules = Object.freeze({"ivanfaret":"./ivanfaret/ivanfaret.js","kisgatidulo":"./kisgatidulo/kisgatidulo.js","kortonyeibukk":"./kortonyeibukk/kortonyeibukk.js","lonkacser":"./lonkacser/lonkacser.js","lonkahegy":"./lonkahegy/lonkahegy.js","palvargadulo":"./palvargadulo/palvargadulo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
