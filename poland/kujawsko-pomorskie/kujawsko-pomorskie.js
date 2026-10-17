// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kujawsko-pomorskie","repository":"europe","path":"poland/kujawsko-pomorskie","depth":2,"parent":"poland","children":["brodnica","bydgoszcz","che-mno","che-mza","fordon","grudziadz","inowroc-aw","nak-o-nad-notecia","rypin","solec-kujawski","swiecie","torun","w-oc-awek"]});
export const childModules = Object.freeze({"brodnica":"./brodnica/brodnica.js","bydgoszcz":"./bydgoszcz/bydgoszcz.js","che-mno":"./che-mno/che-mno.js","che-mza":"./che-mza/che-mza.js","fordon":"./fordon/fordon.js","grudziadz":"./grudziadz/grudziadz.js","inowroc-aw":"./inowroc-aw/inowroc-aw.js","nak-o-nad-notecia":"./nak-o-nad-notecia/nak-o-nad-notecia.js","rypin":"./rypin/rypin.js","solec-kujawski":"./solec-kujawski/solec-kujawski.js","swiecie":"./swiecie/swiecie.js","torun":"./torun/torun.js","w-oc-awek":"./w-oc-awek/w-oc-awek.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
