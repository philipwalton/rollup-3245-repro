(function () {
  'use strict';

  const main = async () => {
    const mod = await Promise.resolve().then(function () { return mod; });
    console.log(mod);
  };

  main();

  const foo = 'bar';

  var mod = /*#__PURE__*/Object.freeze({
    __proto__: null,
    foo: foo
  });

}());
