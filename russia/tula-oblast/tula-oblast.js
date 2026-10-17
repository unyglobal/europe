// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tula-oblast","repository":"europe","path":"russia/tula-oblast","depth":2,"parent":"russia","children":["aleksin","belev","bogoroditsk","donskoy","kimovsk","kireyevsk","kosaya-gora","novomoskovsk","plavsk","severo-zadonsk","shchekino","suvorov","tula","uzlovaya","venev","yasnogorsk","yefremov"]});
export const childModules = Object.freeze({"aleksin":"./aleksin/aleksin.js","belev":"./belev/belev.js","bogoroditsk":"./bogoroditsk/bogoroditsk.js","donskoy":"./donskoy/donskoy.js","kimovsk":"./kimovsk/kimovsk.js","kireyevsk":"./kireyevsk/kireyevsk.js","kosaya-gora":"./kosaya-gora/kosaya-gora.js","novomoskovsk":"./novomoskovsk/novomoskovsk.js","plavsk":"./plavsk/plavsk.js","severo-zadonsk":"./severo-zadonsk/severo-zadonsk.js","shchekino":"./shchekino/shchekino.js","suvorov":"./suvorov/suvorov.js","tula":"./tula/tula.js","uzlovaya":"./uzlovaya/uzlovaya.js","venev":"./venev/venev.js","yasnogorsk":"./yasnogorsk/yasnogorsk.js","yefremov":"./yefremov/yefremov.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
