import './header.css'
import img from '../img/MEIN MINER.png'
import img2 from '../img/Union (1).png'
import img3 from '../img/Vector (8).png'
import img4 from '../img/Vector (9).png'
import { Box, Button, Container } from '@mui/material'

function Header() {
    return (
        <header>
            <Box component={'nav'} sx={{
                display : 'flex',
                justifyContent:'space-evenly',
               alignItems:'center'
               
            }}>
                <div className='navbar__block'>
                    <img src={img} className='navbar__name' alt="" />
                    <select name="" id="" className='navbar__lo'>
                        <option value="">Каталог товаров</option>
                        <option value="">магазин</option>
                        <option value="">Цены</option>
                    </select>
                </div>
                <div className="navbar__block_link">
                    <a href="" className="navbar__link">Цены</a>
                    <a href="" className="navbar__link">Калькулятор</a>
                    <a href="" className="navbar__link">Доставка</a>
                    <a href="" className="navbar__link1">Отзывы</a>
                </div>
                <div className="navbar__block_btn">
                <Button variant="contained" sx={{
                    marginRight: '80px'
                }}>Заказать звонок</Button>
                   
                </div>
                <div className="navbar__block__icon">
                    <img src={img2} alt="" className="navbar__img" />
                    <img src={img3} alt="" className="navbar__img" />
                    <img src={img4} alt="" className="navbar__img" />
                </div>
            </Box>
            <Container>
            <Box component={'div'} sx={{
                width:'780px',
                height:'440px',
                backgroundColor:'blue',
                borderRadius:'10px',
                marginTop:'40px'
               
            }}>
                
              <h1 className='block__lor'>оборудование для майнинга оптом</h1>
                    <p className="block__mini_text">с гарантией 12 месяцев</p>
                    <Button variant="contained" >Перейти в каталог</Button>
                
            </Box>
            </Container>
        </header>

    )
}

export default Header