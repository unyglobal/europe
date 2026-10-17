// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"vologda-oblast","repository":"europe","path":"russia/vologda-oblast","depth":2,"parent":"russia","children":["cherepovets","gryazovets","sheksna","velikiy-ustyug","vologda"]});
export const childModules = Object.freeze({"cherepovets":"./cherepovets/cherepovets.js","gryazovets":"./gryazovets/gryazovets.js","sheksna":"./sheksna/sheksna.js","velikiy-ustyug":"./velikiy-ustyug/velikiy-ustyug.js","vologda":"./vologda/vologda.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
