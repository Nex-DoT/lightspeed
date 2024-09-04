import { useState } from 'react';
import logo from '../../image/logo.png'
import hamburgerLogo from '../../image/hamburger-menu.png'
import { BiCaretDown } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

/* -------------------------------- popovers -------------------------------- */
import Product from '../molecules/menu/product-popover';
import Partners from '../molecules/menu/partners-popover';
import Resources from '../molecules/menu/resources-popover';
const Menu = () => {
    const [hamburger , setHamburger] = useState(false);
/* ------------------------------- list detail ------------------------------ */
    const [open , setOpen] = useState({
        business:false,
        product:false,
        partners:false,
        resources:false,
    })
/* -------------------------------- handelers ------------------------------- */
    const onMouseHandeler = (name)=>{
        setOpen({
            ...open ,
            [name] : true
        })
        console.log(open)
    }
    const offMouseHandeler = (name)=>{
        setOpen({
            ...open ,
            [name] : false
        })
        console.log(open)
    }
    return (
        <menu className=" bg-2 flex items-center justify-around w-screen 2xl:w-11/12 h-16 font-bold text-sm md:pr-5 md:pl-5 fixed border-b z-50" >
            <section className='relative flex items-center justify-between md:justify-around px-5 md:mx-0 w-full '>
{/* ------------------------------- normal menu ------------------------------ */}
                <div className='flex items-center justify-start gap-6 w-1/2'>
                    <img src={logo} alt="logo" className=' h-8 mr-7' />
                    <span className=' hidden md:flex'>
                        <h3 onMouseEnter={()=>onMouseHandeler('business')} onMouseLeave={()=>offMouseHandeler('business')} className=' hover:text-red-500 cursor-pointer transition-colors flex items-center mr-3 h-16 '>Business types <BiCaretDown className={`${open.business && 'rotate-180'}  transition-all duration-500`}/></h3>
                        <h3 onMouseEnter={()=>onMouseHandeler('product')} onMouseLeave={()=>offMouseHandeler('product')} className=' hover:text-red-500 cursor-pointer transition-colors flex items-center mr-3 h-16 '>Products <BiCaretDown className={`${open.product && 'rotate-180'}  transition-all duration-500`}/></h3>
                        <h3 onMouseEnter={()=>onMouseHandeler('partners')} onMouseLeave={()=>offMouseHandeler('partners')} className=' hover:text-red-500 cursor-pointer transition-colors flex items-center mr-3 h-16 '>Partners <BiCaretDown className={`${open.partners && 'rotate-180'}  transition-all duration-500`}/></h3>
                    </span>
                </div>
                <div className='items-center justify-end gap-6 w-1/2 hidden md:flex'>
                    <h3 onMouseEnter={()=>onMouseHandeler('resources')} onMouseLeave={()=>offMouseHandeler('resources')}  className=' hover:text-red-500 cursor-pointer transition-colors flex items-center justify-between mr-3 h-16'>Resources <BiCaretDown className={`${open.resources && 'rotate-180'}  transition-all duration-500`}/></h3>
                    <h3 className=' hover:text-red-500 cursor-pointer transition-colors'>About</h3>
                    <h3 className=' hover:text-red-500 cursor-pointer transition-colors hidden xl:block'>Help</h3>
                    <h3 className=' hover:text-red-500 cursor-pointer transition-colors hidden xl:block'>Login</h3>
                    <h3 className=' text-red-500 cursor-pointer hidden 2xl:block'>866-932-1801</h3>
                    <button className=' bg-red-500 text-white w-28 h-7 rounded-full'>Free Trial</button>
                </div>
{/* ----------------------------- hamburger menu ----------------------------- */}
                <div className='flex items-center gap-5 md:hidden text-lg'>
                    <FaPhoneAlt/>
                    <GiHamburgerMenu onClick={()=>setHamburger(!hamburger)}/>
                    <div className={` absolute transition-all duration-500 h-20 -top-4 -right-0 ${!hamburger && '!-right-[500px]'} bg-red-500 z-50 w-full text-white flex text-4xl`}>
                        <span className='w-full flex items-center justify-between p-3'>
                            <img src={hamburgerLogo} alt="hamburger" className=' w-20 filter invert mix-blend-lighten' />
                            <IoMdClose onClick={()=>setHamburger(!hamburger)}/>
                        </span>
                    </div>
                    <div className={`absolute transition-all duration-700 -top-4 right-0 ${ !hamburger && '!-right-[500px]'} w-10/12 bg-2 shadow-2xl h-svh py-24 px-6`}>
                        <span className='flex flex-col items-center gap-3'>
                            <button className=' w-full h-16 border font-normal rounded-sm hover:bg-1'>menu item</button>
                            <button className=' w-full h-16 border font-normal rounded-sm hover:bg-1'>menu item2</button>
                            <button className=' w-full h-16 border font-normal rounded-sm hover:bg-1'>menu item3</button>
                        </span>
                    </div>
                </div>
{/* -------------------------------- list menu ------------------------------- */}
                {open.business  &&   <div className=' absolute top-14 shadow-lg border left-[180px] rounded-md bg-2 w-[730px] h-[470px]' onMouseEnter={()=>onMouseHandeler('business')} onMouseLeave={()=>offMouseHandeler('business')} ><Product/></div>}
                {open.product   &&   <div className=' absolute top-14 shadow-lg border left-[325px] rounded-md bg-2 w-[730px] h-[470px]' onMouseEnter={()=>onMouseHandeler('product')} onMouseLeave={()=>offMouseHandeler('product')} ><Product/></div>}
                {open.partners  &&   <div className=' absolute top-14 shadow-lg border left-[435px] rounded-md bg-2 w-[250px] h-[160px]' onMouseEnter={()=>onMouseHandeler('partners')} onMouseLeave={()=>offMouseHandeler('partners')} ><Partners/></div>}
                {open.resources &&   <div className=' absolute top-14 shadow-lg border left-[910px] rounded-md bg-2 w-[170px] h-[170px]' onMouseEnter={()=>onMouseHandeler('resources')} onMouseLeave={()=>offMouseHandeler('resources')} ><Resources/></div>}
            </section>
        </menu>
    );
};

export default Menu;
