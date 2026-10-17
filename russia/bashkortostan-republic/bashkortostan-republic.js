// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bashkortostan-republic","repository":"europe","path":"russia/bashkortostan-republic","depth":2,"parent":"russia","children":["agidel","baymak","belebey","beloretsk","birsk","chishmy","davlekanovo","dyurtyuli","ishimbay","kumertau","meleuz","mezgor-e","neftekamsk","oktyabrsky","priyutovo","rayevskiy","salavat","sibay","sterlitamak","tuymazy","uchaly","ufa","yanaul"]});
export const childModules = Object.freeze({"agidel":"./agidel/agidel.js","baymak":"./baymak/baymak.js","belebey":"./belebey/belebey.js","beloretsk":"./beloretsk/beloretsk.js","birsk":"./birsk/birsk.js","chishmy":"./chishmy/chishmy.js","davlekanovo":"./davlekanovo/davlekanovo.js","dyurtyuli":"./dyurtyuli/dyurtyuli.js","ishimbay":"./ishimbay/ishimbay.js","kumertau":"./kumertau/kumertau.js","meleuz":"./meleuz/meleuz.js","mezgor-e":"./mezgor-e/mezgor-e.js","neftekamsk":"./neftekamsk/neftekamsk.js","oktyabrsky":"./oktyabrsky/oktyabrsky.js","priyutovo":"./priyutovo/priyutovo.js","rayevskiy":"./rayevskiy/rayevskiy.js","salavat":"./salavat/salavat.js","sibay":"./sibay/sibay.js","sterlitamak":"./sterlitamak/sterlitamak.js","tuymazy":"./tuymazy/tuymazy.js","uchaly":"./uchaly/uchaly.js","ufa":"./ufa/ufa.js","yanaul":"./yanaul/yanaul.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
