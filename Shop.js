var product = [{
    id: 1,
    img: 'image/shop1.PNG',
    name: 'Avatar',
    price: 1200,
    description: 'Avatar,In this digital painting, two vampires are depicted in a captivating and mysterious scene. The artist has skillfully used a combination of dark and vibrant colors to create a haunting atmosphere.',
    type: 'commission'
},{
    id: 2,
    img: 'image/shop2.PNG',
    name: 'Angle',
    price: 900,
    description: 'In this digital painting, the enigmatic and otherworldly figure of Angle is brought to life in a mesmerizing scene. The artist is skillful use of colors, emphasizing the character is unique attributes.',
    type: 'commission'
},{
    id: 3,
    img: 'image/shop3.PNG',
    name: 'Bartender',
    price: 1000,
    description: 'In this digital painting, bartender boy is depicted in a vibrant and inviting scene. The artist is use of colors and composition creates a warm atmosphere, capturing the essence of the character role.',
    type: 'commission'
},{
    id: 4,
    img: 'image/shop4.PNG',
    name: 'Eyes',
    price: 1200,
    description: 'In the digital painting titled "Eyes of Angle," a mesmerizing and mysterious scene unfolds, captivating the viewer with its enigmatic beauty."',
    type: 'commission'
},{
    id: 5,
    img: 'image/shop5.PNG',
    name: 'Prince',
    price: 1000,
    description: 'In this digital painting, the captivating and regal figure of a prince is brought to life in a mesmerizing scene. The artist use of composition, the elegance, power, and charisma associated with royalty.',
    type: 'commission'
},{
    id: 6,
    img: 'image/shop6.PNG',
    name: 'Crocodile',
    price: 1500,
    description: 'In this digital painting, a dynamic fanart of Crocodile from the popular manga and anime series One Piece comes to life. The artist skillful use of colors and attention to detail this formidable character.',
    type: 'another'
},{
    id: 7,
    img: 'image/shop7.PNG',
    name: 'Wedding on the Beach',
    price: 1700,
    description: 'In this digital painting, the serene and romantic setting of a beach wedding comes of love and celebration. The artist use of colors, composition, and attention to detail creates a captivating scene.',
    type: 'commission'
},{
    id: 8,
    img: 'image/shop8.PNG',
    name: 'Badboy',
    price: 1200,
    description: 'In this digital painting, the rebellious and edgy persona of a "Badboy" is brought to life in a evocative scene. The artist use of composition and attention to detail of this enigmatic and charismatic character.',
    type: 'commission'
}];

$(document).ready(() => {
    var html = '';
    for (let i =0; i<product.length; i++) {
        html += `<div onclick="openProductDetail(${i})" class="product-item ${product[i].type}">
                    <img class="product-img" src="${product[i].img}" alt="">
                    <p style="font-size: 1.2vw;">${product[i].name}</p>
                    <p style="font-size: 0.9vw;">Artist name</p>
                    <p style="font-size: 0.9vw;">${numberWithCommas(product[i].price)} THB</p>
                </div>`;
    }
    $("#productlist").html(html);
})

function numberWithCommas(x) {
    x=x.toString();
    var pattern=/(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x=x.replace(pattern,"$1,$2");
        return x;
}

function searchsomething(elem) {
    //console.log('#'+elem.id)
    var value = $('#'+elem.id).val()
    console.log(value)

    var html = '';
    for (let i =0; i<product.length; i++) {
        if(product[i].name.includes(value)) {
            html += `<div onclick="openProductDetail(${i})" class="product-item ${product[i].type}">
                    <img class="product-img" src="${product[i].img}" alt="">
                    <p style="font-size: 1.2vw;">${product[i].name}</p>
                    <p style="font-size: 0.9vw;">Artist name</p>
                    <p style="font-size: 0.9vw;">${numberWithCommas(product[i].price)} THB</p>
                </div>`;

        }
        
    }
    if(html=='') {
        $("#productlist").html(`<p>Not found</p>`);
    } else {
    $("#productlist").html(html);
    }
}

function searchproduct(param) {
        console.log(param)
        $('.product-item').css('display','none')
        if(param=='all') {
            $('.product-item').css('display','block')
        } else {
            $("."+param).css('display','block')
        }
}

var productindex = 0;
function openProductDetail(index) {
    productindex = index;
    console.log(productindex)    
    $("#modalDesc").css('display','flex')
    $("#mdd-img").attr('src',product[index].img);
    $("#mdd-name").text(product[index].name)
    $("#mdd-price").text(numberWithCommas(product[index].price)+' THB')
    $("#mdd-desc").text(product[index].description)
}

function closeModal() {
    $(".modal").css('display','none')
}

var cart = [];
function addtocart() {
    var pass = true;

    for (let i=0; i<cart.length; i++) {
        if(productindex == cart[i].index) {
            console.log('Found same picture')
            cart[i].count++;
            pass = false;
        }

    }

    if(pass) {
        var obj = {
            index: productindex,
            id: product[productindex].id,
            name: product[productindex].name,
            price: product[productindex].price,
            img: product[productindex].img,
            count: 1
        };
        //console.log(obj)
        cart.push(obj)
    }
    console.log(cart)

    Swal.fire({
        icon: 'success',
        title: 'Add ' + product[productindex].name + ' picture to cart'
    })
    $("#cartcount").css('display','flex').text(cart.length)
}

function openCart() {
    $('#modalCart').css('display','flex')
    rendercart();
}
function rendercart() {
    if(cart.length>0){
        var html='';
        for (let i=0; i<cart.length; i++) {
            html +=`<div class="cartlist-items">
            <div class="cartlist-left">
                <img src="${cart[i].img}" alt="">
                <div class="cartlist-detail">
                    <p style="font-size: 1.5vw;">${cart[i].name}</p>
                    <p style="font-size: 1.2vw;">${ numberWithCommas(cart[i].price*cart[i].count)} THB</p>
                </div>
            </div>
            <div class="cartlist-right">
                <p onclick="deinitem('-',${i})" class="btnc">-</p>
                <p id="countitem${i}" style="margin: 0 20px;">${cart[i].count}</p>
                <p class="btnc">+</p>
            </div>
        </div>`           
        };
        $("#mycart").html(html)
    } else {
        $("#mycart").html(`<p>Not found product list</p>`)
    }
}

function deinitem(action,index) {
    if(action == '-') {
        if(cart[index].count>0) {
            cart[index].count--;
            $("#countitem"+index).text(cart[index].count)

            if(cart[index].count <=0) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Are you sure to delete?',
                    showConfirmButton: true,
                    showCancelButton: true,
                    confirmButtonText: 'Delete',
                    cancelButtonText: 'Cancle'
                }).then((res) => {
                    if(res.isConfirmed) {
                        cart.splice(index, 1)
                        console.log(cart)
                        rendercart();
                        $("#cartcount").css('display','flex').text(cart.length)

                        if(cart.length <= 0) {
                            $("#cartcount").css('display','none')
                        }
                    } 
                    else {
                        cart[index].count++;
                        $("#countitem"+index).text(cart[index].count)
                    }
                })      
            }
        }
    } 
    else if(action == '+') {
        cart[index].count++;
        $("#countitem"+index).text(cart[index].count)
    }
}
