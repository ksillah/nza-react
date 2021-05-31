import React from 'react';
import { makeStyles } from '@material-ui/core';
import nza_back from '../../assets/images/nza_background.jpg';
import {Link} from 'react-router-dom';
import paper from '../../assets/images/content-navlink-news.jpg'
import contact_pic from '../../assets/images/content-05-contact.jpg'
import contact_where from '../../assets/images/content-link-where.jpg'
import group from '../../assets/images/content-link-reputation.jpg'


const useStyles = makeStyles({
    outer_container:{
        display: 'grid',
        flexgrow : '1',
        alignContent: 'inherit',
        alignItems: 'inherit',
        width: '100%',
        height:"100%" ,
        fontfamily: "'Lucida Sans reg', sans-serif"
    },
    container: {
        marginLeft: '15%',
        marginRight: 'auto', 
        marginTop: '7%',
        marginBottom: 'auto',
        position: 'absolute',
        alignContent: 'inherit',
        alignItems: 'inherit',
        background: 'white', 
        width: '70%',
        height:"100%"       
    },
    button: {
        border: 'none',
        borderradius: '5px',
        backgroundcolor: 'rgb(150, 144, 144)',
        color: 'white',
        width: '130px',
        height: '55px',
        float: 'right',
        marginRight: '5%'
    },
    logo: {
        paddingTop: '15px',
        marginLeft: '5%',
        textAlign:'left',
    },

    sidenav:{
        width: '230px',
        height: '348px',
        marginTop:'1%',
        marginLeft:'3%',
        float:'left',
        background: 'linear-gradient(to bottom, #AD0000 0%, #6E0000 100%)',
        overflowX: 'hidden',
        color:'white'
    },
    sidenav_content: {
        display: 'block',
        borderTop: '1px solid white',
        marginRight: '20px'
    },
    footer_link:{
        textAlign: 'center',
        paddingRight:'50px',
        width: '90%',
        textDecoration: 'none',
        fontSize: 'medium',
        color: 'black'
    },
    footer:{
        borderTop:'1px solid black',
        borderWidth:'2px',
        width: '93%',
        textAlign: 'center',
        marginLeft:'3%',
        marginTop:'16%'   
    },
    /* header*/
    id_nav: {
      position: 'absolute',
      left: '0px',
      height: '40px',
      width: '100%',
      display: 'flex',
      justifyContent: 'center'
    },
    id_nav_ul: {
      margin: '0',
      padding: '0'
      },
    id_nav_ul_li: {
      listStyleType: 'none',
      margin: '0',
      padding: '0px',/*changed to 0*/
      float:'left',
      height: '5%'
    },
    id_nav_ul_li_a :{
      listStyleType: 'none',
      textDecoration: 'none',
      padding: '1px 20px',  /* height of the nav bar* chnaged froom 300*/ 
      display: 'block',
      color: 'black',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 'medium'
    },
    line_1:{
      width: '91%',
      border: '0',
      borderTop:'10px',
      borderBottom: '2px solid black',
      marginLeft: '40px'
    },
    
    line_2:{
      marginLeft: '40px',
      width: '91%',
      border: '0',
      borderBottom: '2px solid black',
      paddingBottom: '20px'
    },
    side_img :{
        height: '120px',
        marginLeft: '5%',
        marginTop: '5%'
    },
    sb_text: {
        paddingTop:'10px',
        textDecoration: 'none',
        color: 'white',
        marginLeft: '5%'
    },
    body:{
        display:'flex',
        marginRight:'50px'
    },

    contact_img :{
        width: '120%',
        marginLeft: '7%',
        marginTop: '5%',
        marginRight: '5%',
    },
    sidenav2:{
        width: '230px',
        height: '348px',
        marginTop:'1%',
        float:'right',
        background: 'linear-gradient(to bottom, #e0d1d1 0%, #e0d1d1 100%)',
        overflowX: 'hidden',
        color:'#AD0000',
        marginBottom:'4px',
        marginLeft:'130px'
    },
    map_img :{
        height: '30%',
        width:'90%',
        marginLeft: '5%',
        marginTop: '5%'
    },
    c_sidenav_content2: {
        display: 'block',
        marginLeft: '10px'
    },


});

