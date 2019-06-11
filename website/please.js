// require('esm')(module)('./build/build.js')
// require('./build/compile.js')

const { ReplaySubject } = require('rxjs')
const {
  map,
  distinct,
  scan,
  shareReplay,
  startWith,
} = require('rxjs/operators')

const styles = new ReplaySubject()

const styleTag = styles.pipe(
  distinct(),
  scan(
    (styles, style) => `${styles}\n${style}`, ''
  ),
  map(
    (styles) => `<style>${styles}\n</style>\n`
  ),
  startWith(''),
  shareReplay(1),
)

styles.next('one')

styleTag.subscribe(console.log)

styles.next('two')
styles.next('two')
styles.next('three')