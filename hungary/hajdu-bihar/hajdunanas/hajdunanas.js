// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hajdunanas","repository":"europe","path":"hungary/hajdu-bihar/hajdunanas","depth":3,"parent":"hungary/hajdu-bihar","children":["lopohalomjaras","niczkyret","tedej"]});
export const childModules = Object.freeze({"lopohalomjaras":"./lopohalomjaras/lopohalomjaras.js","niczkyret":"./niczkyret/niczkyret.js","tedej":"./tedej/tedej.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
