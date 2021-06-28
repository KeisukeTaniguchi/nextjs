import {useRouter} from 'next/router'
constPost = ()=> {
    const router = useRouter();
    //100の場合
    const{id} = router.query
    return <p>ID:{id}</p>
}
export default Post