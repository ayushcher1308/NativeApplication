import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public scope: Array<any> | boolean = false;
  public index: string;
  public i: string;
    constructor() {
    }

    public set(i:string):void{
      this.i = i;
    }

    public get():string{
      return this.i;
    }

    public getScope(): Array<any> | boolean {
        return this.scope;
    }

    public setScope(scope: any,index:string): void {
        this.scope = scope;
        this.index = index;
        console.log(this.index);
    }

    public getIndex():string{
      return this.index;
    }
}
