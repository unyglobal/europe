// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"curtea-de-arges","repository":"europe","path":"romania/arges/curtea-de-arges","depth":3,"parent":"romania/arges","children":["busaga","mahalaua-marinei","mahalaua-postei","tarnita"]});
export const childModules = Object.freeze({"busaga":"./busaga/busaga.js","mahalaua-marinei":"./mahalaua-marinei/mahalaua-marinei.js","mahalaua-postei":"./mahalaua-postei/mahalaua-postei.js","tarnita":"./tarnita/tarnita.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
