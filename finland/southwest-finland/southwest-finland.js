// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"southwest-finland","repository":"europe","path":"finland/southwest-finland","depth":2,"parent":"finland","children":["kaarina","lieto","loimaa","naantali","raisio","salo","turku","vastaboland"]});
export const childModules = Object.freeze({"kaarina":"./kaarina/kaarina.js","lieto":"./lieto/lieto.js","loimaa":"./loimaa/loimaa.js","naantali":"./naantali/naantali.js","raisio":"./raisio/raisio.js","salo":"./salo/salo.js","turku":"./turku/turku.js","vastaboland":"./vastaboland/vastaboland.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
