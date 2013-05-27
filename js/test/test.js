// Generated by CoffeeScript 1.6.2
(function() {
  var assert, formatter;

  formatter = require('../formatter');

  assert = require('assert');

  describe('formatter', function() {});

  describe('#shortenSpaces()', function() {
    it('should shorten all consecutive spaces into one', function() {
      var formattedLine, originalLine;

      originalLine = 'hello   derek how is  it going?';
      formattedLine = formatter.shortenSpaces(originalLine);
      return assert.strictEqual('hello derek how is it going?', formattedLine);
    });
    it('should work with strings', function() {
      var formattedLine, originalLine;

      originalLine = 'for c, i in "Hello  World!"';
      formattedLine = formatter.shortenSpaces(originalLine);
      return assert.strictEqual(originalLine, formattedLine);
    });
    return it('should not shorten indentations', function() {
      var formattedLine, originalLine;

      originalLine = '    for c, i  in "Hello  World"';
      formattedLine = formatter.shortenSpaces(originalLine);
      return assert.strictEqual('    for c, i in "Hello  World"', formattedLine);
    });
  });

  describe('#formatTwoSpaceOperator()', function() {
    return it('should make it so that there is only\
    one space before and after a binary operator', function() {
      var formattedLine, originalLine;

      originalLine = 'k = 1+1-  2>=3<=  4>5   <6';
      formattedLine = formatter.formatTwoSpaceOperator(originalLine);
      return assert.strictEqual('k = 1 + 1 - 2 >= 3 <= 4 > 5 < 6', formattedLine);
    });
  });

  describe('#formatOneSpaceOperator()', function() {
    return it('should make it so that there is only\
    one space after certain operators', function() {
      var formattedLine, originalLine;

      originalLine = 'k = (a,b)-> if b?  return a';
      formattedLine = formatter.formatOneSpaceOperator(originalLine);
      return assert.strictEqual('k = (a, b) -> if b? return a', formattedLine);
    });
  });

  describe('#notInStringOrComment()', function() {
    return it('should detect if a char is in a string', function() {
      var inStringIndex, originalLine;

      originalLine = 'for c, i in "Hello World"';
      inStringIndex = originalLine.indexOf('Hello');
      return assert.strictEqual(formatter.notInStringOrComment(inStringIndex, originalLine), false);
    });
  });

}).call(this);
