// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dunfermline","repository":"europe","path":"united-kingdom/scotland/dunfermline","depth":3,"parent":"united-kingdom/scotland","children":["abbey-parks","beveridgewell","castleblair-park","gardeners-lands","headwell"]});
export const childModules = Object.freeze({"abbey-parks":"./abbey-parks/abbey-parks.js","beveridgewell":"./beveridgewell/beveridgewell.js","castleblair-park":"./castleblair-park/castleblair-park.js","gardeners-lands":"./gardeners-lands/gardeners-lands.js","headwell":"./headwell/headwell.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
