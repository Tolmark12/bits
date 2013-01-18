class Editor

  constructor: () ->
    @codeMirror = CodeMirror $("#code-editor").get(0), 
      mode        :'coffeescript'
      theme       :"vibrant-ink"

    @codeMirror.setValue """console.log 'Hi!!'"""
    $("#evaluate-button").on('click', @onEvaluateClick )

  onEvaluateClick : () =>
    CoffeeScript.eval @codeMirror.getValue()
    
  