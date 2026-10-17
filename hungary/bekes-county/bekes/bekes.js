// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bekes","repository":"europe","path":"hungary/bekes-county/bekes","depth":3,"parent":"hungary/bekes-county","children":["hidashat","kogyescsatar"]});
export const childModules = Object.freeze({"hidashat":"./hidashat/hidashat.js","kogyescsatar":"./kogyescsatar/kogyescsatar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
