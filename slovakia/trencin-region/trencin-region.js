// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"trencin-region","repository":"europe","path":"slovakia/trencin-region","depth":2,"parent":"slovakia","children":["banovce-nad-bebravou","dubnica-nad-vahom","handlova","nove-mesto-nad-vahom","partizanske","povazska-bystrica","prievidza","puchov","trencin"]});
export const childModules = Object.freeze({"banovce-nad-bebravou":"./banovce-nad-bebravou/banovce-nad-bebravou.js","dubnica-nad-vahom":"./dubnica-nad-vahom/dubnica-nad-vahom.js","handlova":"./handlova/handlova.js","nove-mesto-nad-vahom":"./nove-mesto-nad-vahom/nove-mesto-nad-vahom.js","partizanske":"./partizanske/partizanske.js","povazska-bystrica":"./povazska-bystrica/povazska-bystrica.js","prievidza":"./prievidza/prievidza.js","puchov":"./puchov/puchov.js","trencin":"./trencin/trencin.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
