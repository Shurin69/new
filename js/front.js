import {G_Bus} from "./libs/G_Control.js";
import {Modaler} from "./libs/Modaler.lib.js";
import G_G from "./libs/G_G.js";
export default class Front extends G_G{
  constructor(){
    super();
    const _ = this;
    G_Bus
      .on('createOrderSuccess',_.createOrderSuccess.bind(_))
      .on('createOrderFail',_.createOrderFail.bind(_))
  }
  createOrderSuccess(orderData){}
  createOrderFail(orderData){}
  define(){}
  init(){}
}
new Front();
