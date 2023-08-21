import Image from 'next/image'
import style from './styles/Footer.module.css'
import logo from './assets/logo.png'

export const Footer =()=>{
    return(
        <div className={style.footer}>
<div className={style.container}>
<Image src={logo} alt={'logo'} width={25} />
<p>space project</p>
</div>
        </div>
    )
}