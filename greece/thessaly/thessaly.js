// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"thessaly","repository":"europe","path":"greece/thessaly","depth":2,"parent":"greece","children":["karditsa","larisa","trikala","volos"]});
export const childModules = Object.freeze({"karditsa":"./karditsa/karditsa.js","larisa":"./larisa/larisa.js","trikala":"./trikala/trikala.js","volos":"./volos/volos.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
