// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"utrecht","repository":"europe","path":"netherlands/utrecht","depth":2,"parent":"netherlands","children":["amersfoort","baarn","bilthoven","de-meern","driebergen-rijsenburg","ijsselstein","leerdam","leidsche-rijn","leusden","maarssen","mijdrecht","nieuwegein","rhenen","soest","veenendaal","vianen","wijk-bij-duurstede","woerden","zeist"]});
export const childModules = Object.freeze({"amersfoort":"./amersfoort/amersfoort.js","baarn":"./baarn/baarn.js","bilthoven":"./bilthoven/bilthoven.js","de-meern":"./de-meern/de-meern.js","driebergen-rijsenburg":"./driebergen-rijsenburg/driebergen-rijsenburg.js","ijsselstein":"./ijsselstein/ijsselstein.js","leerdam":"./leerdam/leerdam.js","leidsche-rijn":"./leidsche-rijn/leidsche-rijn.js","leusden":"./leusden/leusden.js","maarssen":"./maarssen/maarssen.js","mijdrecht":"./mijdrecht/mijdrecht.js","nieuwegein":"./nieuwegein/nieuwegein.js","rhenen":"./rhenen/rhenen.js","soest":"./soest/soest.js","veenendaal":"./veenendaal/veenendaal.js","vianen":"./vianen/vianen.js","wijk-bij-duurstede":"./wijk-bij-duurstede/wijk-bij-duurstede.js","woerden":"./woerden/woerden.js","zeist":"./zeist/zeist.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
