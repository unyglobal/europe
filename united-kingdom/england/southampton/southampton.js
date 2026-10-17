// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"southampton","repository":"europe","path":"united-kingdom/england/southampton","depth":3,"parent":"united-kingdom/england","children":["bedford-place","bellevue","chapel","kingsland-place","newtown","nichols-town","polygon","st-mary-s"]});
export const childModules = Object.freeze({"bedford-place":"./bedford-place/bedford-place.js","bellevue":"./bellevue/bellevue.js","chapel":"./chapel/chapel.js","kingsland-place":"./kingsland-place/kingsland-place.js","newtown":"./newtown/newtown.js","nichols-town":"./nichols-town/nichols-town.js","polygon":"./polygon/polygon.js","st-mary-s":"./st-mary-s/st-mary-s.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
