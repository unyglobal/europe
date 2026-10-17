// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pontypool","repository":"europe","path":"united-kingdom/wales/pontypool","depth":3,"parent":"united-kingdom/wales","children":["cwm-fields","penygarn","sowhill","tranch","trosnant","wainfelin"]});
export const childModules = Object.freeze({"cwm-fields":"./cwm-fields/cwm-fields.js","penygarn":"./penygarn/penygarn.js","sowhill":"./sowhill/sowhill.js","tranch":"./tranch/tranch.js","trosnant":"./trosnant/trosnant.js","wainfelin":"./wainfelin/wainfelin.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
