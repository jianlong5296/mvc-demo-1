import $ from 'jquery';
import './app3.css'

const $square = $('#app3 .square')  //square前面的写成,注意细节
$square.on('click',()=>{
    $square.toggleClass('active')  //添加往复transform的效果
})