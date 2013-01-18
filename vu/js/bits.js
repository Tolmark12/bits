// Generated by CoffeeScript 1.3.3
(function() {
  var Editor, Main,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  Main = (function() {

    function Main() {
      var codeEditor;
      console.log("hello sir!");
      codeEditor = new Editor();
    }

    Main.outsideMethod = function() {
      return console.log('hello you little monster :-)');
    };

    return Main;

  })();

  this.MonsterBits = Main;

  Editor = (function() {

    function Editor() {
      this.onEvaluateClick = __bind(this.onEvaluateClick, this);
      this.codeMirror = CodeMirror($("#code-editor").get(0), {
        mode: 'coffeescript',
        theme: "vibrant-ink"
      });
      this.codeMirror.setValue("console.log 'Hi!!'");
      $("#evaluate-button").on('click', this.onEvaluateClick);
    }

    Editor.prototype.onEvaluateClick = function() {
      return CoffeeScript["eval"](this.codeMirror.getValue());
    };

    return Editor;

  })();

}).call(this);