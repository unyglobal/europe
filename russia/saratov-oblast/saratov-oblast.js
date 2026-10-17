// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"saratov-oblast","repository":"europe","path":"russia/saratov-oblast","depth":2,"parent":"russia","children":["atkarsk","balakovo","balashov","engels","kalininsk","marks","novouzensk","petrovsk","privolzhskiy","pugachev","rtishchevo","saratov","vol-sk","yershov"]});
export const childModules = Object.freeze({"atkarsk":"./atkarsk/atkarsk.js","balakovo":"./balakovo/balakovo.js","balashov":"./balashov/balashov.js","engels":"./engels/engels.js","kalininsk":"./kalininsk/kalininsk.js","marks":"./marks/marks.js","novouzensk":"./novouzensk/novouzensk.js","petrovsk":"./petrovsk/petrovsk.js","privolzhskiy":"./privolzhskiy/privolzhskiy.js","pugachev":"./pugachev/pugachev.js","rtishchevo":"./rtishchevo/rtishchevo.js","saratov":"./saratov/saratov.js","vol-sk":"./vol-sk/vol-sk.js","yershov":"./yershov/yershov.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
