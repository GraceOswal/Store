export class Store {
showDescription:boolean;
constructor(
  public customer_id: string,
  public product: string,
  public quantity: string,
  public price: string,
  public productDate: Date
  ){

    this.showDescription=false;
  }
}
