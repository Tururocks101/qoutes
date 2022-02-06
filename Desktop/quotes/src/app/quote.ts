export class Quote {
  public likes:number
  public dislikes:number
  public completeDate:Date
  constructor(public name:string, public author:string,public quote:string){
    this.likes =0;
    this.dislikes =0;
    this.completeDate=new Date;
  }
}