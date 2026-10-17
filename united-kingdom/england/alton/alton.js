// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"alton","repository":"europe","path":"united-kingdom/england/alton","depth":3,"parent":"united-kingdom/england","children":["mount-pleasant","newtown","spitalhatch","the-butts"]});
export const childModules = Object.freeze({"mount-pleasant":"./mount-pleasant/mount-pleasant.js","newtown":"./newtown/newtown.js","spitalhatch":"./spitalhatch/spitalhatch.js","the-butts":"./the-butts/the-butts.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
