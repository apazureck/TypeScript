//// [tests/cases/compiler/mergedDeclarations5.ts] ////

//// [a.ts]
class A {
    protected foo() {}
}
//// [b.ts]
interface A { }

class B extends A {
    protected foo() {}
}

//// [a.js]
var A = (function () {
    function A() {
    }
    A.prototype.foo = function () { };
    return A;
}());
//// [b.js]
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var B = (function (_super) {
    __extends(B, _super);
    function B() {
        _super.apply(this, arguments);
    }
    B.prototype.foo = function () { };
    return B;
}(A));
