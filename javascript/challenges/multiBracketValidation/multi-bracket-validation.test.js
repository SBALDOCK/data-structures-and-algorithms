'use strict';

const brackets = require('./multi-bracket-validation.js');


    it('should return true if balanced and false if not balanced', () => {
      let str = '{}{Code}[Fellows](())';
      let str1 = '{}{Code}[Fellows](())(](';
      let str2 = '{}{Code{[Fellows](())(]((((({{{}}()';
      let str3 = '[]';
      let str4 = '';
      expect(brackets(str)).toStrictEqual(true)
      expect(brackets(str1)).toStrictEqual(false);
      expect(brackets(str2)).toStrictEqual(false);
      expect(brackets(str3)).toStrictEqual(true);
      expect(brackets(str4)).toStrictEqual(false);
    });


