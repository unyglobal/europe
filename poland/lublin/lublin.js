// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lublin","repository":"europe","path":"poland/lublin","depth":2,"parent":"poland","children":["bi-goraj","bia-a-podlaska","deblin","eczna","hrubieszow","krasnik","krasnystaw","lubartow","miedzyrzec-podlaski","pu-awy","radzyn-podlaski","swidnik","tomaszow-lubelski","ukow","zamosc"]});
export const childModules = Object.freeze({"bi-goraj":"./bi-goraj/bi-goraj.js","bia-a-podlaska":"./bia-a-podlaska/bia-a-podlaska.js","deblin":"./deblin/deblin.js","eczna":"./eczna/eczna.js","hrubieszow":"./hrubieszow/hrubieszow.js","krasnik":"./krasnik/krasnik.js","krasnystaw":"./krasnystaw/krasnystaw.js","lubartow":"./lubartow/lubartow.js","miedzyrzec-podlaski":"./miedzyrzec-podlaski/miedzyrzec-podlaski.js","pu-awy":"./pu-awy/pu-awy.js","radzyn-podlaski":"./radzyn-podlaski/radzyn-podlaski.js","swidnik":"./swidnik/swidnik.js","tomaszow-lubelski":"./tomaszow-lubelski/tomaszow-lubelski.js","ukow":"./ukow/ukow.js","zamosc":"./zamosc/zamosc.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
