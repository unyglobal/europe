// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tata","repository":"europe","path":"hungary/komarom-esztergom/tata","depth":3,"parent":"hungary/komarom-esztergom","children":["fenyesdulo"]});
export const childModules = Object.freeze({"fenyesdulo":"./fenyesdulo/fenyesdulo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
