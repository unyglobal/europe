// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"south-elmsall","repository":"europe","path":"united-kingdom/england/south-elmsall","depth":3,"parent":"united-kingdom/england","children":["common-end","elm-estate","minsthorpe","priory-estate"]});
export const childModules = Object.freeze({"common-end":"./common-end/common-end.js","elm-estate":"./elm-estate/elm-estate.js","minsthorpe":"./minsthorpe/minsthorpe.js","priory-estate":"./priory-estate/priory-estate.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
