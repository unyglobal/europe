// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"keighley","repository":"europe","path":"united-kingdom/england/keighley","depth":3,"parent":"united-kingdom/england","children":["beechcliffe","eastwood","greengate","highfield","holy-croft","knowle-park","lawkholme","new-town","park-wood","showfield","worth-village"]});
export const childModules = Object.freeze({"beechcliffe":"./beechcliffe/beechcliffe.js","eastwood":"./eastwood/eastwood.js","greengate":"./greengate/greengate.js","highfield":"./highfield/highfield.js","holy-croft":"./holy-croft/holy-croft.js","knowle-park":"./knowle-park/knowle-park.js","lawkholme":"./lawkholme/lawkholme.js","new-town":"./new-town/new-town.js","park-wood":"./park-wood/park-wood.js","showfield":"./showfield/showfield.js","worth-village":"./worth-village/worth-village.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
