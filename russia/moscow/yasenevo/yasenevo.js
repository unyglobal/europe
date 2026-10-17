// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"yasenevo","repository":"europe","path":"russia/moscow/yasenevo","depth":3,"parent":"russia/moscow","children":["bol-shoye-golubino"]});
export const childModules = Object.freeze({"bol-shoye-golubino":"./bol-shoye-golubino/bol-shoye-golubino.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
