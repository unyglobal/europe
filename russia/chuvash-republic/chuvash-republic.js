// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chuvash-republic","repository":"europe","path":"russia/chuvash-republic","depth":2,"parent":"russia","children":["alatyr","cheboksary","kanash","novocheboksarsk","shumerlya"]});
export const childModules = Object.freeze({"alatyr":"./alatyr/alatyr.js","cheboksary":"./cheboksary/cheboksary.js","kanash":"./kanash/kanash.js","novocheboksarsk":"./novocheboksarsk/novocheboksarsk.js","shumerlya":"./shumerlya/shumerlya.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
