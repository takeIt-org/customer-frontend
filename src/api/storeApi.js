import axios from "axios";


export default {
  requestNearbyStore(latitude, longitude, storeName, page, size) {
    const options = {
      params: {
        latitude: latitude,
        longitude: longitude,
        storeName: storeName,
        page: page,
        size: size
      }
    }
    return axios.get("/store-service/api/customer/store/search", options);
  },
  getItemById(itemId) {
    return axios.get("/store-service/item/" + itemId)
  },
  getFavoriteStore(latitude, longitude,) {
    const options = {
      params: {
        latitude: latitude,
        longitude: longitude,
      }
    }
    return axios.get("/store-service/api/customer/store/favorite", options)
  },
  getCategoryList() {
    return axios.get("/store-service/category/");
  },
  fetchItem(itemId) {
    return axios.get("/store-service/api/customer/item/" + itemId)
  },
  requestCategoriesWithItem(storeId) {
    const options = {
      params: {
        "storeId": storeId
      }
    }
    return axios.get("/store-service/api/customer/categories", options);
  },
  requestStore(storeId) {
    return axios.get("/store-service/store/" + storeId);
  },
  getFavoriteStoreByStoreId(storeId) {
    return axios.get("/store-service/api/customer/favoriteStore/" + storeId);
  },
  markFavoriteStore(storeId) {
    return axios.patch("/store-service/api/customer/favoriteStore/" + storeId);
  }
}
