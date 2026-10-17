// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hajdu-bihar","repository":"europe","path":"hungary/hajdu-bihar","depth":2,"parent":"hungary","children":["balmazujvaros","debrecen","hajduboszormeny","hajdunanas","hajduszoboszlo","puspokladany"]});
export const childModules = Object.freeze({"balmazujvaros":"./balmazujvaros/balmazujvaros.js","debrecen":"./debrecen/debrecen.js","hajduboszormeny":"./hajduboszormeny/hajduboszormeny.js","hajdunanas":"./hajdunanas/hajdunanas.js","hajduszoboszlo":"./hajduszoboszlo/hajduszoboszlo.js","puspokladany":"./puspokladany/puspokladany.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
