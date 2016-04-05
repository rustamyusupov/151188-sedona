'use strict';

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    clean: {
      build: ['build']
    },

    copy: {
      build: {
        files: [{
          expand: true,
          src: [
            'fonts/**/*.{woff,woff2}',
            'img/**',
            'js/**',
            '*.html'
          ],
          dest: 'build'
        }]
      },

      watch: {
        files: [{
          expand: true,
          src: [
            'fonts/**/*.{woff,woff2}',
            'img/**/*.{png,jpg,gif,svg}',
            'js/**/*.js',
            '*.html'
          ],
          dest: 'build'
        }]
      }
    },

    sass: {
      style: {
        files: {
          'build/css/style.css': 'sass/style.scss'
        }
      }
    },

    postcss: {
      options: {
        processors: [
          require('autoprefixer')({browsers: [
            'last 3 versions',
            'last 3 Chrome versions',
            'last 3 Firefox versions',
            'last 3 Opera versions',
            'last 3 Edge versions'
          ]})
        ]
      },
      style: {
        src: 'build/css/*.css'
      }
    },

    csso: {
      style: {
        options: {
          report: 'gzip'
        },
        files: {
          'build/css/style.min.css': ['build/css/style.css']
        }
      }
    },

    imagemin: {
      images: {
        options: {
          optimizationLevel: 3
        },
        files: [{
          expand: true,
          src: ['build/img/**/*.{png,jpg,gif,svg}']
        }]
      }
    },

    uglify: {
      js: {
        files: {
          'build/js/app.min.js': ['build/js/app.js']
        }
      }
    },

    processhtml: {
      options: {
        data: {
          message: 'Hello world!'
        }
      },
      dist: {
        files: {
          'build/index.html': ['build/index.html'],
          'build/photo.html': ['build/photo.html'],
          'build/form.html': ['build/form.html']
        }
      }
    },

    browserSync: {
      server: {
        bsFiles: {
          src: [
            'build/*.html',
            'build/css/*.css'
          ]
        },
        options: {
          server: 'build/.',
          watchTask: true,
          notify: false,
          open: true,
          ui: false
        }
      }
    },

    watch: {
      files: {
        files: [
          'fonts/**/*.{woff,woff2}',
          'img/**/*.{png,jpg,gif,svg}',
          'js/**/*.js',
          '*.html'
        ],
        tasks: ['copy:watch'],
        options: {spawn: false}
      },
      style: {
        files: ['sass/**/*.{scss,sass}'],
        tasks: ['sass', 'postcss', 'csso'],
        options: {spawn: false}
      }
    }

  });

  grunt.registerTask('serve', ['browserSync', 'watch']);
  grunt.registerTask('build', [
    'clean',
    'copy',
    'sass',
    'postcss',
    'csso',
    'imagemin',
    'uglify',
    'processhtml'
  ]);

};
