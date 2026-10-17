// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"northampton","repository":"europe","path":"united-kingdom/england/northampton","depth":3,"parent":"united-kingdom/england","children":["kingsley-park","kingsthorpe-hollow"]});
export const childModules = Object.freeze({"kingsley-park":"./kingsley-park/kingsley-park.js","kingsthorpe-hollow":"./kingsthorpe-hollow/kingsthorpe-hollow.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
