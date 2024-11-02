import { randomUUID } from "node:crypto";

export class Entity <Props>{
  private _id : string
  protected _props: Props

  get id(){
    return this._id;

  }

  protected constructor(props: Props, id?:string){
    this._props = props
    this._id = id ?? randomUUID() 
  }
}