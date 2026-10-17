// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kemi","repository":"europe","path":"finland/lapland/kemi","depth":3,"parent":"finland/lapland","children":["karjalahti","ruutinranta","ruutti","sauvosaari"]});
export const childModules = Object.freeze({"karjalahti":"./karjalahti/karjalahti.js","ruutinranta":"./ruutinranta/ruutinranta.js","ruutti":"./ruutti/ruutti.js","sauvosaari":"./sauvosaari/sauvosaari.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
