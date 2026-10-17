// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"st-austell","repository":"europe","path":"united-kingdom/england/st-austell","depth":3,"parent":"united-kingdom/england","children":["boscoppa","holmbush","mount-charles","sandy-bottom"]});
export const childModules = Object.freeze({"boscoppa":"./boscoppa/boscoppa.js","holmbush":"./holmbush/holmbush.js","mount-charles":"./mount-charles/mount-charles.js","sandy-bottom":"./sandy-bottom/sandy-bottom.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
