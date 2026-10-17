// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tatarstan-republic","repository":"europe","path":"russia/tatarstan-republic","depth":2,"parent":"russia","children":["agryz","al-met-yevsk","arsk","aznakayevo","bavly","bugulma","buinsk","chistopol","kazan","kukmor","leninogorsk","mendeleyevsk","menzelinsk","naberezhnyye-chelny","nizhnekamsk","nurlat","vasil-yevo","yelabuga","zainsk","zelenodolsk"]});
export const childModules = Object.freeze({"agryz":"./agryz/agryz.js","al-met-yevsk":"./al-met-yevsk/al-met-yevsk.js","arsk":"./arsk/arsk.js","aznakayevo":"./aznakayevo/aznakayevo.js","bavly":"./bavly/bavly.js","bugulma":"./bugulma/bugulma.js","buinsk":"./buinsk/buinsk.js","chistopol":"./chistopol/chistopol.js","kazan":"./kazan/kazan.js","kukmor":"./kukmor/kukmor.js","leninogorsk":"./leninogorsk/leninogorsk.js","mendeleyevsk":"./mendeleyevsk/mendeleyevsk.js","menzelinsk":"./menzelinsk/menzelinsk.js","naberezhnyye-chelny":"./naberezhnyye-chelny/naberezhnyye-chelny.js","nizhnekamsk":"./nizhnekamsk/nizhnekamsk.js","nurlat":"./nurlat/nurlat.js","vasil-yevo":"./vasil-yevo/vasil-yevo.js","yelabuga":"./yelabuga/yelabuga.js","zainsk":"./zainsk/zainsk.js","zelenodolsk":"./zelenodolsk/zelenodolsk.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
