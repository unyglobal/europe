// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tampere","repository":"europe","path":"finland/pirkanmaa/tampere","depth":3,"parent":"finland/pirkanmaa","children":["etela-kyttala","kaleva","kalevanharju","kyttala","liisankallio","osmonmaki","pohjois-kyttala","tammela","tammela-a","tammela-b","tulli"]});
export const childModules = Object.freeze({"etela-kyttala":"./etela-kyttala/etela-kyttala.js","kaleva":"./kaleva/kaleva.js","kalevanharju":"./kalevanharju/kalevanharju.js","kyttala":"./kyttala/kyttala.js","liisankallio":"./liisankallio/liisankallio.js","osmonmaki":"./osmonmaki/osmonmaki.js","pohjois-kyttala":"./pohjois-kyttala/pohjois-kyttala.js","tammela":"./tammela/tammela.js","tammela-a":"./tammela-a/tammela-a.js","tammela-b":"./tammela-b/tammela-b.js","tulli":"./tulli/tulli.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
