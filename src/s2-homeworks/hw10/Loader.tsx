import s from './Loader.module.css'
import loader from './assets/Loading.png'

export const Loader = () => <img src={loader} alt={"loader"} className={s.loader}/>
