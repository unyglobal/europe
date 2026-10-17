// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lorient","repository":"europe","path":"france/brittany/lorient","depth":3,"parent":"france/brittany","children":["l-eau-courante","merville"]});
export const childModules = Object.freeze({"l-eau-courante":"./l-eau-courante/l-eau-courante.js","merville":"./merville/merville.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
