import {request} from "./request";

//1.根据经纬度获取位置详情
export function getPosition(latitude,longitude){
  return request({
    url:'/position',
    params:{

    }
  })
}

//2、获取食品分类列表
export function getFoodCategory(){
  return request({
    url:'/index_category',
  })
}

//3.根据经纬度获取商铺列表
export function getShopList(latitude,longitude){
  return request({
    url:'/shops',
    params:{
      latitude,
      longitude
    }
  })
}
