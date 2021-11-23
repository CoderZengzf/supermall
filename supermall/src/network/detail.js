import {request} from "@/network/request";

export function getDetail(iid){
  return request({
    url:'/detail',
    params: {
      iid
    }
  })
}

export function getRecommend(){
  return request({
    url: '/recommend'
  })
}

export class Goods{
  constructor(itemInfo,columns,services){
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
    this.nowPrice = itemInfo.highNowPrice;
    this.realPrice = itemInfo.lowNowPrice;
  }
}

export class GoodsParams{
  constructor(info,rule){
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}

// export class ShopInfos{
//   constructor(shopInfo){
//     this.logo = shopInfo.shopLogo;
//     this.name = shopInfo.name;
//     this.fans = shopInfo.cFans;
//     this.sell = shopInfo.cSells;
//     this.score = shopInfo.score;
//     this.goods = shopInfo.cGoods;
//   }
// }