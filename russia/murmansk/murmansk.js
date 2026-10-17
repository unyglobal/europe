// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"murmansk","repository":"europe","path":"russia/murmansk","depth":2,"parent":"russia","children":["apatity","kandalaksha","kovdor","monchegorsk","nikel","olenegorsk","polyarnyy","polyarnyye-zori","severomorsk","zapolyarnyy"]});
export const childModules = Object.freeze({"apatity":"./apatity/apatity.js","kandalaksha":"./kandalaksha/kandalaksha.js","kovdor":"./kovdor/kovdor.js","monchegorsk":"./monchegorsk/monchegorsk.js","nikel":"./nikel/nikel.js","olenegorsk":"./olenegorsk/olenegorsk.js","polyarnyy":"./polyarnyy/polyarnyy.js","polyarnyye-zori":"./polyarnyye-zori/polyarnyye-zori.js","severomorsk":"./severomorsk/severomorsk.js","zapolyarnyy":"./zapolyarnyy/zapolyarnyy.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
