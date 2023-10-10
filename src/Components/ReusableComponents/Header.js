import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import logo from '../../assets/images/IMG_CA5C6BD5E876-1-removebg-preview.png'
import { useNavigate } from 'react-router-dom';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#ffffff' : '#ffffff',
  }));
const Header = () => {
  const navigate=useNavigate();

  return (
    <div className='headercontainer'>
         <Box style={{display:"flex", alignItems:"center", justifyContent:"space-between",margin:"0px 100px"}}>
                <Box className='logobox' >
                <img src={logo} id='logo' style={{marginLeft:"5px",height:"70px"}}></img>
                <h3 onClick={()=>navigate("/")}>Goel Group of Companies</h3>
                </Box>

                <Box style={{display:"flex", alignItems:"center",justifyContent:"right"}}>
                <Box className='boxheader'>
                    <p className='headertags'>About</p>
                </Box>
                <Box>
                    <p className='headertags'>
                    Products
                    </p>
                </Box>
                <Box>
                    <p onClick={()=>navigate("/gallery")} className='headertags'>Gallery</p>
                </Box>
                <Box>
                    <p className='headertags'>Request a Quote</p>
                </Box>
                </Box>
              
                
                {/* <Box style={{display:"flex",alignItems:"center", margin:"25px 10px 10px 10px", justifyContent:"center"}}>
                  

                  <Box style={{marginRight:"10px"}}>
                  <Box className='rightheader' >
                    <ShoppingCartIcon onClick={()=>navigate("/Cart")} className='loginbuttonheader' style={{color: "white",fontSize:"25px",display:"block"}}/>
                  </Box>
                  <Box>
                    <p onClick={()=>navigate("/Cart")} className='loginbuttonheader'style={{color: "white",marginTop:"2px", fontSize:"15px"}}>CART</p>
                  </Box>
                  </Box>

                  <Box style={{marginRight:"5px"}}>
                  <Box className='rightheader' >
                    <AccountCircleIcon onClick={()=>navigate("/Login")} className='loginbuttonheader' style={{color: "white",fontSize:"20px"}}/>
                  </Box>
                  <Box>
                    <p onClick={()=>navigate("/Login")} className='loginbuttonheader' style={{color: "white",marginTop:"2px", fontSize:"15px"}}>LOGIN</p>
                  </Box>
                  </Box>
                  <Box style={{marginRight:"10px"}}>
                  <Box className='rightheader' >

                    <MenuIcon onClick={()=>navigate('/Menu')}className='loginbuttonheader' style={{color: "white",fontSize:"25px",display:"block"}}/>

                  </Box>
                  <Box>
                    <p onClick={()=>navigate("/Menu")} className='loginbuttonheader'style={{color: "white",marginTop:"2px", fontSize:"15px"}}>MENU</p>
                  </Box>
                  </Box>
                    
                </Box> */}
            </Box> 

    </div>
  )
}

export default Header