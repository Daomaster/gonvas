import {Component} from '@angular/core';
import {WasmService} from "./services/wasm.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'image-compress';

  constructor(
    private wasm: WasmService
  ) {

  }

  public add() {
    WasmService.add(1,2);
  }

  public subtract() {
    WasmService.subtract(3, 2);
  }
}
