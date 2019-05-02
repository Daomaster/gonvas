// Declare the Go class from the wasm_exec.js
declare class Go {
  public importObject: any;

  public run;
}

// Declare the global webassembly typing
declare namespace WebAssembly {
  interface Module { }
  interface Instance { }
  interface ResultObject {
    module: Module;
    instance: Instance;
  }

  function compileStreaming(source: Response | Promise<Response>): Promise<Module>;
  function instantiateStreaming(source: Response | Promise<Response>, importObject?: object): Promise<ResultObject>;
}

declare function add(a:number, b:number): number;
declare function subtract(a:number, b:number): number;
