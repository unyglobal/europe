// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"leppavaara","repository":"europe","path":"finland/uusimaa/leppavaara","depth":3,"parent":"finland/uusimaa","children":["aldungen","brunnsbacken","perkkaa","ruukinranta","ruusutorppa","sateri","saterinmetsa"]});
export const childModules = Object.freeze({"aldungen":"./aldungen/aldungen.js","brunnsbacken":"./brunnsbacken/brunnsbacken.js","perkkaa":"./perkkaa/perkkaa.js","ruukinranta":"./ruukinranta/ruukinranta.js","ruusutorppa":"./ruusutorppa/ruusutorppa.js","sateri":"./sateri/sateri.js","saterinmetsa":"./saterinmetsa/saterinmetsa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
