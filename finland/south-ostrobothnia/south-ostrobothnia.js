// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"south-ostrobothnia","repository":"europe","path":"finland/south-ostrobothnia","depth":2,"parent":"finland","children":["kauhava","kurikka","seinajoki"]});
export const childModules = Object.freeze({"kauhava":"./kauhava/kauhava.js","kurikka":"./kurikka/kurikka.js","seinajoki":"./seinajoki/seinajoki.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
