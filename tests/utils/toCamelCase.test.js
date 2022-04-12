/*jshint esversion: 8 */

import { toCamelCase } from "../../utils/toCamelCase.js";
import * as chai from "chai";
let expect = chai.expect;
let assert = chai.assert;

var strings = {
  camel: 'passwordGenerator',
  dot: 'password.generator',
  junk: '--PASSWORD-GENERATOR--',
  kebab: "password-generator",
  pascal: 'PasswordGenerator',
  sentence: 'Password generator',
  snake: 'password_generator',
  space: 'password generator',
  title: 'Password Generator',
  uppercase: "PASSWORD GENERATOR",
};

// mocha() test
describe("Running mocha () function \n", function () {
  it("should run mocha", function () {
    expect(true);
  });
});

// toCamelCase() tests
describe('Running toCamelCase () function \n', function () {
  for (var key in strings) test(key);
});

/**
 * Create a test for a given case `key`.
 *
 * @param {String} key
 */

function test(key) {
  it('should convert a ' + key + ' case string to camelcase', function () {
    assert.equal(toCamelCase(strings[key]), 'passwordGenerator');
  });
}
