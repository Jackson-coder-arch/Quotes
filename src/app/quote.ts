export class Quote {
  id!:number;
  name!:string;
  description!:string;

  upvote:number;
  downvote:number;

  public showDescription: boolean;
  constructor(public id: number,public name: string,public description: string, public completeDate:Date){
    this.showDescription=false;
    this.upvote = 0;
    this.downvote =0;
  }

}

export class Quote {
  showDescription: boolean;
  constructor(public id: number,public name: string,public description: string){
    this.showDescription=false;
  }
}
