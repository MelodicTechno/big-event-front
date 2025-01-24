import request from '@/utils/request.js'
import { useTokenStore } from '@/stores/token.js'

// 文章分类列表查询
export const articleCategoryListService = () => {
    // const tokenStore = useTokenStore();
    // pinia中的响应式数据不需要.value
    // return request.get('/category', {headers: {'Authorization': tokenStore.token}})
    return request.get('/category')
}