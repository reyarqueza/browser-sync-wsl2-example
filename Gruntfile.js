// This shows a full config file!
var emojify = require("emojify-tag");

module.exports = function (grunt) {
  grunt.initConfig({
    watch: {
      files: "app/scss/**/*.scss",
      tasks: ["sass"],
    },
    sass: {
      dev: {
        files: [
          {
            expand: true,
            cwd: "app/scss",
            src: ["*.scss"],
            dest: "app/css",
            ext: ".css",
          },
        ],
      },
    },
    browserSync: {
      dev: {
        bsFiles: {
          src: ["app/css/*.css", "app/*.html"],
        },
        options: {
          watchTask: true,
          server: "./app",
        },
      },
    },
  });

  // load npm tasks
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-browser-sync");

  // define default task
  grunt.registerTask("default", ["browserSync", "watch"]);

  // emojify
  grunt.log.ok(emojify`:boar:` + " GRUNT The JavaScript Task Runner");
};
