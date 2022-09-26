import styles from './Avatar.module.css'

// Com a desestruturação javascript podemos aplicar valores default
export function Avatar({hasBorder = true, src}) {
    return (
        <img 
            // if ternário
            className={hasBorder ? styles.avatarWithBorder : styles.avatar } 
            src={src}
        /> 
    );
};