// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lviv","repository":"europe","path":"ukraine/lviv","depth":2,"parent":"ukraine","children":["boryslav","brody","drohobych","mostyska","novoyavorivs-k","novyi-lviv","novyi-rozdil","sambir","sheptytskyi","sokal","stebnyk","stryi","sykhiv","truskavets","vynnyky","zolochiv"]});
export const childModules = Object.freeze({"boryslav":"./boryslav/boryslav.js","brody":"./brody/brody.js","drohobych":"./drohobych/drohobych.js","mostyska":"./mostyska/mostyska.js","novoyavorivs-k":"./novoyavorivs-k/novoyavorivs-k.js","novyi-lviv":"./novyi-lviv/novyi-lviv.js","novyi-rozdil":"./novyi-rozdil/novyi-rozdil.js","sambir":"./sambir/sambir.js","sheptytskyi":"./sheptytskyi/sheptytskyi.js","sokal":"./sokal/sokal.js","stebnyk":"./stebnyk/stebnyk.js","stryi":"./stryi/stryi.js","sykhiv":"./sykhiv/sykhiv.js","truskavets":"./truskavets/truskavets.js","vynnyky":"./vynnyky/vynnyky.js","zolochiv":"./zolochiv/zolochiv.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
