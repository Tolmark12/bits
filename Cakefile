fs = require 'fs'
{print} = require 'util'
{spawn, exec} = require 'child_process'
try
  which = require('which').sync
catch err
  if process.platform.match(/^win/)?
    console.log 'WARNING: the which module is required for windows\ntry: npm install which'
  which = null

bold = '\x1b[0;1m'
green = '\x1b[0;32m'
reset = '\x1b[0m'
red = '\x1b[0;31m'
col = '\x1b[0;12m'

# --------------------------------- TASKS

fileName = 'bits.js'
jsFile   = "vu/js/#{fileName}"
src      = 'src/'

build = ( callback ) ->
  launch 'coffee', ['-j', jsFile, '-c', src], callback

watchSrc = ( callback ) ->
  launch 'coffee', ['-w', '-j', jsFile, '-c', src], callback

# copyToKernal = () ->
#   exec "cp #{jsFile} /Users/Mark/web/pagoda/kernel-api/lib/assets/javascripts/kernel_api/canvas-components/#{fileName}"
#   log "√ Compiled theatre and copied to the Kernal", green


refreshBrowser = () ->
  script = 'tell application "Google Chrome"\n'
  script += '  tell active tab of first window\n'
  script += '    execute javascript "window.location.reload()"\n'
  script += '  end tell\n'
  script += 'end tell\n'
  exec "osascript -e '#{script}'"



# task 'build', 'compile source', -> build( -> copyToKernal() )
task 'watch', 'watch for changes, compile to file', -> watchSrc( -> log )

# --------------------------------- Helpers

launch = (cmd, options=[], callback) ->
  cmd = which(cmd) if which
  app = spawn cmd, options
  app.stdout.pipe(process.stdout)
  app.stderr.pipe(process.stderr)
  app.stderr.on 'data', (status) -> 
    console.log "status"
  app.stdout.on 'data', (status) -> 
    if status.toString().indexOf("error") != -1
      log "^^^^^^^^^^^^^^^^^^^^^^^^^^ ERROR ^^^^^^^^^^^^^^^^^^^^^^^^^^^^", col
    else  
      refreshBrowser()
      # copyToKernal(status)
  app.on 'exit', () -> 
    callback?() if status is 0

log = (message, color, explanation) -> 
  console.log color + message + reset + ' ' + (explanation or '')