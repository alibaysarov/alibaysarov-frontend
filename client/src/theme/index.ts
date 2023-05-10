interface ThemeContext{
    breakpoints:{
        [320]:{
            count:number
        },
        [576]:{
            count:number
        },
        [768]:{
            count:number
        },
    },
    colors:{
        primary:string,
        accent:string,
        text:string,
    }
}
const theme:ThemeContext={
    breakpoints:{
        320:{
            count:1
        },
        576:{
            count:1
        },
        768:{
            count:2
        },
    },
    colors:{
        primary:'#000000',
        accent:'#EB0028',
        text:'#9B9B9B'
    }
}
export default theme