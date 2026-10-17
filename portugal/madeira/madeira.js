// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"madeira","repository":"europe","path":"portugal/madeira","depth":2,"parent":"portugal","children":["camara-de-lobos","canico","funchal","santo-antonio","sao-martinho"]});
export const childModules = Object.freeze({"camara-de-lobos":"./camara-de-lobos/camara-de-lobos.js","canico":"./canico/canico.js","funchal":"./funchal/funchal.js","santo-antonio":"./santo-antonio/santo-antonio.js","sao-martinho":"./sao-martinho/sao-martinho.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
