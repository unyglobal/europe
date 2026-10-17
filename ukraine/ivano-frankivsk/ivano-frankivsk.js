// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ivano-frankivsk","repository":"europe","path":"ukraine/ivano-frankivsk","depth":2,"parent":"ukraine","children":["dolyna","kalush","knyahynyn","kolomyia","nadvirna"]});
export const childModules = Object.freeze({"dolyna":"./dolyna/dolyna.js","kalush":"./kalush/kalush.js","knyahynyn":"./knyahynyn/knyahynyn.js","kolomyia":"./kolomyia/kolomyia.js","nadvirna":"./nadvirna/nadvirna.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
