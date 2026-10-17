// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bratislava-region","repository":"europe","path":"slovakia/bratislava-region","depth":2,"parent":"slovakia","children":["bratislava","devinska-nova-ves","dlhe-diely","dubravka","karlova-ves","malacky","petrzalka","pezinok","podunajske-biskupice","senec","stare-mesto","vrakuna"]});
export const childModules = Object.freeze({"bratislava":"./bratislava/bratislava.js","devinska-nova-ves":"./devinska-nova-ves/devinska-nova-ves.js","dlhe-diely":"./dlhe-diely/dlhe-diely.js","dubravka":"./dubravka/dubravka.js","karlova-ves":"./karlova-ves/karlova-ves.js","malacky":"./malacky/malacky.js","petrzalka":"./petrzalka/petrzalka.js","pezinok":"./pezinok/pezinok.js","podunajske-biskupice":"./podunajske-biskupice/podunajske-biskupice.js","senec":"./senec/senec.js","stare-mesto":"./stare-mesto/stare-mesto.js","vrakuna":"./vrakuna/vrakuna.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
