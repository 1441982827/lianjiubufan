import React from 'react'
import styled from 'styled-components';

import left from 'images/icon/left.png';
import right from 'images/icon/right.png';
import right_black from 'images/icon/right_black.png';

import down from 'images/icon/down.png';
import down_2x from 'images/icon/down_2x.png';
import alert from 'images/icon/alert.png';
import alert_2x from 'images/icon/alert_2x.png';
import camera from 'images/icon/camera.png';
import camera_2x from 'images/icon/camera_2x.png';
import dustbin from 'images/icon/dustbin.png';
import dustbin_2x from 'images/icon/dustbin_2x.png';
import favorite from 'images/icon/favorite.png';
import favorite_2x from 'images/icon/favorite_2x.png';
import fly from 'images/icon/fly.png';
import fly_2x from 'images/icon/fly_2x.png';
import fly_active from 'images/icon/fly_active.png';
import fly_active_2x from 'images/icon/fly_active_2x.png';
import love from 'images/icon/love.png';
import love_2x from 'images/icon/love_2x.png';
import mail from 'images/icon/mail.png';
import mail_2x from 'images/icon/mail_2x.png';
import message from 'images/icon/message.png';
import message_2x from 'images/icon/message_2x.png';
import plus from 'images/icon/plus.png';
import plus_2x from 'images/icon/plus_2x.png';
import position from 'images/icon/position.png';
import position_2x from 'images/icon/position_2x.png';
import qrcode from 'images/icon/qrcode.png';
import qrcode_2x from 'images/icon/qrcode_2x.png';
import scan from 'images/icon/scan.png';
import scan_2x from 'images/icon/scan_2x.png';
import search from 'images/icon/search.png';
import search_2x from 'images/icon/search_2x.png';
import set from 'images/icon/set.png';
import set_2x from 'images/icon/set_2x.png';
import share from 'images/icon/share.png';
import share_2x from 'images/icon/share_2x.png';

import clear from 'images/icon/clear.png';
import clear_2x from 'images/icon/clear_2x.png';
import fire from 'images/icon/fire.png';
import fire_2x from 'images/icon/fire_2x.png';
import player from 'images/icon/player.png';
import player_2x from 'images/icon/player_2x.png';
import share_black from 'images/icon/share_black.png';
import share_black_2x from 'images/icon/share_black_2x.png';
import strength from 'images/icon/strength.png';
import strength_2x from 'images/icon/strength_2x.png';
import strength_active from 'images/icon/strength_active.png';
import strength_active_2x from 'images/icon/strength_active_2x.png';




// 图片导入


const IconTypes={
left,
right,
right_black,
down,
down_2x,
alert,
alert_2x,
camera,
camera_2x,
dustbin,
dustbin_2x,
favorite,
favorite_2x,
fly,
fly_2x,
fly_active,
fly_active_2x,
love,
love_2x,
mail,
mail_2x,
message,
message_2x,
plus,
plus_2x,
position,
position_2x,
qrcode,
qrcode_2x,
scan,
scan_2x,
search,
search_2x,
set,
set_2x,
share,
share_2x,
clear,
clear_2x,
fire,
fire_2x,
player,
player_2x,
share_black,
share_black_2x,
strength,
strength_2x,
strength_active,
strength_active_2x
}

function Icon(props){
    let Ico =   IconHoc(props)
    return (<Ico {...props} ></Ico>) 
}


function IconHoc ({
    width='.19rem',
    height='.19rem',
    img,
    type,
    padding='0',
    border='0',
    radius='0',
    margin='0',
    tag,
    customStyle='',
    attrs
}={}){
const iconImg=IconTypes[type]||img;
    let ico= styled.span.attrs(attrs||{})`
            display:inline-block;
            width:${width};
            height:${height};
            background-image:url(${iconImg});
            background-repeat:no-repeat;
            background-size:${width} ${height};
            padding:${padding};
            border:${border};
            border-radius:${radius};
            margin:${margin};
            ${customStyle}
    `;
    if(tag)ico= ico.withComponent(tag)
    return ico
}


export {
    IconHoc,
    Icon
}