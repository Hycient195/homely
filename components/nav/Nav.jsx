import { Container, Typography, Paper, AppBar, Button, Select } from '@material-ui/core'
import styles from './nav.module.css'
import { useDispatch } from 'react-redux'
// import { useHistory } from 'react-router-dom'
import { logout } from '../../redux/actions/vendorActions'

export default function Nav () {
    const dispatch = useDispatch()
    // const history = useHistory()

    let loggedInVendor = undefined
    if(global?.localStorage?.getItem('profile') != undefined){
        loggedInVendor = JSON.parse(global.localStorage.getItem('profile'))
    }

    
    const handleLogout = () =>{
        dispatch(logout())
    }
    return(
        <div className={styles.container}>

               <div className={styles.title_container}>
                    <h1 class={styles.title}>Homely</h1>
               </div>
            {
                loggedInVendor ? (
                    <div className={styles.user}>
                    <a href={`/vendor_profile/${loggedInVendor?.result?._id}`}>
                        <img className={styles.avatar} src={loggedInVendor?.result?.avatar} alt=""/>
                    </a>
                    <Select name="" id="" className={styles.select}>
                        <option value=""></option>
                        <option value="">Profile</option>
                        <option onClick={handleLogout} value="">Logout</option>
                    </Select>
                </div>
                    
                ):(
                    // <div className={styles.signin_container}>
                        <Button href='/sign_up' variant='contained' className={styles.signIn}>Sign In</Button>
                    // </div>
                )
            }
            {/* </Container> */}
            <div>
                {/* <a href={`/vendor_profile/${loggedInVendor._id}`} className=""><Button variant="outlined">Profile</Button></a> */}

                
            </div>
        </div>
        
    )
}
