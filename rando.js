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
        "Cargo",
        "Clippy",
        "GTK-rs",
        "Iron",
        "LALRPOP",
        "Piston",
        "Rayon",
        "Rocket",
        "RustyXML",
        "WebRender",
        "bindgen",
        "conrod",
        "dyon",
        "futures",
        "glium",
        "gutenberg",
        "hlua",
        "html5ever",
        "hyper",
        "ipc-channel",
        "irc",
        "log4rs",
        "nalgebra",
        "neon",
        "nom",
        "petgraph",
        "reqwest",
        "ring",
        "ripgrep",
        "rust-openssl",
        "rust-persian-calendar",
        "rust-sdl2",
        "rust-zmq",
        "rust-zookeeper",
        "rustache",
        "rustlearn",
        "rustqlite",
        "serde",
        "tikv",
        "tokio",
        "vulkano",
        "websocket",
        "whatlang-rs",
        "winapi-rs",
    ];
    var c = choose(crates);
    return "<a href='https://crates.io/crates/" + c + "'>" + c + "</a>";
}

var lang = [
    "Ada",
    "BASIC",
    "C",
    "C#",
    "C++",
    "COBOL",
    "Coffeescript",
    "D",
    "Dart",
    "Delphi",
    "Elisp",
    "Elixir",
    "Elm",
    "Erlang",
    "Go",
    "Haskell",
    "Java",
    "Lisp",
    "Malbolge",
    "MUMPS",
    "node.js",
    "Pascal",
    "Python",
    "Ruby",
    "SQL",
    "TypeScript",
];

var modifiers = [
    "concurrent",
    "fearless",
    "garbage-collected",
    "highly parallel",
    "idiomatic",
    "memory-safe",
    "parallel",
    "powerful",
    "privacy-preserving",
    "private",
    "proof-of-concept",
    "resilient",
    "scalable",
    "text-based",
    "tiny",
    "unsafe",
    "visual",
];

function optional_modifier() {
    if (Math.random() > 0.8) {
        return null;
    }
    return choose(modifiers);
}

function tech() {
    var techs = [
        ["a", optional_modifier, "build system"],
        ["a", optional_modifier, "fridge"],
        ["a", optional_modifier, "kernel module"],
        ["a", optional_modifier, "operating system"],
        ["a", optional_modifier, "roguelike"],
        ["a", optional_modifier, "server"],
        ["a", optional_modifier, "text editor"],
        "artificial intelligence",
        "async i/o",
        "audio production",
        "augmented reality",
        "bare metal",
        "biochemistry",
        "complicated math",
        "coroutines",
        "cryptography",
        "databases",
        "distributed communication",
        "embedded devices",
        "end-to-end encryption",
        "fraud detection",
        "fuzzing",
        "games",
        "logging",
        "long-term storage",
        "machine learning",
        "mobile",
        "musical analysis",
        "natural language processing",
        "p2p communication",
        "parsing",
        "raytracing",
        "rendering",
        "reproducible builds",
        "robots",
        "science",
        "space travel",
        "statistical analysis",
        "steganography",
        ["the", optional_modifier, "ide"],
        ["the", optional_modifier, "backend"],
        ["the", optional_modifier, "blockchain"],
        ["the", optional_modifier, "frontend"],
        "verifiable computation",
        "virtual reality",
    ];
    var t = choose(techs);
    if (typeof t === "string") {
        return combine([optional_modifier, t]);
    }
    return combine(t);
}

var patterns = [
    ["Combine", crate, "and", crate, "to finally make", tech, "possible"],
    ["Create a", optional_modifier, "Rust-based bridge from", lang, "to", lang],
    ["Create the definitive benchmark of", crate, "for", tech],
    ["Experiment with", tech, "in Rust"],
    ["Incorporate the best ideas from", optional_modifier, lang, "into", crate],
    ["Learn about", tech, "using", crate],
    ["Make a proof of concept clone of", crate, "for", tech],
    ["Release the first crate for", tech],
    ["Transpile", lang, "to", optional_modifier, "Rust"],
    ["Transpile Rust to", lang],
    ["Use", crate, "for", tech],
    ["Write a", optional_modifier, lang, "interpreter in Rust"],
    ["Write", modifiers, lang, "bindings for", crate],
];

function inspire() {
    var pattern = choose(patterns);
    var combined = combine(pattern);
    return combined + choose([".", "...", "!", "!!"]);
}
