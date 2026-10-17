// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hajduszoboszlo","repository":"europe","path":"hungary/hajdu-bihar/hajduszoboszlo","depth":3,"parent":"hungary/hajdu-bihar","children":["kaszakutdulo","koteles","zsoldosdulo"]});
export const childModules = Object.freeze({"kaszakutdulo":"./kaszakutdulo/kaszakutdulo.js","koteles":"./koteles/koteles.js","zsoldosdulo":"./zsoldosdulo/zsoldosdulo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
