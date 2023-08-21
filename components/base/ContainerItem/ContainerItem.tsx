import style from './styles/ContainerItem.module.css'

type Props = {
    children?: React.ReactNode;
};

export const ContainerItem = ({ children }: Props) => {
    return <div className={style.containerItem}>{children}</div>;
};