interface Props{
    title: string;
}
export const ContactUS = ( props:Props) => {
    const classes = useStyles();
    return (
        <div>
             <div className={classes.outer_container}>
                 
                <img id="img" src={nza_back} alt="wood grain border"/>
                <div className={classes.container}>
                    <div>
                    <span>
                            <div>
                                <img className={classes.logo} src="http://via.placeholder.com/300x100" alt="law firm logo"/>
                                <button className={classes.button}>Log in</button>
                            </div>
                        </span>
                        {/* <!--Header--> */}
                        
                            <div className={classes.id_nav}>
                                <ul className={classes.id_nav_ul}>
                                    <li className={classes.id_nav_ul_li}><Link to='/' className={classes.id_nav_ul_li_a}>WHO WE ARE</Link> </li>
                                    <li className={classes.id_nav_ul_li}><span id="vertline1">I</span></li>
                                    <li className={classes.id_nav_ul_li}><Link to='/whatwedo' className={classes.id_nav_ul_li_a}>WHAT WE DO</Link></li> 
                                    <li className={classes.id_nav_ul_li}><span id="vertline2">I</span></li>
                                    <li className={classes.id_nav_ul_li}><a className={classes.id_nav_ul_li_a} href="#">NEWS and EVENTS</a></li>
                                    <li className={classes.id_nav_ul_li}><span id="vertline3">I</span></li>
                                    <li className={classes.id_nav_ul_li}><Link to='/wherewework' className={classes.id_nav_ul_li_a}>WHERE WE WORK</Link></li>
                                    <li className={classes.id_nav_ul_li}><span id="vertline4">I</span></li>
                                    <li className={classes.id_nav_ul_li}><Link to='/contact' className={classes.id_nav_ul_li_a}>CONTACT US</Link></li>
                                </ul>
                            </div>

                        <div className={classes.line_1}></div>
                        <div className={classes.line_2}></div>
                        {/* <!-- Where we work--> */}

                        
                            <nav className={classes.sidenav}>
                                
                                <div className={classes.sidenav_content}>
                                    <div style={{ borderBottom: '1px solid white', paddingTop:'5%' }} className={classes.sb_text}>
                                        <h3>CONTACT US</h3>
                                    </div>
                                    <div className={classes.sb_text}>
                                        <p>Directions/Parking</p> 
                                    </div>
                                    <div className={classes.sb_text}>
                                        <p>Career Opportunities</p>
                                    </div>
                                    
                                    <div>
                                        <img className={classes.side_img} src={paper} alt="stack of papers"/>  
                                    </div>

                                    <div className={classes.sb_text}>
                                        <h4>News & Events</h4>
                                    </div>
                                    <div className={classes.sb_text}>
                                        <p>Join our magnificent firm and do more stuff with us.</p> 
                                    </div>  
                                </div>    
                            </nav>
                            
                            <div className={classes.body}>
                                <div>
                                    <img className={classes.contact_img} src={contact_pic} alt="photo that says contact"/> 
                                    <div style={{ paddingLeft:'7%', paddingTop:'5%', fontSize:'14px'  }} >
                                        <p style={{ paddingBottom:'5%' }}>The office houts are 8am - 5pm Monday through Friday</p>
                                        <p>689 East South Street</p>
                                        <p>Suite 4210</p>
                                        <p  style={{ paddingBottom:'5%' }}>Houston, Texas 09324</p>
                                        <p >PH: 555-555-5555</p>
                                        <p  style={{ paddingBottom:'5%' }}>FAZ: 555-555-5555</p>
                                        <p >Contact Rosmary Sage at <a  style={{ color:'blue' }}href="">rosmary@lawfirm.com</a></p>

                                    </div> 
                                 </div>

                            <div className={classes.sidenav2}>
                                <img className={classes.map_img} src={contact_where} alt="photo of map"/> 
                                <div className={classes.c_sidenav_content2}>
                                    <h3>Where We Work</h3>
                                    <p>Find out more about our work coverage area.</p> 
                                </div>
                                <img className={classes.map_img} src={group} alt="photo of people"/> 
                                <p className={classes.c_sidenav_content2} >Join our magnificent firm and do more stuff with us.</p> 
                            </div>
                            
                            </div>    
                    </div>
                    <div className={classes.footer} >
                        <Link to='/' className={classes.footer_link}> WHO WE ARE</Link> 
                        <Link to='/whatwedo' className={classes.footer_link}> WHAT WE DO</Link> 
                        <Link to='#' className={classes.footer_link}> NEW & EVENTS</Link> 
                        <Link to='/wherewework' className={classes.footer_link}> WHERE WE WORK</Link> 
                        <Link to='/contact' className={classes.footer_link}> CONTACT US</Link> 
                    </div>
                </div>
                
            </div>
        </div>
        
    )
}

