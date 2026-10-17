// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"subcarpathia","repository":"europe","path":"poland/subcarpathia","depth":2,"parent":"poland","children":["ancut","debica","jaros-aw","jas-o","krosno","mielec","nisko","przemysl","przeworsk","ropczyce","rzeszow","sanok","stalowa-wola","tarnobrzeg"]});
export const childModules = Object.freeze({"ancut":"./ancut/ancut.js","debica":"./debica/debica.js","jaros-aw":"./jaros-aw/jaros-aw.js","jas-o":"./jas-o/jas-o.js","krosno":"./krosno/krosno.js","mielec":"./mielec/mielec.js","nisko":"./nisko/nisko.js","przemysl":"./przemysl/przemysl.js","przeworsk":"./przeworsk/przeworsk.js","ropczyce":"./ropczyce/ropczyce.js","rzeszow":"./rzeszow/rzeszow.js","sanok":"./sanok/sanok.js","stalowa-wola":"./stalowa-wola/stalowa-wola.js","tarnobrzeg":"./tarnobrzeg/tarnobrzeg.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
