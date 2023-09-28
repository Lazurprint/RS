const { src, dest, series, watch } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const concat = require('gulp-concat')
const htmlMin = require('gulp-htmlmin')
const autoprefixes = require('gulp-autoprefixer')
const cleanCSS = require('gulp-clean-css')
const svgSprite = require('gulp-svg-sprite')
const image = require('gulp-image')
const babel = require('gulp-babel')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify-es').default
const notify = require('gulp-notify')
const sourcemaps = require('gulp-sourcemaps')
const del = require('del')
const browserSync = require('browser-sync').create()
const gulpif = require('gulp-if')
const ttf2woff = require('gulp-ttf2woff')
const ttf2woff2 = require('gulp-ttf2woff2')

const fonts = () => {
    src('src/fonts/**/*.ttf')
        .pipe(ttf2woff())
        .pipe(dest('dist/fonts'))
        .pipe(dest('build/fonts'))
    return src('src/fonts/**/*.ttf')
        .pipe(ttf2woff2())
        .pipe(dest('dist/fonts'))
        .pipe(dest('build/fonts'))
    }

let prod = false

const isProd = (done) => {
    prod = true;
    done();
}

const clean = () => {
    return del(['dist', 'build'])
}

const styles = () => {
    return src('src/styles/**/*.scss')
    .pipe(gulpif(!prod, sourcemaps.init()))
    .pipe(gulpif(!prod, sourcemaps.write()))
    .pipe(sass({
        outputStyle: 'expanded'
    }).on('error', notify.onError))
    
    .pipe(concat('main.css'))
    .pipe(autoprefixes({
        cascade: false
    }))
    .pipe(gulpif(prod, cleanCSS({
        level: 2
    })))
    
    .pipe(gulpif(prod, rename({
        suffix: '.min'
    })))
    .pipe(dest('dist'))
    .pipe(dest('build'))
    .pipe(browserSync.stream())
}

const htmlMinify = () => {
    return src('src/**/*.html')
    .pipe(gulpif(prod, htmlMin({
        collapseWhitespace: true,
    })))
    .pipe(dest('dist'))
    .pipe(dest('build'))
    .pipe(browserSync.stream())
}

const svgSprites = () => {
    return src('src/images/svg/**/*.svg')
    .pipe(svgSprite({
        mode: {
            stack: {
                sprite: '../sprite.svg'
            }
        }
    }))
    .pipe(dest('dist/images/svg'))
    .pipe(dest('build/images/svg'))
}

const scripts =  () => {
    return src([
        'src/js/components/**/*.js',
        'src/js/main.js'
    ])
    .pipe(gulpif(!prod, sourcemaps.init()))
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(concat('app.js'))
    .pipe(gulpif(prod, uglify({
        toplevel: true
    }).on('error', notify.onError())))
    .pipe(gulpif(!prod, sourcemaps.write()))
    .pipe(dest('./dist'))
    .pipe(dest('./build'))
    .pipe(browserSync.stream())
}

const images = () => {
    return src([
        'src/images/img/**/*.png',
        'src/images/img/**/*.jpg',
        'src/images/img/**/*.jpeg',
        'src/images/img/**/*.svg',
    ])
    .pipe(image())
    .pipe(dest('dist/images/img'))
    .pipe(dest('build/images/img'))
}

const resources = () => {
    return src('src/resources/**')
    .pipe(dest('dist'))
    .pipe(dest('build'))
}

const watchFiles = () => {
    browserSync.init({
        server: {
            baseDir: 'build'
        }
    })
}



watch('src/styles/**/*.scss', styles).on('change', browserSync.reload);
watch('src/**/*.html', htmlMinify)
watch('src/fonts/**/*.ttf', fonts)
watch('src/images/img/**/*.jpg', images)
watch('src/images/img/**/*.png', images)
watch('src/images/img/**/*.jpeg', images)
watch('src/images/img/**/*.svg', images)
watch('src/images/svg/**.svg', svgSprites)
watch('src/js/**/*.js', scripts)
watch('src/resources/**', resources)



exports.styles = styles
exports.htmlMinify = htmlMinify
exports.scripts = scripts
exports.dev = series(clean, fonts, resources, htmlMinify, scripts, styles, images, svgSprites, watchFiles)
exports.build = series(isProd, clean, fonts, resources, htmlMinify, scripts, styles, images, svgSprites)