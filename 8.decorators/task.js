function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = args.join(',');
    let idx = cache.findIndex((item) => item.hash == hash);
    if (idx !== -1) {
      console.log("Из кэша: " + cache[idx].value);
      return "Из кэша: " + cache[idx].value;
    }

    let result = func(...args);
    cache.push({
      'hash': hash,
      'value': result
    });
    if (cache.length > 5) {
      cache.shift();
    }
    console.log("Вычисления: " + result);
    return "Вычисления: " + result;
  }
  return wrapper;
}


function debounceDecoratorNew(func, ms) {
  let timer = null;

  function wrapper(...args) {
    if (timer === null) {
      func(...args);
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), ms);
    }
  }
  return wrapper;
}

function debounceDecorator2(func) {
  let timer = null;

  function wrapper(...args) {
    if (timer === null) {
      func(...args);
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), ms);
    }
    wrapper.count++;
  }
  wrapper.count = 0;
  return wrapper;
}