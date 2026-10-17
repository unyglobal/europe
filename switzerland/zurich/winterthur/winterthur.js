// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"winterthur","repository":"europe","path":"switzerland/zurich/winterthur","depth":3,"parent":"switzerland/zurich","children":["stadt-winterthur-kreis-1-altstadt","stadt-winterthur-kreis-1-lind","stadt-winterthur-kreis-1-neuwiesen","veltheim-kreis-5-blumenau"]});
export const childModules = Object.freeze({"stadt-winterthur-kreis-1-altstadt":"./stadt-winterthur-kreis-1-altstadt/stadt-winterthur-kreis-1-altstadt.js","stadt-winterthur-kreis-1-lind":"./stadt-winterthur-kreis-1-lind/stadt-winterthur-kreis-1-lind.js","stadt-winterthur-kreis-1-neuwiesen":"./stadt-winterthur-kreis-1-neuwiesen/stadt-winterthur-kreis-1-neuwiesen.js","veltheim-kreis-5-blumenau":"./veltheim-kreis-5-blumenau/veltheim-kreis-5-blumenau.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
