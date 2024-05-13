import { async } from 'regenerator-runtime';
import { TIME_OUT } from './config.js';
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};
export const JsonDataEx = async function (url) {
  try {
    let fetchPro = fetch(url);
    // const res = await Promise.race[(fetchPro, timeout(10))];
    const res = await fetch(url);
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    throw err;
  }
};
