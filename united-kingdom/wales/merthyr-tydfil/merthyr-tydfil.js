// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"merthyr-tydfil","repository":"europe","path":"united-kingdom/wales/merthyr-tydfil","depth":3,"parent":"united-kingdom/wales","children":["abermorlais","cae-draw","cae-pant-tywyll","georgetown","glebeland","morgan-town","pen-y-darren","penyard","rhyd-y-car","the-quar","thomas-town","twynyrodyn","tydfil-s-well","williamstown","ynys-fach"]});
export const childModules = Object.freeze({"abermorlais":"./abermorlais/abermorlais.js","cae-draw":"./cae-draw/cae-draw.js","cae-pant-tywyll":"./cae-pant-tywyll/cae-pant-tywyll.js","georgetown":"./georgetown/georgetown.js","glebeland":"./glebeland/glebeland.js","morgan-town":"./morgan-town/morgan-town.js","pen-y-darren":"./pen-y-darren/pen-y-darren.js","penyard":"./penyard/penyard.js","rhyd-y-car":"./rhyd-y-car/rhyd-y-car.js","the-quar":"./the-quar/the-quar.js","thomas-town":"./thomas-town/thomas-town.js","twynyrodyn":"./twynyrodyn/twynyrodyn.js","tydfil-s-well":"./tydfil-s-well/tydfil-s-well.js","williamstown":"./williamstown/williamstown.js","ynys-fach":"./ynys-fach/ynys-fach.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
