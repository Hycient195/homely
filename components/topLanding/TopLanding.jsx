import { Container } from '@material-ui/core'
import styles from './topLanding.module.css'

const TopLanding = () => {
    return ( 
        <div className={styles.container}>
            <div className={styles.top_landing_left}>

                <h1 className={styles.find}>Find Your <br/>
                     Grind </h1><p className={styles.propertyText} > property.</p>
                
                
            </div>
            <div className={styles.top_landing_right}>
                
            </div>
        </div>
     );
}
 
export default TopLanding;