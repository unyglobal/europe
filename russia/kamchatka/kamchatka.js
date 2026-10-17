// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kamchatka","repository":"europe","path":"russia/kamchatka","depth":2,"parent":"russia","children":["petropavlovsk-kamchatsky","vilyuchinsk","yelizovo"]});
export const childModules = Object.freeze({"petropavlovsk-kamchatsky":"./petropavlovsk-kamchatsky/petropavlovsk-kamchatsky.js","vilyuchinsk":"./vilyuchinsk/vilyuchinsk.js","yelizovo":"./yelizovo/yelizovo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
