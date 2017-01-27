var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
Engine.scene = new Scene(460, 320);
var amount = 1;
var PTest = (function (_super) {
    __extends(PTest, _super);
    function PTest(pos) {
        var _this = _super.call(this, pos) || this;
        _this.o = null;
        _this.emitter = new ParticleEmitter();
        return _this;
    }
    PTest.prototype.update = function () {
        this.emitter.burst(this.pos, amount);
    };
    return PTest;
}(GameObject));
var pt = new PTest(new Vector(Engine.scene.width / 2, Engine.scene.height / 2));
$(document).ready(function () {
    $(".part__input").children().each(function () {
        $(this).trigger("input");
    });
});
$("#amount").on("input", function (o) {
    amount = Number($("#amount").val());
});
$("#minAlpha").on("input", function (o) {
    pt.emitter.minAlpha = Number($("#minAlpha").val());
});
$("#maxAlpha").on("input", function (o) {
    pt.emitter.maxAlpha = Number($("#maxAlpha").val());
});
$("#alphaIncr").on("input", function (o) {
    pt.emitter.alphaIncr = Number($("#alphaIncr").val());
});
$("#minLifetime").on("input", function (o) {
    pt.emitter.minLifetime = Number($("#minLifetime").val());
});
$("#maxLifetime").on("input", function (o) {
    pt.emitter.maxLifetime = Number($("#maxLifetime").val());
});
$("#minSpeed").on("input", function (o) {
    pt.emitter.minSpeed = Number($("#minSpeed").val());
});
$("#maxSpeed").on("input", function (o) {
    pt.emitter.maxSpeed = Number($("#maxSpeed").val());
});
$("#speedIncr").on("input", function (o) {
    pt.emitter.speedIncr = Number($("#speedIncr").val());
});
$("#minDirection").on("input", function (o) {
    pt.emitter.minDirection = Number($("#minDirection").val());
});
$("#maxDirection").on("input", function (o) {
    pt.emitter.maxDirection = Number($("#maxDirection").val());
});
$("#directionIncr").on("input", function (o) {
    pt.emitter.directionIncr = Number($("#directionIncr").val());
});
$("#minSize").on("input", function (o) {
    pt.emitter.minSize = Number($("#minSize").val());
});
$("#maxSize").on("input", function (o) {
    pt.emitter.maxSize = Number($("#maxSize").val());
});
$("#sizeIncr").on("input", function (o) {
    pt.emitter.sizeIncr = Number($("#sizeIncr").val());
});
$("#minAngle").on("input", function (o) {
    pt.emitter.minAngle = Number($("#minAngle").val());
});
$("#maxAngle").on("input", function (o) {
    pt.emitter.maxAngle = Number($("#maxAngle").val());
});
$("#angleIncr").on("input", function () {
    pt.emitter.angleIncr = Number($("#angleIncr").val());
});
$("#scaleX").on("input", function () {
    pt.emitter.scale.x = Number($("#scaleX").val());
});
$("#scaleY").on("input", function () {
    pt.emitter.scale.y = Number($("#scaleY").val());
});
$("#startColor").children().children(".r").on("input", function () {
    pt.emitter.startColor.r = Number($(this).val());
});
$("#startColor").children().children(".g").on("input", function () {
    pt.emitter.startColor.g = Number($(this).val());
});
$("#startColor").children().children(".b").on("input", function () {
    pt.emitter.startColor.b = Number($(this).val());
});
$("#endColor").children().children(".r").on("input", function () {
    pt.emitter.endColor.r = Number($(this).val());
});
$("#endColor").children().children(".g").on("input", function () {
    pt.emitter.endColor.g = Number($(this).val());
});
$("#endColor").children().children(".b").on("input", function () {
    pt.emitter.endColor.b = Number($(this).val());
});
//# sourceMappingURL=particleTest.js.map