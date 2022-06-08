import { instance } from "./axios";

export const getArticlesBySearch = (search:string) =>{

        return instance.get('/search', { 
                params:{
                    q:search,
                    limit:4
                }
            })
}