const gulp = require('gulp');
const gulpif = require('gulp-if');
const crisper = require('gulp-crisper');
const babel = require('gulp-babel');
const merge = require('merge-stream');
const rename = require('gulp-rename');
const vulcanize = require('gulp-vulcanize');

const exclude = ['bower_components/webcomponentsjs/webcomponents-lite.min.js', 'vue-todo/dist/main.js', 'react-todo/dist/bundle.js']

gulp.task('default', () => {
	return merge(
		gulp.src(exclude, { base: './' })
			.pipe(gulp.dest('dist')),
		gulp.src('index.html')
			.pipe(vulcanize({
				abspath: '',
				excludes: exclude,
				stripExcludes: false
			}))
			.pipe(crisper({
				scriptInHead: false,
				jsFileName: "compiled.js"
			}))
			.pipe(gulpif("index.js", babel({
				"presets": [
					["@babel/preset-env", {
						targets: {
							ie: 11
						}
					}]
				]
			})))
			.pipe(rename(function (file) {
				if (file.extname === '.js') {
					file.basename = 'compiled'
				}
			}))
			.pipe(gulp.dest('dist'))
	)
});