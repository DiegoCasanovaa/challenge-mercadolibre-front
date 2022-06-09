import { instance } from "./axios";

export const getArticleById = (id:string) =>{

        return instance.get(`/items/${id}`)
}