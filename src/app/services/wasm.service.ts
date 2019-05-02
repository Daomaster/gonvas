import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WasmService {

  constructor() {
    this.initWasm();
  }

  private initWasm() {
    const go = new Go();
    WebAssembly.instantiateStreaming(fetch("./wasm/main.wasm"), go.importObject)
      .then(async (result) => {
      await go.run(result.instance);
    });
  }

  public static add(a: number, b: number): number {
    return add(a, b);
  }

  public static subtract(a: number, b: number): number {
    return subtract(a, b);
  }
}
