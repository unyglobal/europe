// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"king-s-lynn","repository":"europe","path":"united-kingdom/england/king-s-lynn","depth":3,"parent":"united-kingdom/england","children":["highgate","north-end","st-james-end"]});
export const childModules = Object.freeze({"highgate":"./highgate/highgate.js","north-end":"./north-end/north-end.js","st-james-end":"./st-james-end/st-james-end.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
