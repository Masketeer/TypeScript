//// [recursiveBaseConstructorCreation1.ts]
class C1 {
public func(param: C2): any { }
}
class C2 extends C1 { }
var x = new C2(); // Valid


//// [recursiveBaseConstructorCreation1.js]
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var C1 = (function () {
    function C1() {
    }
    C1.prototype.func = function (param) { };
    return C1;
}());
var C2 = (function (_super) {
    __extends(C2, _super);
    function C2() {
        return _super.apply(this, arguments) || this;
    }
    return C2;
}(C1));
var x = new C2(); // Valid
