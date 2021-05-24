import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MonacoEditorComponent, MonacoEditorLoaderService } from '@materia-ui/ngx-monaco-editor';
import { filter, take } from 'rxjs/operators';
import { ExprTokenProvider } from './ExprTokensProvider';

@Component({
  selector: 'app-mocaco-editor-expr',
  templateUrl: './monaco-editor-expr.component.html',
  styleUrls: ['./monaco-editor-expr.component.css']
})
export class MonacoEditorExprComponent implements OnInit, AfterViewInit {
  @ViewChild(MonacoEditorComponent, { static: false })
  monacoComponent: MonacoEditorComponent;

  editorOptions = { language: 'Expr', theme: 'myCoolTheme' };

  constructor(private monacoLoaderService: MonacoEditorLoaderService) {
    this.monacoLoaderService.isMonacoLoaded$
      .pipe(
        filter(isLoaded => !!isLoaded),
        take(1)
      )
      .subscribe(() => {
        monaco.languages.register({id: 'Expr'});
        monaco.languages.setTokensProvider('Expr', new ExprTokenProvider());
        const literalFg = '3b8737';
        const idFg = '344482';
        const symbolsFg = '000000';
        const keywordFg = '7132a8';
        const errorFg = 'ff0000';
        // @ts-ignore
        monaco.editor.defineTheme('myCoolTheme', {
          base: 'vs',
          inherit: false,
          rules: [
            { token: 'return.expr', foreground: keywordFg,  fontStyle: 'bold' },
            { token: 'error.expr', foreground: errorFg, fontStyle: 'bold' }
          ]
        });
      });
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

  }

}
