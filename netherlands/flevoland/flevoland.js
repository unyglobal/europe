// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"flevoland","repository":"europe","path":"netherlands/flevoland","depth":2,"parent":"netherlands","children":["almere-stad","dronten","emmeloord","lelystad","urk","zeewolde"]});
export const childModules = Object.freeze({"almere-stad":"./almere-stad/almere-stad.js","dronten":"./dronten/dronten.js","emmeloord":"./emmeloord/emmeloord.js","lelystad":"./lelystad/lelystad.js","urk":"./urk/urk.js","zeewolde":"./zeewolde/zeewolde.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
