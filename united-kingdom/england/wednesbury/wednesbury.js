// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"wednesbury","repository":"europe","path":"united-kingdom/england/wednesbury","depth":3,"parent":"united-kingdom/england","children":["church-hill","king-s-hill","mesty-croft","oakeswell-end","vicarage"]});
export const childModules = Object.freeze({"church-hill":"./church-hill/church-hill.js","king-s-hill":"./king-s-hill/king-s-hill.js","mesty-croft":"./mesty-croft/mesty-croft.js","oakeswell-end":"./oakeswell-end/oakeswell-end.js","vicarage":"./vicarage/vicarage.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
