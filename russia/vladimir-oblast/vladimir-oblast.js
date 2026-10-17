// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"vladimir-oblast","repository":"europe","path":"russia/vladimir-oblast","depth":2,"parent":"russia","children":["aleksandrov","gus-khrustal-nyy","karabanovo","kirzhach","kol-chugino","kovrov","lakinsk","melenki","murom","petushki","pokrov","raduzhnyy","sobinka","strunino","vladimir","vyazniki","yur-yev-pol-skiy"]});
export const childModules = Object.freeze({"aleksandrov":"./aleksandrov/aleksandrov.js","gus-khrustal-nyy":"./gus-khrustal-nyy/gus-khrustal-nyy.js","karabanovo":"./karabanovo/karabanovo.js","kirzhach":"./kirzhach/kirzhach.js","kol-chugino":"./kol-chugino/kol-chugino.js","kovrov":"./kovrov/kovrov.js","lakinsk":"./lakinsk/lakinsk.js","melenki":"./melenki/melenki.js","murom":"./murom/murom.js","petushki":"./petushki/petushki.js","pokrov":"./pokrov/pokrov.js","raduzhnyy":"./raduzhnyy/raduzhnyy.js","sobinka":"./sobinka/sobinka.js","strunino":"./strunino/strunino.js","vladimir":"./vladimir/vladimir.js","vyazniki":"./vyazniki/vyazniki.js","yur-yev-pol-skiy":"./yur-yev-pol-skiy/yur-yev-pol-skiy.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
