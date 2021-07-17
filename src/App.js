import React, { Component } from 'react';
    import { Controlled as CodeMirror } from 'react-codemirror2';
    
    import './App.css';
    import 'codemirror/lib/codemirror.css';
    import 'codemirror/theme/material.css';
    
    import 'codemirror/mode/htmlmixed/htmlmixed';
    import 'codemirror/mode/css/css';
    import 'codemirror/mode/javascript/javascript';

    import {DiCss3, DiHtml5, DiJavascript1, DiCode} from "react-icons/di";
    import {VscFile, VscEye} from "react-icons/vsc"
    
    const height_proportion = '100%';

    class App extends Component {
      constructor() {
        super();
        this.state = {
          id: '',
          html: '',
          css: '',
          js: '',
          currentdoc: 'html',
        };
        this.handleClick = this.handleClick.bind(this);
        this.iframeRef = React.createRef();
      }
      

      componentDidUpdate() {
        this.runCode();
      }
    
    
      runCode = () => {
        const { html, css, js } = this.state;
    
        const document = this.iframeRef.current.contentDocument;
        const documentContents = `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Document</title>
            <style>
              ${css}
            </style>
          </head>
          <body>
            ${html}
    
            <script type="text/javascript">
              ${js}
            </script>
          </body>
          </html>
        `;
    
        document.open();
        document.write(documentContents);
        document.close();
      };

      handleClick = DocType => {
        this.setState({currentdoc: DocType});
        console.log("Hello");
      }


      statechecker() {
        if(this.state.currentdoc==="html")
          return true;
        return false;
      }
      render() {
        const { html, js, css, currentdoc } = this.state;
        const codeMirrorOptions = {
          theme: 'material',
          lineNumbers: true,
          scrollbarStyle: null,
          lineWrapping: true,
        };
        return (
          <div className="App">
            <div className="navbar">
              <br></br>
              <VscFile /><br></br>
              File Explorer
              {(() => {
                if(currentdoc==="html")
                {
                  return(
                <div>
                <div className="navbutton" style={{top:50,color:"white",backgroundColor:"#263238"}}
                onClick={e => this.handleClick("html")}>
                  <DiHtml5 />
                 index.html
               </div>
               <div className="navbutton"style={{top:50,color:"grey",backgroundColor:"#0c0c0c"}}
                 onClick={e => this.handleClick("css")}>
                   <DiCss3 />
                 index.css
               </div>
               <div className="navbutton"style={{top:50,color:"grey",backgroundColor:"#0c0c0c"}}
                onClick={e => this.handleClick("js")}>
                  <DiJavascript1 />
                    index.js
               </div>
               </div>
                  )}
                  else if(currentdoc==="css")
                  {
                    return (
                      <div>
                <div className="navbutton" style={{top:50,color:"grey",backgroundColor:"#0c0c0c"}}
                onClick={e => this.handleClick("html")}>
                  <DiHtml5 />
                 index.html
               </div>
               <div className="navbutton"style={{top:50,color:"white",backgroundColor:"#263238"}}
                 onClick={e => this.handleClick("css")}>
                   <DiCss3 />
                 index.css
               </div>
               <div className="navbutton"style={{top:50,color:"grey",backgroundColor:"#0c0c0c"}}
                onClick={e => this.handleClick("js")}>
                  <DiJavascript1 />
                    index.js
               </div>
               </div>
                    )
                  }
                  else {
                    return (
                      <div>
                <div className="navbutton" style={{top:50,color:"grey",backgroundColor:"#0c0c0c"}}
                onClick={e => this.handleClick("html")}>
                  <DiHtml5 />
                 index.html
               </div>
               <div className="navbutton"style={{top:50,color:"grey",backgroundColor:"#0c0c0c"}}
                 onClick={e => this.handleClick("css")}>
                   <DiCss3 />
                 index.css
               </div>
               <div className="navbutton"style={{top:50,color:"white",backgroundColor:"#263238"}}
                onClick={e => this.handleClick("js")}>
                  <DiJavascript1 />
                    index.js
               </div>
               </div>
                    )
                  }
              })()}
            </div>
            <section className="playground">
              <div className="playground-inner">
                <div className="playground-header"><DiCode />Code Editor</div>
                
                {(() => {
                  if (currentdoc==="html") {
                    return (
                      <div className="code-editor">
                      <div className="editor-header">index.html</div>
                      <CodeMirror
                        height={height_proportion}
                        value={html}
                        options={{
                          mode: 'htmlmixed',
                          ...codeMirrorOptions,
                        }}
                        onBeforeChange={(editor, data, html) => {
                          this.setState({ html });
                        }}
                />
              </div>
                    )
                  } else if (currentdoc==="css") {
                    return (
                      <div className="code-editor">
                      <div className="editor-header">index.css</div>
                      <CodeMirror
                        height={height_proportion}
                        value={css}
                        options={{
                          mode: 'css',
                          ...codeMirrorOptions,
                        }}
                        onBeforeChange={(editor, data, css) => {
                          this.setState({ css });
                        }}
                        />
                        </div>
                    )
                  } else {
                    return (
                      <div className="code-editor">
                      <div className="editor-header">index.js</div>
                      <CodeMirror
                        height={height_proportion}
                        value={js}
                        options={{
                          mode: 'javascript',
                          ...codeMirrorOptions,
                        }}
                        onBeforeChange={(editor, data, js) => {
                          this.setState({ js });
                        }}
                        />
                        </div>
                    )
                  }
                })()}
            </div>
            </section>
            <section className="result">
              <div className="resultheader"><VscEye />Live View</div>
              <iframe title="result" className="iframe" ref={this.iframeRef} />
            </section>
          </div>
        );
      }
    }
    
    export default App;