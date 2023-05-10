import  { FC } from 'react';
import Box from '../Box';
import Stack from '../Stack';
import Img from './../Img/index';
import Typography from '../Typography';
import cl from './index.module.sass';
import { ICard } from '../../types';
interface ICardProps extends ICard {
  clickHandler:void | (()=>void)
}
const Card:FC<ICardProps> = ({img,img_2x,title,text,autor,date,tags,views,clickHandler}) => {
    return (
      <Box onClick={clickHandler} classes={cl.card} >
        <Stack spacing={'16px'} dir={'col'} >
          <Img cls={cl.carImg} src={img} width={360} srcSet={img_2x} alt={title}/>
          <Stack spacing={'16px'} dir='col'>
            <Typography color='accent' fontSize={13} tag="strong">{tags}</Typography>
            <Typography color='primary' fontSize={24} tag="h3">{title}</Typography>
            <Stack spacing='13px'>
              <Typography tag='strong' fontSize={12}>{autor}</Typography>
              <Typography color='text' tag='span' fontSize={12}>{date}</Typography>
              <Typography color='text' tag='span' fontSize={12}>{views} Views</Typography>
            </Stack>
            <Typography color='text' tag='p' fontSize={14}>
            {text}
            </Typography>
          </Stack>
        </Stack>
      </Box>
    );
};

export default Card;