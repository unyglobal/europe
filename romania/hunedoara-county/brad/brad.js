// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"brad","repository":"europe","path":"romania/hunedoara-county/brad","depth":3,"parent":"romania/hunedoara-county","children":["bratisa","calamaresti","calimaresti-colindesti","corinesti","dealu-racovei","dealu-taului","frunza-verde","golesti","gosa","gura-ruzii","hertesti","lunca-brad","magura","misca","paraeni","poenita","savesti","tudoranesti"]});
export const childModules = Object.freeze({"bratisa":"./bratisa/bratisa.js","calamaresti":"./calamaresti/calamaresti.js","calimaresti-colindesti":"./calimaresti-colindesti/calimaresti-colindesti.js","corinesti":"./corinesti/corinesti.js","dealu-racovei":"./dealu-racovei/dealu-racovei.js","dealu-taului":"./dealu-taului/dealu-taului.js","frunza-verde":"./frunza-verde/frunza-verde.js","golesti":"./golesti/golesti.js","gosa":"./gosa/gosa.js","gura-ruzii":"./gura-ruzii/gura-ruzii.js","hertesti":"./hertesti/hertesti.js","lunca-brad":"./lunca-brad/lunca-brad.js","magura":"./magura/magura.js","misca":"./misca/misca.js","paraeni":"./paraeni/paraeni.js","poenita":"./poenita/poenita.js","savesti":"./savesti/savesti.js","tudoranesti":"./tudoranesti/tudoranesti.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
