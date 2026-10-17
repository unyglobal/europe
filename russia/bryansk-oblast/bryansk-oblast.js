// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bryansk-oblast","repository":"europe","path":"russia/bryansk-oblast","depth":2,"parent":"russia","children":["bryansk","dyat-kovo","karachev","klintsy","novozybkov","pochep","sel-tso","starodub","trubchevsk","unecha","zhukovka"]});
export const childModules = Object.freeze({"bryansk":"./bryansk/bryansk.js","dyat-kovo":"./dyat-kovo/dyat-kovo.js","karachev":"./karachev/karachev.js","klintsy":"./klintsy/klintsy.js","novozybkov":"./novozybkov/novozybkov.js","pochep":"./pochep/pochep.js","sel-tso":"./sel-tso/sel-tso.js","starodub":"./starodub/starodub.js","trubchevsk":"./trubchevsk/trubchevsk.js","unecha":"./unecha/unecha.js","zhukovka":"./zhukovka/zhukovka.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
