import React from 'react';
import { colors, makeStyles } from '@material-ui/core';

import for_img from '../../assets/images/forward_thinking.jpg';
import nza_back from '../../assets/images/nza_background.jpg';
import {Link} from 'react-router-dom';
import man_thinking from '../../assets/images/man_thinking.jpg'
import paper from '../../assets/images/content-navlink-news.jpg'
import contact_pic from '../../assets/images/content-05-contact.jpg'
import contact_where from '../../assets/images/content-link-where.jpg'
import group from '../../assets/images/content-link-reputation.jpg'


const useStyles = makeStyles({
    c_outer_container:{
        display: 'grid',
        flexgrow : '1',
        alignContent: 'inherit',
        alignItems: 'inherit',
        width: '100%',
        height:"100%" ,
        fontfamily: "'Lucida Sans reg', sans-serif"
    },
    
    id_img: {
        flex: '1',
        maxWidth: '100%',
        maxHeight: '100%',
        objectFit: 'cover'   
    },

    c_container: {
        marginLeft: '15%',
        marginRight: 'auto', /*changed from 0 to fit screen*/
        marginTop: '7%',
        marginBottom: 'auto',
        position: 'absolute',
        alignContent: 'inherit',
        alignItems: 'inherit',
        /*added to fit screen*/
        background: 'white', 
        width: '70%',
        height:"100%"
            
    },   

    id_image: {
        paddingLeft: '50px'
    },

    c_col_md_10: {
    margintop: '5%',
    textAlign:'left',
    },

    c_col_md_2: {
    margintop: '0%',
    textAlign: 'right'
    },

    c_button: {
        border: 'none',
        borderradius: '5px',
        backgroundcolor: 'rgb(150, 144, 144)',
        color: 'white',
        width: '130px',
        height: '55px',
        float: 'right',
        marginRight: '5%'

    },

/* sidebar styling*/
/* The sidebar menu */
    body: {
        fontfamily: "'Lucida Sans reg', sans-serif"
    },

    c_sidenav:{
        width: '230px',
        height: '348px',
        marginTop:'1%',
        marginLeft:'3%',
        float:'left',
        background: 'linear-gradient(to bottom, #AD0000 0%, #6E0000 100%)',
        overflowX: 'hidden',
        color:'white'
    },
    
    
    h3:{
        textalign: 'center',/*changed from left*/
        margin: '20px',
        marginbottom: '2px',
        color: '#eee',
        fontsize: '18px'
    
    },
    h6:{
        color: '#eee',
        borderbottom: '2px solid #eee',
        marginleft: '20px',
        marginright: '20px'
    },
    h5:{
        padding: '0px 0px 0px 20px',
        marginBottom: '1px',
        fontSize: '12px',
        color: '#eee',
        textAlign: 'center', /*added*/
      },

    c_sidenav_a :{
        textindent: '40px',
        textdecoration: 'none',
        marginbottom: '25px',
        fontsize: '12px',
        color: '#eee',
        display: 'block'
      },

    c_sidenav_content: {
        display: 'block',
        borderTop: '1px solid white',
        marginRight: '20px'
    },
      

    c_div_img:{
        margintop: '-10px', 
        marginbottom: '5px'
    },
    c_main:{
        marginleft: '140px', /* Same width as the sidebar + left position in px */
        fontsize: '28px', /* Increased text to enable scrolling */
        padding: '0px 10px'
    },
    id_forward_thinking:{
        marginTop: '10px',
        paddingLeft: '70px',
        width:'65%'
    },
    id_who_we_are:{
        verticalAlign: 'top',
        paddingBottom: '10px'
    },
    id_who_we_are_header:{
        paddingTop: '10px',
        fontWeight: 'bold',
        color: 'black', 
        paddingLeft: '70px',
        fontSize: '12px'
    },
    id_who_we_are_text:{
        color: 'black',
        fontSize: '12px',
        lineHeight: '1.5',
        paddingLeft: '70px',
        paddingRight: '30px',
        width: '65%'
    },
    id_who_we_are_header2:{
        fontWeight: 'bold',
        color: 'black', 
        width: '160px',
        fontSize: '14px',
        paddingTop: '40px'
    },
    id_who_we_are_text2:{
        color: 'black',
        width: '160px',
        fontSize: '14px'
    },
    c_contact_info:{
        right: '50px',
        top: '450px',
        position: 'absolute'
    },
    id_sb_text:{
        color: 'white',
        marginLeft: '5px',
        fontSize: '12px'
    },
    c_text_uppercase:{
        fontSize: 'medium',
        color: 'black',
        textDecoration: 'none'
    },
    id_footer_link:{
        textAlign: 'center',
        paddingRight:'50px',
        width: '90%',
        textDecoration: 'none',
        fontSize: 'medium',
        color: 'black'
    },
    c_footer:{
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
    c_line_1:{
      width: '91%',
      border: '0',
      borderTop:'10px',
      borderBottom: '2px solid black',
      marginLeft: '40px'
    },
    
    c_line_2:{
      marginLeft: '40px',
      width: '91%',
      border: '0',
      borderBottom: '2px solid black',
      paddingBottom: '20px'
    },
    id_vertline1: {
      float: 'left',
      marginTop: '155px',
      color: 'gray'
    },
    
    id_vertline2:{
      float: 'left',
      marginTop: '155px',
      color: 'gray'
    },
    
    id_vertline3:{
      float: 'left',
      marginTop: '155px',
      color: 'gray',
    },
    side_img :{
        height: '120px',
        marginLeft: '5%',
        marginTop: '5%'
    },
    career_text: {
        paddingTop:'10px',
        textDecoration: 'none',
        color: 'white',
        marginLeft: '5%'
    },
    
    id_vertline4 :{
      float: 'left',
      marginTop: '155px',
      color: 'gray'
    },
    location_text: {
        marginLeft: '27%',
        marginRight:'5%',
        marginTop: '10px'
    },
    // location_grid:{
    //     display: 'grid',
    //     gridTemplateColumns: '25% 25% 25% 25%',
    //     gridTemplateRows: 'auto',
    //     gridTemplateAreas: 
    //     `"heading heading heading heading2"
    //     "text text text text"`,
    //     height: '150px',
    //     boxsizing: 'border-box',
    //     marginLeft: '3%'
    // },
    states_grid: {
        marginTop:'10px',
        marginRight: '15%',
        marginBottom: '92px',
        paddingLeft: '25px', 


        display: 'grid',
        gridGap:'10px',
        gridTemplateColumns: '30% 30% 30% 10%',
        gridTemplateRows: 'auto',
        lineHeight: '14px'
        
    },
    location_headings: {
        gridArea: 'heading',
        fontWeight: 'bold',
        borderBottom: '2px solid gray',
        marginLeft: '3%',
        marginTop:'8px',
        width:'85%',
        height: '20px'
    },
    location_headings2: {
        gridArea: 'heading2',
        fontWeight: 'bold',
        borderBottom: '2px solid gray',
        marginRight: '10%',
        marginTop:'8px',
        width:'15%',
        height: '20px'
        
    },
    test:{
        display:'flex',
        marginRight:'50px'
    },

    contact_img :{
        width: '120%',
        marginLeft: '7%',
        marginTop: '5%',
        marginRight: '5%',
    },
    c_sidenav2:{
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
             <div className={classes.c_outer_container}>
                 
                <img id="img" src={nza_back} alt="wood grain border"/>
                <div className={classes.c_container}>
                    <div>
                        <span>
                            <div className={classes.c_col_md_10}>
                                {/* <!--logo here--> */}
                                <img id="image" src="http://via.placeholder.com/300x100" alt="law firm logo"/>
                                <button className={classes.c_button}>Log in</button>
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

                        <div className={classes.c_line_1}></div>
                        <div className={classes.c_line_2}></div>
                        {/* <!-- Where we work--> */}

                        
                            <nav className={classes.c_sidenav}>
                                
                                <div className={classes.c_sidenav_content}>
                                    <div style={{ borderBottom: '1px solid white', paddingTop:'5%' }} className={classes.career_text}>
                                        <h3>CONTACT US</h3>
                                    </div>
                                    <div className={classes.career_text}>
                                        <p>Directions/Parking</p> 
                                    </div>
                                    <div className={classes.career_text}>
                                        <p>Career Opportunities</p>
                                    </div>
                                    
                                    <div>
                                        <img className={classes.side_img} src={paper} alt="stack of papers"/>  
                                    </div>

                                    <div className={classes.career_text}>
                                        <h4>News & Events</h4>
                                    </div>
                                    <div className={classes.career_text}>
                                        <p>Join our magnificent firm and do more stuff with us.</p> 
                                    </div>  
                                </div>    
                            </nav>
                            
                            <div className={classes.test}>
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

                            <div className={classes.c_sidenav2}>
                                <img className={classes.map_img} src={contact_where} alt="photo of map"/> 
                                <div className={classes.c_sidenav_content2}>
                                    <h3>Where We Work</h3>
                                    <p>Find out more about our work coverage area.</p> 
                                </div>
                                <img className={classes.map_img} src={group} alt="photo of map"/> 
                                <p className={classes.c_sidenav_content2} >Join our magnificent firm and do more stuff with us.</p> 
                            </div>
                            
                            </div>    
                    </div>

                        
                            
                            
                        
                    
                    <div className={classes.c_footer} >
                        <Link to='/' className={classes.id_footer_link}> WHO WE ARE</Link> 
                        <Link to='/whatwedo' className={classes.id_footer_link}> WHAT WE DO</Link> 
                        <Link to='#' className={classes.id_footer_link}> NEW & EVENTS</Link> 
                        <Link to='/wherewework' className={classes.id_footer_link}> WHERE WE WORK</Link> 
                        <Link to='/contact' className={classes.id_footer_link}> CONTACT US</Link> 
                    </div>
                </div>
                
            </div>
        </div>
        
    )
}

