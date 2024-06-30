function logger(originalMethod: any, _context: any) {
  function replacementMethod(this: any, ...args: any[]) {
    console.log(args);
    console.log("start:", originalMethod.name);
    const result = originalMethod.call(this, ...args);
    console.log("end:", originalMethod.name);
    return result;
  }

  return replacementMethod;
}

