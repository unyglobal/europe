// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"amur-oblast","repository":"europe","path":"russia/amur-oblast","depth":2,"parent":"russia","children":["belogorsk","chigiri","raychikhinsk","shimanovsk","svobodnyy","tynda","zeya"]});
export const childModules = Object.freeze({"belogorsk":"./belogorsk/belogorsk.js","chigiri":"./chigiri/chigiri.js","raychikhinsk":"./raychikhinsk/raychikhinsk.js","shimanovsk":"./shimanovsk/shimanovsk.js","svobodnyy":"./svobodnyy/svobodnyy.js","tynda":"./tynda/tynda.js","zeya":"./zeya/zeya.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
