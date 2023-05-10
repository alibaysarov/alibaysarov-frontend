import cl from './index.module.sass'

type property=string | undefined
export const alignItems=(align:property)=>{
  switch(align){
    case 'start':
      return cl.align_start
    break;
    case 'center':
      return cl.align_center
    break;
    case 'end':
      return cl.align_end
    break;
    case 'space-between':
      return cl.align_sb
    break;
    case 'space-around':
      return cl.align_sa
    break;
    default:
      return cl.align_start
  }
}

export const direction=(dir:property)=>{
    switch(dir){
        case 'row':
          return cl.dir_row
        break;
        case 'col':
          return cl.dir_col
        break;
        default:
          return cl.dir_row
    }
}
export const justifyItems=(justify:property)=>{
    switch(justify){
        case 'start':
          return cl.justify_start
        break;
        case 'center':
          return cl.justify_center
        break;
        case 'end':
          return cl.justify_end
        break;
        case 'space-between':
          return cl.justify_sb
        break;
        case 'space-around':
          return cl.justify_sa
        break;
        default:
          return cl.justify_start
    }
}