const std = @import("std");

// Although this function looks imperative, note that its job is to
// declaratively construct a build graph that will be executed by an external
// runner.
pub fn build(b: *std.Build) !void {
    // Standard target options allows the person running `zig build` to choose
    // what target to build for. Here we do not override the defaults, which
    // means any target is allowed, and the default is native. Other options
    // for restricting supported target set are available.
    const target = b.standardTargetOptions(.{});
    if (!(target.getOsTag() == .linux)) {
        @panic("sorry, this can just compile for linux");
    }

    if (!(target.getCpuArch() == .x86_64)) {
        @panic("sorry, this can just compile for x86_64");
    }

    const cmd = &[_][]const u8{
        "/bin/sh",
        "-c",
        try std.mem.concat(b.allocator, u8, &[_][]const u8{
            "CGO_ENABLED=1 ",
            "CC='zig cc -target x86_64-linux-musl' ",
            "CXX='zig cc -target x86_64-linux-musl' ",
            "CGO_CFLAGS='-D_LARGEFILE64_SOURCE' ",
            "go ",
            "build ",
            "-ldflags='-linkmode=external -extldflags -static -s -w' ",
        }),
    };
    const build_cmd = b.addSystemCommand(cmd);

    const build_step = b.step("build", "build movie");

    build_step.dependOn(&build_cmd.step);

    b.getInstallStep().dependOn(&build_cmd.step);

    const clean = &[_][]const u8{
        "/bin/sh",
        "-c",
        "rm movie",
    };
    const clean_cmd = b.addSystemCommand(clean);

    const clean_step = b.step("clean", "clean all");

    clean_step.dependOn(&clean_cmd.step);
}
