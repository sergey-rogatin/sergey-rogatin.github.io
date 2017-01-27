Engine.scene = new Scene(460, 320);

let amount = 1;

class PTest extends GameObject {

    emitter: ParticleEmitter;
    o: GameObject = null;

    constructor(pos: Vector) {
        super(pos);
        this.emitter = new ParticleEmitter();
    }

    update() {
        this.emitter.burst(this.pos, amount);
    }
}

let pt = new PTest(new Vector(Engine.scene.width/2, Engine.scene.height/2));

$(document).ready(function() {
    $(".part__input").children().each(function() {
        $(this).trigger("input");
    });
});

$("#amount").on("input", (o) => {
    amount = Number($("#amount").val());
});

$("#minAlpha").on("input", (o) => {
    pt.emitter.minAlpha = Number($("#minAlpha").val());
});

$("#maxAlpha").on("input", (o) => {
    pt.emitter.maxAlpha = Number($("#maxAlpha").val());
});

$("#alphaIncr").on("input", (o) => {
    pt.emitter.alphaIncr = Number($("#alphaIncr").val());
});


$("#minLifetime").on("input", (o) => {
    pt.emitter.minLifetime = Number($("#minLifetime").val());
});

$("#maxLifetime").on("input", (o) => {
    pt.emitter.maxLifetime = Number($("#maxLifetime").val());
});


$("#minSpeed").on("input", (o) => {
    pt.emitter.minSpeed = Number($("#minSpeed").val());
});

$("#maxSpeed").on("input", (o) => {
    pt.emitter.maxSpeed = Number($("#maxSpeed").val());
});

$("#speedIncr").on("input", (o) => {
    pt.emitter.speedIncr = Number($("#speedIncr").val());
});



$("#minDirection").on("input", (o) => {
    pt.emitter.minDirection = Number($("#minDirection").val());
});

$("#maxDirection").on("input", (o) => {
    pt.emitter.maxDirection = Number($("#maxDirection").val());
});

$("#directionIncr").on("input", (o) => {
    pt.emitter.directionIncr = Number($("#directionIncr").val());
});


$("#minSize").on("input", (o) => {
    pt.emitter.minSize = Number($("#minSize").val());
});

$("#maxSize").on("input", (o) => {
    pt.emitter.maxSize = Number($("#maxSize").val());
});

$("#sizeIncr").on("input", (o) => {
    pt.emitter.sizeIncr = Number($("#sizeIncr").val());
});



$("#minAngle").on("input", (o) => {
    pt.emitter.minAngle = Number($("#minAngle").val());
});

$("#maxAngle").on("input", (o) => {
    pt.emitter.maxAngle = Number($("#maxAngle").val());
});

$("#angleIncr").on("input", function() {
    pt.emitter.angleIncr = Number($("#angleIncr").val());
});



$("#scaleX").on("input", function() {
    pt.emitter.scale.x = Number($("#scaleX").val());
});

$("#scaleY").on("input", function() {
    pt.emitter.scale.y = Number($("#scaleY").val());
});


$("#startColor").children().children(".r").on("input", function() {
    pt.emitter.startColor.r = Number($(this).val());
});

$("#startColor").children().children(".g").on("input", function() {
    pt.emitter.startColor.g = Number($(this).val());
});

$("#startColor").children().children(".b").on("input", function() {
    pt.emitter.startColor.b = Number($(this).val());
});

$("#endColor").children().children(".r").on("input", function() {
    pt.emitter.endColor.r = Number($(this).val());
});

$("#endColor").children().children(".g").on("input", function() {
    pt.emitter.endColor.g = Number($(this).val());
});

$("#endColor").children().children(".b").on("input", function() {
    pt.emitter.endColor.b = Number($(this).val());
});