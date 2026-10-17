// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"donostia-san-sebastian","repository":"europe","path":"spain/basque-country/donostia-san-sebastian","depth":3,"parent":"spain/basque-country","children":["amaraberri","amarazar","atotxa","egia","polloe","san-bartolome","san-martin","san-roke"]});
export const childModules = Object.freeze({"amaraberri":"./amaraberri/amaraberri.js","amarazar":"./amarazar/amarazar.js","atotxa":"./atotxa/atotxa.js","egia":"./egia/egia.js","polloe":"./polloe/polloe.js","san-bartolome":"./san-bartolome/san-bartolome.js","san-martin":"./san-martin/san-martin.js","san-roke":"./san-roke/san-roke.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
