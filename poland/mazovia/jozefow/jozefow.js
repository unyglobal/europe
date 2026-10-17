// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jozefow","repository":"europe","path":"poland/mazovia/jozefow","depth":3,"parent":"poland/mazovia","children":["jaros-aw-pd","jaros-aw-pn","rycice"]});
export const childModules = Object.freeze({"jaros-aw-pd":"./jaros-aw-pd/jaros-aw-pd.js","jaros-aw-pn":"./jaros-aw-pn/jaros-aw-pn.js","rycice":"./rycice/rycice.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
