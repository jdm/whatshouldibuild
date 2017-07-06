function reduce(item) {
    if (Array.isArray(item)) {
        return reduce(choose(item));
    }
    if (typeof item === "function") {
        return reduce(item());
    }
    return item;
}

function combine(list) {
    if (!Array.isArray(list)) {
        list = [list];
    }
    var combined = "";
    for (var i = 0; i < list.length; i++) {
        var reduced = reduce(list[i]);
        if (reduced) {
            combined += reduced + ' ';
        }
    }
    return combined.slice(0, combined.length - 1);
}

function choose(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function whole_number() {
    return Math.floor(Math.random() * 100);
}

function percentage() {
    return whole_number() + "%";
}

function crate() {
    var crates = [
        "LALRPOP",
        "Rayon",
        "Iron",
        "Rocket",
        "WebRender",
        "hlua",
        "bindgen",
        "serde",
        "hyper",
        "tokio",
        "petgraph",
        "tikv",
        "ipc-channel",
        "GTK-rs",
        "ripgrep",
        "Clippy",
        "Cargo",
        "neon",
        "dyon",
        "Piston",
        "nom",
        "glium",
        "vulkano",
        "ring",
        "futures",
        "html5ever",
        "websocket",
        "irc",
        "nalgebra",
        "rust-openssl",
        "rust-zookeeper",
        "rustqlite",
        "rust-persian-calendar",
        "RustyXML",
        "rust-sdl2",
        "conrod",
        "log4rs",
        "rustlearn",
        "rust-zmq",
        "winapi-rs",
        "rustache",
        "gutenberg",
        "whatlang-rs",
        "reqwest",
    ];
    var c = choose(crates);
    return "<a href='https://crates.io/crates/" + c + "'>" + c + "</a>";
}

var lang = [
    "Erlang",
    "C",
    "C++",
    "Pascal",
    "Delphi",
    "COBOL",
    "D",
    "SQL",
    "BASIC",
    "C#",
    "node.js",
    "Elm",
    "Elixer",
    "TypeScript",
    "Python",
    "Ruby",
    "Ada",
    "Haskell",
    "Elisp",
    "Lisp",
    "Go",
];

var modifiers = [
    "parallel",
    "concurrent",
    "memory-safe",
    "unsafe",
    "highly parallel",
    "tiny",
    "powerful",
    "scalable",
    "privacy-preserving",
    "private",
    "visual",
    "text-based",
    "fearless",
    "idiomatic",
    "proof-of-concept",
    "resilient",
    "garbage-collected",
];

function optional_modifier() {
    if (Math.random() > 0.8) {
        return null;
    }
    return choose(modifiers);
}

function tech() {
    var techs = [
        "rendering",
        ["a", optional_modifier, "server"],
        "virtual reality",
        "p2p communication",
        ["the", optional_modifier, "blockchain"],
        "machine learning",
        "statistical analysis",
        "fraud detection",
        "distributed communication",
        "parsing",
        ["the", optional_modifier, "backend"],
        ["the", optional_modifier, "frontend"],
        "games",
        "mobile",
        "embedded devices",
        "bare metal",
        "augmented reality",
        "cryptography",
        "verifiable computation",
        "async i/o",
        "coroutines",
        "fuzzing",
        ["a", optional_modifier, "build system"],
        "reproducible builds",
        "end-to-end encryption",
        ["a", optional_modifier, "fridge"],
        "logging",
        ["a", optional_modifier, "operating system"],
        ["a", optional_modifier, "roguelike"],
        "robots",
        "space travel",
        "science",
        "biochemistry",
        "artificial intelligence",
        "audio production",
        "database",
        "long-term storage",
        "steganography",
        "raytracing",
        ["a", optional_modifier, "kernel module"],
    ];
    var t = choose(techs);
    if (typeof t === "string") {
        return combine([optional_modifier, t]);
    }
    return combine(t);
}

var patterns = [
    ["Use", crate, "for", tech],
    ["Use", crate, "for", tech],
    ["Build", tech, "only using", crate],
    ["Combine", crate, "and", crate, "to finally make", tech, "possible"],
    ["Write", modifiers, lang, "bindings for", crate],
    ["Make a proof of concept clone of", crate, "for", tech],
    ["Create a Rust-based bridge from", lang, "to", lang],
    ["Transpile", lang, "to Rust"],
    ["Transpile Rust to", lang],
    ["Write a", optional_modifier, lang, "interpreter in Rust"],
    ["Release the first crate for", tech],
    ["Incorporate the best ideas from", optional_modifier, lang, "into", crate],
    ["Experiment with", tech, "in Rust"],
    ["Create the definitive benchmark of", crate, "for", tech],
];

function inspire() {
    var pattern = choose(patterns);
    var combined = combine(pattern);
    return combined + choose([".", "...", "!", "!!"]);
}
