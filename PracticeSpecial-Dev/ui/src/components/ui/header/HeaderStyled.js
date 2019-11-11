import styled from 'styled-components';

const HeaderStyled=(props) => {
    const {
        letftFont ,
        rightFont,
        iconRightMargin,
        leftStyled,
        rightStyled,
        bgColor,
        color,
        fixed,
        customStyle=';'
        }=props 
        
        let left_font=
               `font-size:.19rem;
                color:#fff;
                font-family:'bold';`,
           right_font=
                 `font-size:.19rem;
                  color:#fff;
                  font-family:'bold';`,
           fixed_style=`
                  position:fixed;
                  width:100%;
                  top:0;
                  z-index:9999;
                    `;

        if(letftFont){
             left_font=
                `font-size: ${letftFont.size||'.19rem' };
                color:${letftFont.color||'#fff' };
                font-family: ${letftFont.type||'bold' };`
        }

        if(rightFont){
             right_font=
           `font-size: ${rightFont.size||'.19rem' };
            color:${rightFont.color||'#fff' };
            font-family: ${rightFont.type||'bold' };`
        }

    return styled.header`
        ${fixed&&fixed_style}
        .am-navbar {
            background: ${bgColor||'transparent'} ;
            color: ${color||'#fff'} ;
        }
        .am-navbar-left-icon{
            margin-right:${iconRightMargin||'.15rem' };
        }
        .am-navbar-left{
            ${ left_font ||''}
            ${ leftStyled ||''}
        }

        .am-navbar-right{
            ${ right_font ||''}
            ${rightStyled||''}
        }
        ${customStyle}

    `
}






export {
    HeaderStyled
}

 /* height:.45rem;
      font-size:.19rem;
      font-weight:500;
      line-height:.45rem;
      color:#fff;
      padding-left:.4rem;
      background:url(${left}) no-repeat 15px 14px;
      background-size: 10px 17px; */
      